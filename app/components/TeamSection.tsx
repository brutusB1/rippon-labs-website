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
              {/* Profile photo */}
              <img 
                src="/images/team/SCR-20250926-gjn.jpeg" 
                alt="Tessa Barron, CEO"
                className="absolute inset-4 w-auto h-40 object-cover object-center rounded-lg opacity-90 shadow-2xl"
              />
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
              {/* Profile photo */}
              <img 
                src="/images/team/SCR-20250926-gje.jpeg" 
                alt="Matt Rippon, CTO"
                className="absolute inset-4 w-auto h-40 object-cover object-center rounded-lg opacity-90 shadow-2xl"
              />
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
              {/* Profile photo */}
              <img 
                src="/images/team/SCR-20250926-gjw.jpeg" 
                alt="Gus Gus, Chief Waggin' Officer"
                className="absolute inset-4 w-auto h-40 object-cover object-center rounded-lg opacity-90 shadow-2xl"
              />
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
