'use client';

import React from 'react';

interface RipponLabsLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

export default function RipponLabsLogo({ size = 'medium', showText = true, className = '' }: RipponLabsLogoProps) {
  const dimensions = {
    small: { logo: 32, text: 'text-sm' },
    medium: { logo: 48, text: 'text-base' },
    large: { logo: 64, text: 'text-lg' }
  };

  const { logo: logoSize, text: textSize } = dimensions[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo SVG with R and Beaker design */}
      <div className="relative">
        <svg 
          width={logoSize} 
          height={logoSize} 
          viewBox="0 0 64 64" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <defs>
            {/* Main gradient for the R and beaker */}
            <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" /> {/* cyan-500 */}
              <stop offset="50%" stopColor="#3b82f6" /> {/* blue-500 */}
              <stop offset="100%" stopColor="#8b5cf6" /> {/* purple-500 */}
            </linearGradient>
            
            {/* Liquid gradient for beaker content */}
            <linearGradient id="liquidGradient" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
            </linearGradient>

            {/* Glow effect */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            {/* Bubble pattern for liquid */}
            <pattern id="bubbles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="#ffffff" opacity="0.3">
                <animate attributeName="cy" values="5;-5;5" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="15" cy="15" r="0.8" fill="#ffffff" opacity="0.3">
                <animate attributeName="cy" values="15;-5;15" dur="4s" repeatCount="indefinite"/>
              </circle>
              <circle cx="10" cy="10" r="0.6" fill="#ffffff" opacity="0.3">
                <animate attributeName="cy" values="10;-5;10" dur="3.5s" repeatCount="indefinite"/>
              </circle>
            </pattern>
          </defs>

          {/* Background circle with subtle gradient */}
          <circle cx="32" cy="32" r="30" fill="url(#mainGradient)" opacity="0.1" />
          
          {/* Beaker outline (integrated with R shape) */}
          <g filter="url(#glow)">
            {/* Beaker body forming part of the R */}
            <path
              d="M38 20 L38 14 L44 14 L44 20 L44 44 Q44 50 38 50 L26 50 Q20 50 20 44 L20 20"
              stroke="url(#mainGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
            
            {/* Beaker neck/top */}
            <path
              d="M36 14 L36 10 L46 10 L46 14"
              stroke="url(#mainGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />

            {/* Liquid inside beaker */}
            <path
              d="M22 35 L22 44 Q22 48 26 48 L38 48 Q42 48 42 44 L42 35"
              fill="url(#liquidGradient)"
              opacity="0.7"
            />
            
            {/* Animated bubbles in liquid */}
            <rect x="22" y="35" width="20" height="13" fill="url(#bubbles)" clipPath="inset(0 round 4px)" />

            {/* Heavy R letter integrated with beaker */}
            <g>
              {/* R vertical stroke (bold) */}
              <rect x="12" y="14" width="6" height="36" fill="url(#mainGradient)" rx="1" />
              
              {/* R top curve connecting to beaker */}
              <path
                d="M18 14 L26 14 Q32 14 32 20 L32 24 Q32 30 26 30 L18 30"
                stroke="url(#mainGradient)"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* R diagonal leg */}
              <path
                d="M18 28 L28 50"
                stroke="url(#mainGradient)"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </g>

            {/* Science bubbles floating up (animated) */}
            <circle cx="35" cy="40" r="2" fill="#06b6d4" opacity="0.6">
              <animate attributeName="cy" values="40;25;40" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="28" cy="42" r="1.5" fill="#3b82f6" opacity="0.6">
              <animate attributeName="cy" values="42;28;42" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="39" cy="38" r="1" fill="#8b5cf6" opacity="0.6">
              <animate attributeName="cy" values="38;30;38" dur="1.8s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </g>

          {/* Measurement marks on beaker */}
          <g opacity="0.3">
            <line x1="20" y1="25" x2="23" y2="25" stroke="url(#mainGradient)" strokeWidth="1" />
            <line x1="20" y1="30" x2="23" y2="30" stroke="url(#mainGradient)" strokeWidth="1" />
            <line x1="20" y1="35" x2="23" y2="35" stroke="url(#mainGradient)" strokeWidth="1" />
            <line x1="20" y1="40" x2="23" y2="40" stroke="url(#mainGradient)" strokeWidth="1" />
          </g>
        </svg>
        
        {/* Animated glow effect behind logo */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-20 blur-xl animate-pulse" />
        </div>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight leading-none bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${textSize}`}>
            Rippon Labs
          </span>
          <span className="text-xs text-white/60 leading-none mt-0.5">
            Innovate. Experiment. Grow.
          </span>
        </div>
      )}
    </div>
  );
}
