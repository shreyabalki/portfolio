/* ─────────────────────────────────────────────────────────────
   portfolio.js — Single source of truth for all content.
   Edit this file to update any section without touching components.
   ───────────────────────────────────────────────────────────── */

// ─── Splash Screen ────────────────────────────────────────────
export const splashScreen = {
  enabled: true,
  duration: 2200
};

// ─── Hero / Greeting ──────────────────────────────────────────
export const greeting = {
  name: "Shreya Chagandi Balakrishnan",
  eyebrow: "Machine Learning Engineer",
  headline: "Shreya Chagandi\nBalakrishnan",
  subTitle:
    "I build reliable ML systems for real-world data — from EEG time-series pipelines to rigorous model evaluation that holds up in production.",
  displayGreeting: true
};

// ─── About ────────────────────────────────────────────────────
export const aboutSection = {
  title: "About",
  summary:
    "Machine Learning Engineer with a focus on building data systems that are robust by design. My work spans EEG signal processing, multi-channel time-series modeling, and end-to-end pipeline engineering for biomedical and real-world data. I care about evaluation rigor, generalization under noise, and systems that perform consistently outside the lab.",
  focusCards: [
    {
      title: "Signal Processing",
      description:
        "EEG and time-series analysis across multi-channel, multi-session data. Structured preprocessing for noisy, non-stationary signals."
    },
    {
      title: "Modeling",
      description:
        "Deep learning with PyTorch and Transformers. CNNs for sequence data. Principled architecture choices tuned for generalization."
    },
    {
      title: "Reliability",
      description:
        "Evaluation frameworks built to prevent data leakage. Balanced Accuracy and Macro-F1 as primary metrics for imbalanced real-world datasets."
    }
  ],
  display: true
};

// ─── Social Links ─────────────────────────────────────────────
export const socialMediaLinks = {
  github: "https://github.com/shreyabalki",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  email: "shreyacb.eu@gmail.com",
  display: true
};

// ─── Skills ───────────────────────────────────────────────────
export const skillsSection = {
  title: "Skills",
  subTitle: "Technical stack",
  groups: [
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
      items: [
        "Time-Series Analysis",
        "EEG Processing",
        "Feature Engineering",
        "Pandas",
        "NumPy"
      ]
    },
    {
      category: "Tools",
      items: ["Git", "Docker", "Linux", "Azure"]
    }
  ],
  display: true
};

// ─── Work Experience ──────────────────────────────────────────
export const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Assistant",
      department: "Machine Learning and Biomedical Data",
      company: "University of Vienna",
      location: "Austria",
      date: "Dec 2025 to Present",
      bullets: [
        {
          label: "Built",
          text: "End-to-end ML pipelines for multi-session EEG time-series data with 32-channel signals, covering preprocessing, feature extraction, and model training."
        },
        {
          label: "Impact",
          text: "Improved model generalization and reduced evaluation risk by enforcing strict data leakage prevention across sessions, validated with Balanced Accuracy and Macro-F1."
        },
        {
          label: "Stack",
          text: "Python, PyTorch, Transformers, Pandas, NumPy"
        }
      ]
    },
    {
      role: "Embedded Systems Intern",
      department: "",
      company: "Big Bang Boom Solutions",
      location: "Chennai, India",
      date: "Apr 2024 to Jun 2024",
      bullets: [
        {
          label: "Built",
          text: "Automation systems integrating hardware and software workflows for industrial process control."
        },
        {
          label: "Impact",
          text: "Reduced manual intervention by 15% through structured validation logic and systematic debugging of hardware-software interfaces."
        },
        {
          label: "Stack",
          text: "Python, Embedded Systems, Hardware-Software Integration"
        }
      ]
    }
  ]
};

// ─── GitHub Showcase ──────────────────────────────────────────
// Add new repositories to the `projects` array below.
export const githubSection = {
  title: "GitHub & Selected Work",
  subtitle:
    "A selection of projects reflecting my focus on ML systems and signal processing. Full history on GitHub.",
  githubProfile: "https://github.com/shreyabalki",
  githubUsername: "shreyabalki",
  projects: [
    {
      name: "EEG Card Game",
      url: "https://github.com/shreyabalki/EEG-Card-game",
      description:
        "An EEG-based interaction system applying signal processing and machine learning to real-time brain-computer interface concepts.",
      bullets: [
        {
          label: "Built",
          text: "Signal acquisition and classification pipeline integrating EEG data with game state using time-series feature extraction."
        },
        {
          label: "Impact",
          text: "Demonstrates practical application of real-time signal interpretation, bridging biomedical data and interactive systems."
        },
        {
          label: "Stack",
          text: "Python, Signal Processing, Machine Learning"
        }
      ]
    }
  ],
  display: true
};

// ─── Education ────────────────────────────────────────────────
export const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BTU Cottbus-Senftenberg",
      logo: require("./assets/images/BTU.png"),
      degree: "M.Sc. Artificial Intelligence",
      duration: "2025 to Present",
      location: "Germany"
    },
    {
      schoolName: "Sathyabama Institute of Science and Technology",
      logo: require("./assets/images/SIST.png"),
      degree: "B.E. Computer Engineering",
      duration: "2020 to 2024",
      location: "India"
    }
  ]
};

// ─── Contact ──────────────────────────────────────────────────
export const contactInfo = {
  title: "Let's connect",
  subtitle:
    "Open to ML engineering roles, research collaborations, and data systems work. Reach out directly or send a message below.",
  email: "shreyacb.eu@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  formspreeId: "f/mldnajbd"
};
