import React from 'react';
import { Award, ShieldAlert, BookOpen, GraduationCap, CheckCircle } from 'lucide-react';

export default function Achievements() {
  const competitiveCoding = [
    {
      platform: 'CodeForces',
      rating: '1441 Rating',
      rank: 'Specialist Badge',
      highlight: 'Global Rank 502 in Div 2 Round 1002',
      color: 'var(--accent-emerald)',
    },
    {
      platform: 'CodeChef',
      rating: '1657 Rating',
      rank: '3-Star Coder',
      highlight: 'Top performance in multiple Division challenges',
      color: 'var(--accent-cyan)',
    },
    {
      platform: 'Algorithmic Solving',
      rating: '400+ Problems',
      rank: 'LeetCode / GFG / Code360',
      highlight: 'Demonstrated proficiency in dynamic programming, graphs & trees',
      color: 'hsl(37, 95%, 55%)',
    }
  ];

  const credentials = [
    {
      title: 'Top 5% NPTEL Ethical Hacking',
      subtitle: 'Silver Medalist',
      desc: 'Completed advanced cyber security and ethical scanning protocols, earning a Silver Medal credential.',
      icon: <ShieldAlert size={20} style={{ color: 'var(--accent-cyan)' }} />,
    },
    {
      title: 'Merit-Cum-Means Scholarship',
      subtitle: 'Awarded 2 consecutive years',
      desc: 'Recognized for excellent academic performance in Computer Science engineering B.Tech program.',
      icon: <GraduationCap size={20} style={{ color: 'var(--accent-emerald)' }} />,
    },
    {
      title: 'C++ OOP Certification',
      subtitle: 'Udemy Certified Developer',
      desc: 'Validated deep understanding of OOP design principles, algorithms, memory allocations, templates, and STL.',
      icon: <BookOpen size={20} style={{ color: 'hsl(37, 95%, 55%)' }} />,
    }
  ];

  return (
    <section id="achievements" style={{
      position: 'relative',
      padding: '80px 0',
    }}>
      <div className="glow-orb" style={{
        top: '15%',
        right: '15%',
        width: '400px',
        height: '400px',
        background: 'rgba(166, 100, 46, 0.06)',
      }} />

      <div className="section-container">
        <h2 className="section-title">
          Elite Milestones
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            A track record of high-performance competitive programming and certified academic milestones
          </span>
        </h2>

        {/* Coding Ranks Section */}
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          textAlign: 'left',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <Award size={22} style={{ color: 'var(--accent-emerald)' }} />
          Competitive Programming Profiles
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px',
        }}>
          {competitiveCoding.map((profile, idx) => (
            <div key={idx} className="glass-panel shimmer-card" style={{
              padding: '30px',
              borderRadius: '16px',
              textAlign: 'left',
              borderTop: `4px solid ${profile.color}`,
            }}>
              <span style={{
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}>{profile.platform}</span>
              
              <h4 style={{
                fontSize: '1.6rem',
                fontWeight: 800,
                color: 'var(--text-main)',
                margin: '8px 0',
              }}>{profile.rating}</h4>

              <div style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: profile.color,
                marginBottom: '12px',
              }}>{profile.rank}</div>

              <p style={{
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
                lineHeight: '1.5',
              }}>{profile.highlight}</p>
            </div>
          ))}
        </div>

        {/* Certifications and Academic Section */}
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          textAlign: 'left',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <CheckCircle size={22} style={{ color: 'var(--accent-cyan)' }} />
          Academic & Professional Credentials
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {credentials.map((cred, idx) => (
            <div key={idx} className="glass-panel glass-card-interactive" style={{
              padding: '30px',
              borderRadius: '16px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}>
                {cred.icon}
              </div>

              <div>
                <h4 style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  marginBottom: '4px',
                }}>{cred.title}</h4>
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '12px',
                }}>{cred.subtitle}</div>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.6',
                }}>{cred.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
