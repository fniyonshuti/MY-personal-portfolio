import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js","Express.js", "MongoDB", "Tailwind css", "JWT"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      github: "",
      live: "#"
    },
    {
      id: 2,
      title: "Career Connect Web Application ",
      description: "A dynamic job matching platform designed to connect job seekers with relevant opportunities while offering career development resources.",
      technologies: ["React", "MongoDb", "Express.js","Node.js", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop",
      github: "#",
      live: "#"
    }
    // {
    //   id: 3,
    //   title: "Weather Dashboard",
    //   description: "Real-time weather application with location-based forecasts, interactive maps, and historical data visualization.",
    //   technologies: ["JavaScript", "OpenWeather API", "Chart.js", "HTML/CSS"],
    //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=300&fit=crop",
    //   github: "#",
    //   live: "#"
    // }
  ];

  const skills = [
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 65},
    { name: "Python", level: 75 },
    { name: "MongoDB", level: 85 },
    { name: "Git and GitHub", level: 90 },
    { name: "tailwind css", level: 75 },
    { name: "bootstrap", level: 75 },
    { name:"HTML",level: 85 },
    { name:"CSS",level: 85 },
  ];

  const experience = [
    {
      company: "Capitalist Supply and Logistics Ltd",
      position: "software developer ",
      period: "Jan 2025 - April 2025",
      description: "Developed and maintained web application to improve supply chain management and logistics operations."
    },
    {
      company: "CK business ltd",
      position: "Full Stack Developer",
      period: "2022 - 2023",
      description: "Developed and maintained user-friendly, responsive web interfaces to enhance the company’s online presence and customer experience."
    }
    
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full shadow-lg z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 shadow-gray-800' : 'bg-white shadow-gray-200'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className={`text-2xl font-bold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Fred Niyonshuti</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === section
                        ? isDarkMode
                          ? 'text-blue-400 bg-blue-900/20'
                          : 'text-blue-600 bg-blue-50'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-colors duration-300 ${isDarkMode
                    ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    } focus:outline-none`}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                }`}>
                {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === section
                        ? isDarkMode
                          ? 'text-blue-400 bg-blue-900/20'
                          : 'text-blue-600 bg-blue-50'
                        : isDarkMode
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={`pt-16 min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode
          ? 'bg-gradient-to-br from-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
            />
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
            Hi, I'm <span className="text-blue-600">Fred Niyonshuti</span>
          </h1>
          <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            A passionate Software Engineer specializing in full-stack development,
            creating innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors ${isDarkMode
                  ? 'text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-gray-900'
                  : 'text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className={`text-lg mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                Motivated and detail-oriented Software Engineer with a strong foundation in front-end and back-end development, specializing in building responsive, user-friendly web applications. Proficient in HTML, CSS, JavaScript, and React, with hands-on experience in API integration, debugging, and performance optimization. Passionate about solving real-world problems through innovative technology solutions and committed to continuous learning to stay ahead in the rapidly evolving software industry.

              </p>
              <p className={`text-lg mb-6 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                My expertise spans across the full development stack, from crafting responsive user interfaces
                to building robust backend systems. I'm passionate about learning new technologies and
                staying up-to-date with industry best practices.
              </p>
              <p className={`text-lg transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                When I'm not coding, you can find me contributing to open-source projects,
                writing technical blog posts, or exploring new technologies.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'
                }`}>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">2+</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Years Experience</p>
              </div>
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'
                }`}>
                <h3 className="text-3xl font-bold text-green-600 mb-2">10+</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Projects Completed</p>
              </div>
              {/* <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${isDarkMode ? 'bg-purple-900/20' : 'bg-purple-50'
                }`}>
                <h3 className="text-3xl font-bold text-purple-600 mb-2">20+</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Happy Clients</p>
              </div> */}
              <div className={`p-6 rounded-lg text-center transition-colors duration-300 ${isDarkMode ? 'bg-orange-900/20' : 'bg-orange-50'
                }`}>
                <h3 className="text-3xl font-bold text-orange-600 mb-2">15+</h3>
                <p className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{skill.name}</span>
                    <span className={`text-sm transition-colors duration-300 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>{skill.level}%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 transition-colors duration-300 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Technologies I Work With</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "React", "Node.js", "Python", "JavaScript", , "MongoDB",
                   "Git", "GitHub", "REST APIs","HTML","CSS","Tailwind css","Bootstrap","Express.js"
                ].map((tech, index) => (
                  <div key={index} className={`p-4 rounded-lg shadow-sm border transition-colors duration-300 ${isDarkMode
                      ? 'bg-gray-800 border-gray-700'
                      : 'bg-white border-gray-200'
                    }`}>
                    <span className={`font-medium transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${isDarkMode ? 'bg-gray-700 shadow-gray-900' : 'bg-white'
                }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{project.title}</h3>
                  <p className={`mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-800 text-white text-center py-2 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Work Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className={`p-8 rounded-lg shadow-lg transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                }`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className={`text-2xl font-semibold transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>{exp.position}</h3>
                  <span className="text-blue-600 font-medium">{exp.period}</span>
                </div>
                <h4 className={`text-xl mb-4 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{exp.company}</h4>
                <p className={`leading-relaxed transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 transition-colors duration-300 ${isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-12 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>Let's Connect</h3>
              <p className={`text-lg mb-8 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>fred.niyonshuti@email.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className={`transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'border-gray-300'
                      }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'border-gray-300'
                      }`}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium mb-2 transition-colors duration-300 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 ${isDarkMode
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'border-gray-300'
                      }`}
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-800 text-white'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Fred Niyonshuti. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
