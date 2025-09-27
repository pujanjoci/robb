import React from 'react';
import Robb from '../assets/robb.jpg';
import Resume from '../assets/Resume_Robb.pdf';

const Hero = () => {
  const handleViewResume = () => {
    // Open PDF in new tab for viewing
    window.open(Resume, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadResume = () => {
    // Create download link
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'Ravi_Shrestha_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 flex items-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, white 2px, transparent 0)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl text-center md:text-start font-bold mb-4">
              Ravi <span className="text-green-500">Shrestha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-center md:text-start text-blue-200 mb-6">
              Audit Associate
            </h2>
            <p className="text-lg text-blue-100 text-center md:text-start mb-8 leading-relaxed max-w-2xl">
              Audit Associate with 3+ years of experience in accounting, auditing, and compliance. 
              Proficient in Tally, Swastik, Busy, and Excel for maintaining accurate financial records. 
              Skilled in client communication, resolving discrepancies, and ensuring compliance with 
              VAT, income tax, and payroll regulations.
            </p>
            
            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              {/* <button 
                onClick={scrollToProjects}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                View My Work
              </button> */}
              
              <div className="flex gap-2">
                <button 
                  onClick={handleViewResume}
                  className="border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View CV
                </button>
                
                {/* <button 
                  onClick={handleDownloadResume}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </button> */}
              </div>
            </div>
          </div>
          
          {/* Profile Image Section */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Main Profile Image */}
              <div className="w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-green-300/30 shadow-2xl overflow-hidden">
                <img 
                  src={Robb} 
                  alt="Ravi Shrestha - Audit Associate" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* Floating Tech Badges */}
              <FloatingBadge 
                position="top-right" 
                color="yellow" 
                text="Tally" 
              />
              <FloatingBadge 
                position="bottom-left" 
                color="blue" 
                text="Excel" 
              />
              <FloatingBadge 
                position="middle-right" 
                color="red" 
                text="Swastik" 
                small 
              />
              <FloatingBadge 
                position="middle-left" 
                color="purple" 
                text="Busy" 
                small 
              />
            </div>
          </div>
        </div>

        {/* Quick Stats - Uncomment if needed */}
        {/* <QuickStats /> */}
      </div>
      
      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

// Floating Badge Component
const FloatingBadge = ({ position, color, text, small = false }) => {
  const positionClasses = {
    'top-right': '-top-4 -right-4',
    'bottom-left': '-bottom-4 -left-4',
    'middle-right': 'top-1/2 -right-8 -translate-y-1/2',
    'middle-left': 'top-1/2 -left-8 -translate-y-1/2'
  };

  const colorClasses = {
    yellow: 'bg-yellow-400/20 border-yellow-300/30',
    blue: 'bg-blue-400/20 border-blue-300/30',
    red: 'bg-red-400/20 border-red-300/30',
    purple: 'bg-purple-400/20 border-purple-300/30'
  };

  const sizeClasses = small ? 'w-16 h-16' : 'w-20 h-20';
  const textSizeClass = small ? 'text-xs' : 'text-sm';

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses} ${colorClasses[color]} rounded-full backdrop-blur-sm border flex items-center justify-center`}>
      <span className={`text-white font-bold ${textSizeClass}`}>{text}</span>
    </div>
  );
};

// Scroll Indicator Component
const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
    <div className="animate-bounce">
      <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
);

// Quick Stats Component (Optional - keep commented if not needed)
const QuickStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl">
    <StatCard number="3+" label="Years Experience" color="green" />
    <StatCard number="50+" label="Projects Completed" color="blue" />
    <StatCard number="100%" label="Client Satisfaction" color="yellow" />
    <StatCard number="4+" label="Software Tools" color="purple" />
  </div>
);

// Stat Card Component
const StatCard = ({ number, label, color }) => {
  const colorClasses = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    yellow: 'text-yellow-400',
    purple: 'text-purple-400'
  };

  return (
    <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
      <div className={`text-2xl md:text-3xl font-bold ${colorClasses[color]}`}>
        {number}
      </div>
      <div className="text-white/80 text-sm">{label}</div>
    </div>
  );
};

export default Hero;