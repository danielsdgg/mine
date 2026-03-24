import fashions from '../assets/original.jpg';
import rs from '../assets/Morgan@1.jpg';
import insurance from '../assets/nyumbaa.png';

export const data = [
  {
    id: 1,
    name: "Morgan-LMS",
    paragraph: "Developed a learning management system for Morgan Technical  Training that enhances remote learning with industry-ready skills.",
    image: rs,
    github: "https://github.com/danielsdgg/Morgantechnical.git", 
    live: "https://canvas-1-mr06.onrender.com/",
    tech: ["React", "Java (Spring Boot)", "MySQL", "Tailwind CSS", "API Integration"], 
  },
  {
    id: 2,
    name: "Insurance Website",
    paragraph: "Full-stack app for insurance quotes and policy management. Integrated Spring Boot backend for secure data handling, serving 1k+ quotes monthly with 99% uptime.",
    image: insurance,
    github: "https://github.com/danielsdgg",
    live: "https://insuranceke.netlify.app/",
    tech: ["React", "Java (Spring Boot)", "MySQL", "REST APIs"],
  },
  {
    id: 3,
    name: "Fashions Design",
    paragraph: "E-commerce site with inventory management and payment integration. Used Flask for lightweight backend, optimizing for mobile-first design and fast performance.",
    image: fashions,
    github: "https://github.com/danielsdgg",
    live: "https://herocloth.vercel.app",
    tech: ["React", "Python (Flask)", "SQLite"],
  },
  // Add more here...
];