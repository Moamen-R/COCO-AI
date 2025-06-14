<div style="text-align: center;"><img src="./client/public/favicon.png" alt="COCO AI Logo" style="width: 15px;"></div>

# **COCO AI**

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

## Project Overview

COCO AI is a powerful platform that provides easy access to the latest AI models, allowing you to supercharge your productivity. This application integrates Google's Generative AI (Gemini) with a user-friendly interface for chat-based interactions, image analysis, and more.

The project aims to bring free and powerful AI ChatBots to users, helping them to be more productive and creative by providing easy access to the most effective AI models.

## Key Features

| Feature              | Description                                        | Status       | Emoji |
| :------------------- | :------------------------------------------------- | :----------- | :---- |
| **AI Chat Interface**| Engage in conversations with Google's Gemini AI model | ✅ Implemented | 🤖    |
| **Image Analysis**   | Upload and analyze images using AI                 | ✅ Implemented | 🖼️    |
| **Code Generation**  | Generate code snippets using AI assistance         | ✅ Implemented | 💻    |
| **User Authentication**| Secure login and registration via Clerk            | ✅ Implemented | 🔒    |
| **Responsive Design**| Works across desktop and mobile devices            | ✅ Implemented | 📱    |
| **Chat History**     | Save and revisit previous conversations            | ✅ Implemented | 💾    |

## Installation

Follow these steps to set up and install COCO AI on your local machine.

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

## Usage

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

## Contribution Guidelines

We welcome contributions to COCO AI! Please follow these guidelines to help us maintain a high-quality codebase.

| Type of Contribution | How to Contribute                                  | Guidelines