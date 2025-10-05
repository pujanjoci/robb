import React from 'react';

const SectionHeader = ({ index, eyebrow, title, description, className = "" }) => {
  return (
    <div className={`mb-12 md:mb-16 border-b border-[#E5E0D8] pb-6 md:pb-8 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-end">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B39A73] font-semibold">
              {index}
            </span>
            <span className="h-px w-6 bg-[#B39A73]/50"></span>
            <span className="text-xs uppercase tracking-wider text-[#71816F] font-medium">
              {eyebrow}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#192D40] mt-3 font-normal leading-tight">
            {title}
          </h2>
        </div>
        {description && (
          <div className="md:col-span-8 md:pl-6">
            <p className="text-base md:text-lg text-[#353B40]/80 leading-relaxed max-w-2xl">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;

