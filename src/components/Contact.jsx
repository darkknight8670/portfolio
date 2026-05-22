import React, { useState } from 'react';
import { Mail, Phone, GitBranch, Users, Send, CheckCircle, Terminal } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | transmitting | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('transmitting');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" style={{
      position: 'relative',
      padding: '80px 0 120px 0',
    }}>
      <div className="glow-orb" style={{
        bottom: '5%',
        right: '10%',
        width: '450px',
        height: '450px',
        background: 'rgba(166, 100, 46, 0.08)',
      }} />

      <div className="section-container">
        <h2 className="section-title">
          Connect With Me
          <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--text-secondary)', marginTop: '8px' }}>
            Let's discuss project collaborations, software engineering opportunities, or general technology topics
          </span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '48px',
          marginTop: '40px',
          alignItems: 'start',
        }}>
          {/* Left Column: Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}>Direct Contact Channels</h3>

            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              fontSize: '0.95rem',
            }}>
              Feel free to reach out via email, phone, or connect on social programming networks. 
              I am highly responsive and welcome professional inquiries.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email */}
              <a href="mailto:23bcs263@iiitdmj.ac.in" style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                borderRadius: '12px',
                transition: 'var(--transition-smooth)',
              }} className="glass-panel glass-card-interactive">
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'var(--accent-emerald-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(166, 100, 46, 0.2)',
                  flexShrink: 0,
                }}>
                  <Mail size={20} style={{ color: 'var(--accent-emerald)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Email Address</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600, wordBreak: 'break-all' }}>23bcs263@iiitdmj.ac.in</div>
                </div>
              </a>

              {/* Mobile */}
              <a href="tel:+917357568670" style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '16px 20px',
                borderRadius: '12px',
                transition: 'var(--transition-smooth)',
              }} className="glass-panel glass-card-interactive">
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  background: 'var(--accent-cyan-glow)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(190, 100, 48, 0.2)',
                  flexShrink: 0,
                }}>
                  <Phone size={20} style={{ color: 'var(--accent-cyan)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Mobile Contact</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: 600 }}>+91-7357568670</div>
                </div>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '10px' }}>
              <a
                href="https://github.com/darkknight8670"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-emerald)';
                  e.currentTarget.style.background = 'var(--accent-emerald-glow)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-glass)';
                  e.currentTarget.style.background = 'var(--bg-glass)';
                }}
              >
                <GitBranch size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/vikas-barupal-3a754129b/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  transition: 'var(--transition-smooth)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                  e.currentTarget.style.background = 'var(--accent-cyan-glow)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-glass)';
                  e.currentTarget.style.background = 'var(--bg-glass)';
                }}
              >
                <Users size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="glass-panel" style={{
            padding: '40px',
            borderRadius: '20px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {status === 'idle' && (
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email Address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message Body</label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      background: 'rgba(0,0,0,0.2)',
                      border: '1px solid var(--border-glass)',
                      borderRadius: '8px',
                      padding: '12px 16px',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none',
                      fontFamily: 'var(--font-sans)',
                      transition: 'var(--transition-smooth)',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-emerald)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-glass)'}
                  />
                </div>

                <button type="submit" className="glow-btn" style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '14px',
                  marginTop: '10px',
                }}>
                  <span>Transmit Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}

            {status === 'transmitting' && (
              <div style={{
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
              }}>
                <Terminal size={40} className="glowing-dot" style={{ background: 'transparent', width: 'auto', height: 'auto', color: 'var(--accent-cyan)' }} />
                <div style={{ color: 'var(--accent-cyan)', fontWeight: 'bold' }}>[TRANSMITTING PORT: 587]</div>
                <div style={{ color: 'var(--text-muted)' }}>Socket connecting...</div>
                <div style={{ color: 'var(--text-muted)' }}>Encrypting packet payload data...</div>
              </div>
            )}

            {status === 'success' && (
              <div style={{
                height: '350px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--accent-emerald-glow)',
                  border: '2px solid var(--accent-emerald)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px var(--accent-emerald-glow)',
                }}>
                  <CheckCircle size={32} style={{ color: 'var(--accent-emerald)' }} />
                </div>
                
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)' }}>Message Transmitted!</h4>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: '1.6',
                  maxWidth: '300px',
                  margin: '0 auto',
                }}>
                  Your message packet was encrypted and sent to Vikas. 
                  Thank you for connecting!
                </p>

                <button
                  onClick={() => setStatus('idle')}
                  className="secondary-btn"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}} />
    </section>
  );
}
