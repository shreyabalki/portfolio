/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Srimonchaari Padmanabhan Babu",
  title: "Hi all, I'm Srimonchaari ",
  subTitle: emoji(
  "AI Engineer, Full Stack Developer & Drone Systems Innovator  | Specializing in scalable backend architectures, low-code automation, and agentic AI frameworks using Go, FastAPI, Langchain, and React."
),
 resumeLink: "/Srimonchaari_Padmanabhan_Babu_Resume.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://linkedin.com/in/Srimon",
  gmail: "srimonchaari@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK DEVELOPER | GO PROGRAMMER | DRONE & EMBEDDED AI ENGINEER",
  skills: [
    emoji("⚡ Design and develop scalable full-stack applications using React, Node.js, and FastAPI"),
    emoji("⚡ Engineer robust backend services in Go for performance-critical systems"),
    emoji("⚡ Build and deploy embedded drone solutions with AI, RF, and infrared integrations"),
    emoji("⚡ Automate enterprise workflows using Power Platform and KNIME ETL pipelines"),
    emoji("⚡ Architect agentic AI systems using Langchain, LangGraph, and secure cloud infrastructure")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Go", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Rust", fontAwesomeClassname: "fas fa-microchip" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brandenburgische Technische Universität",
      logo: require("./assets/images/BTU.png"),
      subHeader: "MSc in Artificial Intelligence",
      duration: "Oct 2024 - Ongoing",
      desc: "Conducted applied research on agentic AI systems and autonomous backend frameworks using Langchain and LangGraph. Academic work focused on bridging generative models with real-time operational systems for MEMS development.",
   descBullets: [
        "Pursuing advanced coursework in agentic AI systems, generative architectures, and autonomous decision-making frameworks",
        "Engaged in research focused on real-time AI deployment in MEMS development, leveraging Langchain and LangGraph in secure backend environments",
        "Hands-on experience with cloud-integrated AI platforms, NLP pipelines, and scalable backend systems aligned with industry use cases"
      ]
    },
    {
      schoolName: "Sathyabama Institute of Science and Technology",
      logo: require("./assets/images/SIST.png"),
      subHeader: "BE in Computer Engineering",
      duration: "Jun 2020 – May 2024",
      desc: "Graduated with distinction and completed multiple AI-embedded system projects, including autonomous drones and full-stack automation platforms. Developed end-to-end systems blending image processing, cloud ETL, and embedded control logic.",
     descBullets: [
        "Designed a full-stack OCR-based mark sheet extraction tool that processes scanned academic documents, extracts structured data, and securely stores it using ETL pipelines and custom APIs",
        "Engineered an autonomous window-cleaning drone featuring path-mapped navigation, high-pressure water jets, wipers, and 5kg water payload — capable of 15-minute continuous flight",
        "Specialized in embedded systems, drone control logic, AI-powered automation, and scalable frontend/backend development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, // Show proficiency section
  experience: [
    {
      Stack: "AI & Intelligent Automation",
      progressPercentage: "90%" // Langchain, LangGraph, agentic frameworks
    },
    {
      Stack: "Full Stack Development",
      progressPercentage: "85%" // React, FastAPI, Node.js, SQL
    },
    {
      Stack: "Drone Engineering & Embedded Systems",
      progressPercentage: "85%" // Drone control, sensor integration, automation logic
    },
    {
      Stack: "Programming Languages (Go, Rust, Python)",
      progressPercentage: "80%" // Systems programming, backend, data processing
    },
    {
      Stack: "Low-Code Platforms & ETL (Power Platform, KNIME)",
      progressPercentage: "75%" // Workflow automation, data pipelines
    },
    {
      Stack: "Cloud & DevOps (Azure, Docker)",
      progressPercentage: "70%" // Deployment, scalability, container orchestration
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true,
  
  experience: [
    {
      role: "Generative AI Intern – MEMS Development",
      company: "Bosch",
      companylogo: require("./assets/images/bosch.png"),
      date: "Apr 2025 – Oct 2025",
      desc:
        "Engineered a full-stack AI pipeline using LangGraph and FastAPI to accelerate MEMS development through agentic architectures and modular UI systems.",
      descBullets: [
        "Developed backend workflows with Langchain and React to streamline MEMS automation",
        "Created arc42-compliant architectural documentation for secure, scalable systems",
        "Designed an interactive web UI to enable real-time AI agent execution"
      ]
    },
    {
      role: "System Engineer – AI-Powered Drones & RF Systems",
      company: "Big Bang Boom Solutions",
      companylogo: require("./assets/images/bbbslogo.png"),
      date: "Nov 2023 – Sep 2024",
      desc:
        "Led integration of dual-mode autonomous drones and AI-enabled signal jamming systems for defense-grade surveillance, aligned with MIL-STD-801G.",
      descBullets: [
        "Integrated RF sensors with onboard AI to reduce false positives by 20%",
        "Built IR-powered drones for fire response with 30% faster reaction time",
        "Contributed to Kamikaze Drone field testing, recognized by Indian Defense"
      ]
    },
    {
      role: "Embedded Systems Intern – Automation Prototyping",
      company: "Big Bang Boom Solutions",
      companylogo: require("./assets/images/bbbslogo.png"),
      date: "Jun 2023 – Oct 2023",
      desc:
        "Engineered microcontroller-based automation circuits for drone POC validation, minimizing manual intervention in embedded prototypes.",
      descBullets: [
        "Prototyped embedded control boards with integrated sensors",
        "Streamlined logic using microprocessor-based automation",
        "Achieved 100% test compliance through rigorous validation cycles"
      ]
    },
    {
      role: "Application Developer Intern – Ionic & Hybrid App Development",
      company: "Paragon Dynamics Info Systems",
      companylogo: require("./assets/images/paragon.jpg"),
      date: "Aug 2022 – Sep 2022",
      desc:
        "Built enterprise-grade hybrid mobile/web applications using Ionic + Angular, focused on responsive UIs, real-time updates, and cross-platform support.",
      descBullets: [
        "Developed reusable UI components using Ionic & Angular",
        "Connected RESTful APIs for live data rendering and interaction",
        "Optimized app responsiveness across Android and iOS platforms",
        "Ensured cross-browser/device compatibility and test coverage"
      ]
    },
    {
      role: "Drone R&D Intern – UAV & IoT Systems",
      company: "Jet Aerospace – UAV Research Division",
      companylogo: require("./assets/images/drone.png"),
      date: "Dec 2022 – Jan 2023",
      desc:
        "Researched UAV design with emphasis on IoT-based telemetry and drone piloting. Participated in technical workshops for drone aeromodelling.",
      descBullets: [
        "Gained hands-on experience in flight control using embedded sensors",
        "Supported UAV automation for cleaning, inspection, and navigation"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: false,
  display: false
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "INTELLIGENT SYSTEMS, DRONES, AND AUTOMATION SOLUTIONS ENGINEERED FOR IMPACT",
  projects: [
    {
      image: require("./assets/images/memssensor.jpg"),
      projectName: "Agentic Framework for MEMS Automation",
      projectDesc:
        "Architected an AI agentic backend using Langchain + FastAPI to automate MEMS development workflows. Designed a component-based UI in React for controlling pipeline execution in real time, documented using arc42 standards.",
      footerLink: []
    },

    {
      image: require("./assets/images/firedrone.jfif"),
      projectName: "Autonomous Fire-Response Drone System",
      projectDesc:
        "Engineered an IR-enabled drone with onboard AI to autonomously detect and respond to fire outbreaks. Integrated RF modules and MIL-STD-810G compliant control systems to improve mission efficiency by 30%.",
      footerLink: []
    },
    {
      image: require("./assets/images/ocr.png"),
      projectName: "OCR-Based Marksheet ETL Pipeline",
      projectDesc:
        "Developed a pipeline where scanned academic mark sheets were parsed using Tesseract OCR and transformed via ETL processes into a structured SQL schema. Automated database ingestion with Flask API layer for scalable integration.",
      footerLink: []
    },
    {
      image: require("./assets/images/window.png"),
      projectName: "Window-Cleaning Drone with Path Mapping",
      projectDesc:
        "Created a UAV equipped with high-pressure jets, servo-driven wipers, and LIDAR-based path recognition to automate vertical surface cleaning. Achieved 15 min flight time and a 5kg payload capacity.",
      footerLink: []
    },
    {
      image: require("./assets/images/ionic-512.webp"),
      projectName: "Hybrid Mobile App using Ionic + Angular",
      projectDesc:
        "Built responsive hybrid mobile apps with real-time data sync and dynamic dashboards using Ionic and Angular. Focused on cross-platform performance, device compatibility, and smooth RESTful API integration.",
      footerLink: []
    }
  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "A blend of applied research, real-world deployments, and continuous learning through globally recognized certifications and technical contributions.",

  achievementsCards: [

    {
      title: "Microsoft Certified: Designing and Implementing an Azure AI Solution",
      subtitle:
        "Demonstrated advanced skills in designing, implementing, and monitoring AI solutions on Microsoft Azure. Covered topics like computer vision, natural language processing, and responsible AI practices across enterprise-grade architectures.",
      image: require("./assets/images/Azure-Logo.png"),
      imageAlt: "Microsoft Azure AI Certification",
      footerLink: [
        {
          name: "Certification Details",
          url: "https://learn.microsoft.com/en-us/certifications/exams/ai-102/"
        }
      ]
    },
    {
  title: "Advanced Python – FITA Academy ",
  subtitle:
    "Completed an intensive 1-month instructor-led training in Advanced Python programming, covering real-world applications such as OOP design, file handling, exception management, multithreading, and custom modules. This program served as a strong foundation for scalable backend automation and data pipeline development.",
  image: require("./assets/images/fita-python-cert.png"), // Save the uploaded cert as this
  imageAlt: "FITA Academy Python Certificate",
  footerLink: []
},

    {
      title: "Best Paper Award – ICCCAI 2024",
      subtitle:
        "Awarded Best Research Paper at the International Conference on Cognitive Computing and Artificial Intelligence (ICCCAI), in collaboration with Taylor’s University, Malaysia. Presented research on autonomous UAV systems for vertical surface cleaning.",
      image: require("./assets/images/bestpaper.png"),
      imageAlt: "ICCCAI Best Paper Award",
      footerLink: []
    },
    {
      title: "Technovation 2024 – Best Project Award",
      subtitle:
        "Recognized for developing a self-navigating drone for window cleaning in high-rise environments, blending embedded AI, LIDAR mapping, and fluid propulsion systems. Awarded Best Project at Technovation 2024.",
      image: require("./assets/images/technovation.jfif"),
      imageAlt: "Technovation Best Project",
      footerLink: []
    },
    {
      title: "Kamikaze Drone Testing Milestone – Indian Defense Recognition",
      subtitle:
        "Contributed to the successful field testing of AI-powered kamikaze drones, earning formal recognition from Indian Defense for technological innovation and deployment-readiness in strategic operations.",
      image: require("./assets/images/bbbslogo.png"),
      imageAlt: "Kamikaze Drone Testing",
      footerLink: []
    },
  {
  title: "National Workshop on UAV Design & Aeromodelling",
  subtitle:
    "Successfully completed a national-level UAV workshop hosted by Jet Aerospace & ASSC, focusing on hands-on drone fabrication, flight theory, and embedded sensor integration. Strengthened practical aeromodelling and prototyping skills.",
  image: require("./assets/images/uav-workshop.png"), // make sure you use the transparent one
  imageAlt: "National UAV Workshop",
  imageClass: "transparent-image",
  footerLink: []
},

    {
      title: "Goethe-Zertifikat A1 – German Language Certification",
      subtitle:
        "Certified by Goethe-Institut in basic proficiency of German (A1), enabling better academic collaboration and communication in German-speaking environments — a foundation for future European research endeavors.",
      image: require("./assets/images/Goethe-Institut.jpg"),
      imageAlt: "Goethe German Certificate",
      footerLink: []
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to collaborate or just say hi? I'm always open for a chat.",
  number: "+49-1739725574",
  email_address: "srimonchaari@gmail.com"
};


// Twitter Section

const twitterDetails = {
  userName: "twitter", // or your username
  display: false        // ✅ turn this off
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  achievementSection,
  twitterDetails,
  contactInfo,
  isHireable,
  openSource,
  resumeSection
};
