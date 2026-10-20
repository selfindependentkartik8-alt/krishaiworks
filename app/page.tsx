"use client";

import { useEffect, useMemo, useState } from "react";

type Tool = {
  name: string;
  description: string;
  category: "AI" | "Utility";
  icon: string;
  href: string;
};

const tools: Tool[] = [
  {
    name: "PDF AI Summarizer",
    description:
      "Summarize lengthy PDF documents, identify important information and understand documents faster.",
    category: "AI",
    icon: "📑",
    href: "https://pdfaisummarizer.krishaiworks.com/",
  },
  {
    name: "Smart Note AI",
    description:
      "Turn notes and study material into clearer, more organized and easier-to-understand information.",
    category: "AI",
    icon: "🧠",
    href: "https://smartnotes.krishaiworks.com",
  },
  {
    name: "YouTube Video AI Summarizer",
    description:
      "Extract the important ideas from longer YouTube videos when you need the key information quickly.",
    category: "AI",
    icon: "▶️",
    href: "https://youtubeaisummarizer.krishaiworks.com",
  },
  {
    name: "AI Email Writer",
    description:
      "Create clearer and more professional emails for everyday communication, work and formal situations.",
    category: "AI",
    icon: "✉️",
    href: "https://aiemailwriter.krishaiworks.com",
  },
  {
    name: "AI Resume Generator",
    description:
      "Create a structured resume that presents your skills, education and experience in a professional format.",
    category: "AI",
    icon: "📄",
    href: "https://airesumegenerator.krishaiworks.com",
  },
  {
    name: "AI Study Assistant",
    description:
      "Get help understanding study topics, revising concepts and organizing learning material.",
    category: "AI",
    icon: "🎓",
    href: "https://aistudyassistant.krishaiworks.com",
  },
  {
    name: "AI Resume Analyzer",
    description:
      "Review a resume for common weaknesses, clarity issues and areas that could be improved.",
    category: "AI",
    icon: "🔎",
    href: "https://airesumeanalyzer.krishaiworks.com",
  },
  {
    name: "AI Cover Letter Generator",
    description:
      "Create tailored cover letters for different job applications and professional opportunities.",
    category: "AI",
    icon: "📨",
    href: "https://aicoverlettergenerator.krishaiworks.com",
  },
  {
    name: "AI YouTube Title & Description Generator",
    description:
      "Generate title and description ideas for YouTube videos and improve the presentation of your content.",
    category: "AI",
    icon: "🎬",
    href: "https://aiyoutubetitledescriptiongenerator.krishaiworks.com",
  },
  {
    name: "AI Instagram Caption Generator",
    description:
      "Create caption ideas for Instagram posts, reels and different content styles.",
    category: "AI",
    icon: "📸",
    href: "https://aiinstagramcaptiongenerator.krishaiworks.com",
  },
  {
    name: "AI LinkedIn Post Generator",
    description:
      "Create professional LinkedIn post ideas for sharing knowledge, updates and career content.",
    category: "AI",
    icon: "💼",
    href: "https://ailinkedinpostgenerator.krishaiworks.com",
  },
  {
    name: "AI Blog Generator",
    description:
      "Create structured first drafts and content ideas when starting a blog or long-form article.",
    category: "AI",
    icon: "✍️",
    href: "https://aibloggenerator.krishaiworks.com",
  },
  {
    name: "AI Subtitle Generator",
    description:
      "Create subtitles for video content and make spoken content easier to follow.",
    category: "AI",
    icon: "💬",
    href: "https://aisubtitlegenerator.krishaiworks.com",
  },
  {
    name: "AI Email Reply Generator",
    description:
      "Generate useful reply ideas for incoming emails and everyday professional communication.",
    category: "AI",
    icon: "↩️",
    href: "https://aiemailreplyngenerator.krishaiworks.com",
  },
  {
    name: "AI Text Humanizer",
    description:
      "Rewrite text to make it sound more natural, readable and suitable for human communication.",
    category: "AI",
    icon: "🧠",
    href: "https://aitexthumanizer.krishaiworks.com",
  },
  {
    name: "AI Grammar & Writing Fixer",
    description:
      "Improve grammar, sentence clarity and overall writing quality.",
    category: "AI",
    icon: "✓",
    href: "https://aigrammarwritingfixer.krishaiworks.com",
  },
  {
    name: "Image Resizer & Compressor",
    description:
      "Resize images and reduce their file size when preparing images for websites or sharing.",
    category: "Utility",
    icon: "🖼️",
    href: "https://imageresizercompressor.krishaiworks.com",
  },
  {
    name: "PDF Compressor",
    description:
      "Reduce PDF file size when you need a smaller document for uploading, sharing or storage.",
    category: "Utility",
    icon: "🗜️",
    href: "https://pdfcompressor.krishaiworks.com",
  },
  {
    name: "PDF Merger & Splitter",
    description:
      "Combine multiple PDF files or split a document into smaller sections.",
    category: "Utility",
    icon: "📚",
    href: "https://pdfmergersplitter.krishaiworks.com",
  },
  {
    name: "Image to PDF",
    description:
      "Convert images into PDF documents for easier sharing, submission and organization.",
    category: "Utility",
    icon: "📷",
    href: "https://imagetopdfconverter.krishaiworks.com",
  },
  {
    name: "QR Code Generator & Scanner",
    description:
      "Create QR codes and scan QR information for everyday digital use.",
    category: "Utility",
    icon: "▦",
    href: "https://qrcodegeneratorscanner.krishaiworks.com",
  },
  {
    name: "Password Generator",
    description:
      "Generate strong random passwords when creating accounts or updating credentials.",
    category: "Utility",
    icon: "🔐",
    href: "https://passwordgenerator.krishaiworks.com",
  },
  {
    name: "ZIP File Creator",
    description:
      "Package multiple files into a ZIP archive for easier storage and sharing.",
    category: "Utility",
    icon: "🗃️",
    href: "https://zipfilecreator.krishaiworks.com",
  },
  {
    name: "JSON Formatter & Validator",
    description:
      "Format JSON into a readable structure and identify common JSON formatting problems.",
    category: "Utility",
    icon: "{ }",
    href: "https://jsonformattervalidator.krishaiworks.com",
  },
  {
    name: "Unit Converter",
    description:
      "Convert between common measurement units quickly without installing software.",
    category: "Utility",
    icon: "↔️",
    href: "https://unitconverter.krishaiworks.com",
  },
  {
    name: "Base64 Encoder & Decoder",
    description:
      "Encode text into Base64 or decode Base64 data when working with common technical workflows.",
    category: "Utility",
    icon: "64",
    href: "https://base64encoderdecoder.krishaiworks.com",
  },
  {
    name: "Word Counter & Reading Time",
    description:
      "Count words and characters and estimate reading time for written content.",
    category: "Utility",
    icon: "🔢",
    href: "https://wordcounterreadingtime.krishaiworks.com",
  },
  {
    name: "Markdown ↔ HTML Converter",
    description:
      "Convert Markdown content to HTML and work between the two formats more easily.",
    category: "Utility",
    icon: "</>",
    href: "https://markdownhtmlconverter.krishaiworks.com",
  },
  {
    name: "Timestamp Converter",
    description:
      "Convert Unix timestamps and human-readable dates when working with time-based data.",
    category: "Utility",
    icon: "🕐",
    href: "https://timestampconverter.krishaiworks.com",
  },
];

const commonlyUsedNames = [
  "PDF AI Summarizer",
  "Smart Note AI",
  "YouTube Video AI Summarizer",
  "AI Email Writer",
  "AI Resume Generator",
  "AI Study Assistant",
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
      "Build customer-support, FAQ and lead-generation chatbots around a specific business workflow.",
  },
  {
    icon: "🌐",
    title: "Website Building",
    description:
      "Create modern responsive websites and useful web applications around a clear purpose.",
  },
  {
    icon: "📈",
    title: "Lead Generation",
    description:
      "Build practical systems for collecting, organizing and notifying businesses about new leads.",
  },
];

const faqs = [
  {
    question: "What is KrishAIWorks?",
    answer:
      "KrishAIWorks is a collection of practical AI-powered, productivity and utility tools along with custom digital solutions. The goal is to make common digital tasks easier through focused tools rather than complicated software.",
  },
  {
    question: "Who can use KrishAIWorks?",
    answer:
      "The tools are designed for a broad range of users including students, job seekers, creators, professionals and small businesses. Different tools solve different problems, so users can choose only what is relevant to their current task.",
  },
  {
    question: "Are the tools useful for students?",
    answer:
      "Yes. Students can use tools such as the PDF AI Summarizer, Smart Note AI, AI Study Assistant, Word Counter and other utilities for studying, organizing information and preparing written work.",
  },
  {
    question: "Can professionals use these tools?",
    answer:
      "Yes. Tools such as AI Email Writer, AI Resume Generator, AI Resume Analyzer, AI Cover Letter Generator and AI LinkedIn Post Generator are designed around common professional and career-related tasks.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. The tools are designed around simple browser-based interfaces so that users can focus on the task instead of learning complicated technical workflows.",
  },
  {
    question: "Are the utility tools only for developers?",
    answer:
      "No. Utilities such as PDF Compressor, Image to PDF, QR Code Generator, Password Generator, Unit Converter and Word Counter can be useful for everyday personal, academic and professional tasks.",
  },
  {
    question: "Can I use AI-generated results without checking them?",
    answer:
      "AI can make mistakes or produce incomplete information. Generated content should be reviewed by the user, especially when it involves academic work, professional documents, important decisions or factual information.",
  },
  {
    question: "Does KrishAIWorks provide custom AI solutions?",
    answer:
      "Yes. KrishAIWorks also works on custom AI chatbots, automation systems, websites, lead-generation workflows and other digital products based on a specific requirement.",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
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

      <h3 className="mt-5 text-sm font-semibold text-white transition group-hover:text-violet-200">
        {tool.name}
      </h3>

      <p className="mt-2 flex-1 text-xs leading-6 text-zinc-500">
        {tool.description}
      </p>

      <div className="mt-5 text-xs font-medium text-violet-400 transition group-hover:text-violet-300">
        Open tool →
      </div>
    </a>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [showCommonlyUsed, setShowCommonlyUsed] = useState(true);

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

  const commonlyUsedTools = tools.filter((tool) =>
    commonlyUsedNames.includes(tool.name),
  );

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
  }, [search, commonlyUsedTools]);

  const aiTools = tools.filter((tool) => tool.category === "AI");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
              onClick={() => scrollTo("contact")}
              className="ml-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-200 shadow-lg shadow-violet-500/10 transition hover:-translate-y-0.5 hover:bg-violet-500/15 active:scale-95"
            >
              Contact
            </button>
          </div>

          <button
            onClick={() => scrollTo("contact")}
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

        <p className="mt-7 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
          Explore practical AI tools, productivity utilities and digital
          solutions designed to help students, creators, professionals and
          businesses simplify everyday work.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={() => scrollTo("tools")}
            className="h-12 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition hover:-translate-y-0.5 hover:from-violet-400 hover:to-fuchsia-400 active:scale-95"
          >
            Explore Tools →
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="h-12 rounded-xl border border-white/10 bg-white/[0.04] px-7 text-sm font-semibold text-zinc-300 backdrop-blur-xl transition hover:bg-white/[0.07] hover:text-white active:scale-95"
          >
            Need Something Built?
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {[
            "⚡ Practical",
            "🔒 Privacy Friendly",
            "📱 Responsive",
            "✨ AI Powered",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/[0.06] bg-white/[0.025] px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ["29", "Tools"],
            ["16", "AI Tools"],
            ["13", "Utility Tools"],
            ["Browser", "First"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.025] px-4 py-5 backdrop-blur-xl"
            >
              <p className="text-xl font-bold text-white">{number}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* ABOUT */}
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
                KrishAIWorks is a growing collection of practical AI-powered,
                productivity and utility tools created around real everyday
                tasks. The focus is on making useful technology easier to
                access without forcing users through complicated workflows.
              </p>

              <p>
                The platform brings together tools for students, creators,
                professionals, job seekers and businesses. Depending on the
                task, a user can summarize a document, organize information,
                write an email, prepare a resume, work with content or use a
                simple browser utility.
              </p>

              <p>
                KrishAIWorks also explores custom digital solutions such as AI
                chatbots, business automations, websites and lead-generation
                systems. These projects are approached around the actual
                workflow or problem rather than adding technology simply for
                the sake of it.
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

            <div className="mt-6 space-y-3">
              {[
                "Summarize documents and long-form content",
                "Organize notes and study information",
                "Write and improve everyday communication",
                "Create and review professional resumes",
                "Get help with studying and revision",
                "Create social and professional content",
                "Work with PDFs, images, text and data",
                "Use small utilities for everyday digital tasks",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-zinc-400"
                >
                  <span className="mt-1 text-violet-300">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
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
            Useful tools,
            <br />
            <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">
              all in one place.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            Choose an AI tool for a specific task, use a browser utility for a
            quick operation, or explore the complete tool directory.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/45 shadow-2xl shadow-violet-950/10 backdrop-blur-2xl transition focus-within:border-violet-400/25">
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

        <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
          <a
            href="/tools"
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
              Explore the complete KrishAIWorks collection of AI tools and
              practical utilities.
            </p>
          </a>

          <button
            onClick={() => setShowCommonlyUsed(true)}
            className={`group rounded-2xl border p-5 text-left transition hover:-translate-y-0.5 ${
              showCommonlyUsed
                ? "border-violet-400/20 bg-violet-500/[0.06] shadow-xl shadow-violet-500/[0.05]"
                : "border-white/[0.07] bg-white/[0.025]"
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
              Quickly access a selection of tools for common everyday tasks.
            </p>
          </button>
        </div>

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
                  <ToolCard key={tool.name} tool={tool} />
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
      {/* AI TOOLS EXPLAINED */}
      {/* ========================================================= */}

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              AI Tools
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              AI tools built around specific tasks.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
              AI becomes more useful when it is connected to a clear task.
              Instead of trying to use one general-purpose tool for everything,
              KrishAIWorks provides focused tools for writing, studying,
              careers and content workflows.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🎓",
                title: "Study & Learning",
                text: "Students can work with notes, PDFs and study material, summarize information and get assistance while revising difficult topics.",
              },
              {
                icon: "💼",
                title: "Career & Jobs",
                text: "Job seekers can prepare resumes, analyze existing resumes, create cover letters and improve professional communication.",
              },
              {
                icon: "✍️",
                title: "Writing & Communication",
                text: "Use focused tools for emails, replies, grammar improvements and other everyday writing tasks.",
              },
              {
                icon: "🎥",
                title: "Creators",
                text: "Creators can generate content ideas, captions, YouTube titles, descriptions and subtitles as starting points for their workflow.",
              },
              {
                icon: "📚",
                title: "Information",
                text: "Long documents and other information-heavy material can be easier to understand when the right summarization workflow is used.",
              },
              {
                icon: "🧩",
                title: "Everyday Productivity",
                text: "Small focused tools can remove repetitive steps and help users spend less time on simple digital operations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/[0.07] bg-black/25 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/15"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/[0.07] text-xl">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* HOW TO CHOOSE */}
      {/* ========================================================= */}

      <section
        id="how"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              How It Works
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Start with the task, not the technology.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
              The easiest way to use the collection is to identify what you
              actually need to accomplish and then choose the smallest tool
              that solves that problem.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Identify the task",
                text: "Decide what you are trying to accomplish. For example, summarize a PDF, improve an email, create a resume or convert a file.",
              },
              {
                title: "Choose the right tool",
                text: "Use the search above or open the complete tools directory. Focused tools are easier to use when their purpose matches your task.",
              },
              {
                title: "Review the result",
                text: "Use the output as a starting point and check important information before relying on it for academic, professional or business decisions.",
              },
            ].map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-white/[0.07] bg-black/25 p-7"
              >
                <span className="text-2xl font-bold text-violet-300">•</span>

                <h3 className="mt-5 text-xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {step.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-amber-400/10 bg-amber-400/[0.025] p-6">
            <p className="text-sm leading-7 text-zinc-500">
              <span className="font-semibold text-amber-300">
                Important:
              </span>{" "}
              AI-generated information can contain errors, omissions or
              incorrect assumptions. Always review generated results before
              using them for important academic, professional, financial,
              legal, medical or business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* USE CASES */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            Everyday Use Cases
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Built for different kinds of work.
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
            The collection is intentionally broad because people use digital
            tools differently. A student may need help understanding a PDF,
            while a creator may need a caption or a professional may need to
            prepare a resume.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {[
            {
              icon: "🎓",
              title: "For Students",
              text: "Use study-focused tools to organize notes, understand long documents, revise information and simplify repetitive academic tasks. The tools are designed to assist learning, not replace the student's own understanding.",
              links: [
                "Smart Note AI",
                "PDF AI Summarizer",
                "AI Study Assistant",
                "Word Counter & Reading Time",
              ],
            },
            {
              icon: "💼",
              title: "For Job Seekers",
              text: "Preparing an application often requires several separate tasks. Resume, cover-letter and professional-writing tools can help create a stronger starting point that the user can then personalize.",
              links: [
                "AI Resume Generator",
                "AI Resume Analyzer",
                "AI Cover Letter Generator",
                "AI LinkedIn Post Generator",
              ],
            },
            {
              icon: "🎨",
              title: "For Creators",
              text: "Content creation involves research, writing, editing and presentation. Focused AI tools can help generate starting ideas and reduce repetitive parts of the workflow.",
              links: [
                "AI Instagram Caption Generator",
                "AI YouTube Title & Description Generator",
                "AI Blog Generator",
                "AI Subtitle Generator",
              ],
            },
            {
              icon: "🏢",
              title: "For Professionals & Businesses",
              text: "Professionals can use tools for communication and productivity, while businesses can request custom chatbots, automations, websites and lead-generation workflows.",
              links: [
                "AI Email Writer",
                "AI Email Reply Generator",
                "AI Grammar & Writing Fixer",
                "Custom AI Solutions",
              ],
            },
          ].map((useCase) => (
            <article
              key={useCase.title}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 backdrop-blur-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-violet-400/10 bg-violet-500/[0.07] text-xl">
                {useCase.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                {useCase.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {useCase.text}
              </p>

              <div className="mt-6 space-y-2">
                {useCase.links.map((link) => (
                  <div
                    key={link}
                    className="flex items-center gap-2 text-xs text-zinc-600"
                  >
                    <span className="text-violet-400">•</span>
                    <span>{link}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* SERVICES */}
      {/* ========================================================= */}

      <section
        id="services"
        className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
              Custom Digital Solutions
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Need something beyond a ready-made tool?
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
              KrishAIWorks also works on custom digital products. The right
              solution depends on the workflow, users and business problem, so
              projects are discussed before deciding what should actually be
              built.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-white/[0.07] bg-black/25 p-6 transition hover:-translate-y-1 hover:border-violet-400/15"
              >
                <div className="text-2xl">{service.icon}</div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-500">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-violet-400/10 bg-gradient-to-r from-violet-500/[0.07] via-white/[0.018] to-cyan-500/[0.04] p-7">
            <h3 className="text-xl font-bold text-white">
              A custom project starts with the problem.
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-500">
              For a custom project, it helps to describe what currently takes
              too much time, what information needs to move between systems,
              who will use the solution and what result you want. This makes it
              easier to decide whether an AI chatbot, automation, website,
              dashboard or another approach is appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTENT / GUIDES */}
      {/* ========================================================= */}

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Practical Guidance
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Get more value from the tools.
          </h2>

          <p className="mt-5 text-sm leading-7 text-zinc-500 sm:text-base">
            A tool is only useful when it fits the workflow around it. These
            simple principles can help you use AI and digital utilities more
            effectively.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Use specific inputs",
              text: "For AI tools, clearer context generally produces more useful results. Include the relevant goal, audience, format and important details when the interface allows it.",
            },
            {
              title: "Treat AI output as a draft",
              text: "AI-generated text can be useful as a starting point, but it should still be edited for accuracy, tone, context and personal experience.",
            },
            {
              title: "Choose simple tools when possible",
              text: "If a task only requires a conversion, calculation or formatting operation, a focused utility may be more appropriate than an AI workflow.",
            },
            {
              title: "Protect sensitive information",
              text: "Before uploading information to any online service, consider whether the material contains passwords, confidential business information, private documents or other sensitive data.",
            },
            {
              title: "Check important information",
              text: "Summaries can omit details and generated answers can contain mistakes. Verify information when accuracy matters.",
            },
            {
              title: "Build a repeatable workflow",
              text: "If you regularly perform the same sequence of tasks, combining focused tools with a consistent workflow can save more time than using a tool only once.",
            },
          ].map((guide) => (
            <article
              key={guide.title}
              className="rounded-3xl border border-white/[0.07] bg-white/[0.018] p-6"
            >
              <h3 className="text-lg font-bold text-white">{guide.title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500">
                {guide.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* PRIVACY / RESPONSIBLE USE */}
      {/* ========================================================= */}

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.012]">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/[0.07] bg-black/25 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
                Privacy & Data Awareness
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Think about the information you upload.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                Online tools can involve processing information in a browser,
                through a server or through third-party services depending on
                how an individual tool works. Users should avoid uploading
                sensitive information unless they understand the relevant
                privacy implications.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                KrishAIWorks provides a{" "}
                <a
                  href="https://krishaiworks.com/privacy-policy"
                  className="text-violet-300 hover:text-violet-200"
                >
                  Privacy Policy
                </a>{" "}
                explaining the platform's general approach to information,
                analytics, advertising and third-party services.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.07] bg-black/25 p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Responsible AI Use
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white">
                Technology should assist judgment.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500">
                AI tools are useful for drafting, organizing, summarizing and
                exploring ideas, but they do not guarantee that every output is
                accurate or appropriate. Users remain responsible for reviewing
                and deciding how generated content is used.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                For important decisions or sensitive areas, use appropriate
                professional or authoritative sources rather than relying only
                on an AI-generated result.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FAQ */}
      {/* ========================================================= */}

      <section
        id="faq"
        className="relative z-10 mx-auto max-w-4xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-400">
            FAQ
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Questions, answered.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500">
            A few practical answers about the tools, AI-generated content and
            custom solutions available through KrishAIWorks.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5"
            >
              <summary className="cursor-pointer list-none font-medium text-white">
                <div className="flex items-center justify-between gap-5">
                  <span>{faq.question}</span>

                  <span className="text-xl text-violet-300 transition group-open:rotate-45">
                    +
                  </span>
                </div>
              </summary>

              <p className="mt-4 text-sm leading-7 text-zinc-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CONTACT */}
      {/* ========================================================= */}

      <section
        id="contact"
        className="relative z-10 mx-auto max-w-5xl scroll-mt-8 px-5 py-24 sm:px-8"
      >
        <div className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.13] via-white/[0.035] to-transparent p-7 text-center shadow-[0_30px_100px_rgba(79,70,229,0.12)] sm:p-12">
          <span className="inline-flex rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-violet-200">
            Work with KrishAIWorks
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Have an idea?
            <br />
            <span className="text-violet-300">Let's build it.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            Looking for an AI automation, website, chatbot, lead-generation
            system or custom digital solution? Share what you want to build and
            we can discuss the most practical approach.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="https://wa.me/919015321788"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold transition hover:bg-emerald-400/10"
            >
              💬 WhatsApp
            </a>

            <a
              href="https://instagram.com/krishaiworks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold transition hover:bg-pink-400/10"
            >
              📸 Instagram
            </a>

            <a
              href="https://t.me/KrishAIworks"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold transition hover:bg-sky-400/10"
            >
              ✈️ Telegram
            </a>

            <a
              href="mailto:krishaiworks@gmail.com"
              className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 text-sm font-semibold transition hover:bg-indigo-400/10"
            >
              ✉️ Email
            </a>
          </div>

          <p className="mt-7 text-xs text-zinc-700">
            @krishaiworks · krishaiworks@gmail.com
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* FOOTER */}
      {/* ========================================================= */}

      <footer className="relative z-10 border-t border-white/[0.06] px-5 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-violet-400/20">
                  <img
                    src="/logo.png"
                    alt="KrishAIWorks"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-bold text-white">
                    Krish<span className="text-blue-400">AI</span>Works
                  </p>

                  <p className="text-[10px] text-zinc-600">
                    AI Solutions That Work
                  </p>
                </div>
              </div>

              <p className="mt-4 max-w-sm text-xs leading-6 text-zinc-600">
                Practical AI tools, productivity utilities, automation systems,
                websites, chatbots and custom digital solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Explore
              </h3>

              <div className="mt-4 space-y-3 text-xs text-zinc-600">
                <a
                  href="#tools"
                  className="block transition hover:text-violet-300"
                >
                  Tools
                </a>

                <a
                  href="#services"
                  className="block transition hover:text-violet-300"
                >
                  Services
                </a>

                <a
                  href="#how"
                  className="block transition hover:text-violet-300"
                >
                  How It Works
                </a>

                <a
                  href="#faq"
                  className="block transition hover:text-violet-300"
                >
                  FAQ
                </a>

                <a
                  href="/tools"
                  className="block transition hover:text-violet-300"
                >
                  All Tools
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Legal
              </h3>

              <div className="mt-4 space-y-3 text-xs text-zinc-600">
                <a
                  href="https://krishaiworks.com/privacy-policy"
                  className="block transition hover:text-violet-300"
                >
                  Privacy Policy
                </a>

                <a
                  href="https://krishaiworks.com/terms-and-conditions"
                  className="block transition hover:text-violet-300"
                >
                  Terms & Conditions
                </a>

                <a
                  href="mailto:krishaiworks@gmail.com"
                  className="block transition hover:text-violet-300"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.06] pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-xs text-zinc-700">
              © {new Date().getFullYear()} KrishAIWorks. All rights reserved.
            </p>

            <p className="text-xs text-zinc-700">
              Built with AI, code and curiosity.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}