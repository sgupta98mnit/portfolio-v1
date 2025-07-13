import { FaGithub, FaLinkedin, FaEnvelope, FaNode, FaAmazon, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaPython, FaJava, FaGoogle } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Sumit Gupta",
  title: "Full Stack Developer",
  email: "sgupta98mnit@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumit-gupta-2a6406160/",
  github: "https://github.com/sgupta98mnit",
  resumeLink: "/sumit_resume.pdf", // Make sure your resume is in public/
  bio: "Full Stack Developer passionate about building scalable, user-focused applications that make an impact. I bring ideas to life with clean, reliable code, from intuitive frontends to robust cloud-based backends. I thrive in collaborative environments, love tackling complex challenges, and am always driven to learn and innovate.",
  shortBio: "I build things for the web." // For Hero section
};

export const education = [
  {
    institution: "University at Buffalo, State University of New York",
    degree: "Master of Science in Computer Science",
    duration: "Aug 2024 – Dec 2025",
    score: "GPA: 3.7/4.0",
  },
  {
    institution: "Malaviya National Institute of Technology, Jaipur",
    degree: "Bachelor of Technology in Electronics and Communication Engineering",
    duration: "Aug 2017 – May 2021",
    score: "GPA: 7.8/10",
  },
];

export const projects = [
  {
    title: "Radiant Clothing",
    tech: ["React.js", "Redux", "GraphQL", "Firebase", "Stripe API"],
    description: "Full-stack e-commerce app with secure authentication and payments. Used React + GraphQL for frontend, Firebase for backend, and Stripe for checkout.",
    date: "2023",
    githubLink: "", // Add your GitHub repo if available
    liveLink: "", // Add live demo link if hosted
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />
  },
  {
    title: "Real-time Chat App",
    tech: ["Node.js", "Express.js", "Socket.io", "Mustache.js"],
    description: "Real-time messaging app with geolocation sharing and room support. Backend built with Node, Express, and Socket.io, deployed on Heroku.",
    date: "2022",
    githubLink: "", // Add your GitHub repo if available
    liveLink: "", // Add live demo link if hosted
    category: "Backend",
    icon: <FaNode size={24} className="text-accent-1" />
  },
  {
    title: "Task Manager API",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "SendGrid"],
    description: "REST API for task management with JWT-based auth and email notifications. Built with Node, Express, MongoDB, and deployed on Heroku.",
    date: "2022",
    githubLink: "", // Add your GitHub repo if available
    liveLink: "", // Add live demo link if hosted
    category: "Backend",
    icon: <FaDatabase size={24} className="text-accent-1" />
  },
  {
    title: "Shopify App Scraper",
    tech: ["Python", "BeautifulSoup", "Pandas"],
    description: "Scraped and analyzed Shopify App Store data. Implemented pagination, throttling, and CSV export for structured analysis.",
    date: "2021",
    githubLink: "", // Add your GitHub repo if available
    liveLink: null,
    category: "Data",
    icon: <FaPython size={24} className="text-accent-1" />
  },
  {
    title: "JavaFX Media Player",
    tech: ["Java", "JavaFX"],
    description: "Cross-platform media player with playlist and drag-drop support. Applied MVC pattern and performance optimizations.",
    date: "2020",
    githubLink: "", // Add your GitHub repo if available
    liveLink: null,
    category: "Desktop",
    icon: <FaJava size={24} className="text-accent-1" />
  },
  {
    title: "Monster Rolodex",
    tech: ["React.js", "API Integration", "CSS3"],
    description: "React-based searchable UI using external API. Focused on responsive design and React Hooks.",
    date: "2021",
    githubLink: "", // Add your GitHub repo if available
    liveLink: "", // Add live demo link if hosted
    category: "Frontend",
    icon: <FaReact size={24} className="text-accent-1" />
  }
];


export const skills = {
  languages: [
    { name: "Python", icon: <SiPython /> },
    { name: "Java", icon: <FaJava /> },
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, 
    { name: "Spring", icon: <FaJava /> }, 
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, 
    { name: "Google Cloud Platform", icon: <FaGoogle /> }, 
    { name: "AWS", icon: <FaAmazon /> }, // Or a more specific icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Full Stack Development",
    "API Development",
    "Database Management",
    "CI/CD & DevOps Practices",
    "Cloud-Based Microservices Architecture",
    "Team Leadership",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Senior Software Engineer",
    organization: "miniOrange",
    duration: "July 2021 – July 2024",
    points: [
      "Led a cross-functional team of 12 software engineers using Agile methodologies to develop and maintain over 10 cloud-based Shopify applications.",
      "Contributed to full-stack development, conducted code reviews, and resolved critical production bugs.",
      "Implemented and integrated Identity and Access Management (IAM) protocols including SAML, OAuth 2.0, and JWT for secure authentication and authorization.",
      "Diagnosed and resolved production issues like database connection timeouts, Memcache crashes, thread concurrency problems, and memory leaks during GraphQL client integration.",
      "Independently developed, tested, and deployed 'Inventory Sync' and 'Salesforce Sync' applications on the Shopify App Store using Spring Boot.",
      "Optimized CI/CD pipelines by profiling codebases and automating Docker-based deployments in an AWS load-balanced architecture.",
      "Improved system scalability and deployment efficiency by 40%.",
      "Worked with technologies such as Java, Spring Boot, Redis Cache, GraphQL, Shopify Liquid, PHP, AWS, Docker, Kubernetes, and followed Agile/Scrum practices."
    ],
  },
  {
    role: "Software Development Intern",
    organization: "ServiceNow",
    duration: "July 2020 – Nov 2020",
    points: [
      "Integrated machine learning solutions into the ServiceNow platform to enhance Universal Request functionality using Java and JavaScript APIs.",
      "Developed and customized dynamic user interfaces for the ServiceNow mobile app using HTML5, CSS3, and ServiceNow’s UI frameworks.",
      "Implemented automated testing suites using Selenium and JUnit to validate ML features and mobile app enhancements.",
      "Increased test coverage and ensured reliable workflows through robust testing strategies.",
      "Collaborated with cross-functional teams and followed Agile/Scrum methodologies for timely and high-quality software delivery.",
      "Worked with technologies such as Java, JavaScript, HTML5, CSS3, Selenium, JUnit, and ML algorithms."
    ],
  }
];


export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};