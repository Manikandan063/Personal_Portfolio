import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiPostgresql, SiExpress } from 'react-icons/si';
import profileImg from '../../../assets/images/profile/profile.png';

const floatingBadges = [
  {
    icon: FaReact,
    label: 'React.js',
    color: '#61DAFB',
    position: 'top-2 -left-4 sm:top-4 sm:-left-8',
    delay: 0
  },
  {
    icon: FaNodeJs,
    label: 'Node.js',
    color: '#68A063',
    position: 'top-2 -right-4 sm:top-4 sm:-right-8',
    delay: 0.3
  },
  {
    icon: SiPostgresql,
    label: 'PostgreSQL',
    color: '#38BDF8',
    position: 'bottom-10 -left-6 sm:bottom-12 sm:-left-10',
    delay: 0.6
  },
  {
    icon: SiExpress,
    label: 'Express.js',
    color: '#F8FAFC',
    position: 'bottom-10 -right-6 sm:bottom-12 sm:-right-10',
    delay: 0.9
  }
];

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-20"
    >
      {/* Dynamic Ambient Background Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--primary)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[var(--secondary)]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[var(--accent)]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ================= LEFT COLUMN: INTRO & CTAS ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-semibold text-[var(--badge-text)] shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span className="tracking-wide">Available for full-time roles & projects</span>
            </div>

            {/* Greeting */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold tracking-widest text-[var(--primary-light)] uppercase">
                Hello, I am Manikandan T
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[var(--text-main)] tracking-tight leading-[1.06]">
                Full Stack <span className="developer-moving-text">Developer</span>
              </h1>
              <p className="text-lg sm:text-2xl font-bold text-[var(--text-main)] tracking-tight pt-1">
                Architecting Scalable Systems & High-Performance APIs
              </p>
            </div>

            {/* Biography */}
            <p className="text-[var(--text-muted)] text-base sm:text-lg leading-relaxed font-normal max-w-xl">
              Passionate engineer with hands-on experience building full-stack web applications with{' '}
              <span className="text-[var(--text-main)] font-semibold">React.js, Node.js, Express.js, and PostgreSQL</span>. 
              Dedicated to writing clean, maintainable code, securing APIs with JWT & Zod, and crafting intuitive user experiences.
            </p>

            {/* Action Buttons: "Hire Me" / "Get In Touch", "Explore Projects", "Resume" */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="gradient-btn text-white px-7 py-3.5 rounded-xl font-bold hover:shadow-[0_0_25px_var(--glow)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg text-sm sm:text-base"
              >
                <span>Hire Me</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--primary)] px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
              >
                Explore Projects
              </a>

              <a
                href="/resume/Manikandan_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="border border-[var(--border-color)] hover:border-[var(--primary)] text-[var(--text-muted)] hover:text-[var(--primary-light)] bg-[var(--bg-surface)] px-5 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Download size={18} />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-semibold text-[var(--text-muted)] mr-1">Social:</span>
              <a
                href="https://github.com/Manikandan063"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary)] hover:shadow-[0_0_15px_var(--glow)] hover:-translate-y-0.5 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/manikandan-mk06"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary)] hover:shadow-[0_0_15px_var(--glow)] hover:-translate-y-0.5 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="mailto:manikandanthangaraj06@gmail.com"
                aria-label="Email Me"
                className="p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary)] hover:shadow-[0_0_15px_var(--glow)] hover:-translate-y-0.5 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: REAL PHOTO WITH GLOWING RINGS & FLOATING TECH BADGES ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex items-center justify-center relative py-6"
          >
            {/* Concentric Ambient Gradient Orbit Rings */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-[var(--border-color)]/30 pointer-events-none" />
            <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border border-[var(--primary)]/20 pointer-events-none" />

            {/* Center Portrait with Dynamic Gradient Ring */}
            <div className="relative group">
              {/* Pulsing Ambient Glow behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-500 scale-95" />

              {/* Gradient Border Frame */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1.5 bg-gradient-to-tr from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] shadow-[0_0_40px_var(--glow)] transition-all duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-full bg-[var(--bg-surface)] overflow-hidden border-4 border-[var(--bg-base)]">
                  <img
                    src={profileImg}
                    alt="Manikandan T"
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Floating Tech Badges */}
              {floatingBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={idx}
                    animate={{
                      y: [0, -7, 0],
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: badge.delay
                    }}
                    className={`absolute ${badge.position} z-20 flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-[var(--bg-card)]/90 backdrop-blur-xl border border-[var(--border-color)] shadow-xl hover:border-[var(--primary)] hover:scale-110 transition-all duration-300 cursor-default`}
                  >
                    <Icon size={18} style={{ color: badge.color }} />
                    <span className="text-xs font-bold text-[var(--text-main)] tracking-wide">
                      {badge.label}
                    </span>
                  </motion.div>
                );
              })}

              {/* Experience / Status Mini Tag at bottom center */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-surface)]/95 backdrop-blur-md border border-[var(--border-color)] shadow-lg whitespace-nowrap"
              >
                <Sparkles size={14} className="text-[var(--primary-light)]" />
                <span className="text-xs font-semibold text-[var(--text-main)]">
                  Full Stack Engineer • Tirupur, India
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
