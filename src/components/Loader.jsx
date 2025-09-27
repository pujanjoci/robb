import React, { useState, useEffect } from 'react';
import Robb from '../assets/robb.jpg';

const Loader = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => onLoaded(), 500);
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, [onLoaded]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-gray-100 z-50 flex items-center justify-center">
      <div className="text-center w-80">
        {/* Logo with Image */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg mx-auto mb-4">
            {/* Image with fallback */}
            <img 
              src={Robb}
              alt="Ravi Shrestha"
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-2xl hidden">
              RS
            </div>
          </div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ravi Shrestha
          </h1>
          <p className="text-gray-600 mt-2">Audit Associate</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span className="font-medium">Loading portfolio...</span>
            <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300 ease-out shadow-md"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading Steps */}
        <div className="text-left text-sm text-gray-600 space-y-2 bg-white/50 rounded-lg p-4 shadow-sm">
          <div className={`flex items-center transition-all duration-300 ${
            progress > 20 ? 'text-green-600 scale-105' : 'text-gray-500'
          }`}>
            <span className="w-5 mr-2 text-base">
              {progress > 20 ? '✓' : '•'}
            </span>
            <span className="font-medium">Loading professional profile...</span>
          </div>
          <div className={`flex items-center transition-all duration-300 ${
            progress > 50 ? 'text-green-600 scale-105' : 'text-gray-500'
          }`}>
            <span className="w-5 mr-2 text-base">
              {progress > 50 ? '✓' : '•'}
            </span>
            <span className="font-medium">Loading experience data...</span>
          </div>
          <div className={`flex items-center transition-all duration-300 ${
            progress > 80 ? 'text-green-600 scale-105' : 'text-gray-500'
          }`}>
            <span className="w-5 mr-2 text-base">
              {progress > 80 ? '✓' : '•'}
            </span>
            <span className="font-medium">Preparing portfolio...</span>
          </div>
        </div>

        {/* Loading Animation */}
        <div className="mt-6 flex justify-center space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;