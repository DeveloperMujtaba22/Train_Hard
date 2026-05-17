'use client'

export default function ForTheCommitted() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;500;600&display=swap');

        .ftc-section {
          display: flex;
          width: 100%;
          min-height: 450px;
          background: #f0f2f8;
          margin-top: -40px;
          border:solid 1px black;
          
        }

        /* ── Left: image ── */
        .ftc-image {
          flex: 0 0 58%;
          position: relative;
          overflow: hidden;
        }

        .ftc-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        /* ── Right: text panel ── */
        .ftc-content {
          flex: 0 0 42%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 56px 52px;
          background: #eef0f8;
        }

        .ftc-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(36px, 4vw, 56px);
          line-height: 0.95;
          text-transform: uppercase;
          color: #0E0C18;
          margin: 0 0 32px;
          letter-spacing: -0.01em;
        }

        .ftc-body {
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: #1A1525;
          opacity: 0.65;
          line-height: 1.75;
          max-width: 360px;
          margin: 0 0 40px;
        }

        .ftc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0E0C18;
          text-decoration: none;
          opacity: 0.55;
          transition: opacity 0.2s ease;
        }

        .ftc-link:hover {
          opacity: 1;
        }

        .ftc-link::after {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #0E0C18;
          transition: width 0.25s ease;
        }

        .ftc-link:hover::after {
          width: 40px;
        }

        /* ── Mobile: stack vertically ── */
        @media (max-width: 768px) {
          .ftc-section {
            flex-direction: column;
            min-height: unset;
          }

          .ftc-image {
            flex: unset;
            width: 100%;
            height: 280px;
          }

          .ftc-content {
            flex: unset;
            width: 100%;
            padding: 40px 24px;
            box-sizing: border-box;
          }

          .ftc-heading {
            font-size: clamp(40px, 12vw, 64px);
          }
        }
      `}</style>

      <section className="ftc-section">
        {/* Left — image */}
        <div className="ftc-image">
          {/* Replace src with your actual image path */}
          <img
            src="/images/committed.png"
            alt="Athletes doing box jumps in a gym"
          />
        </div>

        {/* Right — text */}
        <div className="ftc-content">
          <h2 className="ftc-heading">
            For The<br />Committed
          </h2>

          <p className="ftc-body">
            Train like an athlete with top-tier equipment and expert
            programming. Whether you're building muscle or breaking PRs,
            we help you push past limits.
          </p>

          <a href="/about" className="ftc-link">About Us</a>
        </div>
      </section>
    </>
  )
}