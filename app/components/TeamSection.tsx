'use client';

import React from 'react';

export default function TeamSection() {
  return (
    <section id="about" className="bg-slate-900/50 border-y border-white/5 section-texture">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-3 w-3 rounded bg-gradient-to-r from-pink-400 to-rose-500"></div>
          <h2 className="text-2xl md:text-3xl font-semibold">Leadership</h2>
        </div>
        <p className="mt-2 text-white/70 max-w-2xl mb-8">Meet our founders—seasoned leaders driving innovation through diverse perspectives and proven expertise.</p>
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Tessa Profile */}
          <article className="glass-card rounded-2xl overflow-hidden hover:glass-card-strong transition-all duration-300 group">
            <div className="relative h-48 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute -bottom-2 -right-2 h-32 w-32 rounded-full bg-white/10 blur-2xl"></div>
              <div className="absolute top-4 left-4 h-20 w-20 rounded-full bg-pink-400/20 blur-xl"></div>
              {/* Professional silhouette for Tessa */}
              <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 h-44 w-44" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="tessaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#1e293b', stopOpacity:0.9}} />
                    <stop offset="100%" style={{stopColor:'#334155', stopOpacity:0.9}} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="80" r="35" fill="url(#tessaGrad)" />
                <ellipse cx="100" cy="150" rx="55" ry="45" fill="url(#tessaGrad)" />
                {/* Hair silhouette */}
                <path d="M65 70 Q65 45 100 45 Q135 45 135 70 Q135 50 120 55 L115 50 Q100 40 85 50 L80 55 Q65 50 65 70" fill="#1e293b" opacity="0.5"/>
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Tessa Barron</h3>
                <span className="px-2 py-1 text-xs bg-cyan-400/20 text-cyan-300 rounded-full font-medium">CEO</span>
              </div>
              <p className="text-sm text-cyan-400 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Visionary CEO and enterprise sales leader with extensive healthcare industry expertise. Tessa transforms complex B2B processes into streamlined revenue engines and sustainable growth strategies.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs glass-card rounded-full">Enterprise Sales</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">Healthcare Tech</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">Strategic Growth</span>
              </div>
            </div>
          </article>
          
          {/* Matt Profile */}
          <article className="glass-card rounded-2xl overflow-hidden hover:glass-card-strong transition-all duration-300 group">
            <div className="relative h-48 bg-gradient-to-br from-blue-600 via-cyan-500 to-purple-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute -top-4 -left-4 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl"></div>
              <div className="absolute bottom-4 right-4 h-24 w-24 rounded-full bg-blue-400/20 blur-xl"></div>
              {/* Professional silhouette for Matt */}
              <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 h-44 w-44" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="mattGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#1e293b', stopOpacity:0.9}} />
                    <stop offset="100%" style={{stopColor:'#334155', stopOpacity:0.9}} />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="80" r="35" fill="url(#mattGrad)" />
                <ellipse cx="100" cy="150" rx="55" ry="45" fill="url(#mattGrad)" />
                {/* Sunglasses */}
                <rect x="70" y="75" width="25" height="12" rx="6" fill="#0f172a" opacity="0.8"/>
                <rect x="105" y="75" width="25" height="12" rx="6" fill="#0f172a" opacity="0.8"/>
                <rect x="95" y="79" width="10" height="3" fill="#0f172a" opacity="0.6"/>
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Matt Rippon</h3>
                <span className="px-2 py-1 text-xs bg-purple-400/20 text-purple-300 rounded-full font-medium">CTO</span>
              </div>
              <p className="text-sm text-purple-400 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Technology strategist with startup leadership experience. Matt specializes in bridging the gap between ambitious vision and market reality through scalable systems.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs glass-card rounded-full">Product Strategy</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">AI & Automation</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">Startup Growth</span>
              </div>
            </div>
          </article>

          {/* Gus Gus Profile */}
          <article className="glass-card rounded-2xl overflow-hidden hover:glass-card-strong transition-all duration-300 group">
            <div className="relative h-48 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-orange-400/30 blur-2xl"></div>
              <div className="absolute top-4 right-4 h-24 w-24 rounded-full bg-amber-400/30 blur-xl"></div>
              {/* Boxer dog silhouette */}
              <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 h-44 w-44" viewBox="0 0 200 200">
                <defs>
                  <linearGradient id="gusGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#92400e', stopOpacity:0.95}} />
                    <stop offset="50%" style={{stopColor:'#a16207', stopOpacity:0.95}} />
                    <stop offset="100%" style={{stopColor:'#78350f', stopOpacity:0.95}} />
                  </linearGradient>
                  <linearGradient id="gusLight" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor:'#d97706', stopOpacity:0.8}} />
                    <stop offset="100%" style={{stopColor:'#ea580c', stopOpacity:0.8}} />
                  </linearGradient>
                </defs>
                {/* Body */}
                <ellipse cx="100" cy="150" rx="50" ry="40" fill="url(#gusGrad)" />
                {/* Chest patch */}
                <ellipse cx="100" cy="140" rx="20" ry="25" fill="#fef3c7" opacity="0.4" />
                {/* Head */}
                <ellipse cx="100" cy="90" rx="40" ry="38" fill="url(#gusGrad)" />
                {/* Snout */}
                <ellipse cx="100" cy="105" rx="22" ry="18" fill="url(#gusLight)" />
                {/* Black snout area */}
                <ellipse cx="100" cy="110" rx="15" ry="12" fill="#1f2937" opacity="0.7" />
                {/* Ears */}
                <ellipse cx="70" cy="75" rx="12" ry="20" fill="#451a03" transform="rotate(-20 70 75)" />
                <ellipse cx="130" cy="75" rx="12" ry="20" fill="#451a03" transform="rotate(20 130 75)" />
                {/* Eyes */}
                <circle cx="85" cy="85" r="4" fill="#1f2937" />
                <circle cx="115" cy="85" r="4" fill="#1f2937" />
                <circle cx="86" cy="84" r="1.5" fill="#fff" opacity="0.8" />
                <circle cx="116" cy="84" r="1.5" fill="#fff" opacity="0.8" />
                {/* Nose */}
                <ellipse cx="100" cy="112" rx="5" ry="3" fill="#000" />
                {/* Collar */}
                <rect x="60" y="125" width="80" height="8" rx="4" fill="#1e40af" opacity="0.8" />
                <circle cx="100" cy="133" r="4" fill="#fbbf24" />
              </svg>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold">Gus Gus</h3>
                <span className="px-2 py-1 text-xs bg-amber-400/20 text-amber-300 rounded-full font-medium">CWO</span>
              </div>
              <p className="text-sm text-amber-400 font-medium mb-3">Chief Waggin' Officer</p>
              <p className="text-sm text-white/80 leading-relaxed">
                Office morale specialist and certified good boy. Gus Gus brings unparalleled enthusiasm to every meeting and ensures the team takes proper snack breaks.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-2 py-1 text-xs glass-card rounded-full">Team Morale</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">Security</span>
                <span className="px-2 py-1 text-xs glass-card rounded-full">Treats Expert</span>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-white/60">
            🌟 Proud to be a women-led technology consultancy driving innovation through diverse leadership and inclusive practices.
          </p>
        </div>
      </div>
    </section>
  );
}
