'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const lineRef = useRef(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;500&display=swap');

        .hero-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          /* Mobile-first: fill the screen width */
          font-size: clamp(56px, 14vw, 168px);
          line-height: 0.9;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0 0 40px;
          /* Allow wrapping on very small screens if needed */
          white-space: nowrap;
          /* Scale down gracefully when it overflows */
          overflow: hidden;
        }

        /* On phones, let it wrap so neither word gets cut off */
        @media (max-width: 480px) {
          .hero-headline {
            white-space: normal;
            /* Use a large viewport-width unit so each word fills the line */
            font-size: clamp(52px, 18vw, 96px);
            line-height: 0.92;
          }
        }

        /* Tablets */
        @media (min-width: 481px) and (max-width: 768px) {
          .hero-headline {
            font-size: clamp(64px, 12vw, 120px);
          }
        }

        .hero-headline .black  { color: #0E0C18; }
        .hero-headline .violet { color: #7B6CF0; }

        .hero-sub {
          font-family: 'Outfit', sans-serif;
          font-size: 17px;
          font-weight: 400;
          color: #1A1525;
          max-width: 440px;
          line-height: 1.7;
          margin-bottom: 48px;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.5s forwards;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          opacity: 0;
          animation: fadeUp 0.7s ease 0.7s forwards;
        }

        .hero-stats {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 32px;
          opacity: 0;
          animation: fadeUp 0.8s ease 0.9s forwards;
        }

        .stat-item   { text-align: right; }
        .stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 48px;
          font-weight: 900;
          color: #0E0C18;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #1A1525;
          opacity: 0.45;
          margin-top: 2px;
        }

        .hero-deco {
          position: absolute;
          right: -120px;
          bottom: -160px;
          width: 540px;
          height: 540px;
          border-radius: 50%;
          border: 1.5px solid rgba(107,79,232,0.15);
          pointer-events: none;
        }
        .hero-deco-2 {
          position: absolute;
          right: -60px;
          bottom: -80px;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          border: 1.5px solid rgba(107,79,232,0.1);
          pointer-events: none;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* headline animates separately via ref */
        .hero-headline {
          opacity: 0;
          animation: fadeUp 0.8s ease 0.25s forwards;
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-inner">
          <h1 className="hero-headline" ref={lineRef}>
            <span className="black">Train Hard. </span>
            <span className="violet">Live Better</span>
          </h1>
        </div>
      </section>
    </>
  )
}