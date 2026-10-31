import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Xtown Technologies Pvt. Ltd.',
    period: 'March 2026 – July 2026',
    description: [
      'Developed full-stack web applications using React.js, Node.js, Express.js, and PostgreSQL.',
      'Built REST APIs with JWT Authentication, Sequelize ORM, Zod Validation, and database migrations.',
      'Collaborated using Git/GitHub and followed industry-standard modular project architecture.'
    ]
  },
  {
    role: 'Backend Developer Virtual Intern',
    company: 'Movicloudlabs Pvt. Ltd.',
    period: 'November 2025 – January 2026',
    description: [
      'Developed robust backend APIs using Node.js, Express.js, and MongoDB.',
      'Implemented secure JWT Authentication and comprehensive CRUD operations.',
      'Contributed to the Air Ambulance Management System backend engineering.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-[var(--bg-surface)]/40 relative border-t border-[var(--border-color)] transition-colors duration-400">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-semibold text-[var(--badge-text)] mb-3">
            <Sparkles size={13} />
            <span>CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--primary)]/40 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Center Node */}
              <div className="flex items-center justify-center w-11 h-11 rounded-full border-4 border-[var(--bg-base)] bg-[var(--primary)] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg shadow-[var(--glow)] absolute left-0 md:left-1/2 -translate-x-1/2 md:translate-x-0 z-10">
                <Briefcase size={16} />
              </div>

              {/* Experience Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-[var(--bg-card)] p-7 rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-[0_0_25px_var(--glow)] transition-all duration-300 ml-14 md:ml-0 group-hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
                  <h3 className="font-extrabold text-[var(--text-main)] text-xl group-hover:text-[var(--primary-light)] transition-colors">
                    {exp.role}
                  </h3>
                </div>

                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-[var(--text-main)] font-semibold text-sm">
                    {exp.company}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2.5 text-[var(--text-muted)]">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-[var(--primary)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
