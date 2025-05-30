# COCO AI

![Project Logo](\client\public\favicon.png)  
**Your Gateway to Conversational AI Innovation**

## Table of Contents 📚

- [✨ Features](#features-)
- [🚀 Installation](#installation-)
- [💡 Usage Examples](#usage-)
- [⚙️ Tech Stack](#technology-stack-)
- [🤝 Contributing](#contributing-)
- [📜 License](#license)
- [📬 Contact](#contact)

## ✨ Features

- 🧠 **Multimodal AI** - Combine text & images in conversations
- 🔐 **Secure Auth** - Powered by Clerk authentication
- 🖼️ **Image Analysis** - Integrated ImageKit processing
- 📈 **Conversation History** - MongoDB-backed storage
- 💅 **Responsive UI** - Optimized for all devices

## 🚀 Installation

### Full Stack Setup

```bash
git clone https://github.com/yourusername/COCO-AI.git
cd COCO-AI
# Backend
cd backend && npm install
cp .env.example .env # Configure environment variables
# Frontend
cd ../client && npm install
```

## 💡 Usage Examples

**Multimodal Query:**

```javascript
// Example Gemini API interaction
const response = await model.generateContent([ 
  { text: "Explain this diagram:" },
  { image: uploadedImageData },
]);
```

## ⚙️ Tech Stack

| Category     | Technologies               |
| ------------ | -------------------------- |
| **Frontend** | React, Vite, ImageKit SDK  |
| **Backend**  | Node.js, Express, Mongoose |
| **AI**       | Google Gemini 2.5 Flash    |
| **Auth**     | Clerk Identity Management  |
| **Database** | MongoDB Atlas              |

## 🤝 Contributing

1. 〰️ Fork the repository
2. 🛠 Create feature branch (`git checkout -b feature/amazing-feature`)
3. ✅ Add tests for new features
4. 📦 Commit changes (`git commit -m 'Add amazing feature'`)
5. 🚀 Push to branch (`git push origin feature/amazing-feature`)
6. 🔀 Open a Pull Request

## 📜 License

MIT License - See [LICENSE](LICENSE) for details

## 📬 Contact

📧 Email: [team@coco.ai](mailto:team@coco.ai)  
🐦 Twitter: [@coco_ai](https://twitter.com/coco_ai)
