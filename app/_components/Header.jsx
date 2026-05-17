'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hovBtn, setHovBtn] = useState(false)
  const [hovHome, setHovHome] = useState(false)
  const [hovAbout, setHovAbout] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap');
        .pt-header * { box-sizing: border-box; font-family: 'Outfit', sans-serif; }
      `}</style>

      <header
        className="pt-header"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: scrolled ? 'rgba(232,228,240,0.92)' : '#E8E4F0',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          boxShadow: scrolled ? '0 4px 24px rgba(80,50,180,0.10)' : 'none',
          transition: 'all 0.35s ease',
          borderBottom: scrolled ? '1px solid rgba(107,79,232,0.12)' : '1px solid transparent',
        }}
      >
        <div style={{
          maxWidth: 1700, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '14px 48px',
        }}>

          {/* ── LOGO (left, bigger) ── */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none', flexShrink: 0, marginLeft: 24 }}>
            <svg width="46" height="30" viewBox="0 0 46 30" fill="none">
              <circle cx="15" cy="15" r="15" fill="#1A1525" />
              <circle cx="31" cy="15" r="15" fill="#1A1525" fillOpacity="0.65" />
            </svg>
            <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: '-0.01em', color: '#1A1525', lineHeight: 1 }}>
              Primal<span style={{ color: '#6B4FE8' }}>Training</span>
            </span>
          </a>

          {/* ── NAV + CTA (right) ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <a
              href="#"
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
            </a>
            <a
              href="#"
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
            </a>

            <div style={{ width: 1, height: 20, background: 'rgba(107,79,232,0.22)', margin: '0 10px' }} />

            <button
              style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#fff', background: '#6B4FE8',
                border: 'none', borderRadius: 10, padding: '18px 26px',
                cursor: 'pointer', whiteSpace: 'nowrap',
                transform: hovBtn ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hovBtn
                  ? '0 8px 28px rgba(107,79,232,0.55)'
                  : '0 4px 18px rgba(107,79,232,0.38)',
                transition: 'all 0.2s',
              }}
              onMouseEnter={() => setHovBtn(true)}
              onMouseLeave={() => setHovBtn(false)}
            >
              Reserve Your Spot
            </button>
          </div>

        </div>
      </header>

      {/* spacer */}
      <div style={{ height: 72 }} />
      <hr />
    </>
  )
}