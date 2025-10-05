import React from 'react';
import { portfolioData } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section 
      id="experience" 
      className="py-16 md:py-24 bg-white border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual-layer Section Header */}
        <SectionHeader
          index="03 / ENGAGEMENT HISTORY"
          eyebrow="Work History"
          title="Professional Experience"
          description="Chronological audit and accounting engagements detailing day-to-day statutory responsibilities and workpaper preparation."
        />

        {/* Editorial Timeline */}
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              className="border border-[#E5E0D8] bg-[#F6F4EF]/40 p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left Meta Column */}
                <div className="lg:col-span-4 lg:border-r lg:border-[#E5E0D8] lg:pr-8">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#192D40] text-[#F6F4EF] text-[11px] font-mono uppercase tracking-wider mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B39A73]"></span>
                    <span>{exp.status}</span>
                  </div>
                  
                  <div className="font-serif text-lg text-[#192D40] font-medium">
                    {exp.period}
                  </div>
                  
                  <div className="text-xs font-mono text-[#71816F] uppercase tracking-wider mt-1">
                    {exp.location}
                  </div>
                </div>

                {/* Right Details Column */}
                <div className="lg:col-span-8 lg:pl-4">
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#192D40] font-normal leading-tight">
                    {exp.title}
                  </h3>
                  
                  <p className="text-base text-[#B39A73] font-medium mt-1 mb-4">
                    {exp.organization}
                  </p>

                  <p className="text-sm sm:text-base text-[#353B40] leading-relaxed mb-6 font-light">
                    {exp.summary}
                  </p>

                  <div className="border-t border-[#E5E0D8] pt-5">
                    <h4 className="text-xs uppercase tracking-widest text-[#192D40] font-mono font-bold mb-3">
                      Key Responsibilities & Scope
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start text-sm text-[#353B40] leading-relaxed">
                          <span className="text-[#B39A73] mr-2.5 font-mono text-xs mt-0.5">—</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

