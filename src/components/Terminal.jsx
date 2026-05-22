import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TermIcon, Play, AlertCircle } from 'lucide-react';

export default function Terminal() {
  const [history, setHistory] = useState([
    { type: 'system', content: 'Vikas Barupal Terminal OS [Version 1.0.0]' },
    { type: 'system', content: '(c) 2026 Vikas Barupal. All rights reserved.' },
    { type: 'system', content: 'Type "help" to view a list of available command utilities.' },
    { type: 'system', content: '---------------------------------------------------------' }
  ]);
  const [input, setInput] = useState('');
  const [isCompiling, setIsCompiling] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history, isCompiling]);

  const commands = {
    help: 'Show list of all available commands.',
    skills: 'Display technical skills summary.',
    experience: 'Show professional MERN stack work experience.',
    projects: 'List primary software projects.',
    achievements: 'List competitive programming and academic achievements.',
    run: 'Compile and run profile.cpp to print elite coding metrics.',
    contact: 'Display contact information (Email, Mobile, Socials).',
    clear: 'Clear terminal output history.'
  };

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    
    if (trimmed === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'input', content: `guest@vikas.dev:~$ ${cmd}` }];

    if (trimmed === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    if (trimmed === 'help') {
      let helpLines = [
        { type: 'output', content: 'Available commands:' },
        ...Object.entries(commands).map(([name, desc]) => ({
          type: 'output',
          content: `  ${name.padEnd(15)} - ${desc}`
        }))
      ];
      setHistory([...newHistory, ...helpLines]);
    } else if (trimmed === 'skills') {
      setHistory([...newHistory,
        { type: 'success', content: '--- TECHNICAL SKILLS ---' },
        { type: 'output', content: 'Languages   : C++, JavaScript (ES6+), SQL' },
        { type: 'output', content: 'Frameworks  : ReactJS, NodeJS, ExpressJS, Redux Toolkit, TailwindCSS' },
        { type: 'output', content: 'Tools       : Git, GitHub, MongoDB, MySQL' },
        { type: 'output', content: 'Soft Skills : Leadership, Writing, Public Speaking, Event Management' }
      ]);
    } else if (trimmed === 'experience') {
      setHistory([...newHistory,
        { type: 'success', content: '--- WORK EXPERIENCE ---' },
        { type: 'output', content: 'Role: Full Stack Web Developer (Remote)' },
        { type: 'output', content: 'Company: MAREVLO (June 2024 – July 2024)' },
        { type: 'output', content: '• Built & optimized MERN stack apps, refactored 10,000+ lines.' },
        { type: 'output', content: '• Collaborated across teams to deliver production solutions.' },
        { type: 'output', content: '• Optimized database queries, reducing response times.' }
      ]);
    } else if (trimmed === 'projects') {
      setHistory([...newHistory,
        { type: 'success', content: '--- PORTFOLIO PROJECTS ---' },
        { type: 'output', content: '1. CODESYNC: Full-stack video-interview platform & Monaco code editor.' },
        { type: 'output', content: '2. CODECRAFT: Cloud IDE supporting real-time compiler outputs.' },
        { type: 'output', content: '3. POKEDEX: MERN database searching engine with Google Auth.' },
        { type: 'output', content: '4. Fusion IIIT: IIIT Jabalpur official web application department module.' }
      ]);
    } else if (trimmed === 'achievements') {
      setHistory([...newHistory,
        { type: 'success', content: '--- ELITE ACHIEVEMENTS ---' },
        { type: 'output', content: '• CodeForces Round 1002 Div 2: Global Rank 502' },
        { type: 'output', content: '• NPTEL Ethical Hacking: Top 5% (Silver Medal)' },
        { type: 'output', content: '• Merit-Cum-Means Scholarship: Awarded 2 consecutive years' },
        { type: 'output', content: '• Udemy C++ Certification: Completed OOP programming standards' }
      ]);
    } else if (trimmed === 'contact') {
      setHistory([...newHistory,
        { type: 'success', content: '--- CONTACT INFO ---' },
        { type: 'output', content: 'Email    : 23bcs263@iiitdmj.ac.in' },
        { type: 'output', content: 'Mobile   : +91-7357568670' },
        { type: 'output', content: 'GitHub   : https://github.com/darkknight8670' },
        { type: 'output', content: 'LinkedIn : https://www.linkedin.com/in/vikas-barupal-3a754129b/' }
      ]);
    } else if (trimmed === 'run') {
      setIsCompiling(true);
      setHistory(newHistory);
      setInput('');

      setTimeout(() => {
        setHistory((prev) => [
          ...prev,
          { type: 'system', content: '[COMPILING] g++ profile.cpp -o vikas_profile -O3... Done.' },
        ]);
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: 'system', content: '[RUNNING] ./vikas_profile' },
          ]);
          setTimeout(() => {
            setHistory((prev) => [
              ...prev,
              { type: 'success', content: '-------------------------------------------------------' },
              { type: 'success', content: ' *   VIKAS BARUPAL - ALGORITHMIC PROGRAMMING PROFILE   *' },
              { type: 'success', content: '-------------------------------------------------------' },
              { type: 'output', content: '  Specialist on CodeForces  | Rating: 1441' },
              { type: 'output', content: '  CodeChef 3-Star Rated     | Rating: 1657' },
              { type: 'output', content: '  Solved Problems Count     | 400+ (LeetCode, GFG, Code360)' },
              { type: 'output', content: '  Global Div 2 Rank         | 502 (Codeforces Round 1002)' },
              { type: 'output', content: '  Undergraduate Institute   | IIIT Jabalpur (B.Tech CS)' },
              { type: 'success', content: '-------------------------------------------------------' },
            ]);
            setIsCompiling(false);
          }, 600);
        }, 600);
      }, 1000);
      return;
    } else {
      setHistory([...newHistory, {
        type: 'error',
        content: `bash: command not found: "${cmd}". Type "help" to see valid commands.`
      }]);
    }
    
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" style={{
      position: 'relative',
      padding: '80px 0',
    }}>
      <div className="section-container">
        <h2 className="section-title">
          Interactive Shell
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            Interact with the portfolio using standard terminal CLI command utilities
          </span>
        </h2>

        <div className="glass-panel" style={{
          borderRadius: '12px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          height: '480px',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
        }}>
          {/* Terminal Window Header */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56', display: 'block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e', display: 'block' }} />
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f', display: 'block' }} />
              </div>
              <span style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginLeft: '10px',
              }}>
                <TermIcon size={14} />
                guest@vikas.dev: ~
              </span>
            </div>
            <button
              onClick={() => handleCommand('run')}
              disabled={isCompiling}
              style={{
                background: 'var(--accent-emerald-glow)',
                border: '1px solid rgba(166, 100, 46, 0.2)',
                color: 'var(--accent-emerald)',
                borderRadius: '4px',
                padding: '4px 10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                opacity: isCompiling ? 0.6 : 1,
              }}
            >
              <Play size={12} />
              Run Profile
            </button>
          </div>

          {/* Terminal Console Output */}
          <div style={{
            flex: 1,
            padding: '24px',
            overflowY: 'auto',
            background: 'rgba(8, 12, 24, 0.5)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            textAlign: 'left',
            lineHeight: '1.6',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {history.map((line, idx) => (
              <div
                key={idx}
                style={{
                  color:
                    line.type === 'error'
                      ? '#ff5f56'
                      : line.type === 'success'
                      ? 'var(--accent-emerald)'
                      : line.type === 'input'
                      ? 'var(--accent-cyan)'
                      : 'var(--text-secondary)',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {line.content}
              </div>
            ))}

            {isCompiling && (
              <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="glowing-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)' }} />
                Compiling... Please hold.
              </div>
            )}

            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '16px 20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <span style={{
              color: 'var(--accent-cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              fontWeight: 'bold',
            }}>
              guest@vikas.dev:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isCompiling}
              placeholder={isCompiling ? 'Running program...' : "Type 'help' and press Enter..."}
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                caretColor: 'var(--accent-emerald)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
