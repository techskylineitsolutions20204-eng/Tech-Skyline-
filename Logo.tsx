import React, { useId } from 'react';

export const TechSkylineLogo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  const id = useId().replace(/:/g, "");
  const gradId = `logo-grad-${id}`;
  const glowId = `logo-glow-${id}`;

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={gradId} x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Abstract Skyline / Building Blocks */}
        <path d="M15 45V90H35V45L25 35L15 45Z" fill={`url(#${gradId})`} opacity="0.8" />
        <path d="M40 20V90H60V20L50 10L40 20Z" fill={`url(#${gradId})`} />
        <path d="M65 35V90H85V35L75 25L65 35Z" fill={`url(#${gradId})`} opacity="0.9" />
        
        {/* Connectivity Nodes */}
        <circle cx="25" cy="55" r="4" fill="white" filter={`url(#${glowId})`} />
        <circle cx="50" cy="30" r="4" fill="white" filter={`url(#${glowId})`} />
        <circle cx="75" cy="45" r="4" fill="white" filter={`url(#${glowId})`} />
        
        {/* Network Lines */}
        <path d="M25 55L50 30L75 45" stroke="white" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 2" />
      </svg>
    </div>
  );
};