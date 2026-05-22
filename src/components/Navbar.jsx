import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal as TerminalIcon, GitBranch, Users } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Terminal', href: '#terminal' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      padding: scrolled ? '12px 24px' : '20px 24px',
      background: scrolled ? 'rgba(10, 17, 34, 0.75)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
      transition: 'var(--transition-smooth)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          textDecoration: 'none',
          color: 'var(--text-main)',
          fontSize: '1.25rem',
          fontWeight: 800,
          fontFamily: 'var(--font-mono)',
          letterSpacing: '-0.5px',
        }}>
          <TerminalIcon size={20} style={{ color: 'var(--accent-emerald)' }} />
          <span>VIKAS<span style={{ color: 'var(--accent-cyan)' }}>.DEV</span></span>
        </a>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }} className="desktop-only">
          <div style={{ display: 'flex', gap: '24px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'var(--transition-smooth)',
                }}
                onMouseOver={(e) => e.target.style.color = 'var(--accent-emerald)'}
                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a
              href="https://github.com/darkknight8670"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              <GitBranch size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-barupal-3a754129b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-secondary)', transition: 'var(--transition-smooth)' }}
              onMouseOver={(e) => e.target.style.color = 'var(--text-main)'}
              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
            >
              <Users size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '4px',
            display: 'none',
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          width: '100%',
          background: 'rgba(10, 17, 34, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          zIndex: 999,
        }}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 500,
                padding: '8px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
              }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a
              href="https://github.com/darkknight8670"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Github size={20} /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-barupal-3a754129b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </div>
      )}

      {/* Inline styles for media queries inside Navbar since it's vanilla CSS project */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} />
    </nav>
  );
}
