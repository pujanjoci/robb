import React, { useState, useEffect } from 'react';
import { portfolioData } from '../../data/portfolio';

const Loader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Smooth progress increment over ~750ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate towards the end
        const increment = prev < 60 ? 15 : 25;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, 150);

      const finishTimer = setTimeout(() => {
        if (onFinished) onFinished();
      }, 700);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onFinished]);

  return (
    <div 
      className={`fixed inset-0 z-100 bg-[#F6F4EF] flex flex-col items-center justify-center transition-all duration-700 ease-out ${
        isFading ? 'opacity-0 pointer-events-none scale-102' : 'opacity-100'
      }`}
      aria-hidden={isFading}
    >
      <div className="flex flex-col items-center max-w-xs w-full px-6 text-center">
        
        {/* Brand Logo Image */}
        <img
          src={portfolioData.personal.logo}
          alt={`${portfolioData.personal.name} Logo`}
          className="w-16 h-16 object-contain rounded-xs shadow-xs mb-5 border border-[#E5E0D8] bg-white p-1.5"
        />

        {/* Identity */}
        <h1 className="font-serif text-2xl text-[#192D40] tracking-wide font-normal mb-1">
          {portfolioData.personal.name}
        </h1>
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] mb-6">
          Audit & Accounting Monograph
        </p>

        {/* Hairline Progress Bar */}
        <div className="w-full bg-[#E5E0D8] h-[2px] overflow-hidden relative mb-3">
          <div 
            className="h-full bg-[#192D40] transition-all duration-150 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Meta details */}
        <div className="w-full flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#353B40]/60">
          <span>Kathmandu, Nepal</span>
          <span>{progress}%</span>
        </div>

      </div>
    </div>
  );
};

export default Loader;

