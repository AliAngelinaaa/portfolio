# Nafisa Anzum — Portfolio

Personal portfolio site built with React and Vite, deployed to GitHub Pages at [aliangelinaaa.github.io/portfolio](https://aliangelinaaa.github.io/portfolio/).

## Features

- Responsive hero with resume download
- Featured project case studies (Problem → Solution → Outcome)
- Filterable project timeline by category
- Skills showcase with easter eggs
- Experience page with work history
- Dark mode toggle
- Google Analytics support (optional)
- Open Graph / Twitter Card meta tags for link previews

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Scroll

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173/portfolio/`

## Configuration

### Resume

Replace `public/resume.pdf` with your actual resume PDF. The download buttons in the nav and hero will serve this file.

### Analytics

1. Copy `.env.example` to `.env.local`
2. Add your Google Analytics 4 Measurement ID:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Analytics only loads when this variable is set.

### Social Preview Image

Replace `public/og-image.jpg` with a 1200×630 image for link previews on LinkedIn, iMessage, etc.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to GitHub Pages |

## Project Structure

```
src/
├── components/     # React components (Home, Nav, Timeline, etc.)
├── context/        # Theme provider (dark mode)
├── data/           # Featured project case studies
├── images/         # Project screenshots and photos
├── utils/          # Analytics, easter eggs
public/
├── resume.pdf      # Downloadable resume (replace with yours)
└── og-image.jpg    # Social preview image
```

## Easter Eggs

- Click "Home" in the nav 5 times → cat appears
- Type `purple` → purple theme
- Click Java icon 3 times in Skills → Java rizz lines
- On Experience page, type `hello`, `dance`, or `witu`

## Contact

- Email: [nanzum1140@gmail.com](mailto:nanzum1140@gmail.com)
- GitHub: [@aliangelinaaa](https://github.com/aliangelinaaa)
- LinkedIn: [nafisaanzum](https://www.linkedin.com/in/nafisaanzum)
