'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovBtn, setHovBtn] = useState(false)
  const [hovHome, setHovHome] = useState(false)
  const [hovAbout, setHovAbout] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
        .pt-header * { box-sizing: border-box; font-family: 'Outfit', sans-serif; }

        @media (prefers-reduced-motion: reduce) {
          .pt-header * { transition: none !important; }
        }

        /* Hamburger lines */
        .pt-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #1A1525;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }
        .pt-bar-open-1 { transform: translateY(7px) rotate(45deg); }
        .pt-bar-open-2 { opacity: 0; width: 14px; }
        .pt-bar-open-3 { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile nav overlay */
        .pt-mobile-nav {
          position: fixed;
          inset: 0;
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 80px 32px 40px;
          background: #E8E4F0;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-12px);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .pt-mobile-nav.open {
          opacity: 1;
          pointer-events: all;
          transform: translateY(0);
        }
        .pt-mobile-link {
          font-size: 28px;
          font-weight: 700;
          letter-spacing: -0.01em;
          color: #1A1525;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 14px;
          transition: background 0.18s, color 0.18s;
          width: 100%;
          text-align: center;
        }
        .pt-mobile-link:hover { background: rgba(107,79,232,0.10); color: #6B4FE8; }

        /* Responsive breakpoints */
        @media (max-width: 640px) {
          .pt-desktop-nav { display: none !important; }
          .pt-hamburger { display: flex !important; }
          .pt-logo-text { font-size: 18px !important; }
          .pt-logo-svg { width: 36px !important; height: 24px !important; }
          .pt-inner { padding: 12px 20px !important; }
        }
        @media (min-width: 641px) {
          .pt-hamburger { display: none !important; }
          .pt-mobile-nav { display: none !important; }
        }
      `}</style>

      {/* ── Mobile Nav Overlay ── */}
      <nav className={`pt-mobile-nav${menuOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <Link href="/" className="pt-mobile-link" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/about" className="pt-mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
        <div style={{ width: '100%', height: 1, background: 'rgba(107,79,232,0.15)', margin: '8px 0' }} />
        <Link
          href="/Reserve"
          onClick={() => setMenuOpen(false)}
          style={{
            display: 'block', width: '100%', textAlign: 'center',
            fontSize: 16, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#fff', background: '#6B4FE8',
            borderRadius: 14, padding: '18px 32px',
            textDecoration: 'none',
            boxShadow: '0 6px 24px rgba(107,79,232,0.40)',
          }}
        >
          Reserve Your Spot
        </Link>
      </nav>

      {/* ── Header Bar ── */}
      <header
        className="pt-header"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(232,228,240,0.92)' : '#E8E4F0',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(80,50,180,0.10)' : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
          borderBottom: scrolled ? '1px solid rgba(107,79,232,0.12)' : '1px solid transparent',
        }}
      >
        <div
          className="pt-inner"
          style={{
            maxWidth: 1700, margin: '0 auto',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '14px 48px',
          }}
        >
          {/* ── LOGO ── */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <svg className="pt-logo-svg" width="46" height="30" viewBox="0 0 46 30" fill="none">
              <circle cx="15" cy="15" r="15" fill="#1A1525" />
              <circle cx="31" cy="15" r="15" fill="#1A1525" fillOpacity="0.65" />
            </svg>
            <span
              className="pt-logo-text"
              style={{ fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: '#1A1525', lineHeight: 1 }}
            >
              Primal<span style={{ color: '#6B4FE8' }}>Training</span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <div className="pt-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link
              href="/"
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: hovHome ? '#6B4FE8' : '#1A1525', textDecoration: 'none',
                padding: '9px 18px', borderRadius: 100,
                background: hovHome ? 'rgba(107,79,232,0.08)' : 'transparent',
                opacity: hovHome ? 1 : 0.6, transition: 'all 0.2s',
              }}
              onMouseEnter={() => setHovHome(true)}
              onMouseLeave={() => setHovHome(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              style={{
                fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: hovAbout ? '#6B4FE8' : '#1A1525', textDecoration: 'none',
                padding: '9px 18px', borderRadius: 100,
                background: hovAbout ? 'rgba(107,79,232,0.08)' : 'transparent',
                opacity: hovAbout ? 1 : 0.6, transition: 'all 0.2s',
              }}
              onMouseEnter={() => setHovAbout(true)}
              onMouseLeave={() => setHovAbout(false)}
            >
              About
            </Link>

            <div style={{ width: 1, height: 20, background: 'rgba(107,79,232,0.22)', margin: '0 10px' }} />

            <Link
              href="/Reserve"
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', background: '#6B4FE8',
                borderRadius: 10, padding: '18px 26px',
                textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block',
                transform: hovBtn ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hovBtn
                  ? '0 8px 28px rgba(107,79,232,0.55)'
                  : '0 4px 18px rgba(107,79,232,0.38)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
            >
              Reserve Your Spot
            </Link>
          </div>

          {/* ── HAMBURGER (mobile only) ── */}
          <button
            className="pt-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            style={{
              display: 'none', // overridden by media query
              flexDirection: 'column', gap: 5,
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 8, borderRadius: 8,
              zIndex: 101, position: 'relative',
            }}
          >
            <span className={`pt-bar${menuOpen ? ' pt-bar-open-1' : ''}`} />
            <span className={`pt-bar${menuOpen ? ' pt-bar-open-2' : ''}`} />
            <span className={`pt-bar${menuOpen ? ' pt-bar-open-3' : ''}`} />
          </button>

        </div>
      </header>

      {/* spacer */}
      <div style={{ height: 72 }} />
      <hr />
    </>
  )
}