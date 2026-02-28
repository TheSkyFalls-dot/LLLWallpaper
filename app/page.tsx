"use client";

import { useEffect, useRef, useState } from "react";

export default function LLLWallpaperPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased overflow-x-hidden">
      {/* Grid background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: "600px",
            height: "600px",
            top: "-200px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle, rgba(120,120,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: "400px",
            height: "400px",
            bottom: "20%",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(80,200,180,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Navbar */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4"
        style={{
          background: "rgba(0,0,0,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-sm font-semibold tracking-widest uppercase"
            style={{ letterSpacing: "0.18em" }}
          >
            LLL<span className="text-gray-400">Wallpaper</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#why" className="hover:text-white transition-colors duration-200">Why LLL</a>
          <a href="#roadmap" className="hover:text-white transition-colors duration-200">Roadmap</a>
          <a
            href="https://github.com/TheSkyFalls-dot/LLLWallpaper"
            className="hover:text-white transition-colors duration-200 flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.244-.016-2.25-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.7.825.58C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
        <a
          href="/downloads/LLLWallpaper_Installer.exe"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-all duration-200"
          style={{
            background: "rgba(255,255,255,0.9)",
            color: "#000",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.9)";
          }}
        >
          Download
        </a>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-32">
        {/* Version badge */}
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs text-gray-400 mb-8"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
            style={{ boxShadow: "0 0 6px rgba(52,211,153,0.8)" }}
          />
          Pre-Release Available — v0.1.0-alpha
        </div>

        <h1
          className="text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-none"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.6) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          LLL<wbr />Wallpaper
        </h1>

        <p
          className="text-xl md:text-2xl font-light mb-4 max-w-xl"
          style={{
            background: "linear-gradient(90deg, #a1a1aa, #d4d4d8, #a1a1aa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          GPU-accelerated live wallpapers for Windows
        </p>

        <p className="text-gray-500 text-base max-w-lg mb-12 leading-relaxed">
          Built on Direct3D. No browser overhead. No RAM drain. Pure native performance 
          for wallpapers that move as fluidly as your hardware allows.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            id="download"
            href="/downloads/LLLWallpaper_Installer.exe"
            download
            className="group flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition-all duration-200"
            style={{
              background: "#fff",
              color: "#000",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Pre-Release
          </a>

          <a
            href="https://github.com/TheSkyFalls-dot/LLLWallpaper"
            className="flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-gray-300 transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
            }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.262.82-.582 0-.288-.012-1.244-.016-2.25-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.7.825.58C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600 text-xs">
          <span>Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Built for performance.
            </h2>
            <p className="text-gray-500 max-w-md mx-auto text-base">
              Every architectural decision optimized for zero-impact background rendering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
                title: "Direct3D Rendering",
                desc: "Hardware-accelerated rendering pipeline using Direct3D 11/12. Your GPU does the heavy lifting — no software fallbacks.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
                  </svg>
                ),
                title: "Multi-Monitor Support",
                desc: "Span unique wallpapers across each display independently. Different content, different refresh rates — all synced.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Custom Shader Support",
                desc: "Write your own HLSL shaders or choose from the built-in library. Infinite creative control over your desktop.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
                title: "Near-Zero CPU Impact",
                desc: "Offload all rendering to the GPU render queue. Background process uses under 1% CPU at idle with smooth 60fps output.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                  </svg>
                ),
                title: "Scene Marketplace",
                desc: "Import and export scenes in an open format. Share creations with the community or pull from the growing library.",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ),
                title: "Adaptive Brightness",
                desc: "Auto-dim when an app is focused. Pause rendering when on battery. Intelligent enough to stay out of your way.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-lg transition-all duration-300 cursor-default"
                style={{
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                <div
                  className="inline-flex items-center justify-center w-9 h-9 rounded-md mb-4 text-gray-300"
                  style={{
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-sm font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      {/* Why Section */}
      <section id="why" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Why LLLWallpaper</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                Not another<br />
                <span className="text-gray-400">Electron wrapper.</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Browser-based wallpaper engines like Wallpaper Engine and Lively Wallpaper run a full Chromium process in the background — consuming 300–600 MB of RAM and up to 5% persistent CPU just to render HTML and JavaScript behind your taskbar.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                LLLWallpaper is a native Win32 application with a Direct3D rendering backend. Wallpapers are compiled scenes, not web pages. The process footprint is measured in megabytes, not hundreds.
              </p>
              <p className="text-gray-400 leading-relaxed">
                If you game, stream, or do compute-intensive work, your wallpaper should never be a liability. With LLLWallpaper, it isn't.
              </p>
            </div>

            {/* Comparison card */}
            <div
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div
                className="px-5 py-3 text-xs text-gray-500 font-mono"
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                resource_comparison.benchmark
              </div>
              <div className="p-5 space-y-5">
                {[
                  { label: "Browser-based engine", ram: "480MB", cpu: "4.8%", bad: true },
                  { label: "LLLWallpaper", ram: "28MB", cpu: "0.4%", bad: false },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-medium ${row.bad ? "text-gray-400" : "text-white"}`}>
                        {row.label}
                      </span>
                      {!row.bad && (
                        <span
                          className="text-xs px-2 py-0.5 rounded-full text-emerald-400 font-medium"
                          style={{
                            background: "rgba(52,211,153,0.1)",
                            border: "1px solid rgba(52,211,153,0.2)",
                          }}
                        >
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div
                        className="p-3 rounded-md"
                        style={{
                          border: "1px solid rgba(255,255,255,0.06)",
                          background: "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div className="text-xs text-gray-600 mb-1">RAM Usage</div>
                        <div className={`text-lg font-semibold font-mono ${row.bad ? "text-red-400" : "text-emerald-400"}`}>
                          {row.ram}
                        </div>
                      </div>
                      <div
                        className="p-3 rounded-md"
                        style={{
                          border: "1px solid rgba(255,255,255,0.06)",
                          background: "rgba(255,255,255,0.02)",
                        }}
                      >
                        <div className="text-xs text-gray-600 mb-1">CPU (idle)</div>
                        <div className={`text-lg font-semibold font-mono ${row.bad ? "text-red-400" : "text-emerald-400"}`}>
                          {row.cpu}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      {/* Roadmap Section */}
      <section id="roadmap" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Roadmap</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
                What's coming.
              </h2>
              <p className="text-gray-400 leading-relaxed">
                LLLWallpaper is in active development. We build in the open and ship when it's ready — not before.
              </p>
            </div>

            <div className="space-y-2">
              {[
                { label: "Direct3D 11 rendering backend", done: true },
                { label: "Basic shader scene support (HLSL)", done: true },
                { label: "System tray management UI", done: true },
                { label: "Multi-monitor per-display scenes", done: true },
                { label: "Scene import / export format (v1)", done: false },
                { label: "In-app scene browser & library", done: false },
                { label: "Audio-reactive wallpaper support", done: false },
                { label: "Direct3D 12 upgrade path", done: false },
                { label: "Community marketplace (open beta)", done: false },
                { label: "macOS / Linux native ports", done: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.05)",
                    background: item.done ? "rgba(255,255,255,0.02)" : "transparent",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{
                      border: item.done
                        ? "1px solid rgba(52,211,153,0.4)"
                        : "1px solid rgba(255,255,255,0.12)",
                      background: item.done
                        ? "rgba(52,211,153,0.1)"
                        : "transparent",
                    }}
                  >
                    {item.done ? (
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    )}
                  </div>
                  <span
                    className={`text-sm ${item.done ? "text-gray-300" : "text-gray-600"}`}
                  >
                    {item.label}
                  </span>
                  {item.done && (
                    <span
                      className="ml-auto text-xs text-emerald-500 font-medium"
                      style={{ letterSpacing: "0.05em" }}
                    >
                      DONE
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      {/* CTA Banner */}
      <section className="relative py-24 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(100,100,255,0.06) 0%, transparent 70%)",
          }}
        />
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Get Started</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Ready to try it?
        </h2>
        <p className="text-gray-500 max-w-sm mx-auto mb-10">
          Download the pre-release build and join the community shaping the future of live wallpapers.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/downloads/LLLWallpaper_Installer.exe"
            download
            className="px-8 py-3 rounded-md text-sm font-semibold bg-white text-black transition-all duration-200"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 32px rgba(255,255,255,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Download Pre-Release
          </a>
          <a
            href="https://github.com/TheSkyFalls-dot/LLLWallpaper"
            className="px-8 py-3 rounded-md text-sm font-medium text-gray-400 transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "rgb(156,163,175)";
            }}
          >
            View on GitHub
          </a>
        </div>
      </section>

      {/* Divider */}
      <div
        className="w-full h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      {/* Footer */}
      <footer className="py-10 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-400">
              LLL<span className="text-gray-600">Wallpaper</span>
            </span>
          </div>
          <p className="text-xs text-gray-700">
            © {new Date().getFullYear()} LLLWallpaper.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-600">
            <a href="https://github.com/TheSkyFalls-dot" className="hover:text-gray-400 transition-colors">GitHub</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Docs</a>
            <a href="#" className="hover:text-gray-400 transition-colors">License</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
