"use client";

import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using KrishAIWorks, including our website, AI tools,
          utility tools and digital services, you agree to these Terms &
          Conditions.
        </p>
        <p>
          If you do not agree with these terms, please do not use our website
          or services.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "About KrishAIWorks",
    content: (
      <>
        <p>
          KrishAIWorks provides AI-powered tools, productivity utilities and
          other digital services designed to help users create, analyze,
          convert, organize and work with digital content.
        </p>
        <p>
          Our tools may be updated, modified, replaced or discontinued at any
          time as we improve the platform.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Use of Our Tools",
    content: (
      <>
        <p>
          You may use KrishAIWorks tools for lawful personal, educational or
          business purposes, subject to these terms.
        </p>
        <p>
          You agree not to misuse, abuse, disrupt, reverse engineer or attempt
          to gain unauthorized access to our website, tools, systems or
          infrastructure.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "AI-Generated Content",
    content: (
      <>
        <p>
          Some KrishAIWorks tools use artificial intelligence or third-party
          AI services to generate or process content.
        </p>
        <p>
          AI-generated results may contain errors, inaccuracies, omissions or
          outdated information. You are responsible for reviewing and
          verifying any output before relying on it.
        </p>
        <p>
          KrishAIWorks does not guarantee that AI-generated content will always
          be accurate, complete, original or suitable for a particular purpose.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "User Content and Uploaded Files",
    content: (
      <>
        <p>
          You are responsible for any text, documents, images, files or other
          content that you enter, upload or process through our tools.
        </p>
        <p>
          You must have the necessary rights and permissions to use any content
          that you submit to KrishAIWorks.
        </p>
        <p>
          Do not upload confidential, highly sensitive or unlawful material
          unless the specific tool clearly supports such use and you have
          appropriate authorization.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          The KrishAIWorks name, branding, logo, website design, original
          content, software, graphics and other platform materials are owned
          by or licensed to KrishAIWorks unless otherwise stated.
        </p>
        <p>
          You may not copy, reproduce, redistribute, modify or commercially
          exploit our website or proprietary materials without appropriate
          permission.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Third-Party Services",
    content: (
      <>
        <p>
          Certain KrishAIWorks tools may rely on third-party services,
          platforms, APIs, analytics providers, AI providers, hosting
          providers or other external technologies.
        </p>
        <p>
          Third-party services may have their own terms, policies and
          limitations. KrishAIWorks is not responsible for the independent
          operation, availability or policies of third-party services.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Availability and Changes",
    content: (
      <>
        <p>
          We aim to keep KrishAIWorks available and reliable, but we do not
          guarantee uninterrupted, error-free or continuous availability.
        </p>
        <p>
          Tools, features, pricing, functionality and content may be changed,
          suspended or discontinued at any time without prior notice.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Free Tools and Advertising",
    content: (
      <>
        <p>
          Some KrishAIWorks tools may be provided free of charge and may be
          supported by advertising or other forms of monetization.
        </p>
        <p>
          Advertisements may be displayed through third-party advertising
          providers. The presence of an advertisement does not constitute an
          endorsement or guarantee of the advertised product or service by
          KrishAIWorks.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Prohibited Activities",
    content: (
      <>
        <p>You agree not to use KrishAIWorks to:</p>
        <ul>
          <li>Break or violate applicable laws or regulations.</li>
          <li>Infringe another person's intellectual property or privacy.</li>
          <li>Upload or distribute malicious software or harmful content.</li>
          <li>Attempt unauthorized access to our systems or infrastructure.</li>
          <li>Interfere with the operation or security of our services.</li>
          <li>Abuse automated requests or otherwise overload our services.</li>
        </ul>
      </>
    ),
  },
  {
    number: "11",
    title: "Disclaimer",
    content: (
      <>
        <p>
          KrishAIWorks and its tools are provided on an "as available" basis.
          To the extent permitted by applicable law, we make no warranties
          regarding the accuracy, reliability, availability or suitability of
          our services for a particular purpose.
        </p>
        <p>
          Information or output provided by our tools should not automatically
          be treated as professional legal, financial, medical, educational or
          other expert advice.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, KrishAIWorks will
          not be responsible for indirect, incidental, consequential or
          special losses arising from your use of, or inability to use, our
          website or tools.
        </p>
        <p>
          You use our services at your own discretion and risk.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "External Links",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, services or
          platforms. These links are provided for convenience and do not mean
          that KrishAIWorks controls or endorses those external websites.
        </p>
        <p>
          You should review the terms and privacy policies of third-party
          websites before using them.
        </p>
      </>
    ),
  },
  {
    number: "14",
    title: "Privacy",
    content: (
      <>
        <p>
          Your use of KrishAIWorks is also subject to our Privacy Policy, which
          explains how information may be collected, used and handled.
        </p>
        <p>
          Please review our{" "}
          <Link
            href="/privacy-policy"
            className="text-violet-300 transition hover:text-fuchsia-300"
          >
            Privacy Policy
          </Link>{" "}
          for more information.
        </p>
      </>
    ),
  },
  {
    number: "15",
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          We may update these Terms & Conditions from time to time to reflect
          changes to our services, technology, legal requirements or business
          practices.
        </p>
        <p>
          Updated terms will be posted on this page with a revised "Last
          updated" date. Your continued use of KrishAIWorks after changes are
          posted means that you continue to use the service under the updated
          terms.
        </p>
      </>
    ),
  },
  {
    number: "16",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about these Terms & Conditions, you can contact
          KrishAIWorks through the following channels:
        </p>

        <div className="mt-6 space-y-3">
          <a
            href="mailto:krishaiworks@gmail.com"
            className="block text-violet-300 transition hover:text-fuchsia-300"
          >
            Email: krishaiworks@gmail.com
          </a>

          <a
            href="https://wa.me/919015321788"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-violet-300 transition hover:text-fuchsia-300"
          >
            WhatsApp: +91 90153 21788
          </a>

          <a
            href="https://instagram.com/krishaiworks"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-violet-300 transition hover:text-fuchsia-300"
          >
            Instagram: @krishaiworks
          </a>

          <a
            href="https://t.me/KrishAIworks"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-violet-300 transition hover:text-fuchsia-300"
          >
            Telegram: @KrishAIworks
          </a>
        </div>
      </>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/[0.12] blur-[140px]" />
        <div className="absolute right-[-250px] top-[500px] h-[600px] w-[600px] rounded-full bg-fuchsia-500/[0.07] blur-[140px]" />
        <div className="absolute bottom-[-300px] left-[-250px] h-[600px] w-[600px] rounded-full bg-indigo-500/[0.07] blur-[140px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 px-5 pt-7">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[28px] border border-white/[0.08] bg-white/[0.025] px-6 py-5 backdrop-blur-xl sm:px-7">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-12 w-12 rounded-full object-cover"
            />

            <div>
              <p className="text-lg font-semibold tracking-tight text-white">
                Krish<span className="text-cyan-300">AI</span>Works
              </p>
              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>
            </div>
          </Link>

          <Link
            href="/"
            className="rounded-2xl border border-violet-400/20 bg-violet-500/[0.10] px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-violet-300/40 hover:bg-violet-500/[0.16]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-5 pb-14 pt-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-5 py-2.5 text-sm text-zinc-400 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
            KrishAIWorks · Terms
          </div>

          <p className="mt-8 text-sm text-zinc-600">
            Last updated: September 2026
          </p>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Terms{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              & Conditions
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-zinc-400">
            These Terms & Conditions explain the rules and responsibilities
            that apply when you use KrishAIWorks, our AI tools, utility tools
            and digital services.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="relative z-10 px-5 pb-24">
        <div className="mx-auto max-w-5xl space-y-5">
          {sections.map((section) => (
            <article
              key={section.number}
              className="rounded-[28px] border border-white/[0.07] bg-white/[0.025] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-9"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-violet-400/15 bg-violet-500/[0.08] text-sm font-semibold text-violet-200">
                  {section.number}
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-semibold tracking-tight text-white">
                    {section.title}
                  </h2>

                  <div className="mt-6 space-y-5 text-[16px] leading-8 text-zinc-400">
                    {section.content}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-5 pb-20">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-white/[0.08] bg-gradient-to-br from-violet-500/[0.10] via-white/[0.025] to-cyan-500/[0.05] p-8 text-center backdrop-blur-xl sm:p-12">
          <p className="text-sm font-medium text-violet-300">
            KrishAIWorks
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Questions about our terms?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-400">
            If you have any questions about using KrishAIWorks or these Terms &
            Conditions, feel free to contact us.
          </p>

          <a
            href="mailto:krishaiworks@gmail.com"
            className="mt-7 inline-flex rounded-2xl border border-violet-300/20 bg-violet-500/[0.12] px-6 py-3 text-sm font-medium text-white transition hover:bg-violet-500/[0.20]"
          >
            Contact KrishAIWorks
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 sm:flex-row">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="KrishAIWorks"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p className="font-semibold text-white">KrishAIWorks</p>
              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>
            </div>
          </Link>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-zinc-600">
            <Link
              href="/"
              className="transition hover:text-zinc-300"
            >
              Home
            </Link>

            <Link
              href="/privacy-policy"
              className="transition hover:text-zinc-300"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-zinc-300"
            >
              Terms & Conditions
            </Link>

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-zinc-300"
            >
              Instagram
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs text-zinc-600">© 2026 KrishAIWorks</p>
            <p className="mt-1 text-xs text-zinc-700">Built with AI.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}