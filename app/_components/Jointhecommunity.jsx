'use client'

import { useRef, useEffect } from 'react'

export default function Jointhecommunity() {
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

        .join-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(56px, 14vw, 168px);
          line-height: 0.9;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          margin: 0 0 40px;
          white-space: nowrap;
          overflow: hidden;
        }

        @media (max-width: 480px) {
          .join-headline {
            white-space: normal;
            font-size: clamp(52px, 18vw, 96px);
            line-height: 0.92;
          }
        }

        @media (min-width: 481px) and (max-width: 768px) {
          .join-headline {
            font-size: clamp(64px, 12vw, 120px);
          }
        }

        .join-headline .black  { color: #0E0C18; }
        .join-headline .violet { color: #7B6CF0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .join-headline {
          opacity: 0;
          animation: fadeUp 0.8s ease 0.25s forwards;
        }
      `}</style>

      <section className="join-section">
        <div className="join-inner">
          <h1 className="join-headline" ref={lineRef}>
            <span className="black">Join The </span>
            <span className="violet">Community</span>
          </h1>
        </div>
      </section>
    </>
  )
}