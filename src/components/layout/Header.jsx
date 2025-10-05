import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';

const NAV_ITEMS = [
  { name: 'Profile', href: '#home', id: 'home' },
  { name: 'Competencies', href: '#competencies', id: 'competencies' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Education', href: '#education', id: 'education' },
  { name: 'Contact', href: '#contact', id: 'contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-[#F6F4EF]/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-xs' 
        : 'bg-[#F6F4EF] border-b border-[#E5E0D8]/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Brand Monogram & Name */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xs bg-[#192D40] text-[#F6F4EF] font-serif text-lg tracking-wider font-normal group-hover:bg-[#B39A73] transition-colors duration-200">
              {portfolioData.personal.monogram}
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wide text-[#192D40] leading-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#71816F] font-medium">
                {portfolioData.personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs uppercase tracking-widest font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#192D40] font-semibold'
                      : 'text-[#353B40]/70 hover:text-[#192D40]'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B39A73]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download CV */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={portfolioData.personal.cv}
              download="Ravi_Shrestha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-[#192D40] text-[#192D40] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#192D40] hover:text-[#F6F4EF] transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#B39A73]"
            >
              <span>Download CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xs text-[#192D40] hover:bg-[#E5E0D8]/40 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-[#E5E0D8] bg-[#F6F4EF] px-4 pt-3 pb-6 space-y-2 shadow-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`block px-3 py-2 text-sm font-medium rounded-xs ${
                activeSection === item.id
                  ? 'bg-white text-[#192D40] font-semibold border-l-2 border-[#B39A73]'
                  : 'text-[#353B40] hover:bg-white/60'
              }`}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E0D8]">
            <a
              href={portfolioData.personal.cv}
              download="Ravi_Shrestha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#192D40] text-[#F6F4EF] text-xs font-semibold uppercase tracking-wider rounded-xs"
            >
              <span>Download CV</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
