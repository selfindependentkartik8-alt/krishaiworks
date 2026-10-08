"use client";

import { useMemo, useState } from "react";

type Category = "AI" | "Utility";

type Tool = {
  name: string;
  description: string;
  category: Category;
  href: string;
  icon: string;
};

const tools: Tool[] = [
  // =========================
  // AI TOOLS — 16
  // =========================

  {
    name: "PDF AI Summarizer",
    description:
      "Turn long PDF documents into clear, concise and useful AI-powered summaries.",
    category: "AI",
    href: "https://pdfaisummarizer.krishaiworks.com/",
    icon: "📄",
  },
  {
    name: "Smart Note AI",
    description:
      "Organize ideas, notes and information into clear and structured content with AI.",
    category: "AI",
    href: "https://smartnotes.krishaiworks.com",
    icon: "📝",
  },
  {
    name: "YouTube Video AI Summarizer",
    description:
      "Get the key points from YouTube videos without watching the entire video.",
    category: "AI",
    href: "https://youtubeaisummarizer.krishaiworks.com",
    icon: "▶",
  },
  {
    name: "AI Email Writer",
    description:
      "Write professional, polished and effective emails in seconds with AI.",
    category: "AI",
    href: "https://aiemailwriter.krishaiworks.com",
    icon: "✉",
  },
  {
    name: "AI Resume Generator",
    description:
      "Create a professional, job-ready resume with AI-powered content generation.",
    category: "AI",
    href: "https://airesumegenerator.krishaiworks.com",
    icon: "CV",
  },
  {
    name: "AI Study Assistant",
    description:
      "Understand difficult topics, summarize information and study smarter with AI.",
    category: "AI",
    href: "https://aistudyassistant.krishaiworks.com",
    icon: "AI",
  },
  {
    name: "AI Resume Analyzer",
    description:
      "Analyze your resume and discover practical ways to improve its impact.",
    category: "AI",
    href: "https://airesumeanalyzer.krishaiworks.com",
    icon: "⌕",
  },
  {
    name: "AI Cover Letter Generator",
    description:
      "Create personalized and professional cover letters for your job applications.",
    category: "AI",
    href: "https://aicoverlettergenerator.krishaiworks.com",
    icon: "CL",
  },
  {
    name: "AI YouTube Title & Description Generator",
    description:
      "Generate engaging YouTube titles and descriptions for your videos.",
    category: "AI",
    href: "https://aiyoutubetitledescriptiongenerator.krishaiworks.com",
    icon: "YT",
  },
  {
    name: "AI Instagram Caption Generator",
    description:
      "Create engaging captions for Instagram posts, reels and social content.",
    category: "AI",
    href: "https://aiinstagramcaptiongenerator.krishaiworks.com",
    icon: "IG",
  },
  {
    name: "AI LinkedIn Post Generator",
    description:
      "Generate professional and engaging LinkedIn posts with AI.",
    category: "AI",
    href: "https://ailinkedinpostgenerator.krishaiworks.com",
    icon: "IN",
  },
  {
    name: "AI Blog Generator",
    description:
      "Create structured, readable and engaging blog content with AI.",
    category: "AI",
    href: "https://aibloggenerator.krishaiworks.com",
    icon: "✎",
  },
  {
    name: "AI Subtitle Generator",
    description:
      "Generate subtitles and captions for your videos quickly with AI.",
    category: "AI",
    href: "https://aisubtitlegenerator.krishaiworks.com",
    icon: "CC",
  },
  {
    name: "AI Email Reply Generator",
    description:
      "Generate natural, professional and context-aware email replies.",
    category: "AI",
    href: "https://aiemailreplyngenerator.krishaiworks.com",
    icon: "↩",
  },
  {
    name: "AI Text Humanizer",
    description:
      "Make AI-generated writing sound more natural, readable and human.",
    category: "AI",
    href: "https://aitexthumanizer.krishaiworks.com",
    icon: "✦",
  },
  {
    name: "AI Grammar & Writing Fixer",
    description:
      "Improve grammar, spelling, clarity and overall writing quality with AI.",
    category: "AI",
    href: "https://aigrammarwritingfixer.krishaiworks.com",
    icon: "✓",
  },

  // =========================
  // UTILITY TOOLS — 13
  // =========================

  {
    name: "Image Resizer & Compressor",
    description:
      "Resize and compress images quickly while keeping them optimized.",
    category: "Utility",
    href: "https://imageresizercompressor.krishaiworks.com",
    icon: "IMG",
  },
  {
    name: "PDF Compressor",
    description:
      "Reduce PDF file size while keeping your documents easy to use and share.",
    category: "Utility",
    href: "https://pdfcompressor.krishaiworks.com",
    icon: "PDF",
  },
  {
    name: "PDF Merger & Splitter",
    description:
      "Merge multiple PDFs or split documents into separate files with ease.",
    category: "Utility",
    href: "https://pdfmergersplitter.krishaiworks.com",
    icon: "PDF",
  },
  {
    name: "Image to PDF Converter",
    description:
      "Convert your images into clean and shareable PDF documents.",
    category: "Utility",
    href: "https://imagetopdfconverter.krishaiworks.com",
    icon: "→",
  },
  {
    name: "QR Code Generator & Scanner",
    description:
      "Generate QR codes and scan QR code content quickly and easily.",
    category: "Utility",
    href: "https://qrcodegeneratorscanner.krishaiworks.com",
    icon: "QR",
  },
  {
    name: "Password Generator",
    description:
      "Generate strong and secure passwords for your accounts and applications.",
    category: "Utility",
    href: "https://passwordgenerator.krishaiworks.com",
    icon: "⌁",
  },
  {
    name: "ZIP File Creator",
    description:
      "Create ZIP archives from multiple files quickly and conveniently.",
    category: "Utility",
    href: "https://zipfilecreator.krishaiworks.com",
    icon: "ZIP",
  },
  {
    name: "JSON Formatter & Validator",
    description:
      "Format, validate and inspect JSON data with a clean interface.",
    category: "Utility",
    href: "https://jsonformattervalidator.krishaiworks.com",
    icon: "{ }",
  },
  {
    name: "Unit Converter",
    description:
      "Convert between common units of length, weight, temperature and more.",
    category: "Utility",
    href: "https://unitconverter.krishaiworks.com",
    icon: "↔",
  },
  {
    name: "Base64 Encoder & Decoder",
    description:
      "Encode and decode Base64 text quickly and easily.",
    category: "Utility",
    href: "https://base64encoderdecoder.krishaiworks.com",
    icon: "64",
  },
  {
    name: "Word Counter & Reading Time",
    description:
      "Count words, characters and estimate reading time for your text.",
    category: "Utility",
    href: "https://wordcounterreadingtime.krishaiworks.com",
    icon: "123",
  },
  {
    name: "Markdown to HTML Converter",
    description:
      "Convert Markdown content into clean HTML quickly and easily.",
    category: "Utility",
    href: "https://markdownhtmlconverter.krishaiworks.com",
    icon: "</>",
  },
  {
    name: "Timestamp Converter",
    description:
      "Convert Unix timestamps into readable dates and times with ease.",
    category: "Utility",
    href: "https://timestampconverter.krishaiworks.com",
    icon: "TIME",
  },
];

function ToolIcon({ icon }: { icon: string }) {
  return (
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/[0.12] bg-white/[0.065] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.12] via-transparent to-cyan-500/[0.08]" />

      <span
        className={`relative z-10 font-semibold tracking-tight text-white ${
          icon.length > 3 ? "text-[10px]" : "text-sm"
        }`}
      >
        {icon}
      </span>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full"
    >
      {/* Outer glow */}
      <div className="pointer-events-none absolute -inset-px rounded-[26px] bg-gradient-to-br from-violet-500/0 via-fuchsia-500/0 to-cyan-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-violet-500/20 group-hover:via-fuchsia-500/10 group-hover:to-cyan-500/20 group-hover:opacity-100" />

      {/* Card */}
      <div className="relative flex h-full min-h-[265px] flex-col overflow-hidden rounded-[26px] border border-white/[0.09] bg-white/[0.035] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-400 group-hover:-translate-y-1.5 group-hover:border-white/[0.17] group-hover:bg-white/[0.055] group-hover:shadow-[0_25px_80px_rgba(0,0,0,0.32)]">
        {/* Top shine */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-60" />

        {/* Corner glow */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.07] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.16]" />

        <div className="relative flex items-start justify-between gap-4">
          <ToolIcon icon={tool.icon} />

          <span
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
              tool.category === "AI"
                ? "border-violet-400/15 bg-violet-400/[0.07] text-violet-200/70"
                : "border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-200/70"
            }`}
          >
            {tool.category}
          </span>
        </div>

        <div className="relative mt-6">
          <h3 className="text-[17px] font-semibold tracking-[-0.015em] text-white transition-colors duration-300 group-hover:text-violet-100">
            {tool.name}
          </h3>

          <p className="mt-3 text-[13px] leading-6 text-white/[0.48]">
            {tool.description}
          </p>
        </div>

        <div className="relative mt-auto pt-7">
          <div className="flex items-center justify-between border-t border-white/[0.07] pt-5">
            <span className="text-xs font-medium text-white/[0.42] transition-colors duration-300 group-hover:text-white/70">
              Open tool
            </span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-sm text-white/40 transition-all duration-300 group-hover:border-violet-400/20 group-hover:bg-violet-400/[0.08] group-hover:text-violet-200">
              →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<
    "All" | "AI" | "Utility"
  >("All");

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const categoryMatch =
        activeCategory === "All" || tool.category === activeCategory;

      const searchMatch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [search, activeCategory]);

  const aiTools = filteredTools.filter((tool) => tool.category === "AI");
  const utilityTools = filteredTools.filter(
    (tool) => tool.category === "Utility"
  );

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#030305] text-white selection:bg-violet-500/30">
      {/* =====================================================
          PREMIUM BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Main top glow */}
        <div className="absolute left-1/2 top-[-360px] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-violet-600/[0.16] blur-[170px]" />

        {/* Cyan glow */}
        <div className="absolute right-[-300px] top-[28%] h-[600px] w-[600px] rounded-full bg-cyan-500/[0.055] blur-[150px]" />

        {/* Pink glow */}
        <div className="absolute left-[-300px] top-[52%] h-[600px] w-[600px] rounded-full bg-fuchsia-500/[0.045] blur-[150px]" />

        {/* Subtle top gradient */}
        <div className="absolute inset-x-0 top-0 h-[650px] bg-gradient-to-b from-violet-950/[0.12] via-transparent to-transparent" />

        {/* Fine vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,rgba(0,0,0,0.12)_50%,rgba(0,0,0,0.35)_100%)]" />
      </div>

      {/* =====================================================
          PREMIUM NAVBAR
      ====================================================== */}
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex h-[68px] items-center justify-between rounded-2xl border border-white/[0.09] bg-[#08080b]/70 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-5">
            {/* Brand */}
            <a
              href="/"
              className="group flex min-w-0 items-center gap-3"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/[0.12] bg-white/[0.055] shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/10 opacity-80" />

                <img
                  src="/logo.png"
                  alt="KrishAIWorks"
                  className="relative z-10 h-7 w-7 object-contain"
                />
              </div>

              <div className="hidden min-[420px]:block">
                <div className="text-[14px] font-semibold tracking-[-0.02em] text-white">
                  KrishAIWorks
                </div>

                <div className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.16em] text-white/30">
                  AI • Automation • Tools
                </div>
              </div>
            </a>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 md:flex">
              <a
                href="/"
                className="rounded-xl px-4 py-2.5 text-[13px] text-white/45 transition hover:bg-white/[0.04] hover:text-white"
              >
                Home
              </a>

              <a
                href="/tools"
                className="rounded-xl bg-white/[0.07] px-4 py-2.5 text-[13px] font-medium text-white shadow-inner"
              >
                Tools
              </a>

              <a
                href="/#services"
                className="rounded-xl px-4 py-2.5 text-[13px] text-white/45 transition hover:bg-white/[0.04] hover:text-white"
              >
                Services
              </a>

              <a
                href="/#how-it-works"
                className="rounded-xl px-4 py-2.5 text-[13px] text-white/45 transition hover:bg-white/[0.04] hover:text-white"
              >
                How It Works
              </a>

              <a
                href="/#faq"
                className="rounded-xl px-4 py-2.5 text-[13px] text-white/45 transition hover:bg-white/[0.04] hover:text-white"
              >
                FAQ
              </a>

              <a
                href="/#contact"
                className="rounded-xl px-4 py-2.5 text-[13px] text-white/45 transition hover:bg-white/[0.04] hover:text-white"
              >
                Contact
              </a>
            </nav>

            {/* Right CTA */}
            <a
              href="/#contact"
              className="hidden rounded-xl border border-white/[0.12] bg-white/[0.055] px-4 py-2.5 text-[12px] font-medium text-white/80 transition hover:border-white/20 hover:bg-white/[0.09] sm:block"
            >
              Let&apos;s Talk
            </a>

            {/* Mobile */}
            <a
              href="/"
              className="rounded-xl border border-white/[0.1] bg-white/[0.045] px-3 py-2 text-xs text-white/65 md:hidden"
            >
              Home
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-5 pb-12 pt-20 sm:px-8 sm:pb-14 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/[0.18] bg-violet-400/[0.055] px-4 py-2 text-[11px] font-medium tracking-wide text-violet-200/75 shadow-[0_0_40px_rgba(139,92,246,0.08)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-300" />
            </span>

            29 tools • Built by KrishAIWorks
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-7 max-w-4xl text-[42px] font-bold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px]">
            Everything you need.
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              One place.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-7 text-white/[0.48] sm:text-base">
            Explore AI-powered tools and practical utilities designed to help
            you create faster, work smarter and simplify everyday tasks.
          </p>

          {/* Small stats */}
          <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-white/30">
            <span>16 AI tools</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>13 utility tools</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Free to explore</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          PREMIUM SEARCH
      ====================================================== */}
      <section className="relative px-5 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Search glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[35px] bg-violet-500/[0.055] blur-3xl" />

            {/* Search shell */}
            <div className="relative rounded-[26px] border border-white/[0.11] bg-[#09090c]/85 p-2 shadow-[0_30px_100px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
              {/* Input */}
              <div className="relative flex h-[64px] items-center rounded-[20px] border border-white/[0.075] bg-white/[0.035]">
                <div className="ml-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.045] text-lg text-white/45">
                  ⌕
                </div>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for a tool..."
                  className="h-full min-w-0 flex-1 bg-transparent px-4 text-[15px] text-white outline-none placeholder:text-white/25"
                />

                {/* Keyboard shortcut */}
                <div className="mr-3 hidden items-center gap-1.5 sm:flex">
                  <kbd className="rounded-lg border border-white/[0.09] bg-white/[0.045] px-2 py-1 text-[10px] font-medium text-white/25">
                    ⌘
                  </kbd>
                  <kbd className="rounded-lg border border-white/[0.09] bg-white/[0.045] px-2 py-1 text-[10px] font-medium text-white/25">
                    K
                  </kbd>
                </div>
              </div>

              {/* Filters */}
              <div className="flex flex-col gap-3 px-1 pb-1 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-1 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1">
                  {(["All", "AI", "Utility"] as const).map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-lg px-5 py-2.5 text-[12px] font-medium transition-all duration-200 ${
                        activeCategory === category
                          ? "bg-white/[0.09] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
                          : "text-white/35 hover:text-white/70"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="px-2 text-[11px] text-white/25 sm:px-3">
                  {filteredTools.length}{" "}
                  {filteredTools.length === 1 ? "tool" : "tools"} available
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TOOLS CONTENT
      ====================================================== */}
      <section className="px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {filteredTools.length === 0 ? (
            /* No results */
            <div className="rounded-[30px] border border-white/[0.08] bg-white/[0.03] px-6 py-24 text-center backdrop-blur-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] text-xl text-white/50">
                ⌕
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-white">
                No tools found
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-white/35">
                Try another search term or browse all of our available tools.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-7 rounded-xl border border-violet-400/20 bg-violet-500/[0.08] px-6 py-3 text-sm font-medium text-violet-200 transition hover:bg-violet-500/[0.13]"
              >
                View all tools
              </button>
            </div>
          ) : (
            <div className="space-y-24">
              {/* =================================================
                  AI SECTION
              ================================================== */}
              {(activeCategory === "All" || activeCategory === "AI") &&
                aiTools.length > 0 && (
                  <div>
                    <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-violet-300 shadow-[0_0_15px_rgba(196,181,253,0.8)]" />

                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-200/60">
                            AI Powered
                          </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
                          AI Tools
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                          Powerful AI tools for writing, studying, creating,
                          analyzing and getting more done.
                        </p>
                      </div>

                      <div className="hidden items-center gap-2 text-xs text-white/25 sm:flex">
                        <span>{aiTools.length}</span>
                        <span>tools</span>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {aiTools.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}

              {/* =================================================
                  UTILITY SECTION
              ================================================== */}
              {(activeCategory === "All" || activeCategory === "Utility") &&
                utilityTools.length > 0 && (
                  <div>
                    <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <div className="mb-4 flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.75)]" />

                          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-200/60">
                            Simple & Useful
                          </span>
                        </div>

                        <h2 className="text-3xl font-bold tracking-[-0.035em] text-white sm:text-4xl">
                          Utility Tools
                        </h2>

                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/35">
                          Fast and practical utilities for files, text,
                          conversions and everyday tasks.
                        </p>
                      </div>

                      <div className="hidden items-center gap-2 text-xs text-white/25 sm:flex">
                        <span>{utilityTools.length}</span>
                        <span>tools</span>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {utilityTools.map((tool) => (
                        <ToolCard key={tool.name} tool={tool} />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          PREMIUM CTA
      ====================================================== */}
      <section className="px-5 pb-28 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/[0.09] bg-white/[0.035] px-6 py-16 text-center shadow-[0_30px_100px_rgba(0,0,0,0.3)] backdrop-blur-2xl sm:px-12">
            {/* CTA glow */}
            <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/[0.11] blur-[120px]" />

            <div className="relative">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.16em] text-white/35">
                KrishAIWorks
              </div>

              <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-[-0.04em] text-white sm:text-5xl">
                Build smarter.
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                  Create faster.
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/35">
                Explore our tools and find the right one for your next task.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/"
                  className="rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-xl transition hover:bg-white/90"
                >
                  Explore KrishAIWorks
                </a>

                <a
                  href="/#contact"
                  className="rounded-xl border border-white/[0.1] bg-white/[0.04] px-7 py-3.5 text-sm font-medium text-white/75 transition hover:bg-white/[0.08] hover:text-white"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="border-t border-white/[0.07] bg-black/30">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Brand */}
            <div className="md:col-span-2">
              <a
                href="/"
                className="inline-flex items-center gap-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.045]">
                  <img
                    src="/logo.png"
                    alt="KrishAIWorks"
                    className="h-7 w-7 object-contain"
                  />
                </div>

                <div>
                  <div className="text-sm font-semibold text-white">
                    KrishAIWorks
                  </div>

                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.16em] text-white/25">
                    AI • Automation • Tools
                  </div>
                </div>
              </a>

              <p className="mt-5 max-w-md text-sm leading-7 text-white/30">
                AI-powered tools, automation and digital solutions built to
                make everyday work simpler and smarter.
              </p>
            </div>

            {/* Explore */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Explore
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/30">
                <a
                  href="/"
                  className="transition hover:text-white"
                >
                  Home
                </a>

                <a
                  href="/tools"
                  className="transition hover:text-white"
                >
                  All Tools
                </a>

                <a
                  href="/#services"
                  className="transition hover:text-white"
                >
                  Services
                </a>

                <a
                  href="/#how-it-works"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="/#faq"
                  className="transition hover:text-white"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                Connect
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/30">
                <a
                  href="/#contact"
                  className="transition hover:text-white"
                >
                  Contact
                </a>

                <a
                  href="mailto:krishaiworks@gmail.com"
                  className="transition hover:text-white"
                >
                  Email
                </a>

                <a
                  href="https://instagram.com/krishaiworks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="/privacy-policy"
                  className="transition hover:text-white"
                >
                  Privacy Policy
                </a>

                <a
                  href="/terms-and-conditions"
                  className="transition hover:text-white"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/[0.07] pt-7 text-[11px] text-white/20 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} KrishAIWorks. All rights reserved.
            </p>

            <p>Built with AI &amp; creativity.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}