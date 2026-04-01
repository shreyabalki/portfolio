/* Change this file to get your personal Portfolio */

import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1600
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Shreya Chagandi Balakrishnan",
  title: "Shreya Chagandi Balakrishnan",
  role: "UI/UX Designer + AI Engineer",
  subTitle:
    "I design intuitive product experiences and engineer AI workflows that deliver measurable outcomes across real-world systems.",
  displayGreeting: true
};

const aboutSection = {
  title: "About",
  summary:
    "I work at the intersection of product design and machine intelligence, translating ambiguous problems into clear user journeys and production-ready systems.",
  focusPoints: [
    "Designing clear, research-informed user journeys and high-fidelity interfaces.",
    "Building AI features with practical deployment in mind, not just prototypes.",
    "Focused on creating real-world impact through automation, accessibility, and performance."
  ],
  display: true
};

const socialMediaLinks = {
  github: "https://github.com/shreyabalki",
  linkedin: "https://www.linkedin.com/in/shreya-bala/",
  gmail: "shreyacb.eu@gmail.com",
  display: true
};

const skillsSection = {
  title: "Skills",
  subTitle: "Design · Development · AI/ML",
  skills: [
    "Design: Figma, UX research, wireframing, interaction design, design systems",
    "Development: React.js, JavaScript, FastAPI, Python, SQL",
    "AI/ML: PyTorch, Transformers, LangChain, LangGraph, NLP workflows"
  ],
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

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Embedded Systems Intern – Automation Prototyping",
      company: "Big Bang Boom Solutions",
      companylogo: require("./assets/images/bbbslogo.png"),
      date: "April 2024 – June 2024",
      desc: "Built automation-ready embedded prototypes for drone applications, reducing manual testing effort.",
      descBullets: [
        "Developed sensor-integrated microcontroller boards for field validation",
        "Improved reliability through test-driven hardware and firmware iterations",
        "Delivered production-aligned proof-of-concepts under tight timelines"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: false,
  display: false
};

const bigProjects = {
  title: "Selected Work",
  subtitle: "Selected AI, UX, and product engineering work",
  projects: [
    {
      image: require("./assets/images/blockchain.png"),
      projectName: "Secure Document Verification",
      projectDesc:
        "Designed and built a blockchain-backed verification flow with SVM-based face matching for identity confidence.",
      tags: ["AI", "Security", "Web"]
    },
    {
      image: require("./assets/images/ott.png"),
      projectName: "AI-Powered OTT UX Prototype",
      projectDesc:
        "Created a high-fidelity streaming experience focused on content discovery, watch continuity, and intuitive navigation.",
      tags: ["UX", "Product", "Design"]
    },
    {
      image: require("./assets/images/steganography.png"),
      projectName: "Image Steganography Tool",
      projectDesc:
        "Built a secure message embedding tool for images with reliable encoding/decoding and a simple user interface.",
      tags: ["AI", "Tooling", "Security"]
    }
  ],
  display: true
};

const achievementSection = {
  title: "",
  subtitle: "",
  achievementsCards: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: "Let’s work together",
  subtitle:
    "I’m open to UI/UX and AI engineering roles where design clarity and technical depth both matter.",
  number: "(+49)176 22913521",
  email_address: "shreyacb.eu@gmail.com"
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
