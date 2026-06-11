"use client";

import { useEffect, useRef } from "react";

export default function DiscoverPotential() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll("[data-reveal]").forEach((el, i) => {
              setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@800;900&family=Barlow:wght@400;500&display=swap');

        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal] { transition: none; }
        }

        .dp-top {
          display: flex;
          flex-direction: row;
          align-items: stretch;
          width: 100%;
        }

        .dp-img-left {
          width: 56%;
          height: 450px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
        }

        .dp-img-left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.8);
          display: block;
        }

        .dp-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          background: #000;
        }

        .dp-card {
          background: #fff;
          padding: 134px 40px;
          width: 100%;
        }

        .dp-card-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(4rem, 3vw, 2.8rem);
          line-height: 0.95;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          color: #000;
          margin: 0 0 20px;
          margin-top: -32px;
        }

        .dp-card-body {
          font-family: 'Barlow', sans-serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: #71717a;
          line-height: 1.75;
          margin: 0;
        }

        .dp-bottom {
          position: relative;
          width: 100%;
          height: 400px;
          overflow: hidden;
        }

        .dp-bottom img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top;
          filter: brightness(0.72);
        }

        .dp-bottom-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 100%);
        }

        .dp-bottom-text {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0 48px 40px;
        }

        .dp-bottom-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(1.8rem, 3.8vw, 3.2rem);
          line-height: 1.0;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          color: #fff;
          text-shadow: 0 2px 24px rgba(0,0,0,0.6);
          margin: 0;
        }

        /* ── MOBILE ── */
        @media (max-width: 640px) {
          .dp-top {
            flex-direction: column;
          }

          .dp-img-left {
            width: 100%;
            height: 260px;
          }

          .dp-card {
            padding: 28px 20px 32px;
          }

          .dp-card-title {
            font-size: clamp(2.4rem, 12vw, 3.2rem);
            margin-bottom: 16px;
          }

          .dp-card-body {
            font-family: 'Barlow Condensed', sans-serif;
            font-weight: 800;
            font-size: clamp(1.05rem, 4.5vw, 1.3rem);
            line-height: 1.5;
            color: #52525b;
          }

          .dp-bottom {
            height: 320px;
          }

          .dp-bottom-text {
            padding: 0 20px 28px;
          }

          .dp-bottom-title {
            font-size: clamp(2rem, 10vw, 2.8rem);
            line-height: 0.97;
          }
        }

        /* ── TABLET ── */
        @media (min-width: 641px) and (max-width: 1024px) {
          .dp-img-left {
            height: 360px;
          }

          .dp-card {
            padding: 28px 28px;
          }

          .dp-card-title {
            font-size: clamp(1.8rem, 3.5vw, 2.4rem);
          }

          .dp-bottom {
            height: 340px;
          }

          .dp-bottom-text {
            padding: 0 32px 32px;
          }
        }
      `}</style>

      <section ref={sectionRef} style={{ width: '100%', background: '#000' }}>

        {/* TOP PANEL */}
        <div data-reveal className="dp-top">

          {/* Left: gym image */}
          <div className="dp-img-left">
            <img src="/images/gym-barbell.png" alt="Athlete pulling barbell" />
          </div>

          {/* Right: white card + black fill */}
          <div className="dp-right">
            <div className="dp-card">
              <h2 className="dp-card-title">
                Dynamic Open Gym
              </h2>
              <p className="dp-card-body">
                At Primal Training, we strip away the fluff and focus on the
                fundamentals. Our expert coaches guide you through intense,
                functional workouts designed to build raw strength, resilience,
                and a body capable of anything.
              </p>
            </div>
            <div style={{ flex: 1, background: '#000', width: '100%' }} />
          </div>
        </div>

        {/* BOTTOM PANEL */}
        <div data-reveal className="dp-bottom">
          <img src="/images/gym-overhead.png" alt="Athlete overhead press" />
          <div className="dp-bottom-gradient" />
          <div className="dp-bottom-text">
            <h2 className="dp-bottom-title">
              We&apos;ve Created a Space<br />
              Where You Can Reconnect<br />
              With Your Primal Self.
            </h2>
          </div>
        </div>

      </section>
    </>
  );
}