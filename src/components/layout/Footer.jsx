import React from 'react';
import { portfolioData } from '../../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F6F4EF] border-t border-[#E5E0D8] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-[#E5E0D8]">
          
          {/* Brand & Identity */}
          <div className="md:col-span-5 flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-xs bg-[#192D40] text-[#F6F4EF] font-serif text-base font-normal">
              {personal.monogram}
            </span>
            <div>
              <p className="font-serif text-base text-[#192D40] font-medium leading-tight">
                {personal.name}
              </p>
              <p className="text-xs uppercase tracking-wider text-[#71816F] font-mono">
                {personal.role} · {personal.shortLocation}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs uppercase tracking-widest font-mono text-[#353B40]">
            <a href="#home" className="hover:text-[#B39A73] transition-colors">Profile</a>
            <a href="#competencies" className="hover:text-[#B39A73] transition-colors">Competencies</a>
            <a href="#experience" className="hover:text-[#B39A73] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#B39A73] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#B39A73] transition-colors">Contact</a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#B39A73] transition-colors text-[#B39A73]"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Back to top action */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-[#192D40] hover:text-[#B39A73] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <span>↑</span>
            </button>
          </div>

        </div>

        {/* Copyright & Secondary Meta */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#353B40]/70 font-mono">
          <p>© {currentYear} {personal.name}. All rights reserved.</p>
          <p>Editorial Financial Portfolio · Built with React & Tailwind</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

