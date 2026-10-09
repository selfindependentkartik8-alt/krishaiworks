"use client";

import { useEffect, useMemo, useState } from "react";

type Tool = {
  name: string;
  description: string;
  category: "AI" | "Utility";
  icon: string;
  href: string;
};

const commonlyUsedTools: Tool[] = [
  {
    name: "PDF AI Summarizer",
    description:
      "Turn lengthy PDF documents into clear, concise summaries and find the important information faster.",
    category: "AI",
    icon: "📑",
    href: "https://pdfaisummarizer.krishaiworks.com/",
  },
  {
    name: "Smart Note AI",
    description:
      "Create clearer, more organized notes and turn information into easier-to-understand content.",
    category: "AI",
    icon: "🧠",
    href: "https://smartnotes.krishaiworks.com",
  },
  {
    name: "YouTube Video AI Summarizer",
    description:
      "Get the key points from long YouTube videos without spending unnecessary time watching everything.",
    category: "AI",
    icon: "▶️",
    href: "https://youtubeaisummarizer.krishaiworks.com",
  },
  {
    name: "AI Email Writer",
    description:
      "Create clear, professional emails faster with AI assistance for everyday communication.",
    category: "AI",
    icon: "✉️",
    href: "https://aiemailwriter.krishaiworks.com",
  },
  {
    name: "AI Resume Generator",
    description:
      "Create a polished resume and present your skills, experience and background more clearly.",
    category: "AI",
    icon: "📄",
    href: "https://airesumegenerator.krishaiworks.com",
  },
  {
    name: "AI Study Assistant",
    description:
      "Understand study topics, organize learning material and get help with everyday academic tasks.",
    category: "AI",
    icon: "🎓",
    href: "https://aistudyassistant.krishaiworks.com",
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
      "Build useful chatbots for websites, customer support, FAQs, lead capture and everyday business workflows.",
  },
  {
    icon: "🌐",
    title: "Website Building",
    description:
      "Create modern, responsive websites designed around a clear purpose, useful user experience and business goals.",
  },
  {
    icon: "📈",
    title: "Lead Generation",
    description:
      "Build practical systems that capture, organize and automate potential customer leads.",
  },
];

const faqs = [
  {
    question: "What is KrishAIWorks?",
    answer:
      "KrishAIWorks is a collection of practical AI-powered and productivity-focused tools along with digital solutions for individuals and businesses. The platform is designed to make common tasks simpler and more accessible.",
  },
  {
    question: "Are the tools useful for students?",
    answer:
      "Yes. Several tools are designed around common student workflows, including studying, organizing notes, summarizing information and working with educational content.",
  },
  {
    question: "Can professionals use KrishAIWorks?",
    answer:
      "Yes. Tools such as the AI Email Writer and AI Resume Generator can help with professional communication, job applications and everyday productivity.",
  },
  {
    question: "Do I need technical knowledge to use the tools?",
    answer:
      "No. The tools are designed around simple interfaces so users can focus on the task rather than dealing with complicated technical workflows.",
  },
  {
    question: "Is KrishAIWorks only for AI tools?",
    answer:
      "No. KrishAIWorks includes AI-powered tools as well as practical utility and productivity tools. The complete collection is available through the All Tools directory.",
  },
  {
    question: "Can I request a custom AI solution?",
    answer:
      "Yes. KrishAIWorks also works on AI chatbots, automations, websites and lead-generation systems. You can get in touch through the contact section to discuss a project.",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [showCommonlyUsed, setShowCommonlyUsed] = useState(true);

  /* ========================================================= */
  /* AI CHAT / TYPEBOT */
  /* ========================================================= */

  useEffect(() => {
    const script = document.createElement("script");

    script.type = "module";

    script.textContent = `
      import Typebot from "https://cdn.jsdelivr.net/npm/@typebot.io/js@0/dist/web.js";

      Typebot.initBubble({
        typebot: "krish-a-iworks-m4z1a0v",

        previewMessage: {
          message: "Hey! 👋 Need help with KrishAIWorks?",
          autoShowDelay: 5000,
          avatarUrl: "/logo.png",
        },

        theme: {
          button: {
            backgroundColor: "#2563EB",
            iconColor: "#FFFFFF",
          },

          previewMessage: {
            backgroundColor: "#0A0A0F",
            textColor: "#FFFFFF",
          },

          chatWindow: {
            backgroundColor: "#FFFFFF",
            maxWidth: "420px",
            maxHeight: "600px",
            borderRadius: "20px",
          },
        },
      });
    `;

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return commonlyUsedTools;
    }

    return commonlyUsedTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query),
    );
  }, [search]);

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

  const scrollToAbout = () => {
    document
      .getElementById("about")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030305] text-white selection:bg-violet-400/30">
      {/* ========================================================= */}
      {/* AURORA BACKGROUND */}
      {/* ========================================================= */}

      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[700px] w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500/[0.13] via-violet-500/[0.18] to-cyan-400/[0.12] blur-[180px]" />

        <div className="absolute left-[-280px] top-[25%] h-[550px] w-[550px] rounded-full bg-violet-600/[0.07] blur-[170px]" />

        <div className="absolute right-[-280px] top-[42%] h-[550px] w-[550px] rounded-full bg-cyan-500/[0.06] blur-[170px]" />

        <div className="absolute left-[35%] top-[68%] h-[500px] w-[600px] rounded-full bg-fuchsia-500/[0.045] blur-[180px]" />

        <div className="absolute left-1/2 top-[45%] h-[800px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/[0.018] blur-[180px]" />
      </div>

      {/* ========================================================= */}
      {/* NAVBAR */}
      {/* ========================================================= */}

      <nav className="relative z-30 mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-black/35 px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-5">
          <a href="#" className="flex items-center gap-3">
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
          </a>

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
          Explore practical AI tools and digital solutions designed to help
          students, creators, professionals and businesses simplify everyday
          tasks, work more efficiently and get more done.
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

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          <span className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
            ⚡ Practical
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
      {/* ABOUT KRISHAIWORKS */}
      {/* ========================================================= */}

      <section
        id="about"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-20 sm:px-8"
      >
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              About KrishAIWorks
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Practical technology for everyday work.
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-zinc-400">
              <p>
                KrishAIWorks is a collection of practical AI-powered,
                productivity and digital tools created to make common tasks
                simpler. Instead of requiring users to learn complicated
                software or workflows, the platform focuses on straightforward
                tools that can be used for specific everyday needs.
              </p>

              <p>
                The platform brings together tools for students, creators,
                professionals, job seekers and businesses. These tools can help
                with tasks such as understanding long documents, organizing
                information, writing emails, preparing resumes and working with
                educational content.
              </p>

              <p>
                Alongside its online tools, KrishAIWorks also works on custom
                digital solutions including AI chatbots, automation systems,
                websites and lead-generation workflows.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-violet-400/[0.10] bg-gradient-to-br from-violet-500/[0.07] via-white/[0.018] to-cyan-500/[0.04] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/[0.08] text-xl">
              ✨
            </div>

            <h3 className="mt-6 text-2xl font-bold text-white">
              What can you do here?
            </h3>

            <div className="mt-6 space-y-4">
              {[
                "Summarize documents and long-form content",
                "Organize notes and information",
                "Write and improve everyday communication",
                "Create professional resumes",
                "Get help with studying and learning",
                "Explore useful productivity utilities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-1 text-violet-300">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToTools}
              className="mt-8 rounded-xl border border-violet-400/15 bg-violet-500/[0.08] px-5 py-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/[0.13]"
            >
              Explore the tools →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* EXPLORE TOOLS */}
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
            Useful tools,
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              all in one place.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            Search the commonly used tools below or open the complete tool
            directory to explore everything available on KrishAIWorks.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/45 shadow-2xl shadow-violet-950/10 backdrop-blur-2xl transition focus-within:border-violet-400/25 focus-within:shadow-violet-500/[0.08]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-violet-500/[0.035] via-transparent to-cyan-500/[0.035]" />

            <div className="relative flex items-center">
              <span className="pointer-events-none pl-5 text-xl text-zinc-500">
                ⌕
              </span>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search tools..."
                aria-label="Search KrishAIWorks tools"
                className="h-14 w-full bg-transparent px-4 text-sm text-white outline-none placeholder:text-zinc-600"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="mr-3 rounded-lg px-3 py-2 text-xs text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-[11px] text-zinc-700">
            <span>Search by tool name or what you want to accomplish.</span>

            {search && (
              <span className="text-violet-400">
                Searching for “{search}”
              </span>
            )}
          </div>
        </div>

        {/* ======================================================= */}
        {/* TWO OPTIONS ONLY */}
        {/* ======================================================= */}

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          <button
            onClick={() => {
              window.location.href = "/tools";
            }}
            className="group rounded-2xl border border-white/[0.07] bg-white/[0.025] p-5 text-left transition hover:-translate-y-0.5 hover:border-violet-400/20 hover:bg-violet-500/[0.05] hover:shadow-xl hover:shadow-violet-500/[0.05]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/[0.08] text-lg">
                ✦
              </div>

              <span className="text-zinc-700 transition group-hover:text-violet-300">
                →
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-white">
              All Tools
            </h3>

            <p className="mt-2 text-xs leading-6 text-zinc-500">
              Explore the complete KrishAIWorks tool collection, including AI
              tools and practical utilities.
            </p>
          </button>

          <button
            onClick={() => setShowCommonlyUsed(true)}
            className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
              showCommonlyUsed
                ? "border-violet-400/20 bg-violet-500/[0.06] shadow-xl shadow-violet-500/[0.05]"
                : "border-white/[0.07] bg-white/[0.025] hover:border-violet-400/20 hover:bg-violet-500/[0.05]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-500/[0.07] text-lg">
                ⚡
              </div>

              <span className="text-zinc-700 transition group-hover:text-cyan-300">
                ↓
              </span>
            </div>

            <h3 className="mt-5 text-base font-bold text-white">
              Commonly Used
            </h3>

            <p className="mt-2 text-xs leading-6 text-zinc-500">
              Quickly access six selected tools that are useful for common
              everyday tasks.
            </p>
          </button>
        </div>

        {/* COMMONLY USED TOOLS */}
        {showCommonlyUsed && (
          <div className="mt-10 rounded-3xl border border-white/[0.07] bg-white/[0.018] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-7">
            <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-500/[0.07] text-lg">
                    ⚡
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Commonly Used Tools
                    </h3>

                    <p className="mt-1 text-xs text-zinc-600">
                      A quick selection of practical tools to get started.
                    </p>
                  </div>
                </div>
              </div>

              <span className="w-fit rounded-full border border-cyan-400/10 bg-cyan-500/[0.05] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
                {filteredTools.length}{" "}
                {filteredTools.length === 1 ? "Tool" : "Tools"}
              </span>
            </div>

            {filteredTools.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col rounded-2xl border border-white/[0.06] bg-black/25 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.035] hover:shadow-xl hover:shadow-violet-500/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.035] text-xl transition group-hover:border-violet-400/20 group-hover:bg-violet-500/[0.08]">
                        {tool.icon}
                      </div>

                      <span className="text-zinc-700 transition group-hover:text-violet-300">
                        ↗
                      </span>
                    </div>

                    <h4 className="mt-5 text-sm font-semibold text-white transition group-hover:text-violet-200">
                      {tool.name}
                    </h4>

                    <p className="mt-2 flex-1 text-xs leading-6 text-zinc-500">
                      {tool.description}
                    </p>

                    <div className="mt-5 text-xs font-medium text-violet-400 transition group-hover:text-violet-300">
                      Open tool →
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-white/[0.06] bg-black/20 px-5 py-12 text-center">
                <div className="text-3xl">⌕</div>

                <h3 className="mt-4 text-base font-semibold text-white">
                  No commonly used tool found
                </h3>

                <p className="mt-2 text-sm text-zinc-600">
                  Try another search term or open the complete tool directory.
                </p>

                <a
                  href="/tools"
                  className="mt-5 inline-flex rounded-xl bg-violet-500/10 px-5 py-2.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/15"
                >
                  Explore All Tools →
                </a>
              </div>
            )}
          </div>
        )}
      </section>

      {/* ========================================================= */}
      {/* WHAT KRISHAIWORKS IS FOR */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Built for real workflows
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Useful technology for different kinds of users.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            KrishAIWorks focuses on practical use cases rather than adding
            technology for the sake of technology.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: "🎓",
              title: "Students",
              text: "Study, summarize, organize information and make learning workflows easier.",
            },
            {
              icon: "🎨",
              title: "Creators",
              text: "Save time on writing, research and other repetitive content-related tasks.",
            },
            {
              icon: "💼",
              title: "Professionals",
              text: "Improve everyday communication, documents and productivity workflows.",
            },
            {
              icon: "🏢",
              title: "Businesses",
              text: "Explore chatbots, automations, websites and practical lead-generation systems.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-6 backdrop-blur-xl transition hover:border-violet-400/15 hover:bg-white/[0.025]"
            >
              <div className="text-2xl">{item.icon}</div>

              <h3 className="mt-5 text-base font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-zinc-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section
        id="services"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Digital Solutions
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Beyond tools.
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Build something useful.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            KrishAIWorks also builds practical digital systems for people and
            businesses that need something more specific than an off-the-shelf
            tool.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-violet-400/15 hover:bg-white/[0.025]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/[0.07] text-xl transition group-hover:bg-violet-500/[0.12]">
                {service.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Simple from start to finish.
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-500">
              The platform is designed so you can spend less time figuring out
              software and more time completing the task you came for.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose a tool",
                text: "Find a tool that matches the task you want to complete.",
              },
              {
                number: "02",
                title: "Provide your input",
                text: "Enter the information or upload the content required by the selected tool.",
              },
              {
                number: "03",
                title: "Use the result",
                text: "Review the generated or processed result and use it for your workflow.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div className="text-sm font-black text-violet-400/70">
                  {step.number}
                </div>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* WHY KRISHAIWORKS */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Why KrishAIWorks
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Focused on useful experiences.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">
              Good tools should solve a clear problem without making the user
              learn a complicated process first. KrishAIWorks focuses on
              straightforward interfaces, practical use cases and tools that
              can fit into everyday workflows.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                title: "Simple interfaces",
                text: "Clear workflows designed around the task.",
              },
              {
                title: "Practical use cases",
                text: "Tools built around problems people actually encounter.",
              },
              {
                title: "Growing collection",
                text: "AI and utility tools organized in one platform.",
              },
              {
                title: "Digital solutions",
                text: "Custom automation, chatbot and website work when needed.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.018] p-5 backdrop-blur-xl"
              >
                <div className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50" />

                <h3 className="mt-4 text-sm font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-zinc-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto w-full max-w-4xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions.
          </h2>

          <p className="mt-4 text-sm leading-7 text-zinc-500">
            A few common questions about KrishAIWorks and its tools.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/[0.07] bg-white/[0.018] p-5 backdrop-blur-xl"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-white">
                <span>{faq.question}</span>

                <span className="text-lg text-zinc-600 transition group-open:rotate-45 group-open:text-violet-300">
                  +
                </span>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* HAVE A PROJECT IN MIND */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-violet-400/[0.12] bg-gradient-to-br from-violet-500/[0.10] via-white/[0.02] to-cyan-500/[0.05] p-8 text-center shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-12">
          <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-violet-500/[0.10] blur-[120px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
              Have a project in mind?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Need something built for your workflow?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
              Whether you need an AI chatbot, an automation workflow, a
              website or another digital solution, get in touch and describe
              what you want to build.
            </p>

            <button
              onClick={scrollToContact}
              className="mt-8 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-fuchsia-400 active:scale-95"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/10 bg-violet-500/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">
            Get In Touch
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              useful together.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            Choose whichever way is most convenient for you. Whether you have
            a project idea, need help with something or simply want to connect,
            I&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* WHATSAPP */}
          <a
            href="https://wa.me/919015321788"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-emerald-400/20 hover:bg-emerald-500/[0.035]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-emerald-500/[0.06] blur-3xl transition group-hover:bg-emerald-500/[0.12]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/10 bg-emerald-500/[0.07] text-xl">
                  💬
                </div>

                <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-emerald-300">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-base font-bold text-white">
                WhatsApp
              </h3>

              <p className="mt-2 text-xs text-zinc-500">
                @_krishbhardwaj
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-700">
                Message directly on WhatsApp.
              </p>
            </div>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/krishaiworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-pink-400/20 hover:bg-pink-500/[0.035]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-pink-500/[0.06] blur-3xl transition group-hover:bg-pink-500/[0.12]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-pink-400/10 bg-pink-500/[0.07] text-xl">
                  ◎
                </div>

                <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-pink-300">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-base font-bold text-white">
                Instagram
              </h3>

              <p className="mt-2 text-xs text-zinc-500">
                @krishaiworks
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-700">
                Connect with KrishAIWorks on Instagram.
              </p>
            </div>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:krishaiworks@gmail.com"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/20 hover:bg-violet-500/[0.035]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-violet-500/[0.06] blur-3xl transition group-hover:bg-violet-500/[0.12]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/[0.07] text-xl">
                  ✉
                </div>

                <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-violet-300">
                  →
                </span>
              </div>

              <h3 className="mt-6 text-base font-bold text-white">
                Email
              </h3>

              <p className="mt-2 break-all text-xs text-zinc-500">
                krishaiworks@gmail.com
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-700">
                Send a detailed project enquiry by email.
              </p>
            </div>
          </a>

          {/* TELEGRAM */}
          <a
            href="https://t.me/KrishAIworks"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/20 hover:bg-cyan-500/[0.035]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/[0.06] blur-3xl transition group-hover:bg-cyan-500/[0.12]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/10 bg-cyan-500/[0.07] text-xl">
                  ✈
                </div>

                <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-cyan-300">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-base font-bold text-white">
                Telegram
              </h3>

              <p className="mt-2 text-xs text-zinc-500">
                @KrishAIworks
              </p>

              <p className="mt-4 text-xs leading-6 text-zinc-700">
                Reach KrishAIWorks through Telegram.
              </p>
            </div>
          </a>

          {/* AI CHAT / TYPEBOT */}
          <a
            href="https://typebot.co/krish-a-iworks-m4z1a0v"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6 text-left shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/20 hover:bg-blue-500/[0.035] sm:col-span-2 lg:col-span-2"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/[0.07] blur-3xl transition group-hover:bg-blue-500/[0.14]" />

            <div className="relative flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-500/[0.08] text-2xl">
                🤖
              </div>

              <div className="mt-5 flex-1 sm:mt-0">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white">
                      AI Chat
                    </h3>

                    <p className="mt-2 text-xs text-zinc-500">
                      Chat with KrishAIWorks
                    </p>
                  </div>

                  <span className="text-zinc-700 transition group-hover:translate-x-1 group-hover:text-blue-300">
                    ↗
                  </span>
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-700">
                  Have a quick question? Open the KrishAIWorks AI assistant and
                  get help instantly.
                </p>
              </div>
            </div>
          </a>
        </div>

        <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-white/[0.05] bg-white/[0.012] px-5 py-4 text-center">
          <p className="text-[11px] leading-6 text-zinc-700">
            Prefer chatting directly? WhatsApp and Telegram are the quickest
            ways to reach out. For detailed project requirements, email is
            recommended.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 sm:px-8">
        <div className="rounded-3xl border border-white/[0.06] bg-white/[0.018] px-6 py-10 text-center backdrop-blur-xl sm:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Find a tool that helps you get more done.
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
            Explore the commonly used tools or open the complete KrishAIWorks
            directory.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              onClick={scrollToTools}
              className="rounded-xl bg-violet-500/10 px-6 py-3 text-sm font-semibold text-violet-300 transition hover:bg-violet-500/15"
            >
              Explore Tools
            </button>

            <a
              href="/tools"
              className="rounded-xl border border-white/[0.07] bg-white/[0.025] px-6 py-3 text-sm font-semibold text-zinc-400 transition hover:bg-white/[0.05] hover:text-white"
            >
              View All Tools →
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-violet-400/15 bg-white/[0.04]">
                <img
                  src="/logo.png"
                  alt="KrishAIWorks Logo"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-black text-white">
                  Krish
                  <span className="text-blue-400">AI</span>
                  Works
                </p>

                <p className="text-[10px] text-zinc-700">
                  AI Solutions That Work
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-xs leading-6 text-zinc-700">
              Practical AI tools, productivity solutions and digital systems
              designed to make everyday work simpler.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-zinc-600">
            <a
              href="/privacy-policy"
              className="transition hover:text-violet-300"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-and-conditions"
              className="transition hover:text-violet-300"
            >
              Terms & Conditions
            </a>

            <button
              onClick={scrollToContact}
              className="transition hover:text-violet-300"
            >
              Contact
            </button>

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-300"
            >
              Instagram
            </a>

            <a
              href="https://t.me/KrishAIworks"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-violet-300"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="border-t border-white/[0.04]">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 text-[10px] text-zinc-800 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p>
              © {new Date().getFullYear()} KrishAIWorks. All rights reserved.
            </p>

            <p>Built with purpose, not complexity.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}