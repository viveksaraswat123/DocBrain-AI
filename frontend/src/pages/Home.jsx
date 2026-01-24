import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center font-bold">
              D
            </div>
            <span className="text-lg font-semibold tracking-wide">
              DocBrain <span className="text-slate-300">AI</span>
            </span>
          </Link>

          <nav className="flex items-center gap-3">
            <Link
              to="/login"
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-200 hover:bg-white/10 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
              ⚡ Fast • Secure • AI-Powered
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              Revolutionize your{" "}
              <span className="text-slate-300">document workflow</span> with AI
            </h1>

            <p className="mt-5 text-lg text-slate-300 leading-relaxed">
              DocBrain AI helps you analyze, summarize, and generate insights
              from documents using powerful AI models like OpenAI and Google
              Gemini — in seconds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/register"
                className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition"
              >
                Start Free
              </Link>

              <Link
                to="/login"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                I already have an account
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <StatCard title="AI Models" value="GPT + Gemini" />
              <StatCard title="Export Formats" value="PDF / DOCX / TXT" />
              <StatCard title="History Tracking" value="Saved Outputs" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">What DocBrain AI does</h2>
          <p className="mt-3 text-slate-300">
            Everything you need to process documents like a pro — clean,
            accurate, and fast.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon="🧠"
            title="AI-Powered Analysis"
            desc="Understand documents deeply with smart extraction, Q&A, and structured insights."
          />
          <FeatureCard
            icon="📌"
            title="Smart Summarization"
            desc="Turn long documents into short, meaningful summaries without losing context."
          />
          <FeatureCard
            icon="📄"
            title="Multi-Format Export"
            desc="Export outputs in PDF, TXT, or DOCX for sharing, reporting, or saving."
          />
          <FeatureCard
            icon="🔒"
            title="Secure by Design"
            desc="Your data stays protected with token-based authentication and secure access."
          />
          <FeatureCard
            icon="⚡"
            title="Fast Results"
            desc="Optimized backend APIs so you get answers quickly and consistently."
          />
          <FeatureCard
            icon="🗂️"
            title="History Tracking"
            desc="Save your prompts and results automatically for quick revisiting later."
          />
        </div>
      </section>

      {/* How it Works */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-3 text-slate-300">
            Simple process. Clean workflow. Professional output.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <StepCard
            step="01"
            title="Enter your prompt"
            desc="Paste document content or describe what you want: summarize, analyze, extract key points."
          />
          <StepCard
            step="02"
            title="Choose AI model"
            desc="Select between OpenAI or Gemini based on your needs — speed, style, or reasoning."
          />
          <StepCard
            step="03"
            title="Get results & export"
            desc="Review the response instantly and export it to PDF / DOCX / TXT with one click."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} DocBrain AI. All rights reserved.
          </p>

          <div className="flex gap-4 text-sm text-slate-400">
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
            <Link to="/login" className="hover:text-white transition">
              Login
            </Link>
            <Link to="/register" className="hover:text-white transition">
              Register
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-2xl">{icon}</div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
      <div className="text-sm font-semibold text-slate-300">{step}</div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <p className="text-xs text-slate-400">{title}</p>
      <p className="mt-1 text-base font-semibold">{value}</p>
    </div>
  );
}

export default Home;
