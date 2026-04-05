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
    "I build ML systems that hold up under real-world data — EEG pipelines, time-series classifiers, and rigorous evaluation that doesn't leak. Lifted Macro F1 by 32% on 22-session EEG data using Transformers.",
  displayGreeting: true
};

// ─── About ────────────────────────────────────────────────────
export const aboutSection = {
  title: "About",
  summary:
    "I specialize in building ML pipelines for complex, high-dimensional data — particularly biomedical time-series and signal processing at scale. I'm driven by evaluation rigor: eliminating data leakage, choosing the right metrics for imbalanced datasets, and shipping systems that generalize beyond the training distribution.",
  focusCards: [
    {
      title: "EEG & Signal Processing",
      description:
        "32-channel multi-session EEG pipelines across thousands of samples. Preprocessing, segmentation, and feature extraction for non-stationary biomedical signals."
    },
    {
      title: "Deep Learning",
      description:
        "Transformer and CNN architectures for time-series classification. Architecture selection grounded in empirical comparison, not defaults."
    },
    {
      title: "Rigorous Evaluation",
      description:
        "Event-wise and session-wise data splitting to eliminate leakage. Macro F1 and Balanced Accuracy as primary metrics for class-imbalanced real-world data."
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
      category: "Languages",
      items: ["Python", "SQL"]
    },
    {
      category: "ML & Deep Learning",
      items: ["PyTorch", "Transformers", "CNNs", "Scikit-learn", "TensorFlow"]
    },
    {
      category: "Data & Signal Processing",
      items: [
        "EEG Processing",
        "Time-Series Analysis",
        "Feature Engineering",
        "Class Imbalance Handling",
        "Pandas",
        "NumPy"
      ]
    },
    {
      category: "Infrastructure",
      items: ["Docker", "Git", "Linux", "Azure"]
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
      department: "Machine Learning · Biomedical Data",
      company: "University of Vienna",
      location: "Vienna, Austria",
      date: "Dec 2025 to Present",
      bullets: [
        {
          label: "Built",
          text: "End-to-end classification pipeline for 32-channel EEG data across 22 sessions and thousands of labeled samples — covering preprocessing, segmentation, feature extraction, and model training."
        },
        {
          label: "Impact",
          text: "Raised Macro F1 from 0.354 to 0.468 (32% improvement) by switching from CNN to Transformer-based architecture. Eliminated data leakage using event-wise and session-wise train/test splitting, making results trustworthy across unseen sessions."
        },
        {
          label: "Stack",
          text: "Python, PyTorch, Transformers, CNNs, Weighted Loss, Pandas, NumPy"
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
          text: "Hardware-software automation workflows for industrial process control, integrating sensor inputs with structured validation logic."
        },
        {
          label: "Impact",
          text: "Reduced manual intervention by 15% through systematic debugging and structured control logic across hardware-software interfaces."
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
export const githubSection = {
  title: "Selected Projects",
  subtitle:
    "A selection of projects built around ML systems, signal processing, and real-world data. Full history on GitHub.",
  githubProfile: "https://github.com/shreyabalki",
  githubUsername: "shreyabalki",
  projects: [
    {
      name: "EEG Motor Imagery Classifier",
      url: "https://github.com/shreyabalki/EEG-Card-game",
      description:
        "Transformer vs CNN benchmark for 32-channel EEG time-series classification. Leakage-free evaluation across 22 sessions with class imbalance handling.",
      bullets: [
        {
          label: "Built",
          text: "Full pipeline: EEG preprocessing, event-wise and session-wise splitting, CNN and Transformer training, weighted cross-entropy for imbalanced classes."
        },
        {
          label: "Impact",
          text: "Achieved 32% Macro F1 gain (0.354 to 0.468) with Transformers. Session-wise splits confirmed generalization to unseen participants."
        },
        {
          label: "Stack",
          text: "Python, PyTorch, Transformers, CNNs, NumPy, Pandas"
        }
      ]
    },
    {
      name: "Blockchain Document Validation with Face Recognition",
      url: "https://github.com/shreyabalki",
      description:
        "Tamper-proof document verification system combining blockchain immutability with face recognition for identity authentication.",
      bullets: [
        {
          label: "Built",
          text: "Blockchain-backed document registry with integrated face recognition layer. Dockerized ML pipeline for fully reproducible experiments and deployments."
        },
        {
          label: "Impact",
          text: "Reduced identity fraud by 30 to 40% in validation workflows. Docker containerization eliminated environment drift across development and production."
        },
        {
          label: "Stack",
          text: "Python, Face Recognition, Blockchain, Docker"
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
