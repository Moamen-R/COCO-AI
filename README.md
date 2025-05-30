<img src=".\client\public\favicon.png" alt="COCO AI Logo" width="200" height="200" />

# COCO AI

COCO AI is a powerful platform that provides easy access to the latest AI models, allowing you to supercharge your productivity. This application integrates Google's Generative AI (Gemini) with a user-friendly interface for chat-based interactions, image analysis, and more.

## Project Overview

COCO AI is a full-stack application that allows users to interact with advanced AI models through a clean, intuitive interface. The platform supports text-based conversations, image uploads for analysis, and provides a dashboard for managing multiple AI conversations.

### Key Features

- 🤖 **AI Chat Interface**: Engage in conversations with Google's Gemini AI model
- 🖼️ **Image Analysis**: Upload and analyze images using AI
- 💻 **Code Generation**: Generate code snippets using AI assistance
- 🔒 **User Authentication**: Secure login and registration via Clerk
- 📱 **Responsive Design**: Works across desktop and mobile devices
- 💾 **Chat History**: Save and revisit previous conversations

## Installation

### Prerequisites

- Node.js (v16 or higher)
- MongoDB database
- Clerk account for authentication
- Google Generative AI API key
- ImageKit account for image handling

### Backend Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/COCO-AI.git
   cd COCO-AI
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=3000
   MONGO=your_mongodb_connection_string
   CLIENT_URL=http://localhost:5173
   VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
   VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
   VITE_IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
   ```

4. Start the backend server
   ```bash
   npm run start
   ```

### Frontend Setup

1. Install frontend dependencies
   ```bash
   cd ../client
   npm install
   ```

2. Create a `.env` file in the client directory with the following variables:
   ```
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_GIMINI_PUPLIC_KEY=your_google_generative_ai_key
   VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
   VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
   ```

3. Start the frontend development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

### Creating a New Chat

1. Sign in to your account
2. Navigate to the dashboard
3. Enter your prompt in the input field and press the send button
4. The AI will respond to your message

### Uploading Images for Analysis

1. In a chat, click the attachment icon
2. Select an image from your device
3. Add a text prompt if needed
4. Submit to receive AI analysis of the image

### Managing Chat History

Your conversations are automatically saved and can be accessed from the sidebar menu under "RECENT CHATS".

## Project Structure

```
COCO-AI/
├── backend/                # Express server
│   ├── models/             # MongoDB schemas
│   ├── index.js            # Server entry point
│   └── package.json        # Backend dependencies
├── client/                 # React frontend
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── layouts/        # Page layouts
│   │   ├── lib/            # Utility functions
│   │   ├── routes/         # Application routes
│   │   └── main.jsx        # Frontend entry point
│   └── package.json        # Frontend dependencies
└── AGENT.md               # Development guidelines
```

## Contribution Guidelines

### Setting Up Development Environment

1. Fork the repository
2. Clone your forked repository
3. Follow the installation steps above
4. Create a new branch for your feature or bug fix

### Code Style

Please follow these guidelines when contributing:

- **Imports**: ES modules (import/export), sorted by external then internal
- **Formatting**: Use consistent indentation (2 spaces)
- **Error Handling**: Use try/catch blocks with specific error handling
- **Naming**: camelCase for variables/functions, PascalCase for classes/components
- **Comments**: JSDoc style for function documentation
- **Authentication**: Use Clerk middleware for protected routes
- **Async**: Use async/await pattern for asynchronous operations

### Submitting Changes

1. Commit your changes with clear, descriptive commit messages
2. Push to your fork
3. Submit a pull request with a detailed description of your changes

### Reporting Bugs

If you find a bug, please create an issue with the following information:

- A clear, descriptive title
- Steps to reproduce the bug
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Your environment (browser, OS, etc.)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <img src="/logo.png" alt="COCO AI Logo" width="30" />
  <p>Made with ❤️ by the COCO AI Team</p>
</div>