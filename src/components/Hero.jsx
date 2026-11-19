import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/constants';
import { IconGithub, IconLinkedin } from './Icons';

const Hero = ({ isDarkMode, textMuted, textHeading, borderColor, shortcutLabel, openPalette, scrollToSection }) => {
  return (
    <section id="home" className={`relative pt-16 min-h-screen flex items-center overflow-hidden transition-colors duration-300 ${isDarkMode ? "bg-black" : "bg-white"}`}>
      <div className="absolute inset-0 map-dot-grid"></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className={`font-mono text-xs sm:text-sm tracking-widest uppercase mb-6 flex items-center gap-2 ${textMuted}`}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Software Engineer — Kigali, Rwanda (GMT+2)
            </p>
            <h1 className={`hero-title font-bold leading-[1.05] tracking-tight mb-6 ${textHeading}`}>
              Fred Niyonshuti
            </h1>
            <p className={`text-xl sm:text-2xl font-medium mb-4 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}>
              I build reliable, secure and intuitive web experiences.
            </p>
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed mb-10 ${textMuted}`}>
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
                  isDarkMode ? "border-gray-700 text-gray-200 hover:border-gray-500" : "border-gray-300 text-gray-800 hover:border-gray-500"
                }`}
              >
                Get In Touch
              </button>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="https://github.com/fniyonshuti" target="_blank" rel="noreferrer" aria-label="GitHub" className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}>
                <IconGithub className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/fred-niyonshuti-9bab57298/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}>
                <IconLinkedin className="w-5 h-5" />
              </a>
              <span className={`hidden sm:inline-block h-4 w-px ${isDarkMode ? "bg-gray-800" : "bg-gray-300"}`}></span>
              <button
                onClick={openPalette}
                className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-mono ${textMuted} ${isDarkMode ? "hover:text-white" : "hover:text-gray-900"} transition-colors`}
              >
                Press <kbd className={`px-1.5 py-0.5 rounded border ${borderColor}`}>{shortcutLabel}</kbd> to jump anywhere
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
