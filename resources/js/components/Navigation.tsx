
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../utils/constants';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Handle scroll detection for floating header effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to dynamically highlight current active section on scroll
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pointer-events-none transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav
          className={`pointer-events-auto mx-auto transition-all duration-500 ease-out flex items-center justify-between ${
            scrolled
              ? 'max-w-5xl bg-[#1E2430]/85 backdrop-blur-xl border border-[#00C4CC]/25 shadow-2xl shadow-[#00C4CC]/5 rounded-full px-5 py-2.5'
              : 'w-full bg-transparent px-2 py-3'
          }`}
        >
          {/* Logo & Live Status */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative flex items-center justify-center">
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#00C4CC] via-teal-200 to-[#00C4CC] group-hover:scale-105 transition-transform duration-300">
                AM.
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#171C24]/80 border border-[#283141]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C4CC] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C4CC]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#00C4CC]">Active</span>
            </div>
          </div>

          {/* Desktop Nav Menu Pill List */}
          <div className="hidden md:flex items-center bg-[#171C24]/70 p-1.5 rounded-full border border-[#283141]/80 backdrop-blur-md shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00C4CC] text-[#171C24] shadow-md shadow-[#00C4CC]/20 scale-105'
                      : 'text-[#9EA8B6] hover:text-white hover:bg-[#00C4CC]/10 hover:scale-105'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Area (LinkedIn, GitHub & Compact Hire Me CTA) */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#171C24] text-[#9EA8B6] hover:text-[#00C4CC] border border-[#283141] hover:border-[#00C4CC]/40 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#171C24] text-[#9EA8B6] hover:text-[#00C4CC] border border-[#283141] hover:border-[#00C4CC]/40 transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-[#00C4CC] text-[#171C24] text-xs font-extrabold hover:bg-[#1AD1D9] hover:shadow-lg hover:shadow-[#00C4CC]/30 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-[#171C24] text-[#9EA8B6] hover:text-[#00C4CC] border border-[#283141] transition-all focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="h-5 w-5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#12161E]/80 backdrop-blur-md z-40 md:hidden pointer-events-auto animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Glass Panel */}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#171C24]/95 backdrop-blur-2xl z-50 transform transition-transform duration-300 ease-out md:hidden shadow-2xl border-l border-[#283141] pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#283141]">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-[#00C4CC]">AM.</span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-[#00C4CC]/10 text-[#00C4CC] border border-[#00C4CC]/20 rounded-full">Menu</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-[#9EA8B6] hover:text-white rounded-full hover:bg-[#1E2430] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-2 flex-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#00C4CC] text-[#171C24] shadow-md shadow-[#00C4CC]/20'
                      : 'text-[#9EA8B6] hover:text-white hover:bg-[#1E2430]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#171C24]"></span>
                  )}
                </a>
              );
            })}
          </div>

          <div className="mt-auto pt-6 border-t border-[#283141] space-y-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-4 rounded-xl bg-[#00C4CC] text-[#171C24] font-extrabold text-center block shadow-lg shadow-[#00C4CC]/20 hover:bg-[#1AD1D9] transition-colors"
            >
              Hire Me
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 text-[#9EA8B6] hover:text-[#00C4CC] transition-colors font-bold text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span>GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
