# I+D Vinilos – Frontend

Frontend for the **I+D Vinilos** project, built with [React](https://reactjs.org/) and [Vite](https://vitejs.dev/). This project allows users to explore vinyl records, artists, formats, and related information.

## 🚀 Tech Stack

- [Vite](https://vitejs.dev/) – Next-generation, fast build tool for frontend development.
- [React](https://reactjs.org/) – A JavaScript library for building user interfaces.
- [Vitest](https://vitest.dev/) – Testing framework for unit and integration tests.
- [MSW](https://mswjs.io/) – API mocking library for intercepting and mocking network requests.
- [ESLint](https://eslint.org/) – Linter for identifying and fixing problems in JavaScript/TypeScript code.
- [Prettier](https://prettier.io/) – Code formatter to ensure consistent code style.
- [Husky](https://typicode.github.io/husky/#/) – Git hooks to automate checks before commits and pushes.

## ⚙️ Project Status

> 🛠️ Initial setup complete.  
> The first commit includes:

- `.gitignore`
- `.editorconfig`
- `package.json`
- Vite, React, and dependencies setup

## 🧹 Code Quality Tools

This project includes the following tools to maintain clean, consistent code:

- **ESLint** – Linter for static code analysis and rule enforcement.
- **Prettier** – Code formatter for consistent code styling.
- **Husky** – Git hooks for automating tasks before commits and pushes.

### Configured Git Hooks (via Husky)

- `pre-commit`: Runs linters and formatters.
- `pre-push`: Runs tests before pushing code.
- `commit-msg`: Ensures commit messages follow a consistent format (e.g., Conventional Commits).

> 🔧 After cloning the project, run `npm install` to set up Husky hooks automatically.

## 📂 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/IsaSaete/front-i-d-vinilos.git
cd id-vinilos-frontend
npm install
```
