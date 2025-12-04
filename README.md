# DevFest Feature Flag Demo

Marketing site for Readflow, a digital library product, showcasing how feature flags change the experience in real time. Firebase Remote Config drives a maintenance kill switch, gradual releases (AI summary section, discounted pricing), and an A/B test for testimonials—all wired into a Next.js 15 + Tailwind CSS v4 landing page.

## Features

- Firebase Remote Config toggles with live updates (kill switch, feature releases, testimonial variants).
- Tailwind CSS v4 styling with shadcn/ui components for a polished landing page.
- Client-side flag hook to swap sections without redeploying.
- Environment-driven config for fetch intervals to ease local testing.

## Tech Stack

- [Next.js 15](https://nextjs.org/) with the App Router
- [React 19](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/) with [shadcn/ui](https://ui.shadcn.com/)
- [Firebase Remote Config](https://firebase.google.com/docs/remote-config) for feature flags
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)

## Getting Started

### Prerequisites

- Node.js v20+
- [pnpm](https://pnpm.io/) installed globally

### Installation

1. Clone the repo.
2. Install dependencies with pnpm:

   ```sh
   pnpm install
   ```

3. Copy `.env.example` to `.env.local` and fill in your Firebase keys plus `NEXT_PUBLIC_REMOTE_CONFIG_FETCH_INTERVAL` (set to `0` for instant refresh during local dev).

## Usage

- Development server with Turbopack:

  ```sh
  pnpm dev
  ```

- Production build:

  ```sh
  pnpm build
  ```

- Start the production server:

  ```sh
  pnpm start
  ```

## Linting

```sh
pnpm lint
```
