# Shreya Chagandi Balakrishnan — Portfolio

Personal portfolio for **Shreya Chagandi Balakrishnan**, Machine Learning Engineer.  
Premium, Apple-inspired single-page site built with React, Tailwind CSS, and Framer Motion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 16 (Create React App) |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion v6 |
| Forms | Formspree |
| Fonts | Inter (Google Fonts) |
| Deployment | Netlify / GitHub Pages |

---

## Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm start

# Production build
npm run build
```

The dev server runs at `http://localhost:3000`.  
The `node fetch.js` script runs before start/build — it is safe to ignore if it fails in a local environment without the required env variables.

---

## Folder Structure

```
portfolio/
├── public/
│   ├── index.html          # HTML entry point + SEO meta tags
│   ├── favicon.svg         # Minimal SVG monogram favicon
│   ├── shreya.jpg          # Profile photograph
│   └── manifest.webmanifest
├── src/
│   ├── portfolio.js        # ALL CONTENT lives here — edit this file only
│   ├── index.css           # Tailwind directives + base styles + component classes
│   ├── App.js              # Router wrapper
│   ├── containers/
│   │   ├── Main.js         # Page orchestrator (section order)
│   │   ├── splashScreen/   # Loading animation
│   │   ├── greeting/       # Hero section
│   │   ├── about/          # About section
│   │   ├── skills/         # Skills section
│   │   ├── workExperience/ # Experience section
│   │   ├── github/         # GitHub & Selected Work section
│   │   ├── education/      # Education section
│   │   ├── contact/        # Contact section
│   │   └── topbutton/      # Scroll-to-top button
│   ├── components/
│   │   ├── header/         # Sticky header with mobile menu
│   │   └── footer/         # Footer
│   ├── hooks/
│   │   ├── useScrollReveal.js  # Scroll-triggered animation hook
│   │   └── useLocalStorage.js  # LocalStorage persistence hook
│   └── assets/
│       └── images/         # Profile photo, university logos
├── tailwind.config.js      # Design tokens (colors, shadows, fonts)
├── postcss.config.js       # PostCSS config for Tailwind
└── package.json
```

---

## How to Update Each Section

All content is managed in a single file: **`src/portfolio.js`**  
You never need to touch component files to update copy, links, or data.

### Hero Section

```js
// src/portfolio.js
export const greeting = {
  name: "Your Full Name",
  eyebrow: "Machine Learning Engineer",   // Small label above headline
  headline: "Your Name\nWith Line Break", // Use \n for line break
  subTitle: "One or two sentences...",
  displayGreeting: true
};
```

### About Section

```js
export const aboutSection = {
  summary: "Your identity paragraph...",
  focusCards: [
    {
      title: "Signal Processing",        // Card title (must match icon key)
      description: "Card body text..."
    },
    // add more cards here
  ],
  display: true
};
```

To add new focus cards with icons, also update `CARD_ICONS` in `src/containers/about/About.js`.

### Skills Section

```js
export const skillsSection = {
  title: "Skills",
  subTitle: "Technical stack",
  groups: [
    {category: "Programming", items: ["Python", "SQL"]},
    {category: "Machine Learning", items: ["PyTorch", ...]},
    // add more groups
  ],
  display: true
};
```

### Experience Section

```js
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Job Title",
      department: "Team or department (optional)",
      company: "Company Name",
      location: "City, Country",
      date: "Mon YYYY to Present",
      bullets: [
        {label: "Built", text: "What you built..."},
        {label: "Impact", text: "Measurable outcome..."},
        {label: "Stack", text: "Tech used..."}
      ]
    }
  ]
};
```

### GitHub Section

To **add a new repository**, append an object to the `projects` array:

```js
export const githubSection = {
  // ...
  projects: [
    {
      name: "Project Name",
      url: "https://github.com/shreyabalki/repo-name",
      description: "One-line summary of the project.",
      bullets: [
        {label: "Built", text: "What was built..."},
        {label: "Impact", text: "Why it matters..."},
        {label: "Stack", text: "Technologies used..."}
      ]
    }
    // Add more projects here — the grid expands automatically
  ]
};
```

The GitHub section uses a 2-column responsive grid. Adding more cards requires no layout changes.

### Education Section

```js
export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University Name",
      logo: require("./assets/images/logo.png"),
      degree: "M.Sc. Degree Name",
      duration: "YYYY to Present",
      location: "Country"
    }
  ]
};
```

### Contact Section

```js
export const contactInfo = {
  title: "Let's connect",
  subtitle: "Short intro...",
  email: "you@email.com",
  linkedin: "https://www.linkedin.com/in/your-handle/",
  formspreeId: "f/your-formspree-id"  // from formspree.io dashboard
};
```

---

## Updating the Profile Image

1. Replace `public/shreya.jpg` with your photo (keep the same filename, or update the import in `src/containers/greeting/Greeting.js`).
2. The image is imported directly: `import ShreyaImage from "../../assets/images/shreya.jpg"` — if you place it in `src/assets/images/`, update that import.
3. Recommended: square crop, minimum 600x600px.

---

## Updating the Favicon

The favicon is a minimal SVG at `public/favicon.svg`.  
Edit the `<text>` element to change the monogram letter, or replace the file entirely.

```svg
<!-- public/favicon.svg — change "S" to your initial -->
<text ... >S</text>
```

For a PNG favicon, add it to `public/` and update the `<link rel="icon">` in `public/index.html`.

---

## Adding New GitHub Repositories

1. Open `src/portfolio.js`
2. Find the `githubSection.projects` array
3. Add a new object following the schema above
4. Save — the grid expands automatically, no component changes needed

---

## Deploying

### Netlify (recommended)

1. Push the repository to GitHub
2. Connect the repo in Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy

### GitHub Pages

```bash
npm run deploy
```

This runs `gh-pages -b master -d build` as configured in `package.json`.

---

## Design Tokens

The design system is defined in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `accent` | `#4F86F7` | Accent blue (eyebrows, tags, links) |
| `accent-light` | `#EEF4FF` | Accent backgrounds |
| `surface` | `#F7F9FC` | Section backgrounds, card fills |
| `border` | `#E5E7EB` | All borders |
| `shadow-soft` | subtle | Default card shadow |
| `shadow-hover` | blue-tinted | Card hover shadow |

To change the accent color globally, update `accent.DEFAULT` in `tailwind.config.js`.

---

## Notes on Formatting and Maintenance

- Run `npm run format` before committing to apply Prettier formatting
- All animations use Framer Motion with `ease: [0.22, 1, 0.36, 1]` (premium ease-out)
- Scroll reveal is handled by the shared `useScrollReveal` hook — once visible, elements stay visible
- No dark mode — the site is intentionally light-only for a clean, Apple-like aesthetic
- The `App.scss` and individual section `.scss` files still exist on disk but are no longer imported — they can be safely deleted
- The `src/contexts/StyleContext.js` and theme toggle are no longer used
