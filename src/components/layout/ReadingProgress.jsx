import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 h-[2px] bg-[#B39A73] z-60 transition-all duration-75 ease-out"
      style={{ width: `${scrollProgress}%` }}
      aria-hidden="true"
    />
  );
};

export default ReadingProgress;

