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
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500&display=swap');
        [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
      `}</style>

      <section ref={sectionRef} className="w-full bg-black">

        {/* TOP PANEL — image left (~60%), white card right (~40%) */}
        <div className="relative flex flex-col md:flex-row items-stretch">

          {/* Left: gym action image */}
          <div
            data-reveal
            className="relative w-full md:w-[56%] h-[260px] md:h-[450px] overflow-hidden"
          >
            <img
              src="/images/gym-barbell.png"
              alt="Athlete pulling barbell"
              className="w-full h-full object-cover object-center"
              style={{ filter: "brightness(0.8)" }}
            />
          </div>

          {/* Right: white info card — top-aligned, does NOT fill full height */}
          <div className="w-full md:w-[45%] flex flex-col md:items-start bg-black">
            <div
              data-reveal
              className="bg-white px-8 md:px-10 pt-8 pb-57 w-full"
              style={{ maxHeight: "fit-content" }}
            >
              <h2
                className="text-black uppercase leading-tight mb-5"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(4.9rem, 3vw, 2.6rem)",
                  letterSpacing: "0.02em",
                }}
              >
                Dynamic Open
                
                Gym
              </h2>

              <p
                className="text-zinc-500 leading-relaxed"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "1rem",
                  paddingLeft: "0.75rem",
                  borderLeft: "none",
                }}
              >
                At Primal Training, we strip away the fluff and focus on the
                fundamentals. Our expert coaches guide you through intense,
                functional workouts designed to build raw strength, resilience,
                and a body capable of anything.
              </p>
            </div>
            {/* black space below the white card (within the right column) */}
            <div className="flex-1 bg-black w-full" />
          </div>
        </div>

        {/* BOTTOM PANEL — full-width image with large text overlay */}
        <div
          data-reveal
          className="relative w-full h-[300px] md:h-[400px] overflow-hidden"
        >
          <img
            src="/images/gym-overhead.png"
            alt="Athlete overhead press"
            className="absolute inset-0 w-full h-full object-cover object-top"
            style={{ filter: "brightness(0.72)" }}
          />

          {/* Gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.1) 100%)",
            }}
          />

          {/* Bold headline bottom-left */}
          <div className="absolute bottom-0 left-0 px-7 md:px-12 pb-8 md:pb-10">
            <h2
              className="text-white uppercase leading-none"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(1.65rem, 3.8vw, 3rem)",
                letterSpacing: "0.025em",
                textShadow: "0 2px 24px rgba(0,0,0,0.6)",
              }}
            >
              We&apos;ve Created a Space
              <br />
              Where You Can Reconnect
              <br />
              With Your Primal Self.
            </h2>
          </div>
        </div>

      </section>
    </>
  );
}