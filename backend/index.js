import express from "express"
import cors from "cors"
import ImageKit from "imagekit";

const initialPort = process.env.PORT || 3000;
const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
}));

const imageKit = new ImageKit({
    urlEndpoint: process.env.VITE_IMAGE_KIT_ENDPOINT,
    publicKey: process.env.VITE_IMAGE_KIT_PUBLIC_KEY,
    privateKey: process.env.VITE_IMAGE_KIT_PRIVATE_KEY,
});

app.get("/api/upload", (req, res) => {
    const result = imageKit.getAuthenticationParameters();
    res.send(result);
})


// Function to try starting the server on different ports //
function startServer(port) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port} is already in use. Trying port ${port + 1}`);
            // Try the next port
            startServer(port + 1);
        } else {
            console.error('Error starting server:', err.message);
        }
    });
}

// Start the server with the initial port
startServer(initialPort);