import React from 'react';
import { portfolioData } from '../../data/portfolio';

const MetricsStrip = () => {
  const { metrics } = portfolioData;

  return (
    <section id="snapshot" className="bg-white border-b border-[#E5E0D8] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[11px] uppercase tracking-widest text-[#B39A73] font-mono font-semibold mb-6">
          Professional Snapshot
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E0D8]">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`py-6 md:py-2 ${idx === 0 ? 'md:pr-8' : idx === 1 ? 'md:px-8' : 'md:pl-8'}`}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#192D40] font-normal tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm uppercase tracking-wider text-[#71816F] font-medium font-sans">
                  {metric.label}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#353B40]/80 mt-1 font-light">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsStrip;

