import React, { useState, useEffect } from 'react';
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

export default function Portfolio() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const word = 'ENGINEER';
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-anim').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'PRJ-001',
      title: 'BUDDY',
      desc: 'The unique mobile app helping people with visual impairment to navigate the world.',
      tech: ['React Native', 'TypeScript', 'Node.js'],
      filename: '~/projects/buddy.app',
      link: '/buddy',
      internal: true,
    },
    {
      id: 'PRJ-002',
      title: '123THERAPY',
      desc: 'An AI platform for the first step of mental health care.',
      tech: ['Python', 'Flask', 'Tailwind'],
      filename: '~/projects/123therapy.app',
      link: 'https://web-production-3fca1.up.railway.app/',
      internal: false,
    },
    {
      id: 'PRJ-003',
      title: 'CALENDARSYNC',
      desc: 'Plan your time effectively by syncing your Google Calendar with Canvas Student.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      filename: '~/projects/calendarsync.app',
      link: '/CalendarSync',
      internal: true,
    },
  ];

  const skills = [
    { name: 'DEVELOPMENT', filename: 'development.sh', items: ['React', 'Node.js', 'Python', 'TypeScript'] },
    { name: 'DESIGN',      filename: 'design.sh',      items: ['Figma', 'UI/UX', 'Prototyping', 'Branding'] },
    { name: 'TOOLS',       filename: 'infra.sh',        items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
  ];

  return (
    <div data-theme={theme} className="portfolio-root">

      {/* Nav */}
      <nav className="p-nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="nav-prompt">&gt;&nbsp;</span>
            <span className="nav-name">yan_wirdiny_moise</span>
          </div>
          <div className="nav-links">
            <a href="#work"    className="nav-link">[work]</a>
            <a href="#about"   className="nav-link">[about]</a>
            <a href="#contact" className="nav-link">[contact]</a>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '[light]' : '[dark]'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section">
        <div className="grid-overlay" />
        <div className="hero-inner scroll-anim anim-up is-visible">
          <div className="hero-badge">
            <span className="dot-live" />
            <span className="badge-text">available_for_work</span>
          </div>
          <div className="hero-eyebrow">
            <span className="eyebrow-rule" />
            <span className="eyebrow-text">software engineer // umass boston</span>
          </div>
          <h1 className="hero-headline">
            I AM YAN W. MOISE<br />YOUR SOFTWARE<br />
            <span className="typed-line">
              {typedText}<span className="typed-cursor">|</span>
            </span>
          </h1>
          <div className="manifesto-wrap">
            <TerminalCard filename="~/yan/manifesto.txt">
              <p className="manifesto-text">
                <span className="cr-text">$&nbsp;</span>
                a single line of code can change everything.
              </p>
            </TerminalCard>
          </div>
          <div className="version-tag">v2.6 // 2026</div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work-section">
        <div className="section-inner">
          <div className="section-label scroll-anim anim-up">
            <span className="label-text">&gt;&gt; selected_work</span>
            <span className="label-rule" />
          </div>
          <div className="projects-list">
            {projects.map((project, i) => {
              const card = (
                <div className="proj-card scroll-anim anim-up" style={{ transitionDelay: `${i * 120}ms` }}>
                  <TerminalCard filename={project.filename}>
                    <div className="proj-meta">
                      <span className="proj-id">{project.id}</span>
                      <span className="proj-status">
                        <span className="dot-live dot-sm" />
                        deployed
                      </span>
                    </div>
                    <h3 className="proj-title">{project.title}</h3>
                    <p className="proj-desc">{project.desc}</p>
                    <div className="proj-footer">
                      <div className="proj-tags">
                        {project.tech.map((t, j) => (
                          <span key={j} className="proj-tag">{t}</span>
                        ))}
                      </div>
                      <span className="proj-view">view_case &#8594;</span>
                    </div>
                  </TerminalCard>
                </div>
              );

              return project.internal ? (
                <Link key={i} to={project.link} className="proj-anchor">{card}</Link>
              ) : (
                <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="proj-anchor">{card}</a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section">
        <div className="section-inner">
          <div className="section-label scroll-anim anim-up">
            <span className="label-text">&gt;&gt; what_i_do</span>
            <span className="label-rule" />
          </div>
          <div className="skills-grid">
            {skills.map((skill, i) => (
              <div key={i} className="scroll-anim anim-up" style={{ transitionDelay: `${i * 150}ms` }}>
                <TerminalCard filename={skill.filename}>
                  <p className="skill-prompt">$ ./run --stack</p>
                  <h3 className="skill-title">{skill.name}</h3>
                  <ul className="skill-list">
                    {skill.items.map((item, j) => (
                      <li key={j} className="skill-item">
                        <span className="cr-text">&#8594;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </TerminalCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <div className="grid-overlay" />
        <div className="section-inner">
          <div className="section-label scroll-anim anim-up">
            <span className="label-text">&gt;&gt; about_me</span>
            <span className="label-rule" />
          </div>
          <div className="about-stack scroll-anim anim-up">
            <TerminalCard filename="~/about/yan.md">
              <p className="about-prompt">$ cat about.md // origin_story</p>
              <p className="about-text">
                As a proud Haitian rooted in resilience, creativity, and strength, I carry my heritage into every line of code I write.
                My passion for technology goes beyond curiosity — it is a calling to build, to innovate, and to create solutions that make a real difference.
                I code with purpose: if my work can make even one person&apos;s life easier, clearer, or more empowered, then I have succeeded.
              </p>
            </TerminalCard>
            <div className="stats-block">
              <div className="stat-cell">
                <span className="stat-number">3+</span>
                <span className="stat-label">Hackathons Won</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-cell">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-cell">
                <span className="stat-number">3.7</span>
                <span className="stat-label">GPA @ UMB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <div className="section-inner">
          <div className="section-label scroll-anim anim-up">
            <span className="label-text">&gt;&gt; init_contact</span>
            <span className="label-rule" />
          </div>
          <h2 className="contact-headline scroll-anim anim-up">
            LET&apos;S <span className="cr-text">BUILD</span> TOGETHER
          </h2>
          <div className="contact-btns scroll-anim anim-up">
            <a href="mailto:drawdiny@gmail.com" className="btn-primary">$ ./email_me</a>
            <a href="https://github.com/YanWirdiny" target="_blank" rel="noopener noreferrer" className="btn-secondary">github</a>
            <a href="https://www.linkedin.com/in/yan-wirdiny-moise/" target="_blank" rel="noopener noreferrer" className="btn-secondary">linkedin</a>
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
        [data-theme="dark"], .portfolio-root {
          --cr:          #8B1A1A;
          --cr-dk:       #5C0F0F;
          --cr-glow:     #B22222;
          --hero-bg:     #8B1A1A;
          --hero-txt:    #F0EBE0;
          --cursor-clr:  #F0EBE0;
          --work-bg:     #0A0A0A;
          --skills-bg:   #0A0A0A;
          --about-bg:    #8B1A1A;
          --contact-bg:  #0A0A0A;
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
          --badge-bg:    rgba(240,235,224,0.07);
          --badge-bdr:   rgba(240,235,224,0.18);
          --stat-bdr:    #2A2A2A;
          --footer-bg:   #0A0A0A;
          --footer-bdr:  #2A2A2A;
          --footer-txt:  rgba(240,235,224,0.4);
          --grid-clr:    rgba(240,235,224,0.06);
        }

        [data-theme="light"] {
          --cr:          #8B1A1A;
          --cr-dk:       #5C0F0F;
          --cr-glow:     #A52020;
          --hero-bg:     #F4EFE4;
          --hero-txt:    #8B1A1A;
          --cursor-clr:  #8B1A1A;
          --work-bg:     #FAF8F3;
          --skills-bg:   #EBE5D7;
          --about-bg:    #F4EFE4;
          --contact-bg:  #FAF8F3;
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
          --badge-bg:    rgba(139,26,26,0.06);
          --badge-bdr:   rgba(139,26,26,0.18);
          --stat-bdr:    #C9C2B1;
          --footer-bg:   #EBE5D7;
          --footer-bdr:  #C9C2B1;
          --footer-txt:  #4A4A4A;
          --grid-clr:    rgba(26,26,26,0.05);
        }

        /* ── Reset ──────────────────────────────────────────────── */
        .portfolio-root *, .portfolio-root *::before, .portfolio-root *::after {
          border-radius: 0 !important;
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .portfolio-root .lights span,
        .portfolio-root .dot-live {
          border-radius: 50% !important;
        }
        * { scroll-behavior: smooth; }

        /* ── Root ───────────────────────────────────────────────── */
        .portfolio-root {
          font-family: 'Courier New', Courier, monospace;
          background-color: var(--work-bg);
          color: var(--txt-1);
          overflow-x: hidden;
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
        .nav-logo { display: flex; align-items: center; }
        .nav-prompt { color: var(--cr); font-size: 10px; letter-spacing: 2px; }
        .nav-name   { color: var(--nav-txt); font-size: 10px; letter-spacing: 2px; text-transform: uppercase; }
        .nav-links  { display: flex; gap: 28px; }
        .nav-link {
          color: var(--nav-txt);
          font-family: 'Courier New', monospace;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s;
        }
        .nav-link:hover { color: var(--cr); }
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
          flex-shrink: 0;
        }
        .theme-toggle:hover { border-color: var(--cr); color: var(--cr); }

        /* ── Hero ─────────────────────────────────────────────────── */
        .hero-section {
          background-color: var(--hero-bg);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 72px 36px 64px;
        }
        .hero-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          position: relative;
          z-index: 1;
          padding-top: 80px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--badge-bg);
          border: 1px solid var(--badge-bdr);
          padding: 8px 14px;
          margin-bottom: 24px;
          box-shadow: 4px 4px 0 0 var(--cr-dk);
        }
        .dot-live {
          width: 7px;
          height: 7px;
          background: var(--live-clr);
          display: inline-block;
          flex-shrink: 0;
        }
        .dot-sm { width: 5px; height: 5px; }
        .badge-text {
          font-size: 9px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--hero-txt);
        }
        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        .eyebrow-rule {
          display: inline-block;
          width: 40px;
          height: 1px;
          background: var(--hero-txt);
          opacity: 0.35;
        }
        .eyebrow-text {
          font-size: 9px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--hero-txt);
          opacity: 0.6;
        }
        .hero-headline {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: clamp(64px, 10vw, 108px);
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--hero-txt);
          line-height: 0.95;
          margin-bottom: 40px;
        }
        .typed-line { display: block; }
        .typed-cursor {
          display: inline-block;
          color: var(--cursor-clr);
          animation: blink 0.7s step-end infinite;
        }
        .manifesto-wrap {
          max-width: 720px;
          margin-bottom: 32px;
        }
        .manifesto-wrap .terminal-card { box-shadow: 8px 8px 0 0 var(--cr-dk); }
        [data-theme="light"] .manifesto-wrap .terminal-card { box-shadow: 8px 8px 0 0 var(--cr); }
        .manifesto-wrap .terminal-body { padding: 18px 22px; }
        .manifesto-text {
          font-size: 11px;
          letter-spacing: 0.3px;
          color: var(--txt-1);
        }
        .version-tag {
          font-size: 9px;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--hero-txt);
          opacity: 0.35;
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

        /* ── Section commons ────────────────────────────────────── */
        .section-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 36px;
        }
        .section-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
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

        /* ── Work section ───────────────────────────────────────── */
        .work-section { background-color: var(--work-bg); }
        .projects-list { display: flex; flex-direction: column; gap: 48px; }
        .proj-anchor { display: block; text-decoration: none; }
        .proj-card { transition: transform 0.2s; }
        .proj-card .terminal-card { transition: box-shadow 0.2s; }
        .proj-card:hover { transform: translate(-2px, -2px); }
        .proj-card:hover .terminal-card { box-shadow: 14px 14px 0 0 var(--cr); }
        .proj-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
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
        .proj-title {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: 42px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--txt-1);
          margin-bottom: 12px;
        }
        .proj-desc {
          font-size: 11px;
          letter-spacing: 0.3px;
          color: var(--txt-2);
          margin-bottom: 24px;
          max-width: 540px;
          line-height: 1.7;
        }
        .proj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .proj-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .proj-tag {
          font-size: 9px;
          letter-spacing: 1px;
          text-transform: uppercase;
          padding: 4px 8px;
          border: 1px solid var(--cr);
          color: var(--cr);
        }
        .proj-view { font-size: 10px; letter-spacing: 1.5px; color: var(--txt-1); }

        /* ── Skills section ─────────────────────────────────────── */
        .skills-section { background-color: var(--skills-bg); }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 36px; }
        .skill-prompt { font-size: 10px; color: var(--txt-2); margin-bottom: 12px; }
        .skill-title {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: 28px;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--txt-1);
          margin-bottom: 16px;
        }
        .skill-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
        .skill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--txt-2);
        }

        /* ── About section ──────────────────────────────────────── */
        .about-section {
          background-color: var(--about-bg);
          position: relative;
          overflow: hidden;
        }
        .about-section .section-inner { position: relative; z-index: 1; }
        .about-section .terminal-card { box-shadow: 10px 10px 0 0 var(--cr-dk); }
        [data-theme="light"] .about-section .terminal-card { box-shadow: 10px 10px 0 0 var(--cr); }
        .about-stack { display: flex; flex-direction: column; gap: 36px; }
        .about-prompt { font-size: 10px; color: var(--txt-2); margin-bottom: 20px; }
        .about-text {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 20px;
          line-height: 1.65;
          color: var(--txt-1);
          max-width: 600px;
        }
        .stats-block {
          display: flex;
          align-items: stretch;
          border: 1px solid var(--stat-bdr);
        }
        .stat-cell {
          flex: 1;
          padding: 28px 32px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .stat-divider { width: 1px; background: var(--stat-bdr); }
        .stat-number {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -1px;
          color: var(--txt-1);
          line-height: 1;
        }
        .stat-label { font-size: 9px; letter-spacing: 2px; text-transform: uppercase; color: var(--txt-2); }

        /* ── Contact section ────────────────────────────────────── */
        .contact-section { background-color: var(--contact-bg); }
        .contact-headline {
          font-family: Impact, 'Arial Narrow', Arial, sans-serif;
          font-size: clamp(42px, 8vw, 76px);
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: var(--txt-1);
          margin-bottom: 40px;
          line-height: 1;
        }
        .contact-btns { display: flex; flex-wrap: wrap; gap: 20px; }
        .btn-primary {
          padding: 14px 28px;
          background: var(--cr);
          color: #FAF8F3;
          font-family: 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-decoration: none;
          box-shadow: 6px 6px 0 0 var(--cr-dk);
          transition: transform 0.2s, box-shadow 0.2s;
          display: inline-block;
        }
        .btn-primary:hover { transform: translate(-2px, -2px); box-shadow: 8px 8px 0 0 var(--cr-dk); }
        .btn-secondary {
          padding: 14px 28px;
          background: transparent;
          color: var(--txt-1);
          font-family: 'Courier New', monospace;
          font-size: 11px;
          letter-spacing: 1.5px;
          text-decoration: none;
          border: 1px solid var(--card-border);
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }
        .btn-secondary:hover { border-color: var(--cr); color: var(--cr); }

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

        /* ── Animations ──────────────────────────────────────────── */
        .anim-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .anim-up.is-visible { opacity: 1; transform: translateY(0); }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 768px) {
          .nav-inner   { padding: 18px 20px; }
          .nav-links   { display: none; }
          .hero-section { padding: 72px 20px 64px; }
          .hero-inner  { padding-top: 72px; }
          .section-inner { padding: 60px 20px; }
          .skills-grid { grid-template-columns: 1fr; }
          .stats-block { flex-direction: column; }
          .stat-divider { width: auto; height: 1px; }
          .contact-btns { flex-direction: column; }
          .footer-inner { flex-direction: column; text-align: center; }
          .proj-footer  { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </div>
  );
}
