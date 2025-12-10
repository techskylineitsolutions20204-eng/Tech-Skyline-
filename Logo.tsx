import React from 'react';

export const TechSkylineLogo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  const isLarge = size === "large";
  
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-lg" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="skylineGrad" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#22d3ee" />   {/* cyan-400 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Building 1 */}
        <path d="M15 45V90H35V45L25 35L15 45Z" fill="url(#skylineGrad)" opacity="0.8" />
        
        {/* Building 2 (Tallest) */}
        <path d="M40 20V90H60V20L50 10L40 20Z" fill="url(#skylineGrad)" />
        
        {/* Building 3 */}
        <path d="M65 35V90H85V35L75 25L65 35Z" fill="url(#skylineGrad)" opacity="0.9" />
        
        {/* Tech Nodes/Connections */}
        <circle cx="25" cy="55" r={isLarge ? 3 : 4} fill="white" />
        <circle cx="50" cy="30" r={isLarge ? 3 : 4} fill="white" />
        <circle cx="75" cy="45" r={isLarge ? 3 : 4} fill="white" />
        
        <path d="M25 55L50 30L75 45" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 2" />
      </svg>
    </div>
  );
};
