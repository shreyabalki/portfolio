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
  username: "Shreya Chagandi Balakrishnan",
  title: "Hi all, I'm Shreya ",
  subTitle: emoji(
  "Computer Science graduate with hands-on experience in UI/UX design, backend systems, and embedded tech. Skilled in Power Platform, KNIME, SQL, and DevOps, I craft intuitive digital solutions by blending creativity with technical precision. Always learning, always building for the future."
),
 resumeLink: "/SHREYA CHAGANDI BALAKRISHNAN Resume_.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "linkedin.com/in/shreya-bala",
  gmail: "shreyabala0308@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "UI/UX DESIGNER | AUTOMATION ENGINEER | LOW-CODE DEVELOPER | AI ENTHUSIAST",
  skills: [
    emoji("⚡ Design intuitive UI/UX prototypes and wireframes using Figma with a focus on usability"),
    emoji("⚡ Automate business processes using Power Apps, Power Automate, and KNIME ETL pipelines"),
    emoji("⚡ Develop backend APIs and automation logic with Python, Java, and FastAPI"),
    emoji("⚡ Build responsive front-end interfaces using React.js, Tailwind CSS, and Redux"),
    emoji("⚡ Apply AI/ML tools like PyTorch, Hugging Face Transformers, and spaCy for intelligent features"),
    emoji("⚡ Deploy and manage solutions using Docker, Azure, Databricks, and DevOps practices")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Figma", fontAwesomeClassname: "fas fa-pencil-ruler" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Power Platform", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "KNIME", fontAwesomeClassname: "fas fa-project-diagram" },
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
      duration: "April 2025 - Ongoing",
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
      desc: "Completed coursework and practical projects across embedded systems, automation, and computer engineering domains. Applied AI and blockchain in key projects blending theoretical learning with real-world solutions.",
      descBullets: [
        "Developed a blockchain-based document verification system with face recognition using SVM",
        "Built an image steganography tool enabling encrypted message embedding and retrieval",
        "Designed a UI/UX OTT platform prototype in Figma with an intuitive, user-focused interface"
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
      Stack: "UI/UX Design & Frontend Development",
      progressPercentage: "90%"
    },
    {
     Stack: "Backend Architecture & APIs",
      progressPercentage: "80%"
    },
    {
       Stack: "AI/ML & Data Workflows",
      progressPercentage: "75%"
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
      role: "Embedded Systems Intern – Automation Prototyping",
      company: "Big Bang Boom Solutions",
      companylogo: require("./assets/images/bbbslogo.png"),
      date: "April 2024 – June 2024",
      desc:
        "Engineered microcontroller-based automation circuits for drone POC validation, minimizing manual intervention in embedded prototypes.",
      descBullets: [
        "Prototyped embedded control boards with integrated sensors",
        "Streamlined logic using microprocessor-based automation",
        "Achieved 100% test compliance through rigorous validation cycles"
      ]
    },
  ]

};

const openSource = {
  showGithubProfile: false,
  display: false
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:  "KEY ACADEMIC & TECHNICAL PROJECTS",
  projects: [
    {
     image: require("./assets/images/blockchain.png"),
      projectName: "Document Validation & Face Recognition Using Blockchain",
      projectDesc: "Built a blockchain-based document authentication system integrated with SVM-driven facial recognition to ensure integrity and prevent unauthorized access.",
      footerLink: [] 
    },

    {
      image: require("./assets/images/steganography.png"),
      projectName: "Image Steganography",
      projectDesc: "Developed a tool to securely embed and retrieve encrypted messages within image files using custom encoding/decoding techniques.",
      footerLink: []
    },
    {
      image: require("./assets/images/ott.png"),
      projectName: "OTT Platform Prototype – UI/UX Design",
      projectDesc: "Designed a high-fidelity streaming application prototype in Figma, emphasizing user engagement, multimedia flow, and navigation structure.",
      footerLink: []
    },

  ],
  display: true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle:
    "Recognized for academic excellence, technical innovation, and continuous upskilling through hands-on training and certifications.",


  achievementsCards: [

    {
       title: "Advanced UI/UX Design & Development – FITA Academy",
      subtitle:
        "Completed hands-on training in professional UI/UX principles, wireframing, user flow design, and responsive web interfaces.",
      image: require("./assets/images/fita-uiux.png"),
      imageAlt: "FITA UI/UX Certificate",
      footerLink:
       []
    },
    {
  title: "Website UI/UX Designing using ChatGPT",
      subtitle:
        "Built intelligent UI mockups and prototypes by integrating ChatGPT-assisted design workflows.",
      image: require("./assets/images/chatgpt-uiux.png"),
      imageAlt: "ChatGPT UI/UX Certificate",
      footerLink: []
},

    {
      title: "Microsoft Power BI – Data Analysis and Report Design",
      subtitle:
        "Developed interactive reports and dashboards using Microsoft Power BI with DAX, data modeling, and visual storytelling.",
      image: require("./assets/images/powerbi.png"),
      imageAlt: "Power BI Certification",
      footerLink: []
    },
    {
      title: "UI/UX Design – Macincode",
      subtitle:
        "Explored advanced UX principles including accessibility, user testing, and product usability through guided training sessions.",
      image: require("./assets/images/macincode-uiux.png"),
      imageAlt: "Macincode Certificate",
      footerLink: []
    },
    {
      title: "Front-End Web Development",
      subtitle:
        "Built a foundation in responsive design and component-based development using HTML, CSS, and JavaScript.",
      image: require("./assets/images/frontend.png"),
      imageAlt: "Front-End Development Certificate",
      footerLink: []
    },
  {
 title: "Cyber Security – TG Cyberlabs",
      subtitle:
        "Completed a practical cybersecurity training program covering threat detection, basic network security, and safe software practices.",
      image: require("./assets/images/tg-cyberlabs.png"),
      imageAlt: "Cyber Security Certificate",
      footerLink: []
},

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
  number: "(+49)176 22913521",
  email_address: "shreyabala0308@gmail.com"
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
