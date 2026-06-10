"use client"

import React, { useRef } from 'react'

function BookSession() {
  const formRef = useRef(null)
  const sessionSelectRef = useRef(null)

  const handleReserve = (sessionValue) => {
    if (sessionSelectRef.current) sessionSelectRef.current.value = sessionValue
    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');

        .bsn-wrap {
          font-family: 'DM Sans', sans-serif;
          background: white;
          color: #111;
          min-height: 100vh;
        }
        .bsn-bb { font-family: 'Bebas Neue', sans-serif; }

        /* Hero */
        .bsn-hero {
          padding: 40px 28px 36px;
          border-bottom: 1px solid #e0e4f8;
        }
        .bsn-eyebrow {
          font-size: 11px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #888;
          margin: 0 0 10px;
        }
        .bsn-h1 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 9vw, 5.5rem);
          line-height: .95;
          margin: 0 0 16px;
        }
        .bsn-h1 em { font-style: normal; color: #7B8FF5; }
        .bsn-hero-sub {
          font-size: 15px;
          color: #555;
          max-width: 420px;
          line-height: 1.65;
          margin: 0;
        }

        /* Session cards */
        .bsn-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #e0e4f8;
        }
        .bsn-card {
          padding: 20px 20px 24px;
          border-right: 1px solid #e0e4f8;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .bsn-card:last-child { border-right: none; }
        .bsn-card-num {
          font-size: 16px;
          color: #aaa;
          letter-spacing: .12em;
        }
        .bsn-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.25rem;
          line-height: 1;
          letter-spacing: .04em;
          margin: 0;
        }
        .bsn-card-time {
          font-size: 16px;
          color: #666;
          padding-bottom: 8px;
          border-bottom: 1px solid #e0e4f8;
        }
        .bsn-card-desc {
          font-size: 18px;
          color: #555;
          line-height: 1.6;
          flex: 1;
          margin: 0;
        }
        .bsn-card-btn {
          margin-top: 6px;
          border: 2px solid #ccd0f0;
          background: transparent;
          color: #111;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.2rem;
          letter-spacing: .14em;
          padding: 8px 0;
          width: 100%;
          cursor: pointer;
          border-radius: 6px;
          transition: background .12s, color .12s, border-color .12s;
        }
        .bsn-card-btn:hover {
          background: #7B8FF5;
          color: #fff;
          border-color: #7B8FF5;
        }

        /* Personal training strip */
        .bsn-pt-strip {
          background: #7B8FF5;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .bsn-pt-eye {
          font-size: 15px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: rgba(255,255,255,.65);
          margin: 0 0 4px;
        }
        .bsn-pt-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(5.5rem, 4vw, 2.2rem);
          line-height: 1;
          color: #fff;
          margin: 0;
        }
        .bsn-pt-btn {
          border: 1px solid rgba(255,255,255,.55);
          background: transparent;
          color: #fff;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.30rem;
          letter-spacing: .14em;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background .12s;
        }
        .bsn-pt-btn:hover { background: rgba(255,255,255,.15); }

        /* Split form section */
        .bsn-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        .bsn-form-col {
          padding: 36px 28px 52px;
          border-right: 1px solid #e0e4f8;
        }
        .bsn-info-col {
          padding: 36px 28px 52px;
        }
        .bsn-big-lbl {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(3rem, 5.5vw, 3.4rem);
          line-height: .95;
          letter-spacing: .02em;
          margin: 0 0 28px;
        }
        .bsn-big-lbl em { font-style: normal; color: #7B8FF5; }

        /* Form fields */
        .bsn-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 18px;
        }
        .bsn-lbl {
          font-size: 14px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: #999;
          font-weight: 900;
        }
        .bsn-input,
        .bsn-select,
        .bsn-ta {
          border: none;
          border-bottom: 1px solid #ddd;
          padding: 8px 0;
          font-size: 20.5px;
          color: #111;
          background: transparent;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          transition: border-color .12s;
          width: 100%;
        }
        .bsn-input:focus,
        .bsn-select:focus,
        .bsn-ta:focus { border-bottom-color: #111; }
        .bsn-select { appearance: none; cursor: pointer; }
        .bsn-ta { resize: none; }
        .bsn-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .bsn-submit {
          width: 100%;
          padding: 14px;
          background: #111;
          color: #fff;
          border: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.65rem;
          letter-spacing: .14em;
          cursor: pointer;
          margin-top: 10px;
          border-radius: 6px;
          transition: opacity .12s;
        }
        .bsn-submit:hover { opacity: .8; }

        /* Expect items */
        .bsn-expect-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 20px;
        }
        .bsn-expect-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #e0e4f8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .bsn-expect-name {
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 3px;
        }
        .bsn-expect-desc {
          font-size: 17px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 640px) {
          .bsn-cards { grid-template-columns: 1fr; }
          .bsn-card { border-right: none; border-bottom: 1px solid #e0e4f8; }
          .bsn-split { grid-template-columns: 1fr; }
          .bsn-form-col { border-right: none; border-bottom: 1px solid #e0e4f8; }
          .bsn-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <main className="bsn-wrap">

        {/* Hero */}
        <div className="bsn-hero">
          <p className="bsn-eyebrow">Primal Fitness — Training Sessions</p>
          <h1 className="bsn-h1">BOOK YOUR <em>SESSION</em></h1>
          <p className="bsn-hero-sub">
            Choose a session type below, then fill out your details. We'll confirm your spot within 24 hours.
          </p>
        </div>

        {/* Session Cards */}
        <div className="bsn-cards">
          {[
            {
              num: '01',
              title: 'STRENGTH',
              time: 'Weekdays 6AM · Weekends & Holidays 8AM',
              desc: 'Build raw power with comprehensive weightlifting and strength training programs.',
              value: 'strength',
            },
            {
              num: '02',
              title: 'CONDITIONING',
              time: 'Weekdays 8AM · Weekends & Holidays 10AM',
              desc: 'Push your limits with high-intensity workouts that build cardiovascular endurance.',
              value: 'conditioning',
            },
            {
              num: '03',
              title: 'COMMUNITY CLASSES',
              time: 'Every day on the hour',
              desc: 'Experience collective effort with our custom Workout of the Day alongside like-minded people.',
              value: 'community',
            },
          ].map((s) => (
            <div className="bsn-card" key={s.value}>
              <span className="bsn-card-num">{s.num}</span>
              <p className="bsn-card-title">{s.title}</p>
              <div className="bsn-card-time">{s.time}</div>
              <p className="bsn-card-desc">{s.desc}</p>
              <button className="bsn-card-btn" onClick={() => handleReserve(s.value)}>
                RESERVE YOUR SPOT
              </button>
            </div>
          ))}
        </div>

        {/* Personal Training Strip */}
        <div className="bsn-pt-strip">
          <div>
            <p className="bsn-pt-eye">1-on-1 Coaching</p>
            <p className="bsn-pt-title">PERSONAL TRAINING</p>
          </div>
          <button className="bsn-pt-btn" onClick={() => handleReserve('personal')}>
            RESERVE YOUR SPOT
          </button>
        </div>

        {/* Split: Form + Info */}
        <div className="bsn-split" ref={formRef}>

          {/* Form */}
          <div className="bsn-form-col">
            <h2 className="bsn-big-lbl">YOUR <em>DETAILS</em></h2>

            <div className="bsn-row">
              <div className="bsn-field">
                <label className="bsn-lbl">Full Name</label>
                <input className="bsn-input" type="text" placeholder="John Doe" />
              </div>
              <div className="bsn-field">
                <label className="bsn-lbl">Email</label>
                <input className="bsn-input" type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="bsn-row">
              <div className="bsn-field">
                <label className="bsn-lbl">Phone</label>
                <input className="bsn-input" type="tel" placeholder="+1 000 000 0000" />
              </div>
              <div className="bsn-field">
                <label className="bsn-lbl">Session Type</label>
                <select className="bsn-select" ref={sessionSelectRef}>
                  <option value="">Select a session</option>
                  <option value="strength">Strength</option>
                  <option value="conditioning">Conditioning</option>
                  <option value="community">Community Classes</option>
                  <option value="personal">Personal Training</option>
                  <option value="open">Open Gym</option>
                  <option value="online">Online Coaching</option>
                </select>
              </div>
            </div>

            <div className="bsn-row">
              <div className="bsn-field">
                <label className="bsn-lbl">Preferred Date</label>
                <input className="bsn-input" type="date" />
              </div>
              <div className="bsn-field">
                <label className="bsn-lbl">Preferred Time</label>
                <input className="bsn-input" type="time" />
              </div>
            </div>

            <div className="bsn-field">
              <label className="bsn-lbl">Additional Notes</label>
              <textarea className="bsn-ta" rows={3} placeholder="Injuries, goals, questions..." />
            </div>

            <button className="bsn-submit">CONFIRM BOOKING</button>
          </div>

          {/* What to Expect */}
          <div className="bsn-info-col">
            <h2 className="bsn-big-lbl">WHAT TO <em>EXPECT</em></h2>

            {[
              {
                icon: '✉',
                name: 'Confirmation email',
                desc: "You'll receive a booking confirmation within 24 hours of submitting.",
              },
              {
                icon: '⏱',
                name: 'Arrive 10 mins early',
                desc: 'Give yourself time to warm up and check in with your coach before the session starts.',
              },
              {
                icon: '🎒',
                name: 'What to bring',
                desc: 'Water bottle, training shoes, and a towel. All equipment is provided on-site.',
              },
              {
                icon: '✕',
                name: 'Cancellations',
                desc: 'Cancel or reschedule up to 12 hours before your session at no charge.',
              },
            ].map((item) => (
              <div className="bsn-expect-item" key={item.name}>
                <div className="bsn-expect-icon">
                  <span style={{ fontSize: 14, color: '#888' }}>{item.icon}</span>
                </div>
                <div>
                  <p className="bsn-expect-name">{item.name}</p>
                  <p className="bsn-expect-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  )
}

export default BookSession