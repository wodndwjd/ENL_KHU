# Energy Nanomaterials Laboratory (ENL) — Kyung Hee University

A modern, responsive academic laboratory website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, research areas, publications, news, faculty, CTA |
| `/research` | Detailed research area descriptions |
| `/publications` | Full publication list by year |
| `/people` | Faculty, students, postdocs, and alumni |
| `/news` | News and achievements |
| `/facilities` | Lab equipment and infrastructure |
| `/join-us` | Open positions and application process |
| `/contact` | Contact info, map placeholder, inquiry form |

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

### Prerequisites

- Node.js 18.18 or later
- npm, yarn, or pnpm

### Install & Run

```bash
cd ENL_KHU
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
ENL_KHU/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with fonts, header, footer
│   ├── page.tsx          # Home page
│   ├── globals.css       # Tailwind + custom theme
│   ├── research/
│   ├── publications/
│   ├── people/
│   ├── news/
│   ├── facilities/
│   ├── join-us/
│   └── contact/
├── components/
│   ├── layout/           # Header, Footer, PageHero
│   ├── home/             # Home page sections
│   └── ui/               # Reusable UI components
├── data/                 # Content data (easy to edit)
│   ├── site.ts
│   ├── research.ts
│   ├── publications.ts
│   ├── people.ts
│   ├── news.ts
│   ├── facilities.ts
│   └── join-us.ts
└── lib/
    └── utils.ts
```

## Customization

All lab content lives in the `data/` folder. Update names, publications, news items, and contact details there without touching component code.

### Theme Colors

Defined in `app/globals.css`:

- **KHU Navy** — primary dark
- **KHU Blue** — secondary
- **KHU Gold** — accent (inspired by KHU branding)

## Deploy

Deploy easily on [Vercel](https://vercel.com/):

```bash
npm run build
```

Or push to GitHub and connect the repository to Vercel for automatic deployments.

## License

© Energy Nanomaterials Laboratory, Kyung Hee University.
