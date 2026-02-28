# LLLWallpaper

GPU-accelerated live wallpapers for Windows.
Lightweight. Smart. No bloat.

⚠️ **Pre-Release (Beta)** – Expect bugs. Stability and performance may vary.

---

## ✨ Features

*  Hardware-accelerated video playback (VLC-based)
*  Smart fullscreen detection (pauses only after 30 seconds)
*  Low resource usage
*  Fullscreen borderless wallpaper window
*  Looping playback
*  Clean single-file architecture

---

## Requirements

* Windows 10 / 11
* Python 3.10+
* VLC installed on your system(Ensure VLC is installed and available in your system PATH. Alternatively, place libvlc.dll in the project root for manual linking.)
* Required Python packages:

```bash
pip install -r requirements.txt
```

---

## Installation (Source)

1. Clone the repository:

```bash
git clone https://github.com/TheSkyFalls-dot/LLLWallpaper.git
cd LLLWallpaper
```

2. Create a virtual environment:

```bash
python -m venv .venv
.venv\Scripts\activate
```

3. Install dependencies:

```bash
pip install -r requirements.txt
```

4. Run:

```bash
python main.py
```

---

## Configuration

Currently configurable via code:

* Video file path
  
Config file support may be added in future versions.

---

## How It Works

* Embeds a VLC media player instance into a borderless fullscreen window.
* Attaches to the Windows wallpaper layer.
* Monitors fullscreen applications.
* Pauses playback only if fullscreen persists beyond 30 seconds.
* Resumes automatically when fullscreen ends.

---

## Roadmap

* [ ] Config file (JSON)
* [ ] Multi-monitor support
* [ ] Auto-update system
* [ ] Settings UI
* [ ] Performance overlay
* [ ] Installer build

---

## ⚠️ Disclaimer

This is a pre-release build.
Use at your own risk.
Performance may vary depending on GPU, drivers, and system configuration.

---

## Why?

Windows wallpapers are static.
Many free live wallpaper tools rely on browser engines (CEF) or web rendering methods, which can consume unnecessary resources.

LLLWallpaper uses direct VLC-based hardware decoding for efficient playback without heavy web layers.

The goal: smooth visuals, lower overhead, and full control.

## Known Issues

May leave a 1px artifact on some displays

Fullscreen detection may not detect all borderless apps

Multi-monitor not yet supported
