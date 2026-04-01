/* ─────────────────────────────────────────────────────────────
   portfolio.js  –  Single source of truth for all content.
   Edit this file to update the portfolio without touching components.
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
  role: "UI/UX Designer · AI Engineer",
  subTitle:
    "I design intuitive product experiences and engineer AI workflows that deliver measurable outcomes across real-world systems.",
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1exKOMeRlv3lHM9T6qzSJysBKcjePmyki",
  displayGreeting: true
};

// ─── About ────────────────────────────────────────────────────
const aboutSection = {
  title: "About",
  summary:
    "I work at the intersection of product design and machine intelligence — translating ambiguous problems into clear user journeys and production-ready AI systems.",
  focusPoints: [
    "Designing research-informed user journeys and high-fidelity interfaces that ship.",
    "Building AI features with practical deployment in mind, not just prototypes.",
    "Creating real-world impact through automation, accessibility, and performance."
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
// Each entry is { category, items[] } — consumed by Skills.js via .map()
const skillsSection = {
  title: "Capabilities",
  subTitle: "Design · Development · AI/ML",
  skills: [
    {
      category: "Design",
      items: [
        "Figma",
        "UX Research",
        "Wireframing",
        "Interaction Design",
        "Design Systems"
      ]
    },
    {
      category: "Development",
      items: ["React.js", "JavaScript", "FastAPI", "Python", "SQL"]
    },
    {
      category: "AI / ML",
      items: [
        "PyTorch",
        "Transformers",
        "LangChain",
        "LangGraph",
        "NLP Workflows"
      ]
    }
  ],
  // Icon grid below the category blocks (optional — set display: false to hide)
  softwareSkills: [
    {skillName: "Figma", fontAwesomeClassname: "fas fa-pencil-ruler"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "FastAPI", fontAwesomeClassname: "fas fa-server"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "SQL", fontAwesomeClassname: "fas fa-database"}
  ],
  display: true
};

// ─── Education ────────────────────────────────────────────────
const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

// ─── Work Experience ──────────────────────────────────────────
// Add more objects to the experience[] array to add new roles.
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Embedded Systems Intern — Automation Prototyping",
      company: "Big Bang Boom Solutions",
      companylogo: require("./assets/images/bbbslogo.png"),
      date: "April 2024 – June 2024",
      desc: "Built automation-ready embedded prototypes for drone applications, reducing manual testing effort.",
      descBullets: [
        "Developed sensor-integrated microcontroller boards for field validation.",
        "Improved reliability through test-driven hardware and firmware iterations.",
        "Delivered production-aligned proof-of-concepts under tight timelines."
      ]
    }
  ]
};

// ─── Projects ─────────────────────────────────────────────────
// Each project can have optional `github` and `demo` URLs.
// Remove or leave blank to hide those CTAs.
const bigProjects = {
  title: "Selected Work",
  subtitle: "AI, UX, and product engineering projects",
  projects: [
    {
      image: require("./assets/images/blockchain.png"),
      projectName: "Secure Document Verification",
      projectDesc:
        "Designed and built a blockchain-backed verification flow with SVM-based face matching for identity confidence.",
      tags: ["AI", "Security", "Web"],
      github: "",
      demo: ""
    },
    {
      image: require("./assets/images/ott.png"),
      projectName: "AI-Powered OTT UX Prototype",
      projectDesc:
        "Created a high-fidelity streaming experience focused on content discovery, watch continuity, and intuitive navigation.",
      tags: ["UX", "Product", "Design"],
      github: "",
      demo: ""
    },
    {
      image: require("./assets/images/steganography.png"),
      projectName: "Image Steganography Tool",
      projectDesc:
        "Built a secure message-embedding tool for images with reliable encoding/decoding and a clean user interface.",
      tags: ["AI", "Tooling", "Security"],
      github: "",
      demo: ""
    }
  ],
  display: true
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
  display: true
};

// ─── Contact ──────────────────────────────────────────────────
const contactInfo = {
  title: "Let's work together",
  subtitle:
    "I'm open to UI/UX and AI engineering roles where design clarity and technical depth both matter.",
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
  achievementSection,
  contactInfo,
  isHireable,
  openSource,
  resumeSection
};
