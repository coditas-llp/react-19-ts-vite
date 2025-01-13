# React 19 TypeScript Boilerplate

A modern, feature-rich boilerplate for React applications with TypeScript, SASS, and Vite. Built with best practices and developer experience in mind.

## ✨ Features

- ⚛️ **React 19** with TypeScript
- 🏃 **Vite 6** for lightning-fast development
- 📚 **Storybook 8** for component development
- 🎨 **SASS** for enhanced styling
- 🔍 **TypeScript 5** with strict mode
- 📏 **ESLint** & **Prettier** for code quality
- 🔄 **Hot Module Replacement**
- 🪝 **Git Hooks** with Husky
- 📱 **Responsive Design** ready
- 🎯 **Component Architecture** with best practices

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16.20 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:

```

2. Install dependencies:
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📚 Available Scripts

- `npm start` - Start the development server
- `npm run build` - Create production build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally
- `npm run prettier` - Format code with Prettier
- `npm run storybook` - Start Storybook server
- `npm run build-storybook` - Build Storybook as static app

## 🏗️ Project Structure

```
src/
├── assets/         # Static assets (fonts, images)
├── components/     # Reusable components
│   ├── Button/
│   ├── Heading/
│   └── Paragraph/
├── styles/         # Global styles and SASS variables
├── views/          # Page components
├── App.tsx         # Root component
└── main.tsx       # Application entry point
```

## 🎨 Component Development

Components are built following a modular architecture:

- Functional components with TypeScript
- SASS modules for styling
- Storybook integration for development
- Interface-first approach with TypeScript

Example:

```typescript
import React from 'react';
import styles from './Component.module.scss';

interface ComponentProps {
  // props definition
}

export const Component: React.FC<ComponentProps> = ({ ...props }) => {
  return <div className={styles.component} {...props} />;
};
```

## 🛠️ Built With

- [React 19](https://reactjs.org/) - UI Framework
- [TypeScript 5](https://www.typescriptlang.org/) - Programming Language
- [Vite 6](https://vitejs.dev/) - Build Tool
- [SASS](https://sass-lang.com/) - CSS Preprocessor
- [Storybook 8](https://storybook.js.org/) - UI Component Development
- [ESLint 9](https://eslint.org/) - Linting
- [Prettier 3](https://prettier.io/) - Code Formatting
- [Husky 9](https://typicode.github.io/husky/) - Git Hooks

## 📝 Development Guidelines

- Use functional components with hooks
- Follow TypeScript strict mode guidelines
- Implement responsive design practices
- Write stories for all components
- Follow the established project structure
- Use SASS modules for component styling
- Follow ESLint and Prettier configurations

## 🔄 Git Workflow

The project uses Husky for Git hooks:

- Pre-commit: Runs Prettier formatting
- Pre-push: Runs install and build

## ⚡ Vite Features

Vite provides several powerful features:

- 💡 Instant Server Start
- ⚡️ Lightning Fast HMR
- 🛠️ Rich Features
- 📦 Optimized Build
- 🔩 Universal Plugin Interface
- 🔑 Fully Typed APIs

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📚 Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Storybook Documentation](https://storybook.js.org/)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details

## 👥 Author

[AMANK](https://people.zoho.in/coditassolutionsllp/zp#home/user/profile-id:48572000000210175)
