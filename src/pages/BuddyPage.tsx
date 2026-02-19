// BuddyPage.tsx - Detail page for the BUDDY project
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function BuddyPage() {
  return (
    <div style={{ backgroundColor: '#e8e5da', color: '#304c89' }} className="min-h-screen">

      {/* Navigation */}
      <nav style={{ backgroundColor: 'rgba(48,76,137,0.95)', borderBottom: '1px solid #648de5' }}
        className="fixed top-0 w-full z-40 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link to="/" style={{ color: '#e8e5da' }}
            className="flex items-center gap-2 transition-opacity hover:opacity-70">
            <ArrowLeft className="w-5 h-5" />
            Back
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4">
            <span style={{ backgroundColor: '#9eb7e5', color: '#304c89', border: '1px solid #648de5' }}
              className="px-3 py-1 rounded-full text-sm">
              Mobile App
            </span>
          </div>
          <h1 style={{ color: '#304c89' }} className="text-5xl md:text-7xl font-bold mb-6">
            BUDDY
          </h1>
          <p style={{ color: '#648de5' }} className="text-xl md:text-2xl mb-8">
            The unique mobile app helping people with visual impairments navigate the world.
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-3 mb-12">
            {['React Native', 'TypeScript', 'Node.js'].map((tech) => (
              <span key={tech}
                style={{ backgroundColor: '#9eb7e5', color: '#304c89' }}
                className="px-4 py-2 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Project details */}
      <section className="pb-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">

          {/* Overview */}
          <div>
            <h2 style={{ color: '#304c89' }} className="text-3xl font-bold mb-4">Overview</h2>
            <p style={{ color: '#648de5' }} className="text-lg leading-relaxed">
              BUDDY is a mobile application designed to assist visually impaired individuals
              in navigating their surroundings safely and independently. Using advanced
              technology, BUDDY provides real-time audio guidance to help users move through
              both familiar and unfamiliar environments.
            </p>
          </div>

          {/* Features */}
          <div>
            <h2 style={{ color: '#304c89' }} className="text-3xl font-bold mb-6">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Real-time Navigation', desc: 'Audio-guided directions for safe movement' },
                { title: 'Obstacle Detection',   desc: 'Alerts users about obstacles in their path' },
                { title: 'Voice Commands',       desc: 'Hands-free control through voice interaction' },
                { title: 'Accessibility First',  desc: 'Built from the ground up for accessibility' },
              ].map((feature) => (
                <div key={feature.title}
                  style={{ backgroundColor: '#ffffff', border: '1px solid #9eb7e5' }}
                  className="p-6 rounded-2xl">
                  <h3 style={{ color: '#304c89' }} className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p style={{ color: '#648de5' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Live link */}
          <div>
            <h2 style={{ color: '#304c89' }} className="text-3xl font-bold mb-4">Try It Out</h2>
            <a
            // to add  link to download buddy app when available
              href=""
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#304c89', color: '#e8e5da' }}
              className="inline-block px-8 py-4 rounded-full font-medium transition-opacity hover:opacity-80"
            >
              Visit Live App
            </a>
          </div>

        </div>
      </section>

      <style>{`
        :root {
          --gold:       #cdc392;
          --cream:      #e8e5da;
          --light-blue: #9eb7e5;
          --blue:       #648de5;
          --navy:       #304c89;
        }
      `}</style>
    </div>
  );
}
