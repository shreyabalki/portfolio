# Shreya Chagandi Balakrishnan — Portfolio

Personal portfolio website for **Shreya Chagandi Balakrishnan**, Machine Learning Engineer.
Built with React. Deployed on Netlify.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 16 (Create React App) |
| Styling | SCSS + CSS Custom Properties |
| Animations | react-reveal, Lottie |
| Contact form | Formspree |
| Deployment | Netlify |
| Icons | react-icons |

---

## Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000).

---

## How to Update Content

All content lives in **one file**: `src/portfolio.js`

### Experience

Find `workExperiences`:

```js
{
  role: "Role Title",
  company: "Company",
  location: "City, Country",
  date: "Month Year – Month Year",
  descBullets: [
    "Built: what you built.",
    "Impact: measurable outcome.",
    "Stack: technologies used."
  ]
}
```

Each role must have exactly **3 bullets** — Built / Impact / Stack.

### Skills

Find `skillsSection.skills` — each entry is `{ category, items[] }`. Add or remove freely.

### GitHub Section

Find `githubSection`:

```js
{
  githubProfile: "https://github.com/your-username",
  projects: [
    {
      name: "Project Name",
      url: "https://github.com/your-username/repo",
      built: "What you built.",
      impact: "Impact / outcome.",
      stack: "Technologies."
    }
  ]
}
```

Add new projects by appending to the `projects` array.

### Profile Image

Replace `src/assets/images/shreya.jpg`, or update the import in `src/containers/greeting/Greeting.js`.

### Education

Find `educationInfo.schools` — each entry needs `schoolName`, `logo`, `subHeader`, `duration`, `location`.
Place logo files in `src/assets/images/`.

---

## Section Order

Controlled in `src/containers/Main.js`:

1. Hero
2. About
3. Skills
4. Experience
5. GitHub & Selected Work
6. Education
7. Contact
8. Footer

---

## Folder Structure

```
src/
├── assets/images/           # Profile photo, logos
├── assets/lottie/           # Splash animation
├── components/
│   ├── experienceCard/      # Role/company/bullet card
│   ├── footer/
│   ├── header/              # Pill navbar
│   └── ToggleSwitch/        # Theme toggle
├── containers/
│   ├── about/
│   ├── contact/             # Formspree form
│   ├── education/
│   ├── github/              # GitHub showcase
│   ├── greeting/            # Hero
│   ├── skills/
│   ├── workExperience/
│   └── Main.js              # Section order
├── App.scss                 # Design tokens (colours, spacing, type)
├── index.css                # Font + base reset
└── portfolio.js             # ← Edit this for all content
```

---

## Deployment (Netlify)

- **Build command:** `npm run build`
- **Publish directory:** `build`
- **Node version:** 16+

`package.json` must have `"homepage": "/"` for correct asset paths.

Netlify sets `CI=true` (warnings = errors). Keep code warning-free before pushing.

---

## Theme

Dark/light toggle in the navbar. Saved to `localStorage`.
Tokens defined in `src/App.scss` under `body.theme-light` / `body.theme-dark`.
