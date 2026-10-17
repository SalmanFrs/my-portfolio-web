import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { profile } = portfolioData;

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
      <div className="h-16 max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-space-md">
          <a
            className="flex items-center gap-space-xs group rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim"
            href="#home"
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 rounded bg-surface-container-high border border-outline-variant/50 flex items-center justify-center font-label-md text-label-md text-primary group-hover:border-primary transition-colors">
              {profile.initials}
            </div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-body-md font-semibold tracking-tight text-on-surface group-hover:text-primary transition-colors">
                {profile.fullName}, {profile.degree}
              </span>
              <span className="font-label-sm text-label-sm text-outline">
                Informatics Engineer • Portfolio
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-space-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'transition-colors text-primary font-medium bg-surface-container-highest/60 rounded px-2.5 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-surface-dim text-body-sm font-body-sm'
                    : 'font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface px-2.5 py-1 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-surface-dim'
                }
                href={link.href}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Status / Avatar */}
        <div className="flex items-center gap-space-sm">
          {profile.openToRoles && (
            <div className="hidden sm:flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-surface-container-low border border-outline-variant/40">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Open to Work
              </span>
            </div>
          )}

          <a
            className="hidden sm:inline-flex items-center justify-center px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim"
            href="#contact"
            onClick={() => handleNavClick('contact')}
          >
            Contact Me
          </a>

          <img
            alt={profile.fullName}
            className="w-8 h-8 rounded-full object-cover object-[center_35%] border border-outline-variant/60 ml-space-xs"
            src={profile.avatarUrl.replace(/^\/public\//, '/')}
          />

          {/* Mobile drawer toggle */}
          <button
            aria-label="Toggle Menu"
            className="lg:hidden flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] rounded bg-surface-container text-on-surface-variant hover:text-on-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-surface-dim/95 backdrop-blur-2xl border-b border-outline-variant/30 px-gutter-mobile py-space-md flex flex-col gap-space-sm animate-in fade-in duration-200">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`px-space-md py-2 text-body-md rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                activeSection === link.id
                  ? 'text-primary bg-surface-container font-medium'
                  : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
              }`}
              href={link.href}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-outline-variant/30 flex items-center justify-between">
            <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              Open to Work
            </span>
            <a
              className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary text-body-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim"
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
