# Switchback – MTB Races Frontend

Switchback is a web application that aggregates all UK mountain bike races in one place, making it easier for riders to discover and sign up for events. Built with Next.js, React, and Tailwind CSS.

## Features

- Browse a comprehensive list of UK MTB races

## Getting Started

To run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Project Structure

- `src/app/` – Main Next.js app pages and layout
- `src/components/` – Reusable UI components (Navbar, RaceItem, etc.)
- `src/types/` – TypeScript types
- `src/api.ts` – API functions for fetching race data

## Development

- Edit the landing page in `src/app/page.tsx`
- Edit the races list in `src/app/races/page.tsx`
- Race data is fetched from a backend API (see `src/api.ts`)

## Contributing

Feedback and contributions are welcome! If you notice a missing race series or want to help, please get in touch.
