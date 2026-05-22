import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Web Developer (Remote)',
      company: 'MAREVLO',
      period: 'June 2024 – July 2024',
      location: 'Remote, India',
      bullets: [
        'Developed and maintained 5+ interactive MERN (MongoDB, Express, React, Node) applications, refactoring 10,000+ lines of codebase to improve modularity and reduce load times by 20%.',
        'Collaborated with 2+ cross-functional engineering teams to implement scalable, reusable components, enhancing frontend workflow speed and reliability.',
        'Optimized 10+ complex database queries, significantly reducing API response latency and boosting system processing efficiency.'
      ],
      badge: 'MERN Specialist'
    },
    {
      role: 'Fusion IIIT Web Module Developer',
      company: 'Indian Institute of Information Technology, Jabalpur',
      period: 'February 2025 – Present',
      location: 'Madhya Pradesh, India',
      bullets: [
        'Engineered the Department module for IIIT Jabalpur’s official Fusion web app, focusing on dynamic state-management and admin operations dashboard.',
        'Successfully integrated robust RESTful APIs with React to handle heavy database updates, ensuring consistent state persistence across client panels.',
        'Designed dynamic UI layouts that improved workflows and reduced data entry errors by administrative officers.'
      ],
      badge: 'B.Tech Core Team'
    }
  ];

  return (
    <section id="experience" style={{
      position: 'relative',
      padding: '80px 0',
    }}>
      <div className="glow-orb" style={{
        top: '40%',
        right: '5%',
        width: '350px',
        height: '350px',
        background: 'rgba(190, 100, 48, 0.08)',
      }} />

      <div className="section-container">
        <h2 className="section-title">
          Work Experience
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            A trace of my software engineering journeys and full-stack contributions
          </span>
        </h2>

        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px 0',
        }}>
          {/* Vertical timeline center line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '31px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-emerald), var(--accent-cyan), transparent)',
            opacity: 0.3,
          }} />

          {experiences.map((exp, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '24px',
              marginBottom: '48px',
              position: 'relative',
            }}>
              {/* Timeline marker node */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--bg-secondary)',
                border: '2px solid var(--accent-emerald)',
                boxShadow: '0 0 15px var(--accent-emerald-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                zIndex: 2,
              }}>
                <Briefcase size={22} style={{ color: 'var(--accent-emerald)' }} />
              </div>

              {/* Timeline Card */}
              <div className="glass-panel glass-card-interactive shimmer-card" style={{
                flex: 1,
                padding: '30px',
                borderRadius: '16px',
                textAlign: 'left',
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px',
                }}>
                  <div>
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '4px',
                    }}>{exp.role}</h3>
                    <h4 style={{
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--accent-cyan)',
                    }}>{exp.company}</h4>
                  </div>
                  <span style={{
                    background: 'var(--accent-emerald-glow)',
                    color: 'var(--accent-emerald)',
                    border: '1px solid rgba(166, 100, 46, 0.2)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                  }}>{exp.badge}</span>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '20px',
                  color: 'var(--text-muted)',
                  fontSize: '0.85rem',
                  marginBottom: '20px',
                  flexWrap: 'wrap',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul style={{
                  paddingLeft: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.6',
                  fontSize: '0.95rem',
                }}>
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} style={{ listStyleType: 'square' }}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
