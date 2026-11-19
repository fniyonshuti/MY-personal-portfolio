import React from 'react';

const Footer = ({ isDarkMode, textMuted }) => {
  return (
    <footer className={`py-10 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className={`text-sm ${textMuted}`}>&copy; 2026 Fred Niyonshuti. All rights reserved.</p>
        <p className={`font-mono text-xs ${textMuted}`}>Built with React &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
