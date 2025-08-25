# Yummify - AI Recipe Generator 🍳

An intelligent recipe generator powered by AI that suggests delicious recipes based on the ingredients you have on hand. Built with React and Vite for a fast, modern web experience.

## 🎯 Features

- **AI-Powered Recipe Generation**: Get personalized recipe suggestions using Claude AI and Mistral AI
- **Smart Ingredient Recognition**: Input your available ingredients and get creative recipe ideas
- **Real-time Recipe Display**: Beautiful markdown-formatted recipes with clear instructions
- **Multiple AI Models**: Choose between Claude AI (Anthropic) or Mistral AI for recipe generation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Clean UI**: Modern, intuitive interface built with React components

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- API keys for AI services (see setup below)

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd yummify
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```bash
   touch .env
   ```

4. **Add your API keys** to the `.env` file:
   ```env
   VITE_ANTHROPIC_API_KEY=your_anthropic_api_key_here
   VITE_HF_ACCESS_TOKEN=your_huggingface_token_here
   ```

### Getting API Keys

#### Anthropic API Key (Claude AI)
1. Visit [Anthropic Console](https://console.anthropic.com)
2. Sign up for an account
3. Navigate to API Keys section
4. Generate a new API key
5. Copy the key and add it to your `.env` file

#### Hugging Face Access Token (Mistral AI)
1. Visit [Hugging Face](https://huggingface.co)
2. Create an account or sign in
3. Go to Settings → Access Tokens
4. Create a new token with "Read" permissions
5. Copy the token and add it to your `.env` file

### Running the Application

**Development mode:**
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

**Build for production:**
```bash
npm run build
```

**Preview production build:**
```bash
npm run preview
```

## 🏗️ Project Structure

```
yummify/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # App header component
│   │   ├── Main.jsx            # Main application logic
│   │   ├── IngredientsList.jsx # Ingredient input management
│   │   └── Recipe.jsx          # Recipe display component
│   ├── ai.js                   # AI integration logic
│   ├── App.jsx                 # Root component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── assets/                 # Static assets
├── .env                        # Environment variables (create this)
├── package.json               # Dependencies and scripts
└── vite.config.js            # Vite configuration
```

## 🧪 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Anthropic SDK** - Claude AI integration
- **Hugging Face Inference** - Mistral AI integration
- **CSS3** - Styling and animations
- **ESLint** - Code linting

## 🔧 Environment Variables

The application requires the following environment variables in your `.env` file:

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_ANTHROPIC_API_KEY` | API key for Claude AI | Yes |
| `VITE_HF_ACCESS_TOKEN` | Access token for Hugging Face | Yes |

## 🛡️ Security Notes

⚠️ **Important Security Information:**

- **Never commit your API keys** to version control
- **Never deploy this application** with API keys exposed
- The `.env` file is automatically ignored by git (see `.gitignore`)
- For production deployment, consider:
  - Using environment variables on your hosting platform
  - Implementing a backend API to proxy AI requests
  - Using serverless functions to keep keys secure

## 🎮 Usage

1. **Start the application** using the commands above
2. **Enter your ingredients** in the input field (e.g., "chicken, tomatoes, pasta")
3. **Click "Get Recipe"** to generate AI-powered recipe suggestions
4. **View your recipe** displayed in a beautifully formatted markdown
5. **Try different ingredients** to discover new recipes!

## 🐛 Troubleshooting

### Common Issues

**"API key not found" error:**
- Ensure your `.env` file exists in the root directory
- Verify your API keys are correctly formatted
- Restart the development server after adding keys

**Recipe generation fails:**
- Check your internet connection
- Verify API keys are valid and have sufficient credits
- Check browser console for detailed error messages

**Styling issues:**
- Try clearing browser cache
- Ensure all dependencies are installed correctly

### Getting Help

If you encounter issues:
1. Check the browser console for error messages
2. Verify your API keys are active and have credits
3. Ensure all environment variables are correctly set
4. Try restarting the development server

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- Powered by [Anthropic's Claude AI](https://anthropic.com) and [Hugging Face](https://huggingface.co)
- Icons and assets from various open-source projects

---

Made with ❤️ by Tristan
