# Expense Tracker

A modern web application for tracking personal expenses, built with SvelteKit and TypeScript. This application helps you manage your finances by allowing you to record, categorize, and analyze your expenses.

## Features

- 📊 Track and categorize expenses
- 🔒 Secure user authentication
- 💾 Local database storage using SQLite
- 🎨 Modern and responsive UI
- 📱 Mobile-friendly design

## Tech Stack

- [SvelteKit](https://kit.svelte.dev/) - Full-stack web application framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Drizzle ORM](https://orm.drizzle.team/) - TypeScript ORM
- [SQLite](https://www.sqlite.org/) - Local database
- [Lucide Icons](https://lucide.dev/) - Beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended) or npm

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Gurneet-sran/expense-tracker.git
cd expense-tracker
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your configuration.

4. Initialize the database:
```bash
pnpm db:push
```

5. Start the development server:
```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm db:push` - Push database schema changes
- `pnpm db:studio` - Open Drizzle Studio for database management
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Run ESLint and Prettier checks

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
