'use client';

import React from 'react';
import TeamSection from './components/TeamSection';
import RipponLabsLogo from './components/RipponLabsLogo';

export default function RipponLabs() {
  const year = new Date().getFullYear();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    
    // Submit to Formspree (replace with your endpoint when ready)
    fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: form,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert("Thanks! We'll be in touch within one business day.");
        e.currentTarget.reset();
      } else {
        alert("There was a problem submitting your form. Please email us directly at contact@ripponlabs.com");
      }
    }).catch(error => {
      console.log("Form submission error", error);
      alert("There was a problem submitting your form. Please email us directly at contact@ripponlabs.com");
    });
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white scroll-smooth texture-noise">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card-strong">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <RipponLabsLogo size="small" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {[
              ["Services", "#services"],
              ["Approach", "#approach"],
              ["Work", "#work"],
              ["Stack", "#stack"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-xl px-3 py-1.5 bg-white text-slate-950 font-medium hover:opacity-90 transition">
              Book Intro Call
            </a>
          </nav>
          <a href="#contact" className="md:hidden inline-flex items-center rounded-xl px-3 py-1.5 bg-white text-slate-950 font-medium">
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden hero-bg-enhanced">
        <div className="absolute inset-0 opacity-20 pointer-events-none hero-pattern" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl float-animation" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500 blur-3xl float-animation" style={{animationDelay: '2s'}} />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 rounded-full bg-purple-400 blur-3xl opacity-30 float-animation" style={{animationDelay: '4s'}} />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Transform vision into velocity.
              <br />
              <span className="text-white/80">Scale with startup precision.</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl">
              Strategic technology consulting for businesses ready to accelerate. We bridge the gap between ambitious goals and market execution—delivering measurable growth at startup speed.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-cyan-400 text-slate-950 font-semibold shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:brightness-95 transition">
                Book Intro Call
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-2xl px-5 py-3 border border-white/15 text-white hover:bg-white/5 transition">
                See Work
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              Women-led startup execution meets enterprise expertise. Technology leadership + strategic sales operations.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-900/50 border-y border-white/5 section-texture">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded bg-gradient-to-r from-cyan-400 to-purple-500"></div>
            <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">Strategic consulting that bridges vision and execution. Our diverse leadership team delivers transformation with startup speed and enterprise wisdom.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Digital Transformation",
                sub: "Modernize operations, accelerate growth.",
                bullets: ["Technology Strategy", "Digital Products", "Process Optimization", "Platform Architecture"],
                icon: "🚀"
              },
              {
                title: "Growth Acceleration", 
                sub: "Scale revenue, optimize conversion.",
                bullets: ["Go-to-Market Strategy", "Sales Operations", "Customer Journey", "Performance Analytics"],
                icon: "📈"
              },
              {
                title: "AI & Automation",
                sub: "Intelligent systems, measurable ROI.",
                bullets: ["Strategic Implementation", "Workflow Automation", "Data Intelligence", "Risk Assessment"],
                icon: "🤖"
              },
              {
                title: "Executive Advisory",
                sub: "Trusted counsel, proven results.",
                bullets: ["Technology Leadership", "Strategic Planning", "Team Development", "Market Entry"],
                icon: "💡"
              },
            ].map((card) => (
              <div key={card.title} className="glass-card rounded-2xl p-5 hover:glass-card-strong transition-all duration-300 group">
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-1 text-sm text-white/70">{card.sub}</p>
                <ul className="mt-4 space-y-1 text-sm text-white/80">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="tech-pattern">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <h2 className="text-2xl md:text-3xl font-semibold">Approach</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">Four steps, weekly demos, measurable outcomes. Our methodology combines agile principles with strategic oversight.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Discover", "1–2 weeks to align on goals, risks, and constraints.", "🔍"],
              ["Design", "Prototypes, UX flows, and technical plan.", "✏️"],
              ["Build", "Sprint to a working slice; iterate with usage data.", "⚡"],
              ["Prove", "Ship, measure, and expand what's working.", "📊"],
            ].map(([title, copy, icon], i) => (
              <li key={title} className="glass-card rounded-2xl p-5 hover:glass-card-strong transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-white/60">Step {i + 1}</div>
                  <div className="text-xl group-hover:scale-110 transition-transform duration-300">{icon}</div>
                </div>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{copy as string}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-slate-900/50 border-y border-white/5 section-texture">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded bg-gradient-to-r from-green-400 to-cyan-500"></div>
            <h2 className="text-2xl md:text-3xl font-semibold">Impact & Results</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">Cross-industry outcomes that demonstrate our strategic approach. More case studies available upon request.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Revenue Operations",
                metric: "40% faster sales cycle + 25% higher conversion",
                copy: "Unified CRM processes and automated lead nurturing across enterprise sales teams.",
                image: "📊"
              },
              {
                title: "Digital Platform Launch",
                metric: "6-month faster time-to-market", 
                copy: "Streamlined product development with agile methodology and rapid iteration cycles.",
                image: "🚀"
              },
              {
                title: "Process Automation",
                metric: "60% reduction in manual workflows",
                copy: "Implemented intelligent automation saving 15+ hours per week across operations.",
                image: "⚙️"
              },
            ].map((item) => (
              <article key={item.title} className="glass-card rounded-2xl p-5 hover:glass-card-strong transition-all duration-300 group image-overlay">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.image}</div>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-400/20 to-purple-500/20 flex items-center justify-center">
                    <div className="h-6 w-6 rounded bg-cyan-400/30"></div>
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-cyan-300 font-medium">{item.metric}</p>
                <p className="mt-2 text-sm text-white/80">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="tech-pattern">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-3 w-3 rounded bg-gradient-to-r from-blue-400 to-indigo-500"></div>
            <h2 className="text-2xl md:text-3xl font-semibold">Stack & Tools</h2>
          </div>
          <p className="mt-2 text-white/70 max-w-2xl">Proven tools we reach for first. Our technology choices reflect years of hands-on experience.</p>
          <ul className="mt-6 flex flex-wrap gap-2 text-sm text-white/80">
            {[
              "Next.js",
              "React", 
              "Tailwind",
              "Python",
              "Supabase",
              "OpenAI",
              "Twilio",
              "PostHog",
              "GA4",
              "Vercel",
              "Netlify",
            ].map((t) => (
              <li key={t} className="glass-card rounded-full px-3 py-1 hover:glass-card-strong transition-all duration-300 hover:scale-105">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <TeamSection />

      {/* Contact */}
      <section id="contact" className="tech-pattern">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-3 w-3 rounded bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                <h2 className="text-2xl md:text-3xl font-semibold">Tell us what you're building</h2>
              </div>
              <p className="mt-2 text-white/70 max-w-xl">
                We'll reply with 1–2 practical ways to make it real this quarter.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80 mb-1">Name</label>
                  <input id="name" name="name" required className="w-full rounded-xl glass-card px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/80 mb-1">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-xl glass-card px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 transition-all" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm text-white/80 mb-1">What's your primary challenge?</label>
                  <select id="interest" name="interest" className="w-full rounded-xl glass-card px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 transition-all">
                    <option>Digital Transformation</option>
                    <option>Growth & Revenue Operations</option>
                    <option>AI & Automation Strategy</option>
                    <option>Technology Leadership</option>
                    <option>Other Strategic Initiative</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm text-white/80 mb-1">Budget Range (optional)</label>
                  <select id="budget" name="budget" className="w-full rounded-xl glass-card px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 transition-all">
                    <option>Undisclosed</option>
                    <option>$2k–$5k</option>
                    <option>$5k–$15k</option>
                    <option>$15k–$50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm text-white/80 mb-1">Details / Links</label>
                  <textarea id="details" name="details" rows={4} className="w-full rounded-xl glass-card px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400 transition-all" placeholder="Brief, links, problems to solve" />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white text-slate-950 font-semibold hover:opacity-90 transition">
                  Submit
                </button>
                <p className="text-xs text-white/60 mt-2">
                  Prefer email? <a className="underline hover:no-underline" href="mailto:contact@ripponlabs.com">contact@ripponlabs.com</a>
                </p>
              </form>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">📅</div>
                <h3 className="text-lg font-semibold">Book a call</h3>
              </div>
              <p className="mt-2 text-sm text-white/80 mb-4">Pick a time that works. We'll come prepared.</p>
              {/* Demo booking placeholder */}
              <div className="aspect-video w-full rounded-xl glass-card-strong grid place-items-center text-center p-6 image-overlay">
                <div className="text-white/60">
                  <div className="mb-2 text-3xl">📅</div>
                  <p className="text-sm">Calendar booking coming soon!</p>
                  <p className="text-xs mt-1">For now, email us to schedule a call</p>
                </div>
              </div>
              <div className="mt-4">
                <a href="mailto:contact@ripponlabs.com?subject=Schedule%20Intro%20Call" className="inline-flex items-center rounded-xl px-4 py-2 glass-card hover:glass-card-strong transition-all">
                  Email to Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 glass-card">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-gradient-to-r from-cyan-400 to-purple-500"></span>
            <span>Rippon Labs LLC</span>
            <span className="hidden md:inline">• Women-Led Technology Consultancy</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition-colors" href="mailto:contact@ripponlabs.com">contact@ripponlabs.com</a>
            <a className="hover:text-white transition-colors" href="/privacy">Privacy</a>
            <span>© {year}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
