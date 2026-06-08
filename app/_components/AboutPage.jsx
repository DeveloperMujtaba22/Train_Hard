'use client'

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;600&display=swap');

        .about-title-bar {
          width: 100%;
          background: #fff;
          padding: 40px 48px 32px;
          box-sizing: border-box;
          border-bottom: 1px solid rgba(14,12,24,0.08);
        }

        .about-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(72px, 14vw, 180px);
          line-height: 0.9;
          text-transform: uppercase;
          color: #0E0C18;
          letter-spacing: -0.02em;
          margin: 0;
          white-space: nowrap;
        }

        @media (max-width: 480px) {
          .about-title-bar { padding: 28px 20px; }
          .about-title {
            font-size: clamp(60px, 18vw, 100px);
            white-space: normal;
          }
        }

        /* ── Hero split ── */
        .about-hero {
          display: flex;
          width: 100%;
          height: 420px;        /* fixed height — both sides match */
        }

        .about-hero-left {
          flex: 0 0 56%;
          background: #7B6CF0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 28px 40px 28px;
          box-sizing: border-box;
          height: 100%;         /* fill the row */
        }

        .about-tagline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(24px, 3vw, 40px);
          line-height: 1.05;
          text-transform: uppercase;
          color: #0E0C18;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .about-vision-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0E0C18;
          margin: 0 0 10px;
        }

        .about-vision-body {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #0E0C18;
          opacity: 0.7;
          line-height: 1.75;
          margin: 0;
          max-width: 480px;
        }

        /* ── Right image fills the full height ── */
        .about-hero-right {
          flex: 1;
          overflow: hidden;
          height: 100%;
        }

        .about-hero-right img {
          width: 100%;
          height: 100%;         /* fill — no more 70% gap */
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(100%);
        }

        @media (max-width: 768px) {
          .about-hero {
            flex-direction: column;
            height: auto;
          }

          .about-hero-left {
            flex: unset;
            width: 100%;
            height: auto;
            padding: 32px 24px;
            min-height: 280px;
          }

          .about-hero-right {
            width: 100%;
            height: 260px;
          }
        }
      `}</style>

      <div className="about-title-bar">
        <h1 className="about-title">About Us</h1>
      </div>

      <section className="about-hero">
        <div className="about-hero-left">
          <h2 className="about-tagline">
            Tap Into Your Primal Power.<br />
            Forge A Stronger You.
          </h2>
          <div>
            <p className="about-vision-label">Our Vision</p>
            <p className="about-vision-body">
              Primal Training is committed to delivering a training experience rooted in raw strength,
              functional fitness, and unwavering community support. We empower our members to tap into
              their primal power, achieve their goals, and live a life of strength, resilience, and
              unwavering determination.
            </p>
          </div>
        </div>

        <div className="about-hero-right">
          <img src="/images/about-hero.png" alt="Athletes training with barbells" />
        </div>
      </section>
    </>
  )
}