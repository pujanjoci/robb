import React from 'react';
import { portfolioData } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section 
      id="education" 
      className="py-16 md:py-24 bg-[#F6F4EF] border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual-layer Section Header */}
        <SectionHeader
          index="04 / ACADEMIC BACKGROUND"
          eyebrow="Qualifications"
          title="Education & Studies"
          description="Formal academic qualifications in business management, accounting frameworks, and corporate financial strategy."
        />

        {/* Education Chronological Grid */}
        <div className="border border-[#E5E0D8] bg-white divide-y divide-[#E5E0D8]">
          {education.map((item, idx) => (
            <div 
              key={idx}
              className="p-6 sm:p-8 hover:bg-[#F6F4EF]/30 transition-colors duration-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                
                {/* Year & Status */}
                <div className="md:col-span-3">
                  <span className="font-mono text-sm text-[#192D40] font-semibold block">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#71816F] font-medium mt-1 inline-block">
                    {item.status}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div className="md:col-span-9">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#192D40] font-normal">
                    {item.degree}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-1 mb-3 text-sm text-[#B39A73] font-medium">
                    <span>{item.institution}</span>
                    <span className="text-[#E5E0D8]">•</span>
                    <span className="text-xs font-mono text-[#353B40]/70">{item.location}</span>
                  </div>

                  <p className="text-sm text-[#353B40]/85 leading-relaxed font-light">
                    {item.notes}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;

