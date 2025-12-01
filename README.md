# Next.js Boilerplate

This is a Next.js boilerplate project designed to provide a solid foundation for building modern web applications. It includes a curated set of tools and libraries to streamline development and ensure code quality.

## About The Project

This boilerplate is pre-configured with:

- **Next.js 15:** A React framework for building server-side rendered and statically generated web applications.
- **TypeScript:** A statically typed superset of JavaScript that enhances code quality and maintainability.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **next-intl:** A library for internationalization (i18n) in Next.js.
- **React Hook Form & Zod:** For building and validating forms.
- **shadcn/ui:** For beautifully designed, accessible, and customizable components.
- **ESLint & Prettier:** For code linting and formatting.

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (v20 or later)
- npm

### Installation

1.  Clone the repo

    ```sh
    git clone https://github.com/boatmu/nextjs-boilerplate.git
    ```

2.  Install NPM packages
    ```sh
    npm install
    ```

## Usage

To run the development server:

```sh
npm run dev
```

To build the project for production:

```sh
npm run build
```

To start the production server:

```sh
npm run start
```

## Folder Structure

The project follows a feature-based folder structure to keep the codebase organized and scalable.

```
/
├── .env.example         # Example environment variables
├── .gitignore           # Git ignore file
├── .prettierrc.js       # Prettier configuration
├── components.json      # Configuration for UI components
├── eslint.config.mjs    # ESLint configuration
├── next.config.ts       # Next.js configuration
├── package.json         # Project dependencies and scripts
├── postcss.config.mjs   # PostCSS configuration
├── README.md            # Project README
├── tsconfig.json        # TypeScript configuration
├── public/              # Static assets
└── src/
    ├── app/                 # Next.js App Router
    │   ├── [locale]/        # Locale-based routing
    │   │   ├── (public)/    # Public pages
    │   │   ├── admin/       # Admin page
    │   │   └── merchant/    # Merchant page
    │   ├── globals.css      # Global styles
    │   └── layout.tsx       # Root layout
    ├── assets/              # Icons and other assets
    ├── components/          # Reusable UI components
    │   ├── layout/          # Layout components
    │   ├── shared/          # Shared components
    │   └── ui/              # UI primitives
    ├── hooks/               # Custom React hooks
    ├── i18n/                # Internationalization configuration
    ├── lib/                 # Utility functions
    └── types/               # TypeScript type definitions
```

## Linting

To lint the code, run the following command:

```sh
npm run lint
```
