import React from 'react';

const StatusPill = ({ text = "Open to Professional Opportunities in Audit & Compliance", className = "" }) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E5E0D8] bg-white/70 backdrop-blur-xs text-xs tracking-wide text-[#353B40] ${className}`}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#71816F] opacity-60"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#71816F]"></span>
      </span>
      <span className="font-medium">{text}</span>
    </div>
  );
};

export default StatusPill;

