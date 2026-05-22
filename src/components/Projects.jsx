import React, { useState } from 'react';
import { ExternalLink, GitBranch, Code, Search, X, CheckSquare } from 'lucide-react';

export default function Projects() {
  const [search, setSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'CODESYNC',
      tech: ['React', 'NodeJS', 'ExpressJS', 'Monaco Editor', 'GetStream.Io'],
      period: 'December 2024',
      shortDesc: 'Full-stack platform enabling candidates and interviewers to run coding interviews with integrated compilation & video calling.',
      bullets: [
        'Built and deployed a full-stack MERN application incorporating GetStream.Io video calling APIs to handle robust candidate video assessments.',
        'Engineered an in-browser code editor powered by Monaco Editor supporting real-time compiler outputs in 4+ programming languages.',
        'Implemented feature workflows for scheduling, managing, recording, and scoring interviews, saving 30% HR administrative overhead.'
      ],
      github: 'https://github.com/darkknight8670',
      demoColor: 'var(--accent-emerald)',
    },
    {
      title: 'CODECRAFT',
      tech: ['ReactJS', 'NodeJs', 'ExpressJs', 'Monaco Editor'],
      period: 'August 2024',
      shortDesc: 'A rich cloud-based development workspace with syntax highlighting, multi-language support, and real-time execution.',
      bullets: [
        'Engineered a complete web IDE with customizable dark/light editor themes, autocompletion APIs, and error-check parsing.',
        'Optimized system processing scripts, drastically reducing execution time for heavy code outputs.',
        'Implemented custom virtual file directory trees allowing visitors to manage local and cloud files simultaneously.'
      ],
      github: 'https://github.com/darkknight8670',
      demoColor: 'var(--accent-cyan)',
    },
    {
      title: 'POKEDEX',
      tech: ['ReactJS', 'Redux Toolkit', 'JavaScript', 'Nodejs', 'ExpressJs', 'MongoDB'],
      period: 'May 2024',
      shortDesc: 'Interactive database system pulling 1,500+ Pokemon records via REST API with personalized profile bookmark grids.',
      bullets: [
        'Integrated a high-performance custom caching layer for Pokémon API lookups, ensuring fast searches and comparative renders.',
        'Structured Google OAuth login protocols, securing customized favorite bookmark folders and collections in MongoDB.',
        'Designed detailed responsive cards displaying statistics, characteristics, evolution timelines, and strengths.'
      ],
      github: 'https://github.com/darkknight8670',
      demoColor: 'hsl(37, 95%, 55%)',
    },
    {
      title: 'Fusion IIIT Jabalpur',
      tech: ['React', 'HTML5', 'CSS', 'MongoDB'],
      period: 'February 2025 - Present',
      shortDesc: 'Official administrative dashboard department module for the Indian Institute of Information Technology, Jabalpur.',
      bullets: [
        'Constructed the Department module of Fusion, IIIT Jabalpur’s flagship web portal, utilizing React for high-efficiency views.',
        'Mapped multi-tier REST API calls for departmental resource states, maintaining clean structures for student and teacher logs.',
        'Designed admin-friendly workflows which enhanced security control and reduced department database audit loops by 50%.'
      ],
      github: 'https://github.com/darkknight8670',
      demoColor: 'hsl(280, 85%, 65%)',
    }
  ];

  const filteredProjects = projects.filter(
    (proj) =>
      proj.title.toLowerCase().includes(search.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <section id="projects" style={{
      position: 'relative',
      padding: '80px 0',
    }}>
      <div className="glow-orb" style={{
        bottom: '20%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'rgba(166, 100, 46, 0.08)',
      }} />

      <div className="section-container">
        <h2 className="section-title">
          Featured Projects
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            A curated showcase of engineering builds, full-stack tools, and digital solutions
          </span>
        </h2>

        {/* Search Bar */}
        <div style={{
          maxWidth: '500px',
          margin: '0 auto 40px auto',
          position: 'relative',
        }}>
          <Search size={18} style={{
            position: 'absolute',
            left: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
          }} />
          <input
            type="text"
            placeholder="Search by project name or technology tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-glass)',
              borderRadius: '30px',
              padding: '14px 16px 14px 48px',
              color: 'var(--text-main)',
              fontSize: '0.95rem',
              outline: 'none',
              transition: 'var(--transition-smooth)',
            }}
            onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
            onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
          />
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {filteredProjects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-interactive shimmer-card"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedProject(proj)}
            >
              <div style={{ padding: '24px' }}>
                {/* Tech tag borders */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  flexWrap: 'wrap',
                  marginBottom: '16px',
                }}>
                  {proj.tech.slice(0, 3).map((t, tIdx) => (
                    <span key={tIdx} style={{
                      background: 'rgba(255, 255, 255, 0.03)',
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-glass)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                    }}>{t}</span>
                  ))}
                  {proj.tech.length > 3 && (
                    <span style={{
                      color: 'var(--text-muted)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '4px',
                    }}>+{proj.tech.length - 3} more</span>
                  )}
                </div>

                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <Code size={18} style={{ color: proj.demoColor }} />
                  {proj.title}
                </h3>

                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  marginBottom: '20px',
                }}>{proj.shortDesc}</p>
              </div>

              <div style={{
                padding: '16px 24px',
                background: 'rgba(0, 0, 0, 0.15)',
                borderTop: '1px solid rgba(255, 255, 255, 0.03)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{proj.period}</span>
                <span style={{
                  color: proj.demoColor,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}>
                  Details & Specs <ExternalLink size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search State */}
        {filteredProjects.length === 0 && (
          <div style={{ padding: '60px 0', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
            No projects found matching your query. Let's try searching for "React" or "Monaco".
          </div>
        )}
      </div>

      {/* Details Modal Overlay */}
      {selectedProject && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(5, 8, 16, 0.85)',
          backdropFilter: 'blur(12px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
        }} onClick={() => setSelectedProject(null)}>
          <div className="glass-panel" style={{
            width: '100%',
            maxWidth: '640px',
            borderRadius: '20px',
            overflow: 'hidden',
            animation: 'slide-up 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            textAlign: 'left',
          }} onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '24px 30px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Code size={22} style={{ color: selectedProject.demoColor }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: 'none',
                  color: 'var(--text-main)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '30px', maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} style={{
                    background: 'var(--bg-tertiary)',
                    color: 'var(--accent-cyan)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                  }}>{t}</span>
                ))}
              </div>

              <h4 style={{ color: 'var(--text-main)', fontWeight: 700, marginBottom: '12px' }}>Key Contributions & Implementations</h4>
              
              <ul style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                paddingLeft: '20px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                fontSize: '0.95rem',
                marginBottom: '30px',
              }}>
                {selectedProject.bullets.map((bullet, idx) => (
                  <li key={idx} style={{ listStyleType: 'square' }}>{bullet}</li>
                ))}
              </ul>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Completed in {selectedProject.period}</span>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <button className="glow-btn" style={{
                    borderColor: selectedProject.demoColor,
                    padding: '8px 18px',
                    fontSize: '0.85rem',
                  }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.background = selectedProject.demoColor;
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-main)';
                    }}
                  >
                    <GitBranch size={16} />
                    View Repository
                  </button>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
