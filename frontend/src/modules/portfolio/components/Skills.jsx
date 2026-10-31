import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layers, Server, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Terminal,
    skills: ['JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3', 'TypeScript']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Backend & Architecture',
    icon: Server,
    skills: ['RESTful APIs', 'JWT Auth', 'Sequelize ORM', 'Zod Validation', 'Database Migrations', 'MVC Pattern']
  },
  {
    title: 'Developer Tools & Cloud',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Render', 'Vercel', 'Tailwind CSS']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-[var(--bg-base)] relative transition-colors duration-400">
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
            <span>MY TECH STACK</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[var(--bg-card)] p-8 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-[0_0_25px_var(--glow)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center group-hover:scale-110 group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--text-main)] tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-xl text-[var(--text-muted)] text-sm font-medium hover:text-[var(--text-main)] hover:border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-all cursor-default select-none hover:-translate-y-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
