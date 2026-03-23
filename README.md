# blackbit.dev

Personal portfolio website for Alisher Satimov — Frontend Developer.

**Live:** https://blackbit.dev

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Animation:** Framer Motion 11
- **Theme:** next-themes (dark/light)

## Getting Started

```bash
# Install dependencies
yarn install

# Run dev server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
blackbit-dev/
├── app/
│   ├── layout.tsx        # Root layout, metadata, JSON-LD
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles, CSS variables
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/
│   ├── Navbar.tsx        # Fixed header, theme toggle, mobile menu
│   ├── Hero.tsx          # Landing section with typewriter
│   ├── Skills.tsx        # Skills grid
│   ├── Projects.tsx      # Project portfolio
│   ├── Certificates.tsx  # Certificates
│   ├── Contact.tsx       # Contact links
│   ├── Footer.tsx        # Footer
│   ├── ErrorBoundary.tsx # Error boundary
│   └── ThemeProvider.tsx # next-themes wrapper
├── lib/
│   ├── data.ts           # All site data (skills, projects, etc.)
│   └── config.ts         # Site configuration (availability, email, etc.)
└── public/
    ├── favicon.ico
    ├── apple-touch-icon.png
    └── og-image.png      # 1200×630 OG image
```

## Configuration

Edit `lib/config.ts` to update:

- `available` — toggle "Available for work" badge on/off
- `availableText` — change the badge text
- `email` — update contact email (split into `user`/`domain` for bot protection)
- `social` — update social media links

Edit `lib/data.ts` to update:

- `skillGroups` — skills list
- `projects` — portfolio projects
- `certificates` — certificates
- `navLinks` — navigation links
- `roles` — typewriter roles in hero

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.

## Environment Variables

See `.env.example` for all available environment variables.
