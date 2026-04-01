/* ─────────────────────────────────────────────────────────────
   portfolio.js — Single source of truth for all content.
   Edit this file to update any section without touching components.
   ───────────────────────────────────────────────────────────── */

import splashAnimation from "./assets/lottie/splashAnimation";

// ─── Splash Screen ────────────────────────────────────────────
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

const illustration = {
  animated: false
};

// ─── Hero / Greeting ──────────────────────────────────────────
const greeting = {
  username: "Shreya Chagandi Balakrishnan",
  title: "Shreya Chagandi Balakrishnan",
  role: "Machine Learning Engineer",
  subTitle:
    "Building robust data systems and ML pipelines for real-world signals",
  resumeLink: "",
  displayGreeting: true
};

// ─── About ────────────────────────────────────────────────────
const aboutSection = {
  title: "About",
  summary:
    "Machine Learning engineer specialising in signal processing and data-driven systems — from EEG time-series modelling to production-ready ML pipelines that handle noisy real-world data.",
  focusPoints: [
    "EEG data processing and multi-channel time-series modelling.",
    "End-to-end ML pipelines with robust evaluation — Balanced Accuracy, Macro-F1.",
    "Handling noisy real-world signals through structured preprocessing and feature engineering."
  ],
  display: true
};

// ─── Social Links ─────────────────────────────────────────────
const socialMediaLinks = {
  github: "https://github.com/shreyabalki",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  gmail: "shreyacb.eu@gmail.com",
  display: true
};

// ─── Skills ───────────────────────────────────────────────────
// Each entry is { category, items[] } — rendered as tag rows in Skills.js
const skillsSection = {
  title: "Skills",
  subTitle: "Technical stack",
  skills: [
    {
      category: "Programming",
      items: ["Python", "SQL"]
    },
    {
      category: "Machine Learning",
      items: ["PyTorch", "TensorFlow", "Scikit-learn", "CNNs", "Transformers"]
    },
    {
      category: "Data & Signal Processing",
      items: ["Time-Series Analysis", "EEG Processing", "Feature Engineering"]
    },
    {
      category: "Systems & Tools",
      items: ["Git", "Docker", "Linux", "Azure"]
    }
  ],
  display: true
};

// ─── Education ────────────────────────────────────────────────
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BTU Cottbus-Senftenberg",
      logo: require("./assets/images/BTU.png"),
      subHeader: "M.Sc. Artificial Intelligence",
      duration: "2025 – Present",
      location: "Germany"
    },
    {
      schoolName: "Sathyabama Institute of Science and Technology",
      logo: require("./assets/images/SIST.png"),
      subHeader: "B.E. Computer Engineering",
      duration: "2020 – 2024",
      location: "India"
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// ─── Work Experience ──────────────────────────────────────────
// Each bullet must follow: "Label: detail." format (Built / Impact / Stack)
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Assistant — Machine Learning & Biomedical Data",
      company: "University of Vienna",
      location: "Austria",
      date: "Dec 2025 – Present",
      descBullets: [
        "Built: End-to-end ML pipelines for multi-session EEG time-series data (32-channel signals), including preprocessing and validation.",
        "Impact: Improved model generalisation and reliability by preventing data leakage using robust evaluation — Balanced Accuracy, Macro-F1.",
        "Stack: Python, PyTorch, Transformers, Pandas, NumPy."
      ]
    },
    {
      role: "Embedded Systems Intern",
      company: "Big Bang Boom Solutions Pvt Ltd",
      location: "Chennai, India",
      date: "Apr 2024 – Jun 2024",
      descBullets: [
        "Built: Automation systems integrating hardware and software workflows.",
        "Impact: Reduced manual effort by 15% and improved system reliability through structured validation and debugging.",
        "Stack: Embedded systems, Python, hardware-software integration."
      ]
    }
  ]
};

// ─── GitHub Showcase ──────────────────────────────────────────
// Primary work showcase — replace projects with GitHub links
const githubSection = {
  title: "GitHub & Selected Work",
  subtitle: "Primary work showcase",
  githubProfile: "https://github.com/shreyabalki",
  projects: [
    {
      name: "EEG Card Game",
      url: "https://github.com/shreyabalki/EEG-Card-game",
      built:
        "EEG-based interaction system using signal processing and ML concepts.",
      impact:
        "Demonstrates application of time-series analysis and real-time signal interpretation.",
      stack: "Python, signal processing, ML concepts."
    }
  ],
  display: true
};

// ─── Projects — DISABLED ──────────────────────────────────────
// Work is showcased via GitHub section above.
const bigProjects = {
  title: "",
  subtitle: "",
  projects: [],
  display: false
};

// ─── Achievements ─────────────────────────────────────────────
const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false
};

// ─── Resume Section ───────────────────────────────────────────
const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false
};

// ─── Contact ──────────────────────────────────────────────────
const contactInfo = {
  title: "Get in touch",
  subtitle:
    "Open to ML engineering and data systems roles. Happy to discuss research, collaboration, or opportunities.",
  number: "(+49) 176 22913521",
  email_address: "shreyacb.eu@gmail.com"
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  aboutSection,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  githubSection,
  achievementSection,
  contactInfo,
  isHireable,
  openSource,
  resumeSection
};
