/* Portfolio content — single source of truth. Edit here to update any section. */

// Splash Screen
export const splashScreen = {
  enabled: true,
  duration: 2200
};

// Hero
export const greeting = {
  name: "Shreya Chagandi Balakrishnan",
  eyebrow: "Machine Learning Engineer",
  headline: "Shreya Chagandi\nBalakrishnan",
  subTitle:
    "ML systems built to generalize. 32% Macro F1 improvement on 32-channel EEG data using Transformers. Up to 40% identity fraud reduction through a blockchain verification pipeline.",
  displayGreeting: true
};

// Metrics Strip
export const metricsSection = {
  display: true,
  stats: [
    {value: "32%", label: "Macro F1 improvement"},
    {value: "0.468", label: "Final Macro F1 score"},
    {value: "22", label: "EEG sessions evaluated"},
    {value: "32ch", label: "EEG channels per sample"},
    {value: "40%", label: "Identity fraud reduced"},
    {value: "15%", label: "Manual effort reduced"}
  ]
};

// About
export const aboutSection = {
  title: "About",
  summary:
    "I build ML systems for high-dimensional biomedical data where evaluation integrity is non-negotiable. Focused on pipelines that generalize beyond the training set.",
  focusCards: [
    {
      title: "EEG Pipelines",
      description:
        "Built a full classification pipeline for 32-channel EEG across 22 sessions. Preprocessing, segmentation, and feature extraction designed for non-stationary biomedical signals."
    },
    {
      title: "Deep Learning",
      description:
        "Ran an empirical CNN vs Transformer benchmark on raw EEG time-series. Transformers delivered a 32% Macro F1 gain. Architecture choices made from data, not convention."
    },
    {
      title: "Evaluation",
      description:
        "Event-wise and session-wise splits to prevent data leakage. Macro F1 and Balanced Accuracy as primary metrics for severely imbalanced real-world classes."
    }
  ],
  display: true
};

// Social Links
export const socialMediaLinks = {
  github: "https://github.com/shreyabalki",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  email: "shreyacb.eu@gmail.com",
  display: true
};

// Skills
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
      items: ["PyTorch", "Transformers", "CNNs", "Scikit-learn", "TensorFlow"]
    },
    {
      category: "Data and Signal Processing",
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

// Work Experience
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
          text: "End-to-end classification pipeline for 32-channel EEG data across 22 sessions. Raw signal to labeled output: preprocessing, segmentation, model training, and leakage-free evaluation."
        },
        {
          label: "Impact",
          text: "Macro F1 improved from 0.354 to 0.468, a 32% gain. Transformer architecture outperformed CNNs. Session-wise evaluation confirmed the model generalizes to participants not seen during training."
        },
        {
          label: "Tech",
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
          text: "Automation system for industrial process control. Integrated sensor inputs with hardware-software validation logic to reduce reliance on manual steps."
        },
        {
          label: "Impact",
          text: "Reduced manual intervention by 15% through structured control logic and systematic debugging of hardware-software interfaces."
        },
        {
          label: "Tech",
          text: "Python, Embedded Systems, Hardware-Software Integration"
        }
      ]
    }
  ]
};

// GitHub and Projects
export const githubSection = {
  title: "Selected Projects",
  subtitle: "Real systems with measurable outcomes. Full history on GitHub.",
  githubProfile: "https://github.com/shreyabalki",
  githubUsername: "shreyabalki",
  projects: [
    {
      name: "EEG Time-Series Classifier",
      url: "https://github.com/shreyabalki/EEG-Card-game",
      description:
        "32-channel EEG classification across 22 sessions. CNN vs Transformer benchmark with leakage-free evaluation and class imbalance handling.",
      bullets: [
        {
          label: "Problem",
          text: "Multi-session EEG classification where naive splits cause data leakage and inflate accuracy on unseen participants."
        },
        {
          label: "Solution",
          text: "Session-wise and event-wise train/test splits. Weighted cross-entropy for class imbalance. Empirical CNN vs Transformer comparison on raw time-series."
        },
        {
          label: "Impact",
          text: "32% Macro F1 gain from 0.354 to 0.468 with Transformers. Results validated on sessions withheld from training."
        }
      ]
    },
    {
      name: "Blockchain Document Verification",
      url: "https://github.com/shreyabalki",
      description:
        "Identity verification combining blockchain document integrity with face recognition authentication and reproducible ML deployment.",
      bullets: [
        {
          label: "Problem",
          text: "Document fraud in identity workflows where tampering is undetectable and manual verification does not scale."
        },
        {
          label: "Solution",
          text: "Blockchain-backed document registry with integrated face recognition. Full ML pipeline containerized with Docker for consistent deployments."
        },
        {
          label: "Impact",
          text: "Identity fraud reduced by 30 to 40%. Docker eliminated environment inconsistencies between development and production."
        }
      ]
    }
  ],
  display: true
};

// Education
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

// Contact
export const contactInfo = {
  title: "Let's connect",
  subtitle:
    "Open to ML engineering roles, research collaborations, and data systems work. Reach out directly or send a message below.",
  email: "shreyacb.eu@gmail.com",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  formspreeId: "f/mldnajbd"
};
