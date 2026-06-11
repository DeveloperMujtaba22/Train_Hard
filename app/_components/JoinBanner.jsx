'use client'

export default function JoinBanner() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;600&display=swap');

        .jb-section {
          width: 100%;
          background: #7B6CF0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 64px 24px;
          text-align: center;
          box-sizing: border-box;
        }

        .jb-eyebrow {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0C18;
          opacity: 0.6;
          margin: 0 0 16px;
        }

        .jb-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(36px, 6vw, 72px);
          line-height: 1;
          text-transform: uppercase;
          color: #0E0C18;
          letter-spacing: -0.01em;
          margin: 0 0 36px;
        }

        .jb-btn {
          display: inline-block;
          padding: 14px 36px;
          background: transparent;
          border: 1.5px solid #0E0C18;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0C18;
          text-decoration: none;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .jb-btn:hover {
          background: #0E0C18;
          color: #7B6CF0;
        }

        @media (max-width: 480px) {
          .jb-heading {
            font-size: clamp(32px, 10vw, 52px);
          }
        }
      `}</style>

      <section className="jb-section">
        <p className="jb-eyebrow">What We Believe In</p>
        <h2 className="jb-heading">Join The Primal Tribe Today!</h2>
        <a href="/Reserve" className="jb-btn">Reserve Your Spot</a>
      </section>
    </>
  )
}