import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolio';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const { personal, summary } = portfolioData;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${personal.email}`;
    }
  };

  const handleScrollToNext = (e) => {
    e.preventDefault();
    document.querySelector('#snapshot')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#F6F4EF] border-b border-[#E5E0D8] flex flex-col justify-between pt-22 md:pt-24 pb-6 md:pb-8 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Editorial Index Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]/70">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B39A73] font-semibold">
              01 / PROFILE
            </span>
            <span className="h-px w-6 bg-[#B39A73]/50"></span>
            <span className="text-xs uppercase tracking-wider text-[#71816F] font-mono">
              Personal Portfolio
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-[#353B40]/70 font-mono">
            <span className="hidden sm:inline-block">Kathmandu, Nepal</span>
            <span className="text-[#E5E0D8] hidden sm:inline-block">•</span>
            <span>Audit Associate</span>
          </div>
        </div>

        {/* Main Content Area (Vertically Centered on Full Page) */}
        <div className="my-auto py-8 md:py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <p className="text-xs uppercase tracking-widest text-[#B39A73] font-mono font-semibold mb-2">
              Audit & Accounting Professional
            </p>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-[#192D40] font-normal leading-[1.06] tracking-tight mb-5">
              {personal.name}
            </h1>

            {/* Gold Hairline Divider */}
            <div className="w-16 h-0.5 bg-[#B39A73] mb-6"></div>

            {/* Bio Summaries */}
            <div className="space-y-4 text-base sm:text-lg text-[#353B40] leading-relaxed mb-8 max-w-2xl font-light">
              <p>
                {summary[0]}
              </p>
              <p className="text-[#353B40]/85 text-sm sm:text-base">
                {summary[1]}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-[#E5E0D8]">
              <a
                href={personal.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#192D40] text-[#F6F4EF] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-[#B39A73] transition-colors duration-200"
              >
                <span>View Full CV</span>
                <span className="text-sm">↗</span>
              </a>

              <a
                href="#contact"
                onClick={handleScrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#192D40] text-[#192D40] text-xs font-semibold uppercase tracking-wider rounded-xs hover:bg-white transition-colors duration-200"
              >
                <span>Get in Touch</span>
                <span className="text-sm">↓</span>
              </a>

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-3 text-[#353B40] text-xs font-mono uppercase tracking-wider hover:text-[#192D40] hover:bg-white/60 rounded-xs transition-colors border border-transparent hover:border-[#E5E0D8] cursor-pointer"
                title="Copy email address"
              >
                <svg className="w-4 h-4 text-[#B39A73]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>{copied ? "Email Copied!" : "Copy Email"}</span>
              </button>
            </div>

          </div>

          {/* Right Column: Rectangular Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
            <div className="w-full max-w-sm sm:max-w-md bg-white p-3.5 border border-[#E5E0D8] shadow-sm">
              <div className="relative aspect-[3/4] max-h-[460px] lg:max-h-[500px] w-full overflow-hidden bg-[#E5E0D8]/40">
                <img
                  src={personal.portrait}
                  alt={`Portrait of ${personal.name}`}
                  className="w-full h-full object-cover object-center filter grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-baseline text-xs text-[#353B40]/75 border-t border-[#E5E0D8]/70 mt-2 font-mono">
                <span className="font-medium text-[#192D40]">{personal.name}</span>
                <span>{personal.role} · Nepal</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Editorial Cue Bar (Fills 100vh Base) */}
        <div className="pt-4 border-t border-[#E5E0D8] flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono text-[#71816F]">
          <div className="flex items-center gap-3">
            <span className="inline-block w-2 h-2 rounded-full bg-[#B39A73]"></span>
            <span className="uppercase tracking-widest text-[#353B40]">
              Based in Nepal · Kathmandu / Bhaktapur
            </span>
          </div>

          <div className="hidden md:block uppercase tracking-widest text-[#353B40]/60">
            Vitthartha Sewa Pvt. Ltd.
          </div>

          {/* Interactive Scroll Cue */}
          <a
            href="#snapshot"
            onClick={handleScrollToNext}
            className="group inline-flex items-center gap-2 uppercase tracking-widest text-[#192D40] hover:text-[#B39A73] transition-colors cursor-pointer"
          >
            <span>Scroll to Explore</span>
            <span className="transform group-hover:translate-y-0.5 transition-transform duration-200">↓</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
