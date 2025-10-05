import React from 'react';
import { portfolioData } from '../../data/portfolio';
import SectionHeader from '../ui/SectionHeader';

const Competencies = () => {
  const { competencies, frameworks } = portfolioData;

  return (
    <section 
      id="competencies" 
      className="py-16 md:py-24 bg-[#F6F4EF] border-b border-[#E5E0D8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dual-layer Section Header */}
        <SectionHeader
          index="02 / COMPETENCIES"
          eyebrow="Core Disciplines"
          title="Areas of Practice"
          description="Contextualized competencies in financial accounting, workpaper documentation, statutory tax administration, and audit fieldwork."
        />

        {/* 4 Competency Blocks (Editorial Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {competencies.map((comp) => (
            <div 
              key={comp.number}
              className="bg-white border border-[#E5E0D8] p-6 sm:p-8 flex flex-col justify-between hover:border-[#B39A73] transition-colors duration-200"
            >
              <div>
                <div className="flex items-baseline justify-between mb-4 border-b border-[#E5E0D8]/60 pb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B39A73] font-semibold">
                    {comp.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#71816F] font-mono font-medium">
                    {comp.tools}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#192D40] font-normal mb-4">
                  {comp.title}
                </h3>

                <ul className="space-y-2.5">
                  {comp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-[#353B40] leading-relaxed">
                      <span className="text-[#B39A73] mr-2.5 font-mono text-xs mt-0.5">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory & Reporting Frameworks */}
        <div className="border border-[#E5E0D8] bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#E5E0D8]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B39A73]"></span>
              <h3 className="text-xs uppercase tracking-widest text-[#192D40] font-mono font-bold">
                Regulatory & Reporting Frameworks
              </h3>
            </div>
            <span className="text-xs text-[#71816F] font-mono mt-1 sm:mt-0">
              Statutory Working Knowledge · Nepal
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {frameworks.map((fw, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-base font-serif text-[#192D40] font-semibold">
                  {fw.name}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#B39A73] font-mono mt-0.5 mb-2">
                  {fw.full}
                </span>
                <p className="text-xs text-[#353B40]/80 leading-relaxed font-light">
                  {fw.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Competencies;

