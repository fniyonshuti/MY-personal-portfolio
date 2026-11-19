import profile from "../assets/profile.jpeg";
import learning from "../assets/learning.jpg";
import careerConnect from "../assets/careerConnect.jpg";

export { profile, learning, careerConnect };

export const NAV_ITEMS = ["home", "about", "skills", "projects", "experience", "contact"];

export const projects = [
  {
    id: 1,
    title: "Learning Management System",
    description: "A full-stack LMS that streamlines online education — course creation, enrollment, and progress tracking, with JWT auth and role-based access for instructors and students.",
    technologies: ["React", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "JWT"],
    image: learning,
    github: "https://github.com/fniyonshuti/Learning-Management-System.git",
    live: "#",
  },
  {
    id: 2,
    title: "Career Connect",
    description: "A dynamic job-matching platform connecting job seekers with relevant opportunities alongside career development resources.",
    technologies: ["React", "MongoDB", "Express.js", "Node.js", "Tailwind CSS"],
    image: careerConnect,
    github: "https://github.com/fniyonshuti/fullstack-project.git",
    live: "#",
  },
];

export const coreStack = ["React", "Node.js", "Python", "JavaScript", "MongoDB", "Express.js", "Django", "FastAPI"];
export const alsoWorksWith = ["TypeScript", "REST APIs", "Git & GitHub", "HTML", "CSS", "Tailwind CSS", "Bootstrap", "PostgreSQL"];

export const values = [
  { n: "01", title: "Reliability", desc: "I build systems that behave predictably in production, not just in demos." },
  { n: "02", title: "Curiosity", desc: "New frameworks, new problems — I stay hands-on with the tools shaping the industry." },
  { n: "03", title: "Craft", desc: "Clean, readable, maintainable code is the default, not an afterthought." },
];

export const experience = [
  {
    company: "Nexventure Ltd",
    position: "Full Stack Software Developer",
    period: "Sept 2025 — Dec 2025",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Worked on various full-stack web and mobile applications, contributing to both frontend and backend development to deliver seamless, user-friendly solutions.",
      "Implemented secure authentication and authorization mechanisms, protecting sensitive user and business data across applications.",
      "Developed RESTful APIs and integrated third-party services to support features like real-time notifications, payment processing, and data synchronization.",
      "Optimized database interactions and server-side logic, improving application performance and reducing load times.",
      "Built reusable frontend and backend components, enhancing development efficiency and ensuring maintainable, scalable codebases.",
      "Designed and implemented responsive and dynamic user interfaces using React and React Native, ensuring consistent experience across web and mobile platforms.",
    ],
  },
  {
    company: "Capitalist Supply and Logistics Ltd",
    position: "Full Stack Software Developer",
    period: "Jan 2025 — April 2025",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Developed and maintained web applications to improve supply chain management and logistics operations.",
      "Implemented RESTful APIs to streamline data flow between frontend and backend systems.",
      "Collaborated with cross-functional teams to gather requirements and deliver scalable solutions.",
      "Optimized application performance, reducing load times by 30% through code refactoring and caching strategies.",
      "Conducted thorough testing and debugging to ensure high-quality, bug-free releases.",
    ],
  },
  {
    company: "CK Business Ltd",
    position: "Full Stack Software Developer",
    period: "2022 — 2023",
    location: "Kigali, Rwanda",
    responsibilities: [
      "Developed and maintained user-friendly, responsive web interfaces to enhance the company's online presence and customer experience.",
      "Built dynamic web applications using React.js, ensuring seamless user interactions and modern UI/UX design.",
      "Integrated third-party APIs and services to extend application functionality.",
      "Worked closely with designers to translate mockups into pixel-perfect, responsive implementations.",
      "Participated in code reviews and contributed to improving development best practices.",
    ],
  },
];
