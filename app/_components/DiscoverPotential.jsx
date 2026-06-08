'use client'

export default function DynamicGym() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;600&display=swap');

        .dp-section {
          display: flex;
          width: 100%;
        //   min-height: 300px;
          background: #eef0f8;
        }

        /* ── Left panel ── */
        .dp-left {
          flex: 0 0 34%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px 36px 32px;
          border-right: 1px solid rgba(14,12,24,0.1);
        }

        .dp-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 500;
          font-size: clamp(29px, 3.2vw, 66px);
          line-height: 0.95;
          text-transform: uppercase;
          color: #0E0C18;
          letter-spacing: -0.01em;
          margin: 0 0 32px;
        }

        /* feature list */
        .dp-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
        }

        .dp-feature {
          border-top: 1px solid rgba(14,12,24,0.12);
          padding-top: 14px;
        }

        .dp-feature-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #0E0C18;
          margin: 0 0 10px;
        }

        .dp-feature-body {
          font-family: 'Outfit', sans-serif;
          font-size: 24px;
          font-weight: 400;
          color: #1A1525;
          opacity: 0.6;
          line-height: 1.6;
          margin: 0;
        }

        /* CTA link */
        .dp-cta {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          margin-top: 18px;
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0E0C18;
          text-decoration: none;
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }

        .dp-cta:hover { opacity: 1; }

        .dp-cta::after {
          content: '';
          display: inline-block;
          width: 24px;
          height: 1px;
          background: #0E0C18;
          transition: width 0.25s ease;
        }

        .dp-cta:hover::after { width: 40px; }

        /* ── Right image ── */
        .dp-image {
          flex: 1;
          overflow: hidden;
        }

        .dp-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          display: block;
          filter: grayscale(100%);
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .dp-section {
            flex-direction: column;
          }

          .dp-left {
            flex: unset;
            width: 100%;
            box-sizing: border-box;
            border-right: none;
            border-bottom: 1px solid rgba(14,12,24,0.1);
            padding: 28px 24px;
          }

          .dp-image {
            width: 100%;
            height: 280px;
          }
        }
      `}</style>

      <section className="dp-section">
        {/* Left */}
        <div className="dp-left">
          <h2 className="dp-heading">Discover Your<br />Potential</h2>

          <div className="dp-features">
            <div className="dp-feature">
              <p className="dp-feature-title">Expert Coaching</p>
              <p className="dp-feature-body">Trainers who are passionate about your progress.</p>
            </div>

            <div className="dp-feature">
              <p className="dp-feature-title">Results-Driven Programs</p>
              <p className="dp-feature-body">Workouts that deliver tangible, measurable results.</p>
            </div>

            <div className="dp-feature">
              <p className="dp-feature-title">A Supportive Tribe</p>
              <p className="dp-feature-body">A community that pushes you to be your best.</p>
            </div>
            <hr />
          </div>
          

          <a href="/classes" className="dp-cta">View Classes</a>
        </div>

        {/* Right image — put your image in public/images/ */}
        <div className="dp-image">
          <img
            src="/images/barbell.png"
            alt="Athletes lifting barbells in a gym"
          />
        </div>
      </section>
    </>
  )
}