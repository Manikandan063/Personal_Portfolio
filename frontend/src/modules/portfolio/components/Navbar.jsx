import React, { useState } from 'react';
import { Code2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--bg-surface)]/85 backdrop-blur-xl border-b border-[var(--border-color)] transition-colors duration-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              window.history.pushState(null, '', '/');
            }}
            className="flex items-center gap-2 text-[var(--text-main)] font-extrabold text-xl tracking-tight group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] group-hover:scale-105 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_15px_var(--glow)] transition-all">
              <Code2 size={22} />
            </div>
            <span>
              Manikandan<span className="text-[var(--primary)] font-black">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-[var(--text-muted)] hover:text-[var(--primary-light)] font-medium text-sm tracking-wide transition-colors">
              About
            </a>
            <a href="#skills" className="text-[var(--text-muted)] hover:text-[var(--primary-light)] font-medium text-sm tracking-wide transition-colors">
              Skills
            </a>
            <a href="#experience" className="text-[var(--text-muted)] hover:text-[var(--primary-light)] font-medium text-sm tracking-wide transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-[var(--text-muted)] hover:text-[var(--primary-light)] font-medium text-sm tracking-wide transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-[var(--text-muted)] hover:text-[var(--primary-light)] font-medium text-sm tracking-wide transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-main)]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-4 pt-3 pb-6 space-y-3">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-[var(--bg-card)]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
