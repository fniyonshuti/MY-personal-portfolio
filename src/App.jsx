import React, { useState, useEffect, useRef } from "react";
import profile from "./assets/profile.jpeg";
import learning from "./assets/learning.jpg";
import careerConnect from "./assets/careerConnect.jpg";
import competra from "./assets/competra.jpg";
import curtainsCk from "./assets/curtains-ck.jpg";
import "./App.css";

/* ------------------------------------------------------------------ */
/* Icons (inline SVG, no external dependency)                          */
/* ------------------------------------------------------------------ */

const IconGithub = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedin = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconMail = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const IconPhone = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const IconLocation = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const IconArrowUpRight = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 17L17 7M17 7H8m9 0v9"
    />
  </svg>
);

const IconArrowUp = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

const IconMenu = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const IconClose = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const IconSun = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
      clipRule="evenodd"
    />
  </svg>
);

const IconMoon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
  </svg>
);

const IconSearch = ({ className = "w-4 h-4" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const IconCornerDownLeft = ({ className = "w-3.5 h-3.5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 17l-5-5 5-5M4 12h11a4 4 0 004-4V4"
    />
  </svg>
);

const IconCheckCircle = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconAlertCircle = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const IconSpinner = ({ className = "w-5 h-5" }) => (
  <svg className={`${className} animate-spin`} fill="none" viewBox="0 0 24 24">
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    ></path>
  </svg>
);

const IconBriefcase = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m-4 6h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6z"
    />
  </svg>
);

const IconLayers = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4l8 4-8 4-8-4 8-4zM4 12l8 4 8-4M4 16l8 4 8-4"
    />
  </svg>
);

const IconCode = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 8l-4 4 4 4"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Animated stat card — counts up from 0 once it scrolls into view      */
/* ------------------------------------------------------------------ */

const StatCounter = ({
  target,
  suffix = "",
  label,
  icon,
  isDarkMode,
  start,
  delay = 0,
}) => {
  const Icon = icon;
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!start || startedRef.current) return;
    startedRef.current = true;

    let rafId;
    const duration = 1400;
    const timeoutId = setTimeout(() => {
      const startTime = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        setValue(Math.round(eased * target));
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [start, target, delay]);

  return (
    <div
      className={`group p-5 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
        isDarkMode
          ? "border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/[0.06]"
          : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/60"
      }`}
    >
      <div
        className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
          isDarkMode
            ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
            : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
        }`}
      >
        <Icon className="w-4 h-4" />
      </div>
      <p
        className={`inline-block origin-left font-mono text-3xl sm:text-4xl font-bold mb-1 tabular-nums transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        {value}
        {suffix}
      </p>
      <p
        className={`text-sm transition-colors duration-300 ${
          isDarkMode
            ? "text-gray-400 group-hover:text-gray-200"
            : "text-gray-600 group-hover:text-gray-800"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

const NAV_ITEMS = [
  "home",
  "about",
  "skills",
  "projects",
  "experience",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [paletteIndex, setPaletteIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const paletteInputRef = useRef(null);

  const apiBaseUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
  const email = "nshutifreddy555@email.com";

  useEffect(() => {
    setIsMac(
      /Mac|iPod|iPhone|iPad/.test(navigator.platform || navigator.userAgent),
    );
  }, []);

  const toggleDarkMode = () => setIsDarkMode((v) => !v);

  const toggleExperience = (index) => {
    setExpandedExperience((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard?.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const emailValue = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !emailValue || !message) {
      setFormStatus({
        loading: false,
        success: null,
        error: "Please fill in all fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      setFormStatus({
        loading: false,
        success: null,
        error: "Please enter a valid email address.",
      });
      return;
    }

    setFormStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch(`${apiBaseUrl}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email: emailValue, message }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message");
      }

      setFormStatus({
        loading: false,
        success: "Message sent successfully! Thank you for reaching out.",
        error: null,
      });
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus({
        loading: false,
        success: null,
        error: error.message || "Something went wrong. Please try again later.",
      });
    }
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
      const scrollPosition = window.scrollY + 100;

      for (const section of NAV_ITEMS) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-reveal: inline styles are set directly (not a class) so the
  // revealed state can't be wiped by a later re-render that recomputes an
  // isDarkMode-dependent className string for the same element.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Triggers the About-section stat counters once, the first time they scroll into view.
  const statsRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      description:
        "A full-stack LMS that streamlines online education — course creation, enrollment, and progress tracking, with JWT auth and role-based access for instructors and students.",
      technologies: [
        "React",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Tailwind CSS",
        "JWT",
      ],
      categories: ["Web", "Education"],
      year: "2026",
      role: "Full-Stack Developer",
      image: learning,
      github: "https://github.com/fniyonshuti/Learning-Management-System.git",
      live: "https://github.com/fniyonshuti/Learning-Management-System.git",
    },
    {
      id: 2,
      title: "Career Connect",
      description:
        "A dynamic job-matching platform connecting job seekers with relevant opportunities alongside career development resources.",
      technologies: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Tailwind CSS",
      ],
      categories: ["Web", "Career"],
      year: "2026",
      role: "Full-Stack Developer",
      image: careerConnect,
      github: "https://github.com/fniyonshuti/fullstack-project.git",
      live: "https://github.com/fniyonshuti/fullstack-project.git",
    },
    {
      id: 3,
      title: "Competra",
      description:
        "An ICT competency assessment platform that reviews GitHub evidence, scores theory answers, compares results with RTB benchmarks, and generates recommendations and downloadable reports.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "TypeScript",
        "Gemini",
      ],
      categories: ["Web", "Assessment"],
      year: "2026",
      role: "Full-Stack Developer",
      image: competra,
      github: "https://github.com/fniyonshuti/RTB-Graduate-project.git",
      live: "https://rtb-graduate-project.vercel.app/",
    },
    {
      id: 4,
      title: "C.K Business Ltd",
      description:
        "A furniture and interior-design storefront for curtains, sofas, office services, and practical workspace solutions, with product browsing and cart functionality.",
      technologies: [
        "React",
        "JavaScript",
        "Supabase",
        "Tailwind CSS",
        "Vercel",
      ],
      categories: ["Web", "E-Commerce"],
      year: "2026",
      role: "Full-Stack Developer",
      image: curtainsCk,
      github: "https://github.com/fniyonshuti/curtains-ck.git",
      live: "https://curtains-ck.vercel.app/",
    },
    {
      id: 5,
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio showcasing my projects, technical stack, professional experience, and ways to get in touch.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Vite", "Vercel"],
      categories: ["Web", "Portfolio"],
      year: "2026",
      role: "Frontend Developer",
      image: profile,
      github: "https://github.com/fniyonshuti/MY-personal-portfolio.git",
      live: "https://my-personal-portfolio-theta-five.vercel.app/",
    },
  ];

  const coreStack = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "MongoDB",
    "Express.js",
    "Django",
    "FastAPI",
  ];
  const alsoWorksWith = [
    "TypeScript",
    "REST APIs",
    "Git & GitHub",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
    "PostgreSQL",
  ];

  const values = [
    {
      n: "01",
      title: "Reliability",
      desc: "I build systems that behave predictably in production, not just in demos.",
    },
    {
      n: "02",
      title: "Curiosity",
      desc: "New frameworks, new problems — I stay hands-on with the tools shaping the industry.",
    },
    {
      n: "03",
      title: "Craft",
      desc: "Clean, readable, maintainable code is the default, not an afterthought.",
    },
  ];

  const experience = [
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

  /* ------------------------------------------------------------------ */
  /* Command palette                                                     */
  /* ------------------------------------------------------------------ */

  const commands = [
    ...NAV_ITEMS.map((section) => ({
      id: `nav-${section}`,
      label: section.charAt(0).toUpperCase() + section.slice(1),
      hint: "Go to section",
      action: () => scrollToSection(section),
    })),
    {
      id: "theme",
      label: isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode",
      hint: "Toggle theme",
      action: toggleDarkMode,
    },
    {
      id: "email",
      label: "Copy Email Address",
      hint: email,
      action: copyEmail,
    },
    {
      id: "github",
      label: "Open GitHub Profile",
      hint: "github.com/fniyonshuti",
      action: () =>
        window.open("https://github.com/fniyonshuti", "_blank", "noopener"),
    },
    {
      id: "linkedin",
      label: "Open LinkedIn Profile",
      hint: "linkedin.com/in/fred-niyonshuti",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/fred-niyonshuti-9bab57298/",
          "_blank",
          "noopener",
        ),
    },
  ];

  const filteredCommands = commands.filter((c) => {
    const q = paletteQuery.toLowerCase();
    return (
      c.label.toLowerCase().includes(q) || c.hint.toLowerCase().includes(q)
    );
  });

  const openPalette = () => {
    setIsPaletteOpen(true);
    setPaletteQuery("");
    setPaletteIndex(0);
  };

  const closePalette = () => {
    setIsPaletteOpen(false);
    setPaletteQuery("");
  };

  const runCommand = (cmd) => {
    if (!cmd) return;
    cmd.action();
    closePalette();
  };

  useEffect(() => {
    const handleGlobalKeydown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsPaletteOpen((open) => {
          const next = !open;
          if (next) {
            setPaletteQuery("");
            setPaletteIndex(0);
          }
          return next;
        });
      } else if (e.key === "Escape") {
        setIsPaletteOpen(false);
      }
    };
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, []);

  useEffect(() => {
    if (isPaletteOpen) {
      paletteInputRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isPaletteOpen]);

  useEffect(() => {
    setPaletteIndex(0);
  }, [paletteQuery]);

  const handlePaletteKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setPaletteIndex((i) => Math.min(i + 1, filteredCommands.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setPaletteIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      runCommand(filteredCommands[paletteIndex]);
    }
  };

  const shortcutLabel = isMac ? "⌘K" : "Ctrl K";

  const textMuted = isDarkMode ? "text-gray-400" : "text-gray-600";
  const textHeading = isDarkMode ? "text-white" : "text-gray-900";
  const borderColor = isDarkMode ? "border-gray-800" : "border-gray-200";
  const cardBg = isDarkMode ? "bg-[#111111]" : "bg-white";

  return (
    <div className={`min-h-screen font-sans ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Command palette */}
      {isPaletteOpen && (
        <div className="cmdk-overlay" onClick={closePalette}>
          <div
            className={`cmdk-panel border ${isDarkMode ? "bg-[#111111] border-gray-800" : "bg-white border-gray-200"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`flex items-center gap-3 px-4 py-3.5 border-b ${borderColor}`}
            >
              <IconSearch className={`w-4 h-4 flex-shrink-0 ${textMuted}`} />
              <input
                ref={paletteInputRef}
                type="text"
                value={paletteQuery}
                onChange={(e) => setPaletteQuery(e.target.value)}
                onKeyDown={handlePaletteKeyDown}
                placeholder="Jump to a section or run a command..."
                className={`flex-1 bg-transparent outline-none text-sm ${textHeading} ${isDarkMode ? "placeholder:text-gray-500" : "placeholder:text-gray-400"}`}
              />
              <kbd
                className={`text-[10px] px-1.5 py-0.5 rounded border ${borderColor} ${textMuted}`}
              >
                ESC
              </kbd>
            </div>
            <div className="cmdk-list max-h-80 overflow-y-auto py-2">
              {filteredCommands.length === 0 && (
                <p className={`px-4 py-6 text-sm text-center ${textMuted}`}>
                  No matching commands.
                </p>
              )}
              {filteredCommands.map((cmd, index) => (
                <button
                  key={cmd.id}
                  onClick={() => runCommand(cmd)}
                  onMouseEnter={() => setPaletteIndex(index)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 text-left text-sm transition-colors ${
                    index === paletteIndex
                      ? isDarkMode
                        ? "bg-blue-500/10 text-blue-300"
                        : "bg-blue-50 text-blue-700"
                      : isDarkMode
                        ? "text-gray-200"
                        : "text-gray-700"
                  }`}
                >
                  <span className="font-medium">{cmd.label}</span>
                  <span className={`font-mono text-xs ${textMuted}`}>
                    {cmd.hint}
                  </span>
                </button>
              ))}
            </div>
            <div
              className={`hidden sm:flex items-center gap-4 px-4 py-2.5 border-t text-[11px] font-mono ${borderColor} ${textMuted}`}
            >
              <span className="flex items-center gap-1">
                <IconCornerDownLeft className="w-3 h-3" /> select
              </span>
              <span>&uarr;&darr; navigate</span>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${isDarkMode ? "bg-black/80 border-gray-800" : "bg-white/80 border-gray-200"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("home")}
              className={`font-mono font-bold text-lg ${textHeading}`}
            >
              FN<span className="text-blue-600">.</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link text-sm font-medium transition-colors duration-300 ${activeSection === section ? "active " + (isDarkMode ? "text-white" : "text-gray-900") : textMuted}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={openPalette}
                className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
                  isDarkMode
                    ? "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200"
                    : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                <IconSearch className="w-3.5 h-3.5" />
                {shortcutLabel}
              </button>

              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-yellow-400 hover:bg-gray-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {isDarkMode ? (
                  <IconSun className="w-5 h-5" />
                ) : (
                  <IconMoon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className={`md:hidden p-2 rounded-lg transition-colors ${isDarkMode ? "text-gray-300 hover:bg-gray-900" : "text-gray-600 hover:bg-gray-100"}`}
              >
                {isMenuOpen ? <IconClose /> : <IconMenu />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden border-t py-3 space-y-1 ${borderColor}`}>
              {NAV_ITEMS.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-2 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === section
                      ? isDarkMode
                        ? "text-blue-400"
                        : "text-blue-600"
                      : isDarkMode
                        ? "text-gray-300"
                        : "text-gray-600"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button
                onClick={openPalette}
                className={`flex items-center gap-2 w-full text-left px-2 py-2.5 rounded-lg text-base font-medium ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                <IconSearch className="w-4 h-4" /> Search
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className={`relative pt-16 min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-white"}`}
      >
        <div className="absolute inset-0 map-dot-grid"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="reveal">
              <p
                className={`font-mono text-xs sm:text-sm tracking-widest uppercase mb-6 flex items-center gap-2 ${textMuted}`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Software Engineer — Kigali, Rwanda (GMT+2)
              </p>

              {/* <h1 className={`hero-title font-bold leading-[1.05] tracking-tight mb-6 ${textHeading}`}>
                Fred Niyonshuti
              </h1> */}
              <p
                className={`text-xl sm:text-2xl font-medium mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                I build reliable, secure and intuitive web experiences.
              </p>
              <p
                className={`text-base sm:text-lg max-w-xl leading-relaxed mb-10 ${textMuted}`}
              >
                Full-stack engineer specializing in React, Node.js and Python —
                turning complex problems into clean, production-ready software.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`px-6 py-3 rounded-lg font-semibold text-sm border transition-colors ${
                    isDarkMode
                      ? "border-gray-700 text-gray-200 hover:border-gray-500"
                      : "border-gray-300 text-gray-800 hover:border-gray-500"
                  }`}
                >
                  Get In Touch
                </button>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/fniyonshuti"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
                >
                  <IconGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fred-niyonshuti-9bab57298/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
                >
                  <IconLinkedin className="w-5 h-5" />
                </a>
                <span
                  className={`hidden sm:inline-block h-4 w-px ${isDarkMode ? "bg-gray-800" : "bg-gray-300"}`}
                ></span>
                <button
                  onClick={openPalette}
                  className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-mono ${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
                >
                  Press{" "}
                  <kbd
                    className={`px-1.5 py-0.5 rounded border ${borderColor}`}
                  >
                    {shortcutLabel}
                  </kbd>{" "}
                  to jump anywhere
                </button>
              </div>
            </div>

            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72">
                <span className="frame-corner frame-corner-tl"></span>
                <span className="frame-corner frame-corner-tr"></span>
                <span className="frame-corner frame-corner-bl"></span>
                <span className="frame-corner frame-corner-br"></span>
                <img
                  src={profile}
                  alt="Fred Niyonshuti"
                  className={`w-full aspect-[3/4] object-cover object-top grayscale-[15%] border ${borderColor}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="reveal space-y-5">
              <p className={`text-lg leading-relaxed ${textMuted}`}>
                Motivated and detail-oriented Software Engineer with a strong
                foundation in front-end and back-end development, specializing
                in building responsive, user-friendly web applications.
              </p>
              <p className={`text-lg leading-relaxed ${textMuted}`}>
                My expertise spans the full development stack — from crafting
                responsive interfaces to building robust backend systems. I'm
                passionate about learning new technologies and staying current
                with industry best practices.
              </p>
            </div>
            <div
              ref={statsRef}
              className="reveal grid grid-cols-3 gap-3 sm:gap-4"
            >
              <StatCounter
                target={3}
                suffix="+"
                label="Years Experience"
                icon={IconBriefcase}
                isDarkMode={isDarkMode}
                start={statsInView}
                delay={0}
              />
              <StatCounter
                target={10}
                suffix="+"
                label="Projects Shipped"
                icon={IconLayers}
                isDarkMode={isDarkMode}
                start={statsInView}
                delay={150}
              />
              <StatCounter
                target={15}
                suffix="+"
                label="Technologies"
                icon={IconCode}
                isDarkMode={isDarkMode}
                start={statsInView}
                delay={300}
              />
            </div>
          </div>

          <div
            className={`grid sm:grid-cols-3 gap-px border rounded-xl overflow-hidden ${borderColor}`}
          >
            {values.map((v) => (
              <div
                key={v.n}
                className={`reveal group p-8 transition-colors duration-300 ${cardBg} ${isDarkMode ? "hover:bg-blue-500/[0.06]" : "hover:bg-blue-50/60"}`}
              >
                <span
                  className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-semibold transition-colors duration-300 ${
                    isDarkMode
                      ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20"
                      : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
                  }`}
                >
                  {v.n}
                </span>
                <h3
                  className={`text-lg font-semibold mt-3 mb-2 ${textHeading}`}
                >
                  {v.title}
                </h3>
                <p className={`text-sm leading-relaxed ${textMuted}`}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>
              Skills &amp; Stack
            </h2>
          </div>

          <div className="reveal mb-10">
            <p
              className={`font-mono text-xs uppercase tracking-widest mb-4 ${textMuted}`}
            >
              Core Stack
            </p>
            <div className="flex flex-wrap gap-3">
              {coreStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border ${isDarkMode ? "border-gray-700 text-gray-100" : "border-gray-300 text-gray-800"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <p
              className={`font-mono text-xs uppercase tracking-widest mb-4 ${textMuted}`}
            >
              Also Familiar With
            </p>
            <div className="flex flex-wrap gap-2">
              {alsoWorksWith.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium ${isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>
              Featured Projects
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article
                key={project.id}
                className={`project-card reveal rounded-2xl border overflow-hidden transition-all duration-300 ${isDarkMode ? "border-gray-800 bg-[#111111]" : "border-gray-200 bg-white"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} project`}
                  className="project-preview block relative h-52 sm:h-56 overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} homepage preview`}
                    className="project-preview-image w-full h-full object-cover object-top"
                  />
                  <span className="project-year absolute top-4 left-4">
                    {project.year}
                  </span>
                  <span className="project-open-overlay absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg">
                      Open Project <IconArrowUpRight className="w-4 h-4" />
                    </span>
                  </span>
                </a>

                <div className="p-5 sm:p-6">
                  <h3
                    className={`text-xl font-bold leading-tight mb-3 ${textHeading}`}
                  >
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.categories.map((category) => (
                      <span
                        key={category}
                        className={`rounded-md px-2.5 py-1 text-xs ${isDarkMode ? "bg-gray-900 text-gray-400" : "bg-gray-100 text-gray-600"}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  <p
                    className={`font-mono text-[11px] uppercase tracking-wider mb-5 ${textMuted}`}
                  >
                    {project.role}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-primary-action inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      <IconArrowUpRight className="w-4 h-4" /> Visit Site
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-secondary-action inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-colors ${isDarkMode ? "border-gray-700 text-gray-100 hover:border-gray-500" : "border-gray-300 text-gray-800 hover:border-gray-500"}`}
                    >
                      View Code <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>
              Work Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experience.map((exp, index) => {
              const isExpanded = expandedExperience[index];
              const displayedResponsibilities = isExpanded
                ? exp.responsibilities
                : exp.responsibilities.slice(0, 3);
              const hasMore = exp.responsibilities.length > 3;

              return (
                <div
                  key={exp.company}
                  className={`reveal timeline-item pl-6 sm:pl-8 ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className={`text-xl font-semibold ${textHeading}`}>
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div
                      className={`font-mono text-xs sm:text-right ${textMuted}`}
                    >
                      <p>{exp.period}</p>
                      <p className="mt-0.5">{exp.location}</p>
                    </div>
                  </div>

                  <ul className={`space-y-2 ${textMuted}`}>
                    {displayedResponsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="text-sm leading-relaxed flex gap-2"
                      >
                        <span className="text-blue-600 mt-1.5 flex-shrink-0">
                          &bull;
                        </span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>

                  {hasMore && (
                    <button
                      onClick={() => toggleExperience(index)}
                      className={`mt-3 text-xs font-mono font-medium hover:underline ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}
                    >
                      {isExpanded
                        ? "Show less"
                        : `+${exp.responsibilities.length - 3} more`}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal mb-14">
            <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>
              Get In Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <div className="reveal">
              <p
                className={`text-lg leading-relaxed mb-8 max-w-md ${textMuted}`}
              >
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out.
              </p>

              <button
                onClick={copyEmail}
                className={`group flex items-center gap-2 text-2xl sm:text-3xl font-semibold mb-8 ${textHeading} hover:text-blue-600 transition-colors`}
              >
                {email}
                <span
                  className={`font-mono text-xs font-normal ${copiedEmail ? "text-green-500" : "opacity-0 group-hover:opacity-100 transition-opacity " + textMuted}`}
                >
                  {copiedEmail ? "copied!" : "click to copy"}
                </span>
              </button>

              <div className="space-y-3 mb-8">
                <div className={`flex items-center gap-3 text-sm ${textMuted}`}>
                  <IconPhone className="w-4 h-4 text-blue-600" /> +250 790 235
                  869
                </div>
                <div className={`flex items-center gap-3 text-sm ${textMuted}`}>
                  <IconLocation className="w-4 h-4 text-blue-600" /> Kigali,
                  Rwanda
                </div>
              </div>

              <div className="flex items-center gap-5">
                <a
                  href="https://github.com/fniyonshuti"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
                >
                  <IconGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/fred-niyonshuti-9bab57298/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
                >
                  <IconLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="reveal space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className={`block text-xs font-mono uppercase tracking-widest mb-2 ${textMuted}`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={`underline-input w-full py-2 text-sm focus:outline-none ${isDarkMode ? "border-gray-700 text-white focus:border-blue-500" : "border-gray-300 text-gray-900 focus:border-blue-600"}`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className={`block text-xs font-mono uppercase tracking-widest mb-2 ${textMuted}`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`underline-input w-full py-2 text-sm focus:outline-none ${isDarkMode ? "border-gray-700 text-white focus:border-blue-500" : "border-gray-300 text-gray-900 focus:border-blue-600"}`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className={`block text-xs font-mono uppercase tracking-widest mb-2 ${textMuted}`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className={`underline-input w-full py-2 text-sm focus:outline-none resize-none ${isDarkMode ? "border-gray-700 text-white focus:border-blue-500" : "border-gray-300 text-gray-900 focus:border-blue-600"}`}
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus.loading}
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-colors disabled:opacity-70"
              >
                {formStatus.loading ? (
                  <>
                    <IconSpinner className="w-4 h-4" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
              {formStatus.success && (
                <div
                  className={`flex items-center gap-2 text-sm p-3 rounded-lg ${isDarkMode ? "bg-green-900/20 text-green-400" : "bg-green-50 text-green-700"}`}
                >
                  <IconCheckCircle className="w-5 h-5 flex-shrink-0" />{" "}
                  {formStatus.success}
                </div>
              )}
              {formStatus.error && (
                <div
                  className={`flex items-center gap-2 text-sm p-3 rounded-lg ${isDarkMode ? "bg-red-900/20 text-red-400" : "bg-red-50 text-red-700"}`}
                >
                  <IconAlertCircle className="w-5 h-5 flex-shrink-0" />{" "}
                  {formStatus.error}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-10 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className={`text-sm ${textMuted}`}>
            &copy; 2026 Fred Niyonshuti. All rights reserved.
          </p>
          <p className={`font-mono text-xs ${textMuted}`}>
            Built with React &amp; Tailwind CSS
          </p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={() => scrollToSection("home")}
          aria-label="Back to top"
          className={`back-to-top fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full border flex items-center justify-center ${
            isDarkMode
              ? "bg-black border-gray-700 text-gray-200"
              : "bg-white border-gray-300 text-gray-700"
          } shadow-lg`}
        >
          <IconArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

export default App;
