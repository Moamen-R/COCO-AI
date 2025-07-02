<div align="center"><img src=".\client\public\favicon.png" alt="COCO AI Logo" width="150" height="150"/></div>


<div align="center"><h1>COCO AI</h1></div>

## Table of Contents

- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
  - [Creating a New Chat](#creating-a-new-chat)
  - [Uploading Images for Analysis](#uploading-images-for-analysis)
  - [Managing Chat History](#managing-chat-history)
- [Contribution Guidelines](#contribution-guidelines)
  - [Setting Up Development Environment](#setting-up-development-environment)
  - [Code Style](#code-style)
  - [Submitting Changes](#submitting-changes)
  - [Reporting Bugs](#reporting-bugs)
- [License](#license)

## 🚀 Project Overview

COCO AI is a powerful platform that provides easy access to the latest AI models, allowing you to supercharge your productivity. This application integrates Google's Generative AI (Gemini) with a user-friendly interface for chat-based interactions, image analysis, and more.

The project aims to bring free and powerful AI ChatBots to users, helping them to be more productive and creative by providing easy access to the most effective AI models.

| 🎯 Project Goals | 🛠️ Core Technology | 🌟 Key Benefits |
| :-------------- | :---------------- | :------------- |
| Democratize AI access | Google Gemini AI | Enhanced productivity |
| Simplify AI interactions | React + Node.js | User-friendly interface |
| Enable image analysis | MongoDB | Secure data storage |
| Foster creativity | Clerk Auth | Protected user data |

## Key Features

| Feature              | Description                                        | Status       |
| :------------------- | :------------------------------------------------- | :----------- |
| **AI Chat Interface**| Engage in conversations with Google's Gemini AI model | ✅ Implemented |
| **Image Analysis**   | Upload and analyze images using AI                 | ✅ Implemented |
| **Code Generation**  | Generate code snippets using AI assistance         | ✅ Implemented |
| **User Authentication**| Secure login and registration via Clerk            | ✅ Implemented |
| **Responsive Design**| Works across desktop and mobile devices            | ✅ Implemented |
| **Chat History**     | Save and revisit previous conversations            | ✅ Implemented | 

## 🔧 Installation

Follow these steps to set up and install COCO AI on your local machine.

| 📊 System Requirements | 🌐 Network Requirements | 💾 Storage Requirements |
| :-------------------- | :-------------------- | :-------------------- |
| 4GB RAM minimum | Internet connection | 1GB free space |
| Modern CPU | Port 3000 & 5173 available | SSD recommended |

### Prerequisites

Ensure you have the following installed:

| Prerequisite          | Version         |
| :-------------------- | :-------------- |
| Node.js               | v16 or higher   |
| MongoDB               | Latest stable   |
| Clerk Account         | N/A             |
| Google Generative AI API Key | N/A      |
| ImageKit Account      | N/A             |

### Backend Setup

1.  **Clone the repository**: 
    ```bash
    git clone https://github.com/yourusername/COCO-AI.git
    cd COCO-AI
    ```

2.  **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3.  **Create a `.env` file** in the `backend` directory with the following variables:
    ```
    PORT=3000
    MONGO=your_mongodb_connection_string
    CLIENT_URL=http://localhost:5173
    VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
    VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
    VITE_IMAGE_KIT_PRIVATE_KEY=your_imagekit_private_key
    ```

4.  **Start the backend server**:
    ```bash
    npm run start
    ```

### Frontend Setup

1.  **Install frontend dependencies**:
    ```bash
    cd ../client
    npm install
    ```

2.  **Create a `.env` file** in the `client` directory with the following variables:
    ```
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    VITE_GIMINI_PUPLIC_KEY=your_google_generative_ai_key
    VITE_IMAGE_KIT_ENDPOINT=your_imagekit_endpoint
    VITE_IMAGE_KIT_PUBLIC_KEY=your_imagekit_public_key
    ```

3.  **Start the frontend development server**:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 💡 Usage

| 🔥 Quick Start Guide |
| :------------------- |
| 1. Sign in with your credentials |
| 2. Click "New Chat" button |
| 3. Choose interaction type (text/image) |
| 4. Start chatting with AI |

### Creating a New Chat

1.  Sign in to your account. 🔑
2.  Navigate to the dashboard. 📊
3.  Enter your prompt in the input field and press the send button. 💬
4.  The AI will respond to your message. 💡

### Uploading Images for Analysis

1.  In a chat, click the attachment icon. 📎
2.  Select an image from your device. 📸
3.  Add a text prompt if needed. ✍️
4.  Submit to receive AI analysis of the image. 🔍

### Managing Chat History

Your conversations are automatically saved and can be accessed from the sidebar menu under "RECENT CHATS". 🕰️

## 📁 Project Structure

```
.github/
├── workflows/
│   └── main_workflow.yml  # CI/CD pipeline for automated testing and deployment
public/
├── assets/                # Static assets like images, icons
src/
├── components/            # Reusable UI components (e.g., buttons, cards)
├── pages/                 # Top-level page components (e.g., Home, Dashboard)
├── services/              # API communication and external service integrations
├── utils/                 # Utility functions and helpers
├── App.js                 # Main application component
├── index.js               # Entry point of the application
backend/
├── controllers/           # Handle incoming requests and interact with models
├── models/                # Define data schemas and interact with the database
├── routes/                # Define API endpoints
├── middleware/            # Custom middleware for authentication, error handling
├── server.js              # Entry point for the backend server
.env                       # Environment variables (local)
.gitignore                 # Specifies intentionally untracked files to ignore
README.md                  # Project documentation
package.json               # Project dependencies and scripts
```

## 🤝 Contribution Guidelines

We welcome contributions to COCO AI! Please follow these guidelines to help us maintain a high-quality codebase.

| Type of Contribution | How to Contribute                                  | Guidelines |
| :------------------ | :------------------------------------------------ | :--------- |
| 🐛 Bug Fixes        | Submit a PR with test cases                        | Follow code style guidelines |
| ✨ New Features     | Open an issue first for discussion                 | Must include documentation |
| 📝 Documentation    | Direct PR for typos, detailed issue for changes    | Follow markdown style guide |
| 🎨 UI/UX            | Include screenshots/videos of changes              | Match existing design system |

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

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact/Support

For any questions, support, or collaboration inquiries, please reach out to:

-   **Mo'men Refaey** - [GitHub Profile](https://github.com/momenrefaey1)
-   **Email**: [moamen.refaey.dev@gmail.com](mailto:moamen.refaey.dev@gmail.com)

## 🛣️ Future Enhancements

We have exciting plans for COCO AI's future development, including:

-   **Multi-model Support**: Integrating more AI models (e.g., DALL-E, GPT-4) for diverse capabilities. 🤖
-   **Advanced Code Refactoring**: AI-driven refactoring suggestions directly within the IDE. 💡
-   **Plugin Ecosystem**: Allowing developers to build and share custom plugins for specialized AI tasks. 🧩
-   **Voice Interface**: Adding voice input capabilities for hands-free interaction. 🎙️
-   **Offline Mode**: Enabling limited functionality without an internet connection for core tasks. 🔌

Your suggestions and contributions are highly valued!

---



| 📜 License Details | ✅ Permissions |
| :---------------- | :------------ |
| MIT License | Commercial use |
| Copyright (c) 2024 | Modification |
| Mo'men Refaey | Distribution |

---

<div align="center">
  <img src=".\client\public\favicon.png" alt="COCO AI Logo" width="30" />
  <p>Made with ❤️ by the Mo'men Refaey</p>
</div>
