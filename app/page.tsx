'use client';

import React from 'react';

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
    <main className="min-h-screen bg-slate-950 text-white scroll-smooth">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                {/* Stylized R logo placeholder - replace with actual logo when available */}
                <div className="h-8 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-md flex items-center justify-center">
                  <span className="text-slate-950 font-bold text-sm">R</span>
                </div>
              </div>
              <div className="ml-2 flex flex-col">
                <span className="font-semibold tracking-tight leading-none">Rippon Labs</span>
                <span className="text-xs text-white/60 leading-none">Innovate. Experiment. Grow.</span>
              </div>
            </div>
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
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Build what customers feel.
              <br />
              <span className="text-white/80">Measure what leaders trust.</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 max-w-2xl">
              Web, AI, and product systems — shipped with startup speed. We turn ambiguity into shipped outcomes: prototypes, rollouts, and revenue.
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
              Ex‑startup PM + sales operator. Senior‑living SaaS, CRM, mobile, analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-slate-900/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Services</h2>
          <p className="mt-2 text-white/70 max-w-2xl">We're operators who ship. Strategy turns into commits, and commits into outcomes.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Web & Product",
                sub: "Launch fast, iterate faster.",
                bullets: ["Marketing sites", "MVPs", "Dashboards", "Mobile UX"],
              },
              {
                title: "AI Consulting",
                sub: "Make AI a teammate, not a toy.",
                bullets: ["Agents", "Automations", "RAG", "Evaluation"],
              },
              {
                title: "Growth Ops",
                sub: "Close the loop.",
                bullets: ["CRM logging", "Reporting", "Activation", "RCS pilots"],
              },
              {
                title: "Advisory",
                sub: "Experienced hands on your roadmap.",
                bullets: ["Fractional PM", "GTM Experiments", "Analytics"],
              },
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
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
      <section id="approach">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Approach</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Four steps, weekly demos, measurable outcomes.</p>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              ["Discover", "1–2 weeks to align on goals, risks, and constraints."],
              ["Design", "Prototypes, UX flows, and technical plan."],
              ["Build", "Sprint to a working slice; iterate with usage data."],
              ["Prove", "Ship, measure, and expand what's working."],
            ].map(([title, copy], i) => (
              <li key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="text-sm text-white/60">Step {i + 1}</div>
                <h3 className="mt-1 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{copy as string}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="bg-slate-900/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Selected Work</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Outcomes we can discuss publicly. More on request.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Senior‑Living SaaS",
                metric: "+10% of monthly shares via automation",
                copy: "Added tour CTAs and tracking to player pages.",
              },
              {
                title: "Mobile Video",
                metric: "Android SDK upgrade; teleprompter adoption ↑",
                copy: "Improved clip uploads and scriptwriter completion.",
              },
              {
                title: "CRM Ops",
                metric: "Unified activity across Salesforce/HubSpot",
                copy: "Zero‑dev Chrome logging pilot to reduce manual steps.",
              },
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-cyan-300 font-medium">{item.metric}</p>
                <p className="mt-2 text-sm text-white/80">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Stack & Tools</h2>
          <p className="mt-2 text-white/70 max-w-2xl">Proven tools we reach for first.</p>
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
              <li key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-slate-900/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">About</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Matt Rippon</h3>
              <p className="mt-2 text-sm text-white/80">
                Principal Product Manager. Shipped automation, analytics, and CRM integrations across web and mobile. Activation mindset from first touch to tour request.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Tessa Barron</h3>
              <p className="mt-2 text-sm text-white/80">
                CEO. Discovery, messaging, stakeholder alignment, sales training. Turns product value into revenue and long‑term partnerships.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Tell us what you're building</h2>
              <p className="mt-2 text-white/70 max-w-xl">
                We'll reply with 1–2 practical ways to make it real this quarter.
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Contact form">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/80">Name</label>
                  <input id="name" name="name" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/80">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm text-white/80">What do you want to build?</label>
                  <select id="interest" name="interest" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400">
                    <option>Web / Marketing Site</option>
                    <option>Product / MVP</option>
                    <option>AI Implementation</option>
                    <option>Growth Ops / CRM</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm text-white/80">Budget Range (optional)</label>
                  <select id="budget" name="budget" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400">
                    <option>Undisclosed</option>
                    <option>$2k–$5k</option>
                    <option>$5k–$15k</option>
                    <option>$15k–$50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm text-white/80">Details / Links</label>
                  <textarea id="details" name="details" rows={4} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Brief, links, problems to solve" />
                </div>
                <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center rounded-2xl px-5 py-3 bg-white text-slate-950 font-semibold hover:opacity-90 transition">
                  Submit
                </button>
                <p className="text-xs text-white/60 mt-2">
                  Prefer email? <a className="underline hover:no-underline" href="mailto:contact@ripponlabs.com">contact@ripponlabs.com</a>
                </p>
              </form>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Book a call</h3>
              <p className="mt-2 text-sm text-white/80">Pick a time that works. We'll come prepared.</p>
              {/* Demo booking placeholder */}
              <div className="mt-4 aspect-video w-full rounded-xl border border-white/10 bg-slate-950 grid place-items-center text-center p-6">
                <div className="text-white/60">
                  <div className="mb-2">📅</div>
                  <p className="text-sm">Calendar booking coming soon!</p>
                  <p className="text-xs mt-1">For now, email us to schedule a call</p>
                </div>
              </div>
              <div className="mt-4">
                <a href="mailto:contact@ripponlabs.com?subject=Schedule%20Intro%20Call" className="inline-flex items-center rounded-xl px-4 py-2 border border-white/15 hover:bg-white/5 transition">
                  Email to Schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm bg-cyan-400" />
            <span>Rippon Labs LLC</span>
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="mailto:contact@ripponlabs.com">contact@ripponlabs.com</a>
            <a className="hover:text-white" href="/privacy">Privacy</a>
            <span>© {year}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
