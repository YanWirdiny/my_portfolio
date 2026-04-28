import { useState } from 'react';
import { Link } from 'react-router-dom';

function TerminalCard({ filename, children }: { filename: string; children: React.ReactNode }) {
  return (
    <div className="terminal-card">
      <div className="terminal-bar">
        <div className="lights">
          <span className="l-r" />
          <span className="l-y" />
          <span className="l-g" />
        </div>
        <div className="terminal-title">{filename}</div>
      </div>
      <div className="terminal-body">{children}</div>
    </div>
  );
}

const features = [
  { title: 'Real-time Navigation', desc: 'Audio-guided directions for safe movement through any environment.' },
  { title: 'Obstacle Detection',   desc: 'Alerts users about obstacles and hazards in their path.' },
  { title: 'Voice Commands',       desc: 'Hands-free control through natural voice interaction.' },
  { title: 'Accessibility First',  desc: 'Built from the ground up with accessibility as the core principle.' },
];

export default function BuddyPage() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <div data-theme={theme} className="buddy-root">

      {/* Nav */}
      <nav className="p-nav">
        <div className="nav-inner">
          <Link to="/" className="back-link">
            <span className="cr-text">&#8592;&nbsp;</span>
            back_to_portfolio
          </Link>
          <div className="nav-meta">
            <span className="nav-file">~/projects/buddy.app</span>
            <button
              className="theme-toggle"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? '[light]' : '[dark]'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="buddy-hero">
        <div className="grid-overlay" />
        <div className="hero-inner">
          <div className="proj-eyebrow">
            <span className="proj-id">PRJ-001</span>
            <span className="proj-status">
              <span className="dot-live" />
              deployed
            </span>
          </div>
          <h1 className="buddy-headline">BUDDY</h1>
          <p className="buddy-sub">
            The unique mobile app helping people with visual impairments navigate the world.
          </p>
          <div className="tech-tags">
            {['React Native', 'TypeScript', 'Node.js'].map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="content-section">
        <div className="content-inner">
          <div className="section-label">
            <span className="label-text">&gt;&gt; overview</span>
            <span className="label-rule" />
          </div>
          <TerminalCard filename="~/projects/buddy/overview.md">
            <p className="section-prompt">$ cat overview.md</p>
            <p className="body-text">
              BUDDY is a mobile application designed to assist visually impaired individuals
              in navigating their surroundings safely and independently. Using advanced
              computer vision and audio synthesis, BUDDY provides real-time guidance
              to help users move through both familiar and unfamiliar environments with
              confidence. Every design decision was made with the user's dignity and
              independence as the primary measure of success.
            </p>
          </TerminalCard>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="content-inner">
          <div className="section-label">
            <span className="label-text">&gt;&gt; key_features</span>
            <span className="label-rule" />
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <TerminalCard key={i} filename={`feature_${String(i + 1).padStart(2, '0')}.sh`}>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </TerminalCard>
            ))}
          </div>
        </div>
      </section>

      {/* Try it out */}
      <section className="try-section">
        <div className="content-inner">
          <div className="section-label">
            <span className="label-text">&gt;&gt; try_it_out</span>
            <span className="label-rule" />
          </div>
          <h2 className="try-headline">
            COMING <span className="cr-text">SOON</span>
          </h2>
          <p className="try-sub">The app is currently in development. Download link will be available shortly.</p>
          <div className="try-btns">
            <span className="btn-disabled">$ ./download — coming_soon</span>
            <Link to="/" className="btn-secondary">&#8592; back_to_portfolio</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-footer">
        <div className="footer-inner">
          <span>&#169; 2025 yan_wirdiny_moise // all_rights_reserved</span>
          <span>built_with: react // hosted_on: railway</span>
        </div>
      </footer>

      <style>{`
        /* ── Theme tokens ──────────────────────────────────────── */
        [data-theme="dark"], .buddy-root {
          --cr:          #8B1A1A;
          --cr-dk:       #5C0F0F;
          --hero-bg:     #8B1A1A;
          --hero-txt:    #F0EBE0;
          --work-bg:     #0A0A0A;
          --feat-bg:     #0A0A0A;
          --try-bg:      #8B1A1A;
          --card-bg:     #141414;
          --card-border: #2A2A2A;
          --bar-bg:      #1F1F1F;
          --txt-1:       #F0EBE0;
          --txt-2:       rgba(240,235,224,0.5);
          --label-clr:   #B22222;
          --live-clr:    #5DFF8A;
          --nav-bg:      rgba(10,10,10,0.95);
          --nav-border:  #2A2A2A;
          --nav-txt:     #F0EBE0;
          --grid-clr:    rgba(240,235,224,0.06);
          --footer-bg:   #0A0A0A;
          --footer-bdr:  #2A2A2A;
          --footer-txt:  rgba(240,235,224,0.4);
        }

        [data-theme="light"] {
          --cr:          #8B1A1A;
          --cr-dk:       #5C0F0F;
          --hero-bg:     #F4EFE4;
          --hero-txt:    #8B1A1A;
          --work-bg:     #FAF8F3;
          --feat-bg:     #EBE5D7;
          --try-bg:      #F4EFE4;
          --card-bg:     #FAF8F3;
          --card-border: #1A1A1A;
          --bar-bg:      #E8E2D2;
          --txt-1:       #1A1A1A;
          --txt-2:       #4A4A4A;
          --label-clr:   #8B1A1A;
          --live-clr:    #1F9D3A;
          --nav-bg:      rgba(250,248,243,0.97);
          --nav-border:  #C9C2B1;
          --nav-txt:     #1A1A1A;
          --grid-clr:    rgba(26,26,26,0.05);
          --footer-bg:   #EBE5D7;
          --footer-bdr:  #C9C2B1;
          --footer-txt:  #4A4A4A;
        }

        /* ── Reset ──────────────────────────────────────────────── */
        .buddy-root *, .buddy-root *::before, .buddy-root *::after {
          border-radius: 0 !important;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .buddy-root .lights span,
        .buddy-root .dot-live {
          border-radius: 50% !important;
        }
        * { scroll-behavior: smooth; }

        /* ── Root ───────────────────────────────────────────────── */
        .buddy-root {
          font-family: 'Courier New', Courier, monospace;
          background-color: var(--work-bg);
          color: var(--txt-1);
          overflow-x: hidden;
          min-height: 100vh;
        }

        /* ── Shared util ─────────────────────────────────────────── */
        .cr-text { color: var(--cr); }

        /* ── Nav ─────────────────────────────────────────────────── */
        .p-nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 40;
          background: var(--nav-bg);
          border-bottom: 1px solid var(--nav-border);
          backdrop-filter: blur(12px);
        }
        .nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .back-link {
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--nav-txt);
          text-decoration: none;
          transition: color 0.2s;
        }
        .back-link:hover { color: var(--cr); }
        .nav-meta { display: flex; align-items: center; gap: 20px; }
        .nav-file {
          font-size: 10px;
          letter-spacing: 1.5px;
          color: var(--txt-2);
        }
        .theme-toggle {
          background: transparent;
          border: 1px solid var(--nav-border);
          color: var(--nav-txt);
          font-family: 'Courier New', monospace;
          font-size: 9px;
          letter-spacing: 1px;
          padding: 5px 10px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
        }
        .theme-toggle:hover { border-color: var(--cr); color: var(--cr); }

        /* ── Hero ─────────────────────────────────────────────────── */
        .buddy-hero {
          background-color: var(--hero-bg);
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 140px 36px 80px;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
        }
        .proj-eyebrow {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 20px;
        }
        .proj-id { font-size: 9px; letter-spacing: 2px; color: var(--cr); }
        .proj-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 9px;
          letter-spacing: 1px;
          color: var(--live-clr);
        }
        .dot-live {
          width: 7px;
          height: 7px;
          background: var(--live-clr);
          display: inline-block;
          flex-shrink: 0;
        }
        .buddy-headline {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: clamp(72px, 12vw, 140px);
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--hero-txt);
          line-height: 0.9;
          margin-bottom: 24px;
        }
        .buddy-sub {
          font-size: 13px;
          letter-spacing: 0.5px;
          color: var(--hero-txt);
          opacity: 0.7;
          max-width: 480px;
          line-height: 1.8;
          margin-bottom: 28px;
        }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .proj-tag {
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 8px;
          border: 1px solid var(--cr);
          color: var(--cr);
        }

        /* ── Grid overlay ──────────────────────────────────────── */
        .grid-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-image:
            linear-gradient(var(--grid-clr) 1px, transparent 1px),
            linear-gradient(90deg, var(--grid-clr) 1px, transparent 1px);
          background-size: 36px 36px;
        }

        /* ── Terminal card ──────────────────────────────────────── */
        .terminal-card {
          border: 1px solid var(--card-border);
          background: var(--card-bg);
          box-shadow: 10px 10px 0 0 var(--cr);
          width: 100%;
        }
        .terminal-bar {
          background: var(--bar-bg);
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 1px solid var(--card-border);
        }
        .lights { display: flex; gap: 7px; }
        .lights span { width: 11px; height: 11px; display: inline-block; }
        .l-r { background: #FF5F57; }
        .l-y { background: #FEBC2E; }
        .l-g { background: #28C840; }
        .terminal-title {
          font-size: 10px;
          color: var(--txt-2);
          letter-spacing: 1.5px;
          flex: 1;
          text-align: center;
          margin-right: 42px;
        }
        .terminal-body { padding: 28px 32px; }

        /* ── Section commons ─────────────────────────────────────── */
        .content-section { background-color: var(--work-bg); }
        .features-section { background-color: var(--feat-bg); }
        .content-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 36px;
        }
        .section-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        .label-text {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--label-clr);
          white-space: nowrap;
        }
        .label-rule {
          flex: 1;
          height: 1px;
          background: var(--card-border);
        }

        /* ── Overview content ────────────────────────────────────── */
        .section-prompt {
          font-size: 10px;
          color: var(--txt-2);
          margin-bottom: 20px;
        }
        .body-text {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 18px;
          line-height: 1.75;
          color: var(--txt-1);
          max-width: 680px;
        }

        /* ── Features grid ───────────────────────────────────────── */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 36px;
        }
        .feature-title {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: 22px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--txt-1);
          margin-bottom: 12px;
        }
        .feature-desc {
          font-size: 11px;
          letter-spacing: 0.3px;
          color: var(--txt-2);
          line-height: 1.7;
        }

        /* ── Try section ─────────────────────────────────────────── */
        .try-section {
          background-color: var(--try-bg);
          position: relative;
          overflow: hidden;
        }
        .try-section .content-inner { position: relative; z-index: 1; }
        .try-section .terminal-card { box-shadow: 10px 10px 0 0 var(--cr-dk); }
        [data-theme="light"] .try-section .terminal-card { box-shadow: 10px 10px 0 0 var(--cr); }
        .try-headline {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: clamp(48px, 8vw, 76px);
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--hero-txt);
          line-height: 1;
          margin-bottom: 16px;
        }
        .try-sub {
          font-size: 11px;
          letter-spacing: 0.3px;
          color: var(--hero-txt);
          opacity: 0.6;
          margin-bottom: 36px;
          max-width: 420px;
          line-height: 1.7;
        }
        .try-btns { display: flex; flex-wrap: wrap; gap: 20px; align-items: center; }
        .btn-disabled {
          padding: 14px 28px;
          border: 1px solid var(--cr-dk);
          color: var(--hero-txt);
          opacity: 0.4;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          cursor: not-allowed;
          display: inline-block;
        }
        .btn-secondary {
          padding: 14px 28px;
          background: transparent;
          color: var(--hero-txt);
          font-family: 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-decoration: none;
          border: 1px solid rgba(240,235,224,0.3);
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }
        .btn-secondary:hover { border-color: var(--hero-txt); }
        [data-theme="light"] .btn-secondary { color: var(--txt-1); border-color: var(--card-border); }
        [data-theme="light"] .btn-secondary:hover { border-color: var(--cr); color: var(--cr); }
        [data-theme="light"] .btn-disabled { color: var(--txt-1); }
        [data-theme="light"] .try-sub { color: var(--txt-1); }
        [data-theme="light"] .try-headline { color: var(--hero-txt); }

        /* ── Footer ──────────────────────────────────────────────── */
        .p-footer {
          background: var(--footer-bg);
          border-top: 1px solid var(--footer-bdr);
          padding: 18px 36px;
        }
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 9px;
          letter-spacing: 1px;
          color: var(--footer-txt);
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 768px) {
          .nav-inner      { padding: 18px 20px; }
          .nav-file       { display: none; }
          .buddy-hero     { padding: 120px 20px 60px; }
          .content-inner  { padding: 60px 20px; }
          .features-grid  { grid-template-columns: 1fr; }
          .try-btns       { flex-direction: column; align-items: flex-start; }
          .footer-inner   { flex-direction: column; text-align: center; }
        }
      `}</style>
    </div>
  );
}
