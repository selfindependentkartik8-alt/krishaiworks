"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white selection:bg-violet-400/30">
      {/* ========================================================= */}
      {/* AURORA BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Main aurora */}
        <div className="absolute left-1/2 top-[-320px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/[0.13] via-violet-500/[0.18] to-cyan-400/[0.12] blur-[180px]" />

        {/* Violet */}
        <div className="absolute left-[-280px] top-[25%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.07] blur-[170px]" />

        {/* Cyan */}
        <div className="absolute right-[-280px] top-[42%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[170px]" />

        {/* Pink */}
        <div className="absolute left-[35%] top-[68%] h-[500px] w-[600px] rounded-full bg-fuchsia-500/[0.045] blur-[180px]" />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[45%] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.018] blur-[180px]" />
      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-30 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-violet-400/20 bg-white/[0.05] shadow-lg shadow-violet-500/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-base font-black tracking-[-0.03em] text-white sm:text-lg">
                Krish
                <span className="font-black text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
                  AI
                </span>
                Works
              </h2>

              <p className="text-[9px] font-medium tracking-wide text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </Link>

          {/* Back to home */}
          <Link
            href="/"
            className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/15 sm:px-5 sm:py-2.5 sm:text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-12 pt-20 sm:px-8 sm:pt-28">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs text-zinc-300 shadow-xl shadow-black/20 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 shadow-lg shadow-violet-400/50" />
            KrishAIWorks · Privacy
          </div>

          <p className="mt-5 text-xs text-zinc-600">
            Last updated: September 2026
          </p>

          <h1 className="mt-6 text-4xl font-extrabold tracking-[-0.04em] text-white sm:text-6xl">
            Privacy{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            This Privacy Policy explains how KrishAIWorks collects, uses and
            protects information when you use our website, AI tools, utility
            tools and digital services.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* POLICY CONTENT */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-24 sm:px-8">
        <div className="space-y-5">
          {/* 1 */}
          <PolicyCard
            number="01"
            title="Information We Collect"
          >
            <p>
              KrishAIWorks may collect limited information that is necessary
              to provide, maintain and improve our website and tools.
            </p>

            <p>
              Depending on the tool or service you use, this may include
              information that you voluntarily provide, such as your name,
              email address, contact details, text entered into a tool or
              files uploaded for processing.
            </p>

            <p>
              We may also automatically receive technical information such as
              browser type, device type, operating system, approximate
              location, pages visited and general usage information.
            </p>
          </PolicyCard>

          {/* 2 */}
          <PolicyCard
            number="02"
            title="How Our Tools Handle Your Information"
          >
            <p>
              Different KrishAIWorks tools may process different types of
              information depending on their functionality.
            </p>

            <p>
              Some utility tools are designed to perform processing directly
              in your browser. When processing happens locally, the relevant
              information may not need to be uploaded to our servers.
            </p>

            <p>
              Other tools, particularly AI-powered tools, may need to send
              submitted information to a third-party service or API in order
              to generate a result. The specific processing method can vary
              between tools.
            </p>

            <p>
              Users should avoid submitting passwords, payment information,
              highly sensitive personal information or other confidential
              information unless a particular tool explicitly requires it.
            </p>
          </PolicyCard>

          {/* 3 */}
          <PolicyCard
            number="03"
            title="Uploaded Files"
          >
            <p>
              Certain KrishAIWorks tools allow users to upload files such as
              PDFs, images, documents or other supported file types.
            </p>

            <p>
              Uploaded files may be processed temporarily to provide the
              requested functionality. Depending on the individual tool,
              processing may occur in the browser, on our infrastructure or
              through a third-party processing service.
            </p>

            <p>
              You are responsible for ensuring that you have the necessary
              rights and permissions to upload and process any file you submit
              through our tools.
            </p>
          </PolicyCard>

          {/* 4 */}
          <PolicyCard
            number="04"
            title="AI Services and Third-Party Providers"
          >
            <p>
              Some KrishAIWorks AI tools may use third-party artificial
              intelligence services, APIs, hosting providers or other
              technology providers to deliver functionality.
            </p>

            <p>
              Information submitted to an AI-powered tool may therefore be
              processed by the third-party service required for that tool to
              operate.
            </p>

            <p>
              Third-party providers have their own privacy policies and terms.
              KrishAIWorks does not control the privacy practices of external
              services.
            </p>
          </PolicyCard>

          {/* 5 */}
          <PolicyCard
            number="05"
            title="Analytics"
          >
            <p>
              KrishAIWorks uses Google Analytics to understand how visitors
              interact with our website and tools.
            </p>

            <p>
              Analytics may collect information such as pages viewed,
              interactions, device information, browser information and
              general usage patterns.
            </p>

            <p>
              This information helps us understand traffic, improve our tools,
              identify technical issues and improve the overall user
              experience.
            </p>
          </PolicyCard>

          {/* 6 */}
          <PolicyCard
            number="06"
            title="Cookies and Similar Technologies"
          >
            <p>
              KrishAIWorks and third-party services may use cookies or similar
              technologies for functionality, analytics, security and, where
              applicable, advertising.
            </p>

            <p>
              Your browser may allow you to control or disable certain cookies.
              Disabling cookies may affect some website functionality.
            </p>
          </PolicyCard>

          {/* 7 */}
          <PolicyCard
            number="07"
            title="Advertising"
          >
            <p>
              KrishAIWorks may display advertisements through third-party
              advertising services such as Google AdSense.
            </p>

            <p>
              Advertising providers may use cookies or similar technologies
              to display and measure advertisements and may process certain
              information in accordance with their own policies.
            </p>

            <p>
              Advertising functionality may be introduced or changed as the
              KrishAIWorks platform develops.
            </p>
          </PolicyCard>

          {/* 8 */}
          <PolicyCard
            number="08"
            title="How We Use Information"
          >
            <p>Information may be used to:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Provide and operate our tools and services.</li>
              <li>Process requests submitted through our tools.</li>
              <li>Improve website functionality and user experience.</li>
              <li>Monitor website performance and usage.</li>
              <li>Maintain security and prevent abuse.</li>
              <li>Respond to user inquiries and support requests.</li>
              <li>Understand traffic and improve our products.</li>
            </ul>
          </PolicyCard>

          {/* 9 */}
          <PolicyCard
            number="09"
            title="Data Sharing"
          >
            <p>
              KrishAIWorks does not intend to sell users' personal information.
            </p>

            <p>
              Information may be shared with service providers when necessary
              to operate a particular tool or service, such as hosting,
              analytics, AI processing, communications or advertising.
            </p>

            <p>
              Information may also be disclosed when required by applicable
              law, legal process or to protect the rights, security and
              integrity of KrishAIWorks and its users.
            </p>
          </PolicyCard>

          {/* 10 */}
          <PolicyCard
            number="10"
            title="Data Security"
          >
            <p>
              We take reasonable measures to protect information against
              unauthorized access, misuse, alteration or disclosure.
            </p>

            <p>
              However, no internet transmission or electronic storage system
              can be guaranteed to be completely secure. Users should avoid
              submitting highly sensitive or confidential information unless
              specifically required by a service.
            </p>
          </PolicyCard>

          {/* 11 */}
          <PolicyCard
            number="11"
            title="Data Retention"
          >
            <p>
              The amount of time information is retained depends on the
              purpose for which it was collected and the requirements of the
              relevant service.
            </p>

            <p>
              Information that is only required to process a tool request may
              be retained for a shorter period, while information required for
              analytics, security, support or legal purposes may be retained
              for longer where appropriate.
            </p>
          </PolicyCard>

          {/* 12 */}
          <PolicyCard
            number="12"
            title="External Links"
          >
            <p>
              KrishAIWorks may contain links to third-party websites,
              platforms, social media services or other external resources.
            </p>

            <p>
              We are not responsible for the privacy practices, content or
              security of third-party websites. We recommend reviewing their
              privacy policies before providing information to them.
            </p>
          </PolicyCard>

          {/* 13 */}
          <PolicyCard
            number="13"
            title="Children's Privacy"
          >
            <p>
              KrishAIWorks is not specifically directed toward children under
              the applicable minimum age for online services in their
              jurisdiction.
            </p>

            <p>
              We do not knowingly request personal information from children
              where doing so would violate applicable law.
            </p>
          </PolicyCard>

          {/* 14 */}
          <PolicyCard
            number="14"
            title="Your Choices"
          >
            <p>
              Depending on the information and service involved, you may have
              rights to request access to, correction of or deletion of
              certain personal information, subject to applicable law.
            </p>

            <p>
              You may also control certain browser cookies and analytics
              preferences through available browser or platform settings.
            </p>
          </PolicyCard>

          {/* 15 */}
          <PolicyCard
            number="15"
            title="Changes to This Privacy Policy"
          >
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our tools, services, technology, legal requirements
              or business practices.
            </p>

            <p>
              When changes are made, the updated version will be published on
              this page with a revised “Last updated” date.
            </p>
          </PolicyCard>

          {/* 16 */}
          <PolicyCard
            number="16"
            title="Contact Us"
          >
            <p>
              If you have questions about this Privacy Policy or how
              KrishAIWorks handles information, you can contact us through:
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="mailto:krishaiworks@gmail.com"
                className="block rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/20 hover:bg-white/[0.04] hover:text-violet-200"
              >
                ✉️ krishaiworks@gmail.com
              </a>

              <a
                href="https://wa.me/919015321788"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/20 hover:bg-white/[0.04] hover:text-violet-200"
              >
                💬 WhatsApp
              </a>

              <a
                href="https://instagram.com/krishaiworks"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/20 hover:bg-white/[0.04] hover:text-violet-200"
              >
                📸 Instagram
              </a>

              <a
                href="https://t.me/KrishAIworks"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3 text-sm text-zinc-300 transition hover:border-violet-400/20 hover:bg-white/[0.04] hover:text-violet-200"
              >
                ✈️ Telegram
              </a>
            </div>
          </PolicyCard>
        </div>

        {/* Bottom navigation */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-xl sm:flex-row">
          <div>
            <p className="text-sm font-semibold text-white">
              KrishAIWorks
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              AI Solutions That Work
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-xs text-zinc-500">
            <Link
              href="/"
              className="transition hover:text-violet-300"
            >
              Home
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-violet-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-violet-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06] px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="KrishAIWorks Logo"
              className="h-12 w-12 rounded-full border border-violet-400/20 object-cover shadow-lg shadow-violet-500/10"
            />

            <div>
              <p className="font-semibold text-white">KrishAIWorks</p>

              <p className="mt-1 text-xs text-zinc-600">
                AI Solutions That Work
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-5 text-xs text-zinc-600">
            <Link
              href="/"
              className="transition hover:text-violet-300"
            >
              Home
            </Link>

            <Link
              href="/terms-and-conditions"
              className="transition hover:text-violet-300"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/#contact"
              className="transition hover:text-violet-300"
            >
              Contact
            </Link>

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-300"
            >
              Instagram
            </a>
          </div>

          <div className="text-center sm:text-right">
            <p className="text-xs text-zinc-600">© 2026 KrishAIWorks</p>

            <p className="mt-1 text-xs text-zinc-700">
              Built with AI.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================================================= */
/* POLICY CARD */
/* ============================================================= */

function PolicyCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/[0.07] text-xs font-bold text-violet-300">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
            {title}
          </h2>

          <div className="mt-5 space-y-4 text-sm leading-7 text-zinc-500">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}