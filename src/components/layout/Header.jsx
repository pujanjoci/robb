import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';

const NAV_ITEMS = [
  { name: 'Profile', href: '#home', id: 'home', page: '01', subtitle: 'Overview & Background' },
  { name: 'Competencies', href: '#competencies', id: 'competencies', page: '02', subtitle: 'Practice Disciplines' },
  { name: 'Experience', href: '#experience', id: 'experience', page: '03', subtitle: 'Engagement History' },
  { name: 'Education', href: '#education', id: 'education', page: '04', subtitle: 'Academic Credentials' },
  { name: 'Contact', href: '#contact', id: 'contact', page: '05', subtitle: 'Direct Inquiries' }
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
          
          {/* Brand Logo Image & Name */}
          <a 
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <img
              src={portfolioData.personal.logo}
              alt={`${portfolioData.personal.name} Logo`}
              className="w-10 h-10 object-contain rounded-xs border border-[#E5E0D8] bg-white p-1 shadow-xs group-hover:border-[#B39A73] transition-colors duration-200"
            />
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-wide text-[#192D40] leading-tight">
                {portfolioData.personal.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#71816F] font-mono font-medium">
                {portfolioData.personal.role}
              </span>
            </div>
          </a>

          {/* Desktop Navigation: Page-Folio Tabs */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`inline-flex items-center px-3 py-1.5 text-xs uppercase tracking-wider font-mono transition-all duration-200 rounded-xs ${
                    isActive
                      ? 'bg-white text-[#192D40] border border-[#E5E0D8] shadow-xs font-semibold'
                      : 'text-[#353B40]/75 hover:text-[#192D40] hover:bg-white/60 border border-transparent'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className={`text-[10px] mr-1.5 ${isActive ? 'text-[#B39A73] font-bold' : 'text-[#71816F]/70'}`}>
                    p.{item.page}
                  </span>
                  <span>{item.name}</span>
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
            className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-xs border border-[#E5E0D8] bg-white text-[#192D40] text-xs font-mono uppercase tracking-wider hover:border-[#B39A73] transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span>{isMenuOpen ? "Close" : "Index"}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Editorial Chapter Directory (Page Feel) */}
      {isMenuOpen && (
        <div className="md:hidden border-b border-[#E5E0D8] bg-[#F6F4EF] shadow-lg animate-fadeIn">
          {/* Sheet Header */}
          <div className="px-6 py-3 border-b border-[#E5E0D8] bg-white/70 flex justify-between items-center text-[11px] font-mono uppercase tracking-widest text-[#71816F]">
            <span>Monograph Directory</span>
            <span>5 Folio Chapters</span>
          </div>

          {/* Chapter Pages List */}
          <div className="divide-y divide-[#E5E0D8] bg-white/50">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    isActive
                      ? 'bg-white border-l-4 border-[#B39A73]'
                      : 'hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-xl text-[#B39A73] font-normal w-6">
                      {item.page}
                    </span>
                    <div>
                      <div className="font-serif text-base text-[#192D40] font-medium leading-tight">
                        {item.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#71816F] mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#B39A73] font-semibold bg-[#B39A73]/10 px-2 py-0.5 rounded-xs">
                        Reading
                      </span>
                    )}
                    <span className="text-xs text-[#192D40] font-mono">→</span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Appendix / Action Footer */}
          <div className="p-5 border-t border-[#E5E0D8] bg-white">
            <a
              href={portfolioData.personal.cv}
              download="Ravi_Shrestha_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#192D40] text-[#F6F4EF] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#B39A73] transition-colors"
            >
              <span>Download Full CV Document (PDF)</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
