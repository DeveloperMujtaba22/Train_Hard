'use client'

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;600&display=swap');

        .footer-section {
          width: 100%;
          background: #eef0f8;
          box-sizing: border-box;
          padding: 40px 48px 40px;
        }

        /* ── Top row: logo left, brand name right ── */
        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 60px;
        }

        /* simple geometric logo mark */
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0;
        }

        .footer-logo svg {
          width: 80px;
          height: 56px;
        }

        .footer-brand {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(22px, 2.8vw, 36px);
          color: #0E0C18;
          letter-spacing: -0.02em;
          text-transform: none;
          margin: 0;
        }

        /* ── Bottom row: 3 columns ── */
        .footer-bottom {
          display: flex;
          gap: 0;
          border-top: 1px solid rgba(14,12,24,0.12);
          padding-top: 28px;
        }

        .footer-col {
          flex: 1;
        }

        .footer-col-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #0E0C18;
          margin: 0 0 14px;
        }

        .footer-col p,
        .footer-col a {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #1A1525;
          opacity: 0.65;
          line-height: 1.9;
          margin: 0;
          text-decoration: none;
          display: block;
        }

        .footer-col a:hover { opacity: 1; text-decoration: underline; }

        /* hours table */
        .footer-hours {
          display: grid;
          grid-template-columns: auto auto;
          column-gap: 32px;
          row-gap: 0;
        }

        .footer-hours span {
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          color: #1A1525;
          opacity: 0.65;
          line-height: 1.9;
        }

        .footer-hours .day { font-weight: 600; opacity: 0.8; }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .footer-section { padding: 32px 24px; }

          .footer-bottom {
            flex-direction: column;
            gap: 28px;
          }
        }
      `}</style>

      <footer className="footer-section">
        {/* Top */}
        <div className="footer-top">
          {/* Geometric logo mark */}
          <div className="footer-logo">
            <svg viewBox="0 0 80 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="28" r="18" fill="#0E0C18" opacity="0.35" />
              <circle cx="40" cy="28" r="20" fill="#0E0C18" />
              <circle cx="60" cy="28" r="14" fill="#0E0C18" opacity="0.35" />
            </svg>
          </div>

          <p className="footer-brand">PrimalTraining</p>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          {/* Contact */}
          <div className="footer-col">
            <p className="footer-col-title">Contact</p>
            <p>Email: hello@figma.com</p>
            <p>Phone: (203) 555-5555</p>
          </div>

          {/* Opening Hours */}
          <div className="footer-col">
            <p className="footer-col-title">Opening Hours</p>
            <div className="footer-hours">
              <span className="day">Mon – Fri</span><span>5:00 – 23:00</span>
              <span className="day">Saturdays</span><span>8:00 – 16:00</span>
              <span className="day">Sundays</span><span>8:00 – 13:00</span>
              <span className="day">Holidays</span><span>8:00 – 16:00</span>
            </div>
          </div>

          {/* Social */}
          <div className="footer-col">
            <p className="footer-col-title">Social</p>
            <a href="#">Instagram</a>
            <a href="#">X</a>
            <a href="#">LinkedIn</a>
            <a href="#">Spotify</a>
          </div>
        </div>
      </footer>
    </>
  )
}