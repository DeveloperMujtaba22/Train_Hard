'use client'

export default function Features() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Outfit:wght@400;500;600&display=swap');

        .features-section {
          display: flex;
          width: 100%;
          min-height: 390px;
          background: #eef0f8;
        }

        /* ── Two text columns ── */
        .features-col {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 96px 40px 300px;
          border-right: 1px solid rgba(14,12,24,0.1);
        }

        .features-col:last-of-type {
          border-right: none;
        }

        .features-col-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(22px, 2.4vw, 32px);
          line-height: 1;
          text-transform: uppercase;
          color: #0E0C18;
          letter-spacing: -0.0em;
          margin: 0 0 auto;
          
        }

        .features-col-body {
          font-family: 'Outfit', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #1A1525;
          opacity: 0.65;
          line-height: 1.75;
          margin: 0;
          padding-top: 32px;
        }

        /* ── Right: image ── */
        .features-image {
          flex: 0 0 42%;
          overflow: hidden;
        }

        .features-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        //   object-position: center top;
          display: block;
        }

        /* ── Mobile ── */
        @media (max-width: 768px) {
          .features-section {
            flex-direction: column;
          }

          .features-col {
            border-right: none;
            border-bottom: 1px solid rgba(14,12,24,0.1);
            padding: 32px 24px;
          }

          .features-col-heading {
            font-size: clamp(28px, 9vw, 40px);
            margin-bottom: 20px;
          }

          .features-col-body {
            padding-top: 0;
          }

          .features-image {
            flex: unset;
            width: 100%;
            height: 280px;
          }
        }
      `}</style>

      <section className="features-section">
        {/* Column 1 */}
        <div className="features-col">
          <h3 className="features-col-heading">Guided By Experts</h3>
          <p className="features-col-body">
            We believe in creating a positive environment where you can thrive.
            We're here to help you achieve your goals and unlock your full
            potential.
          </p>
        </div>

        {/* Column 2 */}
        <div className="features-col">
          <h3 className="features-col-heading">Dynamic Open Gym</h3>
          <p className="features-col-body">
            Our facility is the optimal environment for strength training and
            performance, fully equipped with top-of-the-line tools, ample
            training areas, and a focus on functional movement.
          </p>
        </div>

        {/* Right image — replace src with your actual image path */}
        <div className="features-image">
          <img
            src="/images/gym-athlete.png"
            alt="Athlete with battle ropes in gym"
          />
        </div>
      </section>
    </>
  )
}