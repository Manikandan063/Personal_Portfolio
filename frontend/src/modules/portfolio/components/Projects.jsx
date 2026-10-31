import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects } from '../services/portfolioService';
import { ExternalLink, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const defaultProjects = [
  {
    id: '1',
    title: 'School Bus Tracking System',
    category: 'IoT & Real-Time Tracking',
    slug: 'school-bus-tracking-system',
    description: 'Role-based school bus tracking platform featuring live GPS tracking, automated geofence boundary alerts, and segregated dashboards for school admins, drivers, and parents.',
    highlights: [
      'Live GPS telemetry with automated geofence alerts',
      'Role-based dashboards for Admin, Driver & Parents',
      'Instant SMS notifications for student pickup & drop'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/Manikandan063',
    liveUrl: 'https://frontend-sbt.vercel.app/'
  },
  {
    id: '2',
    title: 'Human Resource Management System',
    category: 'Enterprise SaaS',
    slug: 'hrms',
    description: 'Enterprise HRMS platform featuring employee records, automated payroll calculation, hierarchical leave management, and secure role-based access control.',
    highlights: [
      'Automated payroll engine & encrypted payslip generation',
      'Smart attendance tracking with multi-tier leave approvals',
      'JWT authentication with strict Zod schema validation'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT'],
    githubUrl: 'https://github.com/Manikandan063/Xtown-HRMS-Backend',
    liveUrl: 'https://xtown-hrms-frontend.onrender.com'
  },
  {
    id: '3',
    title: 'Annai Insulation - Corporate Website',
    category: 'Corporate Web Platform',
    slug: 'annai-insulation',
    description: 'A modern, responsive business platform for an industrial insulation enterprise, featuring service portfolios for thermal & steam piping, interactive quote requests, and client inquiry pipelines.',
    highlights: [
      'Service catalog for thermal insulation & aluminium cladding',
      'Interactive customer inquiry and quote calculation forms',
      'High-performance responsive UI with smooth animations'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Framer Motion', 'REST APIs'],
    githubUrl: 'https://github.com/Manikandan063/Annai-Insulation-Project',
    liveUrl: 'https://annai-insulation-project.vercel.app/'
  },
  {
    id: '4',
    title: 'Requirement Tracking System (RTS)',
    category: 'Workflow & Project Management',
    slug: 'requirement-tracking-system',
    description: 'Comprehensive requirement lifecycle management system designed to log, prioritize, trace, and monitor project requirements across various development phases with role-based access.',
    highlights: [
      'End-to-end requirement traceability & priority pipeline',
      'Role-based access control for teams and project managers',
      'Real-time status tracking dashboards with audit history'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'JWT'],
    githubUrl: 'https://github.com/Manikandan063/Requirement-Tracking-System',
    liveUrl: 'https://rts-frontend-lyart.vercel.app/'
  }
];

const enrichProject = (proj) => {
  const match = defaultProjects.find(
    (d) => d.slug === proj.slug || d.title?.toLowerCase() === proj.title?.toLowerCase()
  );
  if (match) {
    return {
      ...match,
      ...proj,
      highlights: match.highlights,
      category: match.category
    };
  }
  return {
    ...proj,
    category: proj.category || 'Full Stack System',
    description: proj.shortDescription || proj.description || 'Full-stack application engineered with scalable architecture and modern user experience.',
    highlights: proj.highlights || [
      'Modular RESTful backend API architecture',
      'Responsive modern user interface built with React',
      'Secure data persistence and schema validation'
    ]
  };
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        if (data && Array.isArray(data) && data.length > 0) {
          const enriched = data.map((p) => enrichProject(p));
          setProjects(enriched);
        }
      } catch (error) {
        console.error('Failed to fetch projects', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const displayProjects = projects.length > 0 ? projects : defaultProjects;

  return (
    <section id="projects" className="py-24 px-4 bg-[var(--bg-base)] relative overflow-hidden transition-colors duration-400">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[350px] bg-[var(--primary)]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--badge-bg)] border border-[var(--badge-border)] text-xs font-semibold text-[var(--badge-text)] mb-3">
            <Sparkles size={13} />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[var(--text-main)] mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] mx-auto rounded-full mb-6"></div>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto text-base sm:text-lg">
            Explore a selection of my key projects, showcasing scalable backend services, clean architecture, and modern interfaces.
          </p>
        </motion.div>

        {loading && projects.length === 0 ? (
          <div className="flex justify-center items-center py-20 text-[var(--primary)] text-lg font-medium animate-pulse">
            Loading projects...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {displayProjects.map((project, idx) => (
              <motion.article
                key={project.id || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group relative flex flex-col justify-between bg-[var(--bg-card)] rounded-2xl border border-[var(--border-color)] hover:border-[var(--primary)] p-6 sm:p-7 transition-all duration-300 hover:shadow-[0_0_25px_var(--glow)] hover:-translate-y-1"
              >
                {/* Card Top: Category badge + External icons */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-[var(--badge-bg)] text-[var(--badge-text)] border border-[var(--badge-border)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub Repository"
                          className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary)] transition-all"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="Live Demo"
                          className="p-2 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-main)] hover:border-[var(--primary)] transition-all"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-main)] group-hover:text-[var(--primary-light)] transition-colors mb-2.5">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {project.description || project.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                          <CheckCircle2 size={15} className="text-[var(--primary)] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Bottom: Tech Stack & CTA Buttons */}
                <div className="pt-4 border-t border-[var(--border-color)]/70">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies?.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-muted)] text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center gradient-btn text-white py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 hover:shadow-[0_0_15px_var(--glow)] transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center bg-[var(--bg-surface)] text-[var(--text-main)] border border-[var(--border-color)] hover:border-[var(--primary)] py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all"
                      >
                        <FaGithub size={14} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* View More Projects on GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 sm:mt-16 flex justify-center text-center"
        >
          <a
            href="https://github.com/Manikandan063?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            id="view-more-projects-btn"
            className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-[var(--text-main)] bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] shadow-md hover:shadow-[0_0_20px_var(--glow)] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base"
          >
            <FaGithub size={20} className="text-[var(--primary-light)] group-hover:scale-110 transition-transform duration-300" />
            <span>Click to View More Projects</span>
            <ArrowUpRight size={18} className="text-[var(--text-muted)] group-hover:text-[var(--primary-light)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
