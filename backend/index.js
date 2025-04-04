import express from "express"
import cors from "cors"
import ImageKit from "imagekit";
import mongoose from "mongoose";

const initialPort = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
}));

app.use(express.json());

const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch (err){
        console.log(err)
    }
}

const imageKit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
    const result = imageKit.getAuthenticationParameters();
    res.send(result);
})
app.post("/api/chats", (req,res) => {
    const {text} = req.body
    console.log(text)
})





// Function to try starting the server on different ports //
function startServer(port, maxRetries = 10, attempt = 0) {
    // Check if we've exceeded the maximum number of retries
    if (attempt >= maxRetries) {
        console.error(`Failed to start server after ${maxRetries} attempts. Please check your network configuration.`);
        process.exit(1);
        return;
    }

    const server = app.listen(port, () => {
        connect().catch(err => {
            console.error('Failed to connect to MongoDB:', err.message);
            // Continue running the server even if MongoDB connection fails
        });
        console.log(`Server is running on port ${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.warn(`Port ${port} is already in use. Trying port ${port + 1}`);
            // Close the current server attempt
            server.close();
            // Try the next port
            startServer(port + 1, maxRetries, attempt + 1);
        } else {
            console.error('Error starting server:', err.message);
            process.exit(1);
        }
    });

    // Add graceful shutdown
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGINT', gracefulShutdown);

    function gracefulShutdown() {
        console.log('Received shutdown signal, closing server...');
        server.close(() => {
            console.log('Server closed');
            mongoose.connection.close(false, () => {
                console.log('MongoDB connection closed');
                process.exit(0);
            });
        });

        // Force close if graceful shutdown takes too long
        setTimeout(() => {
            console.error('Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 10000);
    }
}

// Start the server with the initial port
startServer(initialPort);