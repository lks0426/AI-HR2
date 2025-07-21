#!/bin/bash

echo "🚀 Installing AI+HR Report Website..."

# Clean any existing installations
rm -rf node_modules package-lock.json

# Install dependencies using npx and npm
echo "📦 Installing Next.js and dependencies..."
npm install next@latest react@latest react-dom@latest

echo "🎨 Installing UI dependencies..."
npm install lucide-react@latest

echo "🛠️ Installing dev dependencies..."
npm install -D @types/node@latest @types/react@latest @types/react-dom@latest
npm install -D typescript@latest eslint@latest eslint-config-next@latest
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

echo "🎨 Installing Tailwind PostCSS plugin..."
npm install @tailwindcss/postcss@latest

echo "✅ Installation complete!"
echo ""
echo "🏃‍♂️ To start the development server:"
echo "npm run dev"
echo ""
echo "🏗️ To build for production:"
echo "npm run build"
echo ""
echo "📝 Note: If you see PostCSS errors, the configuration has been updated for Tailwind CSS v4"