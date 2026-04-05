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
    "I build ML systems for complex real-world data. Transformers lifted Macro F1 by 32% on 32-channel EEG. A blockchain pipeline cut identity fraud by up to 40%.",
  displayGreeting: true
};

// Metrics Strip
export const metricsSection = {
  display: true,
  stats: [
    {value: "32%", label: "Macro F1 improvement on EEG classification"},
    {value: "0.468", label: "Macro F1 achieved with Transformer model"},
    {value: "22", label: "EEG sessions with leakage-free evaluation"},
    {value: "32ch", label: "EEG channels processed per sample"},
    {value: "40%", label: "Identity fraud reduction"},
    {value: "15%", label: "Manual intervention cut in automation work"}
  ]
};

// About
export const aboutSection = {
  title: "About",
  summary:
    "I specialize in ML systems where evaluation correctness matters as much as model accuracy. My work spans EEG signal processing, deep learning for time-series, and end-to-end pipeline engineering built to generalize under real-world conditions.",
  focusCards: [
    {
      title: "EEG Pipelines",
      description:
        "Designed and shipped a classification pipeline for 32-channel EEG across 22 sessions. Handled preprocessing, segmentation, and feature extraction for non-stationary biomedical signals."
    },
    {
      title: "Deep Learning",
      description:
        "Ran a rigorous CNN vs Transformer benchmark on EEG time-series. Transformer architecture won with a 32% Macro F1 gain. Every architectural decision was driven by data."
    },
    {
      title: "Evaluation",
      description:
        "Applied event-wise and session-wise splits to prevent data leakage. Used Macro F1 and Balanced Accuracy to handle severe class imbalance in real-world datasets."
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
      category: "Languages",
      items: ["Python", "SQL"]
    },
    {
      category: "ML and Deep Learning",
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
          text: "End-to-end EEG classification pipeline across 32 channels, 22 sessions, and thousands of labeled samples. Covered preprocessing, segmentation, model training, and evaluation."
        },
        {
          label: "Impact",
          text: "Raised Macro F1 from 0.354 to 0.468, a 32% gain, by replacing CNNs with Transformers. Session-wise splits eliminated data leakage and validated generalization to unseen participants."
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
          text: "Hardware-software automation workflows for industrial process control with structured sensor validation logic."
        },
        {
          label: "Impact",
          text: "Reduced manual intervention by 15% through systematic control logic and hardware-software interface debugging."
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
  subtitle:
    "Real systems built around ML, signal processing, and measurable outcomes. Full history on GitHub.",
  githubProfile: "https://github.com/shreyabalki",
  githubUsername: "shreyabalki",
  projects: [
    {
      name: "EEG Time-Series Classifier",
      url: "https://github.com/shreyabalki/EEG-Card-game",
      description:
        "32-channel EEG classification across 22 sessions. CNN vs Transformer benchmark with strict leakage-free evaluation and class imbalance handling.",
      bullets: [
        {
          label: "Problem",
          text: "Classifying brain states from multi-session EEG where naive data splits cause severe leakage and inflated accuracy."
        },
        {
          label: "Solution",
          text: "Built a full pipeline with event-wise and session-wise splits, weighted cross-entropy for class imbalance, and a CNN vs Transformer comparison on raw time-series."
        },
        {
          label: "Impact",
          text: "Transformers outperformed CNNs with a 32% Macro F1 gain, from 0.354 to 0.468. Results held across unseen sessions."
        }
      ]
    },
    {
      name: "Blockchain Document Verification",
      url: "https://github.com/shreyabalki",
      description:
        "Tamper-proof identity verification combining blockchain document integrity with face recognition authentication.",
      bullets: [
        {
          label: "Problem",
          text: "Document fraud in identity workflows where tampering goes undetected and manual review does not scale."
        },
        {
          label: "Solution",
          text: "Built a blockchain-backed document registry with an integrated face recognition layer. Containerized the full ML pipeline with Docker for reproducible deployments."
        },
        {
          label: "Impact",
          text: "Reduced identity fraud by 30 to 40%. Docker eliminated environment inconsistencies across development and production."
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
