# 💻 Personal Website

![logo](ruben-sprengel-personal-website-preview-logo.png)

A modern, lightning-fast, and elegant personal website built with SvelteKit and the latest web technologies. This project leverages shadcn-svelte for a beautiful, accessible UI and Tailwind CSS for flexible styling.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/rubensprengel)
[![GitHub Releases](https://img.shields.io/github/v/release/ruben-sprengel/personal-website?style=for-the-badge&label=GitHub%20Release)](https://github.com/ruben-sprengel/personal-website/releases)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)
[![ESLint](https://img.shields.io/badge/code%20analysis-eslint-4B32C3.svg?style=for-the-badge)](https://eslint.org)

## 🌐 Live Demo

Check out the live version of this website: [https://ruben-sprengel.de](https://ruben-sprengel.de)

## ✨ Features
- **[Svelte / SvelteKit](https://svelte.dev/)**: Maximized performance and SEO-friendliness through Server-Side Rendering (SSR).
- **[Tailwind CSS](https://tailwindcss.com/)**: Fast and consistent styling with a utility-first CSS approach.
- **[shadcn-svelte](https://www.shadcn-svelte.com/)**: Ready-to-use, customizable, and accessible UI components.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.
- **[Vite](https://vite.dev/)**: A blazing-fast development experience.
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety and an improved developer experience.

## 🚀 Continuous Integration (CI)

This project uses a Continuous Integration (CI) pipeline that runs automatically with every pull request and push to the main branch. This ensures that the code is consistent, high-quality, and free of obvious errors.

- The CI pipeline is located in the .github/workflows/svelte-ci.yml file and performs the following steps:
- Checkout Code: Fetches the current code from the repository.
- Node.js Setup: Sets up the required Node.js version (v22).
- Cache Node Modules: Uses GitHub Actions Caching to cache dependencies between runs and reduce installation time.
- Install Dependencies: Installs all dependencies with npm ci based on the package-lock.json file.
- Linting: Runs the linter to check for code formatting and potential style errors.
- Svelte Check: Checks the code for type and syntax errors to ensure it's compatible with the Svelte compiler configuration.
- Security Audit: Scans project dependencies for known security vulnerabilities and fails if critical issues are found.
- Build: Runs a full build of the application to ensure production artifacts can be created without errors.

A merge into the main branch is only possible if all of these checks have been completed successfully.

## Contributing & Support ❤️

We welcome all forms of support!

- **Contributions:** If you'd like to add new templates, improve existing ones, or report issues, please check out our **[CONTRIBUTING.md](CONTRIBUTING.md)** guide.
- **Support:** Give us a Star here on GitHub. Your feedback and stars help us reach more developers!
- **Sponsoring:** You can also support the project with a small donation via the Ko-fi button.

**Thank you for your support!** 🙏

## Logo Notice / Disclaimer

The logo for this project was generated with an AI tool. No manual or copyrighted works were used as direct templates.