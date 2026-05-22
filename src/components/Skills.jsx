import React from 'react';
import { Terminal, Database, Cpu, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Terminal size={22} style={{ color: 'var(--accent-emerald)' }} />,
      color: 'var(--accent-emerald)',
      skills: [
        { name: 'C++', level: 92 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Frameworks & Libs',
      icon: <Cpu size={22} style={{ color: 'var(--accent-cyan)' }} />,
      color: 'var(--accent-cyan)',
      skills: [
        { name: 'ReactJS', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Redux Toolkit', level: 80 },
        { name: 'TailwindCSS', level: 90 }
      ]
    },
    {
      title: 'Tools & Databases',
      icon: <Database size={22} style={{ color: 'hsl(37, 95%, 55%)' }} />,
      color: 'hsl(37, 95%, 55%)',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'Monaco Editor API', level: 75 }
      ]
    },
    {
      title: 'Soft Skills',
      icon: <Users size={22} style={{ color: 'hsl(280, 85%, 65%)' }} />,
      color: 'hsl(280, 85%, 65%)',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Leadership', level: 85 },
        { name: 'Public Speaking', level: 80 },
        { name: 'Event Management', level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" style={{
      position: 'relative',
      padding: '80px 0',
    }}>
      <div className="section-container">
        <h2 className="section-title">
          Core Capabilities
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            A detailed review of my technology stack, algorithmic tools, and engineering methodologies
          </span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginTop: '40px',
        }}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className="glass-panel glass-card-interactive" style={{
              padding: '30px',
              borderRadius: '16px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                  paddingBottom: '12px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                  }}>{category.title}</h3>
                </div>

                {/* Skills list */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '18px',
                }}>
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}>
                        <span>{skill.name}</span>
                        <span style={{ color: category.color }}>{skill.level}%</span>
                      </div>
                      
                      {/* Progress Bar Track */}
                      <div style={{
                        width: '100%',
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255, 255, 255, 0.02)',
                      }}>
                        {/* Progress Bar Fill */}
                        <div style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, ${category.color}, rgba(255, 255, 255, 0.2))`,
                          borderRadius: '3px',
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
