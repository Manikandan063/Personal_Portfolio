import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, ShieldCheck, Sparkles } from 'lucide-react';

const pillars = [
  { icon: Code, label: 'Frontend', desc: 'React.js & clean, mobile-friendly screens' },
  { icon: Server, label: 'Backend APIs', desc: 'Fast Node.js & Express.js services' },
  { icon: Database, label: 'Databases', desc: 'PostgreSQL, Sequelize ORM & MongoDB' },
  { icon: ShieldCheck, label: 'Security & Code', desc: 'Secure JWT login & clean code patterns' }
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-[var(--bg-surface)]/40 relative border-t border-[var(--border-color)] transition-colors duration-400">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-semibold text-[var(--badge-text)] mb-3">
            <Sparkles size={13} />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--text-main)] leading-snug">
              I build fast, reliable, and easy-to-use <span className="text-[var(--primary-light)]">websites and web apps</span>
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
              I am a Full Stack Developer living in Tirupur, Tamil Nadu. I enjoy building complete web applications from start to finish — creating clean screens that users love, paired with fast backend services and databases that work without issues.
            </p>
            <p className="text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
              I work mainly with React.js on the frontend, and Node.js, Express, and PostgreSQL on the backend. I focus on writing simple, clean code, keeping applications secure, and making sure everything loads quickly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={i} 
                  className="bg-[var(--bg-card)] p-6 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary)] shadow-sm hover:shadow-[0_0_20px_var(--glow)] transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-[var(--text-main)] font-bold text-lg mb-1 group-hover:text-[var(--primary-light)] transition-colors">
                    {pillar.label}
                  </h4>
                  <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
