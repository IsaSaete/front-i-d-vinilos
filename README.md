# 🎶 I+D Vinyls

> Explore and manage your vinyl collection. Add your records, discover new titles, and keep track of your music library.

## 🔗 Live Demo

Check out the app here:  
👉 [https://isabelsaenz-202502-front.netlify.app/](https://isabelsaenz-202502-front.netlify.app/)

## 🧠 What is I+D Vinyls?

**I+D Vinyls** is a **Single Page Application (SPA)** built with React that allows users to fully manage their vinyl record collection.

The app implements a complete **CRUD** system for the `vinyl` entity:

- ➕ **Create:** Add new vinyl records with detailed metadata.

- 👀 **Read:** View your collection with pagination (6 vinyls per page if available), sorted alphabetically by artist name. The total count of vinyls is also displayed.

- 🔄 **Update:** Toggle the `isOwned` property or edit all vinyl information through a dedicated edit page.

- 🗑️ **Delete:** Remove vinyl records from the collection.

✨ Features include **feedback modals** for user interactions and a **loader** to enhance user experience during data fetching.

## 🛠️ Tech Stack

- ⚛️ [React 19](https://react.dev/)
- ⚡ [Vite](https://vitejs.dev/)
- 🧰 [Redux Toolkit](https://redux-toolkit.js.org/)
- 🔷 [TypeScript](https://www.typescriptlang.org/)
- 🧭 [React Router](https://reactrouter.com/en/main)
- 🧪 [Vitest](https://vitest.dev/)
- 🧼 [Testing Library](https://testing-library.com/)
- 🛡️ [MSW (Mock Service Worker)](https://mswjs.io/)
- 🧹 [ESLint + Prettier](https://eslint.org/)
- 🐶 [Husky](https://typicode.github.io/husky/) + [Lint-staged](https://github.com/okonet/lint-staged)

## 📁 Project Structure

```bash
src/
│
├── components/          # Shared components like Header, Footer, Layout
├── hooks/               # Custom hooks
├── pages/               # General pages (e.g. NotFound)
├── router/              # Main routing
├── slices/              # Global Redux slices (e.g. feedback)
├── store/               # Redux Toolkit configuration
├── styles/              # Global styles
├── vinyl/               # Main feature: vinyl management
│   ├── client/          # API client for vinyl endpoints
│   ├── components/      # Vinyl-related UI components
│   ├── hooks/           # Vinyl-specific hooks
│   ├── pages/           # Pages like VinylsPage, VinylDetailPage
│   ├── dto/             # Data transformers and types
│   └── mocks/           # MSW mocks for testing
└── main.tsx             # App entry point
```

## 🚀 Getting Started

To run this project locally:

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Run tests
npm run test

# 4. Test coverage
npm run test:coverage

# 5. Production build
npm run build
```

> 🧩 Make sure to have Node.js v18 or higher. Create a `.env` file based on `.env.sample` if needed.

## ✅ Testing & Code Quality

This project is configured with:

- 🧪 **Vitest** for unit testing
- 🧼 **Testing Library** for UI testing
- 🛡️ **MSW** for mocking API calls
- 🐶 **Husky + lint-staged** for pre-commit checks

## 📝 License

This project is licensed under the **ISC License**.

---

## 👩‍💻 Author

**Isabel Sáenz**  
For the **I+D Vinilos** front project

[GitHub](https://github.com/IsaSaete/front-i-d-vinilos.git)
