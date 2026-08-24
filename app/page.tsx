"use client";

import { useMemo, useState } from "react";

type Tool = {
  name: string;
  description: string;
  category: "AI" | "Utility";
  icon: string;
  href: string;
  featured?: boolean;
};

const tools: Tool[] = [
  {
    name: "AI Resume Generator",
    description:
      "Create polished, professional resumes with the help of AI.",
    category: "AI",
    icon: "📄",
    href: "#",
    featured: true,
  },
  {
    name: "AI Resume Analyzer",
    description:
      "Analyze your resume for ATS compatibility, strengths and improvements.",
    category: "AI",
    icon: "🎯",
    href: "#",
    featured: true,
  },
  {
    name: "AI Cover Letter Generator",
    description:
      "Generate tailored cover letters quickly for your next application.",
    category: "AI",
    icon: "✉️",
    href: "#",
  },
  {
    name: "AI Study Assistant",
    description:
      "Turn difficult topics into simple explanations, notes and study help.",
    category: "AI",
    icon: "🧠",
    href: "#",
    featured: true,
  },
  {
    name: "YouTube Summarizer",
    description:
      "Turn long YouTube videos into structured AI-powered smart notes.",
    category: "AI",
    icon: "▶️",
    href: "#",
  },

  {
    name: "QR Code Generator",
    description:
      "Create clean QR codes quickly for links, text and useful information.",
    category: "Utility",
    icon: "▦",
    href: "#",
  },
  {
    name: "PDF → JPG / PNG",
    description:
      "Convert PDF pages into high-quality images directly from your browser.",
    category: "Utility",
    icon: "🖼️",
    href: "#",
  },
  {
    name: "Image → Text OCR",
    description:
      "Extract readable text from images with a simple OCR utility.",
    category: "Utility",
    icon: "🔎",
    href: "#",
  },
  {
    name: "Image Compressor",
    description:
      "Reduce image file size while keeping your images looking sharp.",
    category: "Utility",
    icon: "📦",
    href: "#",
  },
  {
    name: "JSON Formatter & Validator",
    description:
      "Format, validate and work with JSON without unnecessary complexity.",
    category: "Utility",
    icon: "{ }",
    href: "#",
  },
  {
    name: "Word Counter",
    description:
      "Count words, characters and estimate reading time instantly.",
    category: "Utility",
    icon: "📝",
    href: "#",
  },
  {
    name: "Markdown ↔ HTML",
    description:
      "Convert Markdown to HTML or HTML back into Markdown.",
    category: "Utility",
    icon: "⌘",
    href: "#",
  },
  {
    name: "Base64 Encoder & Decoder",
    description:
      "Encode text into Base64 or decode Base64 strings in seconds.",
    category: "Utility",
    icon: "🔐",
    href: "#",
  },
  {
    name: "Timestamp Converter",
    description:
      "Convert Unix timestamps into readable dates and back again.",
    category: "Utility",
    icon: "◷",
    href: "#",
  },
];

const services = [
  {
    icon: "⚙️",
    title: "AI Automations",
    description:
      "Automate repetitive business workflows using AI, APIs and modern automation tools.",
  },
  {
    icon: "💬",
    title: "AI Chatbots",
    description:
      "Build intelligent chatbots for websites, customer support and lead capture.",
  },
  {
    icon: "🌐",
    title: "Website Building",
    description:
      "Create fast, modern and responsive websites designed around your goals.",
  },
  {
    icon: "📈",
    title: "Lead Generation",
    description:
      "Build systems that capture, organize and automate potential customer leads.",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<
    "All" | "AI" | "Utility"
  >("All");

  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" || tool.category === activeCategory;

      const query = search.toLowerCase().trim();

      const matchesSearch =
        !query ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const scrollToTools = () => {
    document
      .getElementById("tools")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

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

        {/* Very subtle center glow */}
        <div className="absolute left-1/2 top-[45%] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.018] blur-[180px]" />
      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-30 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">
          {/* Brand */}
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-violet-400/20 bg-white/[0.05] shadow-lg shadow-violet-500/10">
              <img
                src="/logo.png"
                alt="KrishAIWorks Logo"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-sm font-bold tracking-tight text-white sm:text-base">
                KrishAIWorks
              </h2>

              <p className="text-[9px] font-medium tracking-wide text-zinc-500 sm:text-[10px]">
                AI Solutions That Work
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <a
              href="#tools"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-violet-300"
            >
              Tools
            </a>

            <a
              href="#services"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-violet-300"
            >
              Services
            </a>

            <a
              href="#how"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-violet-300"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="rounded-xl px-4 py-2 text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-violet-300"
            >
              FAQ
            </a>

            <button
              onClick={scrollToContact}
              className="ml-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/10 transition hover:-translate-y-0.5 hover:bg-violet-500/15 active:scale-95"
            >
              Contact
            </button>
          </div>

          {/* Mobile contact */}
          <button
            onClick={scrollToContact}
            className="rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold text-violet-200 transition hover:bg-violet-500/15 md:hidden"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-5 pb-24 pt-20 text-center sm:px-8 sm:pt-28">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.035] px-4 py-2 text-xs text-zinc-300 shadow-xl shadow-black/20 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-300 shadow-lg shadow-violet-400/50" />
          AI Tools · Automation · Digital Solutions
        </div>

        <p className="mt-5 text-xs text-zinc-600">
          Built by{" "}
          <span className="font-semibold text-violet-300">
            KrishAIWorks
          </span>
        </p>

        <h1 className="mt-7 max-w-5xl text-4xl font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Build faster.
          <br />

          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Work smarter.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          A growing collection of AI-powered tools, productivity utilities and
          custom digital solutions designed to make everyday work simpler,
          faster and smarter.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={scrollToTools}
            className="h-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-fuchsia-400 active:scale-95"
          >
            Explore Tools →
          </button>

          <button
            onClick={scrollToContact}
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-white active:scale-95"
          >
            Need Something Built?
          </button>
        </div>

        {/* Trust pills */}
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
            ⚡ Fast
          </span>

          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
            🔒 Privacy Friendly
          </span>

          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
            📱 Responsive
          </span>

          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
            ✨ AI Powered
          </span>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FEATURED TOOLS */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Featured
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Tools built to be useful.
            </h2>
          </div>

          <button
            onClick={scrollToTools}
            className="w-fit text-sm font-medium text-zinc-500 transition hover:text-violet-300"
          >
            View all tools →
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {tools
            .filter((tool) => tool.featured)
            .map((tool) => (
              <ToolCard key={tool.name} tool={tool} featured />
            ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* TOOLS */}
      {/* ========================================================= */}

      <section
        id="tools"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex rounded-full border border-violet-400/10 bg-violet-500/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Explore Tools
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Everything you need,
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              in one place.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            Explore AI tools and everyday utilities built with a focus on
            simplicity, speed and useful results.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="relative">
            <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-zinc-600">
              ⌕
            </span>

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools..."
              className="h-14 w-full rounded-2xl border border-white/[0.08] bg-black/40 px-12 text-sm text-white outline-none backdrop-blur-xl transition placeholder:text-zinc-600 focus:border-violet-400/30 focus:ring-2 focus:ring-violet-400/10"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {(["All", "AI", "Utility"] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-xl px-5 py-2.5 text-xs font-semibold transition ${
                activeCategory === category
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-500/20"
                  : "border border-white/[0.07] bg-white/[0.025] text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-300"
              }`}
            >
              {category === "All"
                ? "All Tools"
                : category === "AI"
                ? "AI Tools"
                : "Utility Tools"}
            </button>
          ))}
        </div>

        {/* Tool grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.name} tool={tool} />
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="mt-12 rounded-3xl border border-white/[0.07] bg-white/[0.02] px-6 py-16 text-center">
            <div className="text-3xl">⌕</div>

            <h3 className="mt-4 text-lg font-semibold text-white">
              No tools found
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              Try searching for something else.
            </p>
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section
        id="services"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex rounded-full border border-fuchsia-400/10 bg-fuchsia-500/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300">
            Custom Solutions
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Need something
            <br />
            <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              built for you?
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            KrishAIWorks also builds custom digital solutions for individuals,
            creators and businesses.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY KRISHAIWORKS */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.035] via-black/40 to-violet-950/[0.12] p-7 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:p-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Why KrishAIWorks
              </p>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Technology should
                <br />
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  solve problems.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-zinc-500">
                From simple utilities to AI-powered workflows, every project
                is built around one goal: making useful technology easier to
                access and easier to use.
              </p>

              <button
                onClick={scrollToTools}
                className="mt-7 rounded-xl border border-violet-400/20 bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/15 active:scale-95"
              >
                Explore the tools →
              </button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <MiniStat
                icon="⚡"
                title="Simple"
                description="Clean interfaces without unnecessary complexity."
              />

              <MiniStat
                icon="🧠"
                title="Useful"
                description="Tools designed around real-world problems."
              />

              <MiniStat
                icon="📱"
                title="Responsive"
                description="Designed to work beautifully across devices."
              />

              <MiniStat
                icon="🚀"
                title="Growing"
                description="New tools and solutions are continuously added."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex rounded-full border border-cyan-400/10 bg-cyan-500/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How It Works
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Find it. Use it. Get it done.
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            No complicated setup. Pick the tool you need and get started.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <StepCard
            number="01"
            title="Choose a Tool"
            description="Browse AI tools and utilities or search for exactly what you need."
          />

          <StepCard
            number="02"
            title="Enter Your Input"
            description="Provide the information required by the selected tool."
          />

          <StepCard
            number="03"
            title="Get Your Result"
            description="Use the generated result and get back to your work."
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT / HIRE */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-5xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/10 bg-gradient-to-br from-violet-950/30 via-black/80 to-cyan-950/20 px-6 py-14 text-center shadow-2xl shadow-violet-950/20 backdrop-blur-2xl sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/[0.08] via-violet-500/[0.12] to-cyan-400/[0.07] blur-[140px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl shadow-lg shadow-violet-500/10">
              ✦
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Work With KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Have an idea?
              <br />
              Let&apos;s build it.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              Looking for AI automation, website development, chatbots, lead
              generation systems or a custom digital solution? Get in touch.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <ContactButton
                href="https://wa.me/919015321788"
                label="WhatsApp"
                icon="💬"
              />

              <ContactButton
                href="https://instagram.com/krishaiworks"
                label="Instagram"
                icon="📸"
              />

              <ContactButton
                href="https://t.me/KrishAIworks"
                label="Telegram"
                icon="✈️"
              />

              <ContactButton
                href="mailto:krishaiworks@gmail.com"
                label="Email"
                icon="✉️"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-3xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="text-center">
          <div className="mx-auto inline-flex rounded-full border border-violet-400/10 bg-violet-500/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            FAQ
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          <Faq
            question="What is KrishAIWorks?"
            answer="KrishAIWorks is a growing collection of AI-powered tools, productivity utilities and custom digital solutions."
          />

          <Faq
            question="Are the tools free to use?"
            answer="The tools are designed to be simple and accessible. Availability and limits can vary between individual tools."
          />

          <Faq
            question="Can I request a custom tool?"
            answer="Yes. You can contact KrishAIWorks for custom AI tools, websites, automations, chatbots and lead-generation systems."
          />

          <Faq
            question="Can you build an AI chatbot for my business?"
            answer="Yes. Custom AI chatbot solutions can be designed around customer support, lead capture, FAQs and business workflows."
          />
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.07] bg-white/[0.025] px-6 py-14 text-center shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-12">
          <div className="pointer-events-none absolute left-1/2 top-[-170px] h-[350px] w-[550px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/[0.07] via-violet-500/[0.1] to-cyan-400/[0.07] blur-[120px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start building smarter.
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-600">
              Explore the tools or get in touch if you need something custom.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                onClick={scrollToTools}
                className="rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-fuchsia-400 active:scale-95"
              >
                Explore Tools →
              </button>

              <button
                onClick={scrollToContact}
                className="rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/[0.07] hover:text-white active:scale-95"
              >
                Contact KrishAIWorks
              </button>
            </div>
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
            <a
              href="#tools"
              className="transition hover:text-violet-300"
            >
              Tools
            </a>

            <a
              href="#services"
              className="transition hover:text-violet-300"
            >
              Services
            </a>

            <a
              href="#contact"
              className="transition hover:text-violet-300"
            >
              Contact
            </a>

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
/* TOOL CARD */
/* ============================================================= */

function ToolCard({
  tool,
  featured = false,
}: {
  tool: Tool;
  featured?: boolean;
}) {
  return (
    <a
      href={tool.href}
      className={`group relative overflow-hidden rounded-3xl border bg-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/[0.035] ${
        featured
          ? "border-violet-400/15 hover:border-violet-400/30"
          : "border-white/[0.07] hover:border-violet-400/20"
      }`}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-[70px] transition group-hover:bg-violet-500/[0.14]" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-xl shadow-lg shadow-black/20">
            {tool.icon}
          </div>

          <span
            className={`rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${
              tool.category === "AI"
                ? "border-violet-400/10 bg-violet-500/[0.06] text-violet-300"
                : "border-cyan-400/10 bg-cyan-500/[0.04] text-cyan-300"
            }`}
          >
            {tool.category}
          </span>
        </div>

        <h3 className="mt-6 text-lg font-bold tracking-tight text-white">
          {tool.name}
        </h3>

        <p className="mt-2 min-h-[48px] text-sm leading-6 text-zinc-600">
          {tool.description}
        </p>

        <div className="mt-6 flex items-center text-xs font-semibold text-zinc-500 transition group-hover:text-violet-300">
          Try Tool
          <span className="ml-2 transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

/* ============================================================= */
/* SERVICE CARD */
/* ============================================================= */

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-fuchsia-400/20 hover:bg-white/[0.035]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-fuchsia-400/10 bg-fuchsia-500/[0.05] text-xl">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

/* ============================================================= */
/* MINI STAT */
/* ============================================================= */

function MiniStat({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-5 backdrop-blur-xl">
      <div className="text-xl">{icon}</div>

      <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>

      <p className="mt-1 text-xs leading-6 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

/* ============================================================= */
/* STEP CARD */
/* ============================================================= */

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 backdrop-blur-2xl transition hover:border-violet-400/15 hover:bg-white/[0.03]">
      <div className="flex items-center justify-between">
        <span className="text-3xl font-black tracking-tight text-white/[0.08]">
          {number}
        </span>

        <div className="h-px w-16 bg-gradient-to-r from-violet-400/30 to-transparent" />
      </div>

      <h3 className="mt-8 text-lg font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-zinc-600">
        {description}
      </p>
    </div>
  );
}

/* ============================================================= */
/* CONTACT BUTTON */
/* ============================================================= */

function ContactButton({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-5 py-3 text-sm font-semibold text-zinc-300 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-white/[0.06] hover:text-white active:scale-95"
    >
      {icon} {label}
    </a>
  );
}

/* ============================================================= */
/* FAQ */
/* ============================================================= */

function Faq({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <details className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 backdrop-blur-xl">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-white">
        {question}

        <span className="text-lg text-zinc-600 transition group-open:rotate-45">
          +
        </span>
      </summary>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600">
        {answer}
      </p>
    </details>
  );
}