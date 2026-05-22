import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

export default function App() {
  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
      {/* Background Graphic Meshes */}
      <div className="bg-grid-overlay" />
      <div className="bg-radial-mesh" />

      {/* Floating Header */}
      <Navbar />

      {/* Main Pages Content */}
      <main>
        {/* Landing Hero Screen */}
        <Hero />

        {/* Interactive CLI Terminal OS emulator */}
        <Terminal />

        {/* Work / School Timeline */}
        <Experience />

        {/* Technical Capabilities Matrix */}
        <Skills />

        {/* Software Engineering Projects Showcase */}
        <Projects />

        {/* Competitive Programming Achievements */}
        <Achievements />

        {/* Message Transceiver Form */}
        <Contact />
      </main>

      {/* Frosted System Footer */}
      <footer style={{
        background: 'rgba(5, 8, 16, 0.85)',
        backdropFilter: 'blur(16px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '40px 24px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9rem',
            color: 'var(--text-muted)',
          }}>
            &lt;Designed & Compiled by Vikas Barupal /&gt;
          </div>
          
          <div style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}>
            &copy; {new Date().getFullYear()} Vikas Barupal. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
