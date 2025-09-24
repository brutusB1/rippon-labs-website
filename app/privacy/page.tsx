export default function Privacy() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <header className="mb-8">
          <a href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6">
            ← Back to Home
          </a>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Privacy Policy</h1>
          <p className="text-white/70">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Information We Collect</h2>
            <p className="text-white/80 mb-4">
              When you contact us through our website forms, we collect:
            </p>
            <ul className="text-white/80 mb-4 space-y-2">
              <li>• Your name and email address</li>
              <li>• Project details and requirements you share with us</li>
              <li>• Budget range (if provided)</li>
              <li>• Any additional information you choose to provide</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">How We Use Your Information</h2>
            <p className="text-white/80 mb-4">
              We use the information you provide to:
            </p>
            <ul className="text-white/80 mb-4 space-y-2">
              <li>• Respond to your inquiries and project requests</li>
              <li>• Understand your needs and provide relevant services</li>
              <li>• Communicate with you about potential projects</li>
              <li>• Improve our services and website experience</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Information Sharing</h2>
            <p className="text-white/80 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="text-white/80 mb-4 space-y-2">
              <li>• With your explicit consent</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and safety</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Data Security</h2>
            <p className="text-white/80 mb-4">
              We implement appropriate security measures to protect your personal information. 
              However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Cookies and Analytics</h2>
            <p className="text-white/80 mb-4">
              Our website may use cookies and analytics tools to improve user experience and 
              understand how our site is used. You can control cookie settings through your browser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Your Rights</h2>
            <p className="text-white/80 mb-4">
              You have the right to:
            </p>
            <ul className="text-white/80 mb-4 space-y-2">
              <li>• Request access to your personal information</li>
              <li>• Request correction of inaccurate information</li>
              <li>• Request deletion of your information</li>
              <li>• Opt out of future communications</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">Contact Us</h2>
            <p className="text-white/80 mb-4">
              If you have questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <p className="text-cyan-400">
              <a href="mailto:contact@ripponlabs.com" className="hover:text-cyan-300">
                contact@ripponlabs.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-white">Changes to This Policy</h2>
            <p className="text-white/80">
              We may update this Privacy Policy from time to time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "last updated" date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
