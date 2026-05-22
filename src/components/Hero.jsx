import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, ArrowRight, Code, Award, ExternalLink } from 'lucide-react';

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const words = ['MERN Stack Developer', 'Competitive Programmer', 'Problem Solver', 'CS Undergrad'];
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentWord = words[textIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && currentText === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? currentWord.substring(0, currentText.length - 1)
            : currentWord.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  const stats = [
    { label: 'CodeForces Rating', value: '1441', detail: 'Specialist Rank', color: 'var(--accent-emerald)' },
    { label: 'CodeChef Rating', value: '1657', detail: '3-Star Coder', color: 'var(--accent-cyan)' },
    { label: 'LeetCode / GFG', value: '400+', detail: 'Problems Solved', color: 'hsl(37, 95%, 55%)' },
  ];

  return (
    <section id="home" style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px',
      overflow: 'hidden',
    }}>
      {/* Background orbs */}
      <div className="glow-orb" style={{
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'rgba(166, 100, 46, 0.12)',
      }} />
      <div className="glow-orb" style={{
        bottom: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'rgba(190, 100, 48, 0.15)',
      }} />

      <div className="section-container" style={{
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '48px',
        alignItems: 'center',
        width: '100%',
      }}>
        {/* Left column: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: 'var(--accent-emerald-glow)',
              color: 'var(--accent-emerald)',
              border: '1px solid rgba(166, 100, 46, 0.2)',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span className="glowing-dot" style={{ width: '6px', height: '6px' }} />
              Open to Opportunities
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Hi, I'm <span style={{
              background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Vikas Barupal</span>
          </h1>

          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontWeight: 600,
            color: 'var(--accent-cyan)',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
          }}>
            <span>{currentText}</span>
            <span style={{
              marginLeft: '2px',
              borderLeft: '2px solid var(--accent-cyan)',
              animation: 'pulse-glow 1s infinite',
            }}>&nbsp;</span>
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            lineHeight: '1.6',
            maxWidth: '540px',
          }}>
            Computer Science B.Tech student at <strong>Indian Institute of Information Technology, Jabalpur</strong>. 
            MERN stack full-stack developer combined with a passion for high-performance algorithm solving and competitive programming.
          </p>

          {/* Stats quick view */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            margin: '12px 0 24px 0',
          }}>
            {stats.map((stat, idx) => (
              <div key={idx} className="glass-panel" style={{
                padding: '16px',
                textAlign: 'left',
                borderLeft: `3px solid ${stat.color}`,
                borderRadius: '12px',
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                }}>{stat.value}</div>
                <div style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  fontWeight: 600,
                  marginTop: '4px',
                }}>{stat.label}</div>
                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                }}>{stat.detail}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#terminal" style={{ textDecoration: 'none' }}>
              <button className="glow-btn">
                <TerminalIcon size={18} />
                Open Interactive Terminal
              </button>
            </a>
            <a href="#projects" style={{ textDecoration: 'none' }}>
              <button className="secondary-btn">
                <span>View Projects</span>
                <ArrowRight size={18} />
              </button>
            </a>
          </div>
        </div>

        {/* Right column: Graphic IDE */}
        <div style={{ display: 'flex', justifyContent: 'center' }} className="hero-graphic">
          <div className="glass-panel shimmer-card" style={{
            width: '100%',
            maxWidth: '480px',
            borderRadius: '12px',
            overflow: 'hidden',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textAlign: 'left',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          }}>
            {/* IDE Header */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'block' }} />
              </div>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>vikas_barupal.cpp</span>
              <Code size={16} style={{ color: 'var(--text-muted)' }} />
            </div>

            {/* IDE Editor Lines */}
            <div style={{
              padding: '20px',
              background: 'rgba(10, 17, 34, 0.4)',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
            }}>
              <div style={{ color: 'var(--text-muted)' }}>#include &lt;iostream&gt;</div>
              <div style={{ color: 'var(--text-muted)' }}>#include &lt;vector&gt;</div>
              <div style={{ color: 'var(--text-muted)' }}>using namespace std;</div>
              <br />
              <div><span style={{ color: '#ff79c6' }}>int</span> <span style={{ color: '#50fa7b' }}>main</span>() {'{'}</div>
              <div style={{ paddingLeft: '20px' }}>
                <span style={{ color: 'var(--accent-cyan)' }}>Developer</span> vikas;
              </div>
              <div style={{ paddingLeft: '20px' }}>
                vikas.skills = {"{"}<span style={{ color: '#f1fa8c' }}>"C++"</span>, <span style={{ color: '#f1fa8c' }}>"React"</span>, <span style={{ color: '#f1fa8c' }}>"Node"</span>, <span style={{ color: '#f1fa8c' }}>"MongoDB"</span>{"}"};
              </div>
              <div style={{ paddingLeft: '20px' }}>
                vikas.codeforces_rating = <span style={{ color: '#bd93f9' }}>1441</span>;
              </div>
              <div style={{ paddingLeft: '20px' }}>
                vikas.codechef_stars = <span style={{ color: '#bd93f9' }}>3</span>;
              </div>
              <br />
              <div style={{ paddingLeft: '20px', color: '#ff79c6' }}>if <span style={{ color: 'var(--text-main)' }}>(vikas.hasProjectIdea())</span> {'{'}</div>
              <div style={{ paddingLeft: '40px' }}>
                vikas.compileAndExecute();
              </div>
              <div style={{ paddingLeft: '40px' }}>
                cout &lt;&lt; <span style={{ color: '#f1fa8c' }}>"Amazing UI Built Successfully!"</span> &lt;&lt; endl;
              </div>
              <div style={{ paddingLeft: '20px' }}>{'}'}</div>
              <br />
              <div style={{ paddingLeft: '20px', color: '#ff79c6' }}>return <span style={{ color: '#bd93f9' }}>0</span>;</div>
              <div>{'}'}</div>
            </div>

            {/* IDE Status Footer */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(255, 255, 255, 0.05)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}>
              <span>Ln 18, Col 5</span>
              <span>UTF-8</span>
              <span>C++17</span>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .section-container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            text-align: center;
          }
          .hero-graphic {
            order: -1;
          }
          p {
            margin: 0 auto;
          }
          div[style*="gridTemplateColumns"] {
            justify-content: center;
          }
          div[style*="display: flex; gap: 16px"] {
            justify-content: center;
          }
        }
      `}} />
    </section>
  );
}
