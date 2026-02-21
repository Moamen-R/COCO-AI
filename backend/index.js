import express from "express";
import cors from "cors";
import ImageKit from "imagekit";
import mongoose from "mongoose";
import Chat from "./models/chat.js";
import UserChats from "./models/userChats.js";
import { requireAuth } from "@clerk/express";
import dotenv from 'dotenv'; // Import dotenv

dotenv.config(); // Load environment variables from .env file

const initialPort = process.env.PORT || 3000;
const app = express();

// --- Global Middleware ---
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());

// --- Database Connection Function ---
const connect = async () => {
    try {
        if (!process.env.MONGO) {
            throw new Error("MONGO environment variable is not set.");
        }
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("MongoDB Connection Error:", err);
        // Decide if you want to throw the error or handle it differently
        // Throwing here might prevent the server from starting if DB is down initially
        throw err; // Re-throw to be caught by the caller in startServer if needed
    }
};

// --- ImageKit Setup ---
// Add checks for environment variables for robust setup
let imageKit;
if (process.env.VITE_IMAGE_KIT_ENDPOINT && process.env.VITE_IMAGE_KIT_PUBLIC_KEY && process.env.VITE_IMAGE_KIT_PRIVATE_KEY) {
    imageKit = new ImageKit({
        urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
        publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
        privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
    });
} else {
    console.warn("ImageKit environment variables not fully set. /api/upload might not work.");
}


// --- Routes ---

// Public route for ImageKit authentication parameters
app.get("/api/upload", (req, res) => {
    if (!imageKit) {
        return res.status(503).send("ImageKit service is not configured or available.");
    }
    try {
        const result = imageKit.getAuthenticationParameters();
        res.send(result);
    } catch (error) {
        console.error("Error getting ImageKit auth params:", error);
        res.status(500).send("Error getting upload parameters.");
    }
});

// PROTECTED route for creating chats
// 1. Apply requireAuth() middleware HERE.
// 2. If the user is not authenticated, they will be redirected (e.g., to CLERK_SIGN_IN_URL or '/')
app.post("/api/chats", requireAuth(), async (req, res) => {
    // 3. Get the VERIFIED userId from req.auth injected by Clerk, NOT from req.body
    const userId = req.auth?.userId;
    const { text } = req.body; // Only get text from the body

    // Validate inputs
    if (!userId) {
        // This should ideally not happen if requireAuth is working, but good to check
        console.error("Error: userId missing from req.auth after requireAuth.");
        return res.status(401).send("Authentication failed.");
    }
    if (!text || typeof text !== 'string' || text.trim() === '') {
        return res.status(400).send("Chat text cannot be empty.");
    }

    try {
        // CREATE A NEW CHAT using the authenticated userId
        const newChat = new Chat({
            userId: userId, // Use the verified userId
            history: [{ role: "user", parts: [{ text }] }],
        });

        const savedChat = await newChat.save();

        // Use findOneAndUpdate with upsert for atomicity
        const userChatUpdate = await UserChats.findOneAndUpdate(
            { userId: userId }, // Find by verified userId
            {
                $push: {
                    chats: {
                        _id: savedChat._id,
                        title: text.substring(0, 40), // Use original text for substring
                    },
                },
            },
            { upsert: true, new: true } // Create if not exists, return new doc
        );

        if (!userChatUpdate) {
            // Should be rare with upsert: true, but indicates a potential DB issue
            throw new Error("Failed to update or create user chats document.");
        }


        // Send only the necessary information back
        res.status(201).send({ chatId: newChat._id });

    } catch (err) {
        console.error("Error creating chat:", err);
        // Avoid sending detailed internal errors to the client
        res.status(500).send("Error Creating Chat!");
    }
});

// PROTECTED route for fetching user's chat list
app.get("/api/userchats", requireAuth(), async (req, res) => {
    const userId = req.auth?.userId;

    if (!userId) {
        return res.status(401).send("Authentication failed.");
    }

    try {
        const userChats = await UserChats.findOne({ userId: userId });
        if (!userChats) {
            return res.status(200).send([]);
        }
        res.status(200).send(userChats.chats);
    } catch (err) {
        console.error("Error fetching user chats:", err);
        res.status(500).send("Error Fetching User Chats!");
    }
});

// PROTECTED route for fetching a specific chat by ID
app.get("/api/chats/:id", requireAuth(), async (req, res) => {
    const userId = req.auth?.userId;

    if (!userId) {
        return res.status(401).send("Authentication failed.");
    }

    try {
        const chat = await Chat.findOne({ _id: req.params.id, userId: userId });
        if (!chat) {
            return res.status(404).send("Chat not found.");
        }
        res.status(200).send(chat);
    } catch (err) {
        console.error("Error fetching chat:", err);
        res.status(500).send("Error Fetching Chat!");
    }
});

// PROTECTED route for updating chat history
app.put("/api/chats/:id", requireAuth(), async (req, res) => {
    const userId = req.auth?.userId;
    const { question, answer, img } = req.body;

    if (!userId) {
        return res.status(401).send("Authentication failed.");
    }

    if (!question || typeof question !== 'string' || question.trim() === '') {
        return res.status(400).send("Question text cannot be empty.");
    }

    try {
        const userMessage = { role: "user", parts: [{ text: question }] };
        if (img) {
            userMessage.img = img;
        }
        const newItems = [userMessage, { role: "model", parts: [{ text: answer }] }];

        const updatedChat = await Chat.findOneAndUpdate(
            { _id: req.params.id, userId: userId },
            {
                $push: {
                    history: {
                        $each: newItems,
                    },
                },
            },
            { new: true }
        );

        if (!updatedChat) {
            return res.status(404).send("Chat not found.");
        }

        res.status(200).send(updatedChat);
    } catch (err) {
        console.error("Error updating chat:", err);
        res.status(500).send("Error Updating Chat!");
    }
});

// Example protected route (kept from your original code)
app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), (req, res) => {
    res.send(`This is a protected route. User ID: ${req.auth.userId}`);
});


// --- Server Start Function (Preserved as requested) ---
function startServer(port, maxRetries = 10, attempt = 0) {
    if (!process.env.CLERK_SECRET_KEY) {
        console.error("\nFATAL ERROR: CLERK_SECRET_KEY environment variable is missing.\nClerk authentication middleware requires this key to function.\nPlease set it in your .env file or environment.\n");
        process.exit(1); // Exit immediately if Clerk key is missing
    }


    if (attempt >= maxRetries) {
        console.error(`Failed to start server after ${maxRetries} attempts. Please check your network configuration.`);
        process.exit(1);
        return;
    }

    const server = app.listen(port, () => {
        console.log(`Server attempting to run on port ${port}`);
        // Attempt DB connection AFTER server starts listening (as per original code)
        connect().then(() => {
            console.log(`Server is running on port ${port} and connected to MongoDB.`);
        }).catch(err => {
            console.error(`Server is running on port ${port}, but FAILED to connect to MongoDB initially:`, err.message);
            // Continue running the server even if MongoDB connection fails initially
            // Might need retry logic within connect or elsewhere if persistent connection is critical
        });
        console.log(`CORS enabled for: ${process.env.CLIENT_URL || 'http://localhost:5173'}`);
        console.log(`Clerk redirect URL for unauthenticated users: ${process.env.CLERK_SIGN_IN_URL || 'Default (often /, set CLERK_SIGN_IN_URL)'}`);

    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} is already in use. Trying port ${port + 1}`);
            // No need to explicitly close server here, as listen likely failed before opening fully
            // Try the next port
            startServer(port + 1, maxRetries, attempt + 1);
        } else {
            console.error('Error starting server:', err.message);
            process.exit(1);
        }
    });

    // Graceful shutdown logic (preserved)
    process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
    process.on('SIGINT', () => gracefulShutdown('SIGINT'));

    function gracefulShutdown(signal) {
        console.log(`Received ${signal}, closing server...`);
        server.close(() => {
            console.log('HTTP server closed');
            mongoose.connection.close(false).then(() => { // Use promise version
                console.log('MongoDB connection closed');
                process.exit(0);
            }).catch(err => {
                console.error("Error closing MongoDB connection:", err);
                process.exit(1); // Exit even if DB closing fails
            });
        });

        // Force close if graceful shutdown takes too long
        setTimeout(() => {
            console.error('Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 10000); // 10 seconds timeout
    }
}

// --- Start the server ---
startServer(initialPort);