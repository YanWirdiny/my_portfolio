// Import necessary libraries and icons
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

// Color palette: #cdc392 (gold), #e8e5da (cream), #9eb7e5 (light blue), #648de5 (blue), #304c89 (navy)

export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');

  // Types out "Engineer" letter by letter on page load
  useEffect(() => {
    const word = 'Engineer';
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(word.slice(0, i + 1));
      i++;
      if (i === word.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  // Track mouse position
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // Track scroll
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer — watches all .scroll-anim elements
  // Each section assigns a different animation class (anim-up, anim-left, anim-right, anim-zoom, anim-up-fast)
  // When the element enters the viewport, 'is-visible' is added to trigger the CSS animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.scroll-anim').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "BUDDY",
      desc: "The unique mobile helping people with eyes impairment to navigate the world",
      tech: ["React Native", "TypeScript", "Node.js"],
      accent: "#304c89",
      link: "/buddy"
    },
    {
      title: "123Therapy",
      desc: "An AI platform for the first step of mental health care",
      tech: ["Python", "Flask", "Tailwind"],
      accent: "#304c89",
      link: "https://web-production-3fca1.up.railway.app/"
    },
    {
      title: "CalendarSync Extension",
      desc: "Plan your time effectively by syncing your Google Calendar with Canvas Student",
      tech: ["JavaScript", "HTML", "CSS"],
      accent: "#304c89",
      link: "/CalendarSync"
    },
   
  ];

  const skills = [
    { icon: Code,    name: "Development", items: ["React", "Node.js", "Python", "TypeScript"], accent: "#648de5" },
    { icon: Palette, name: "Design",      items: ["Figma", "UI/UX", "Prototyping", "Branding"], accent: "#648de5" },
    { icon: Zap,     name: "Tools",       items: ["Git", "Docker", "AWS", "CI/CD"], accent: "#648de5" }
  ];

  return (
    <div className="c-bg min-h-screen overflow-x-hidden">

      {/* Custom cursor */}
      <div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-50 c-cursor transition-transform duration-150"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: activeSection === 'hero' ? 'scale(1.5)' : 'scale(1)'
        }}
      />

      {/* Navigation */}
      <nav className="c-nav fixed top-0 w-full z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: 'var(--cream)' }}>Yan Wirdiny Moise</div>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#work"    className="c-nav-link">Work</a>
            <a href="#about"   className="c-nav-link">About</a>
            <a href="#contact" className="c-nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* ── Hero Section ── animation: slide up (anim-up) */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="relative z-10 text-center px-6 scroll-anim anim-up is-visible w-full flex flex-col items-center justify-center">
          <div className="mb-4">
            <div className="inline-block px-4 py-2 c-badge rounded-full">
              <span className="text-sm">Available for work</span>
            </div>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-center mb-6" style={{ color: '#304c89' }}>
           Your Software
            <br />
            <span>{typedText}<span className="typed-cursor">|</span></span>
          </h1>
          <p className="text-xl md:text-2xl c-muted mb-12 max-w-2xl text-center">
           A single line of code can change everything. 
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full p-1 c-scroll-indicator">
            <div className="w-1 h-2 rounded-full mx-auto c-scroll-dot" />
          </div>
        </div>
      </section>

      {/* ── Projects Section ── animation: slide from left (anim-left) */}
      <section id="work" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 scroll-anim anim-left c-gold">Selected Work</h2>
          <p className="text-xl c-muted mb-16 scroll-anim anim-left">Projects that showcase my passion</p>

          <div className="space-y-8">
            {projects.map((project, i) => {
              const cardContent = (
                <div
                  className="c-card relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]"
                  style={{ borderLeft: `4px solid ${project.accent}` }}
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: project.accent }}>
                          {project.title}
                        </h3>
                        <p className="c-muted text-lg mb-4">{project.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, j) => (
                            <span key={j} className="px-3 py-1 text-sm c-tag rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:rotate-45"
                        style={{ backgroundColor: project.accent }}
                      >
                        <ArrowRight className="w-6 h-6 c-icon-dark" />
                      </div>
                    </div>
                  </div>
                </div>
              );

              return project.link?.startsWith('/') ? (
                <Link
                  key={i}
                  to={project.link}
                  className="group scroll-anim anim-left block"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {cardContent}
                </Link>
              ) : (
                <a
                  key={i}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group scroll-anim anim-left block"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {cardContent}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Skills Section ── animation: slide from right (anim-right) */}
      <section className="py-32 px-6 c-section-alt">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center scroll-anim anim-right">What I Do</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="scroll-anim anim-right group cursor-pointer"
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className="p-8 rounded-3xl c-card transition-all duration-500 hover:scale-105">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: skill.accent }}
                    >
                      <Icon className="w-7 h-7 c-icon-dark" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, j) => (
                        <li key={j} className="c-muted flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.accent }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── About Section ── animation: zoom in (anim-zoom) */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 scroll-anim anim-zoom c-gold">About Me</h2>
          <p className="text-xl  md:text-2xl leading-relaxed scroll-anim anim-zoom mb-8" style={{color: '#9eb7e5'}}>
            As a proud Haitian rooted in resilience, creativity, and strength, I carry my heritage into every line of code I write. 
            My passion for technology goes beyond curiosity, it is a calling to build, to innovate, and to create solutions that make a real 
            difference. I code with purpose: if my work can make even one person’s life easier, clearer, or more empowered, then I have succeeded. Technology is not just a skill for me; it is my language of expression. Through my code, I tell the story of who I am, where I come from, and the future I dream of shaping. I strive to turn ideas into impact, challenges into opportunities, and ambition into meaningful change.
          </p>
      
        </div>
      </section>

      {/* ── Contact Section ── animation: slide up fast (anim-up-fast) */}
      <section id="contact" className="py-32 px-6 c-section-alt">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 scroll-anim anim-up-fast">Let's Connect</h2>
          <p className="text-xl  mb-12 scroll-anim anim-up-fast">
            Have a project in mind? Let's make something amazing together.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-anim anim-up-fast">
            <a href="mailto:drawdiny@gmail.com" className="c-btn-primary flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a href="https://github.com/YanWirdiny" className="c-btn-secondary flex items-center gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yan-wirdiny-moise/" className="c-btn-secondary flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 c-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="c-muted">© 2025 Yan Wirdiny Moise. All rights reserved.</p>
          <p className="c-muted text-sm">Designed & Built with React</p>
        </div>
      </footer>

      {/* ── CSS ── */}
      <style>{`
        /* ── Palette ──────────────────────────────────────
           #cdc392  gold/tan
           #e8e5da  cream (main text)
           #9eb7e5  light blue
           #648de5  blue (primary accent)
           #304c89  navy (dark accent)
        ────────────────────────────────────────────────── */
        :root {
          --gold:       #cdc392;
          --cream:      #e8e5da;
          --light-blue: #9eb7e5;
          --blue:       #648de5;
          --navy:       #304c89;
        }

        * { scroll-behavior: smooth; }

        /* Base — light cream background, navy text */
        .c-bg   { background-color: var(--cream); color: var(--navy); }
        .c-gold { color: var(--navy); }
        .c-blue { color: var(--blue); }
        .c-muted { color: var(--blue); opacity: 0.7; }
        .c-icon-dark { color: var(--cream); }
        .c-cursor { background-color: var(--navy); opacity: 0.4; }

        /* Nav — navy bg, cream text */
        .c-nav { background-color: rgba(48,76,137,0.95); border-bottom: 1px solid var(--blue); }
        .c-nav-link { color: var(--cream); transition: color 0.2s; }
        .c-nav-link:hover { color: var(--light-blue); }

        /* Badge */
        .c-badge { background-color: var(--light-blue); border: 1px solid var(--blue); color: var(--navy); }

        /* Cards — white bg, navy border */
        .c-card { background-color: #ffffff; border: 1px solid var(--light-blue); }
        .c-tag  { background-color: var(--light-blue); color: var(--navy); }

        /* Alternate section bg — gold/tan */
        .c-section-alt { background-color: var(--gold); }

        /* Footer */
        .c-footer { border-top: 1px solid var(--light-blue); }

        /* Scroll indicator */
        .c-scroll-indicator { border: 2px solid var(--navy); }
        .c-scroll-dot       { background-color: var(--navy); }

        /* Buttons */
        .c-btn-primary {
          padding: 1rem 2rem;
          background-color: var(--navy);
          color: var(--cream);
          border-radius: 9999px;
          font-weight: 600;
          transition: background-color 0.2s;
        }
        .c-btn-primary:hover { background-color: var(--blue); }

        .c-btn-secondary {
          padding: 1rem 2rem;
          background-color: transparent;
          color: var(--navy);
          border-radius: 9999px;
          font-weight: 500;
          border: 1px solid var(--navy);
          transition: border-color 0.2s, color 0.2s, background-color 0.2s;
        }
        .c-btn-secondary:hover { background-color: var(--navy); color: var(--cream); }

        /* ── Per-section scroll animations ────────────────

           Each section uses a different animation class.
           The IntersectionObserver adds 'is-visible' when
           the element enters the viewport.
        ────────────────────────────────────────────────── */

        /* Hero — slide up */
        .anim-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .anim-up.is-visible { opacity: 1; transform: translateY(0); }

        /* Projects — slide from left */
        .anim-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .anim-left.is-visible { opacity: 1; transform: translateX(0); }

        /* Skills — slide from right */
        .anim-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .anim-right.is-visible { opacity: 1; transform: translateX(0); }

        /* About — zoom in */
        .anim-zoom {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .anim-zoom.is-visible { opacity: 1; transform: scale(1); }

        /* Contact — slide up, faster */
        .anim-up-fast {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .anim-up-fast.is-visible { opacity: 1; transform: translateY(0); }

        /* Typed cursor blink */
        .typed-cursor {
          display: inline-block;
          color: #304c89;
          animation: blink 0.7s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        /* Bounce for scroll indicator */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-10px); }
        }
        .animate-bounce { animation: bounce 2s infinite; }
      `}</style>
    </div>
  );
}
