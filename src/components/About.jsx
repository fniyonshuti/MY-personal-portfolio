import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { values } from '../data/constants';
import { IconBriefcase, IconLayers, IconCode } from './Icons';

const StatCounter = ({ target, suffix = "", label, icon, isDarkMode, start, delay = 0 }) => {
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
        const eased = 1 - Math.pow(1 - progress, 3);
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
        isDarkMode ? "border-gray-800 hover:border-blue-500/50 hover:bg-blue-500/[0.06]" : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/60"
      }`}
    >
      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 ${
        isDarkMode ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"
      }`}>
        <Icon className="w-4 h-4" />
      </div>
      <p className={`inline-block origin-left font-mono text-3xl sm:text-4xl font-bold mb-1 tabular-nums transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600 ${
        isDarkMode ? "text-white" : "text-gray-900"
      }`}>
        {value}{suffix}
      </p>
      <p className={`text-sm transition-colors duration-300 ${isDarkMode ? "text-gray-400 group-hover:text-gray-200" : "text-gray-600 group-hover:text-gray-800"}`}>
        {label}
      </p>
    </div>
  );
};

const About = ({ isDarkMode, textHeading, textMuted, borderColor, cardBg }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className={`py-24 border-t transition-colors duration-300 ${isDarkMode ? "bg-black border-gray-900" : "bg-white border-gray-100"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="mb-14">
          <h2 className={`text-3xl sm:text-4xl font-bold ${textHeading}`}>About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} className="space-y-5">
            <p className={`text-lg leading-relaxed ${textMuted}`}>
              Motivated and detail-oriented Software Engineer with a strong foundation in front-end and back-end development, specializing in building responsive, user-friendly web applications.
            </p>
            <p className={`text-lg leading-relaxed ${textMuted}`}>
              My expertise spans the full development stack — from crafting responsive interfaces to building robust backend systems. I'm passionate about learning new technologies and staying current with industry best practices.
            </p>
          </motion.div>
          <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeUp} className="grid grid-cols-3 gap-3 sm:gap-4">
            <StatCounter target={3} suffix="+" label="Years Experience" icon={IconBriefcase} isDarkMode={isDarkMode} start={isInView} delay={0} />
            <StatCounter target={10} suffix="+" label="Projects Shipped" icon={IconLayers} isDarkMode={isDarkMode} start={isInView} delay={150} />
            <StatCounter target={15} suffix="+" label="Technologies" icon={IconCode} isDarkMode={isDarkMode} start={isInView} delay={300} />
          </motion.div>
        </div>

        <div className={`grid sm:grid-cols-3 gap-px border rounded-xl overflow-hidden ${borderColor}`}>
          {values.map((v, i) => (
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } } }}
              key={v.n}
              className={`group p-8 transition-colors duration-300 ${cardBg} ${isDarkMode ? "hover:bg-blue-500/[0.06]" : "hover:bg-blue-50/60"}`}
            >
              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-mono text-xs font-semibold transition-colors duration-300 ${isDarkMode ? "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20" : "bg-blue-50 text-blue-600 group-hover:bg-blue-100"}`}>
                {v.n}
              </span>
              <h3 className={`text-lg font-semibold mt-3 mb-2 ${textHeading}`}>{v.title}</h3>
              <p className={`text-sm leading-relaxed ${textMuted}`}>{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
