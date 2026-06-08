"use client"

import React, { useRef } from 'react' 

function BookSession() {
    const formRef = useRef(null)
    const sessionSelectRef = useRef(null)

    const handleReserve = (sessionValue) => {
        if (sessionSelectRef.current) {
            sessionSelectRef.current.value = sessionValue
        }
        if (formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500&display=swap');

        .bs-wrap {
          font-family: 'DM Sans', sans-serif;
          background: white;
          min-height: 100vh;
          color: #111;
        }

        .bs-header {
          border-bottom: 1px solid #cdd6f7;
          padding: 20px 28px;
        }

        .bs-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2rem, 6vw, 3rem);
          letter-spacing: 0.04em;
          line-height: 1;
          margin: 0;
        }

        .bs-title .accent {
          color: #7B8FF5;
        }

        .bs-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-bottom: 1px solid #cdd6f7;
        }

        @media (max-width: 640px) {
          .bs-cards {
            grid-template-columns: 1fr;
          }
          .bs-card {
            border-right: none !important;
            border-bottom: 1px solid #cdd6f7;
          }
          .bs-row {
            grid-template-columns: 1fr !important;
          }
        }

        .bs-card {
          border-right: 1px solid #cdd6f7;
          padding: 24px 22px 28px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .bs-card:last-child {
          border-right: none;
        }

        .bs-card-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.35rem;
          letter-spacing: 0.05em;
          color: #111;
          margin: 0;
        }

        .bs-card-time {
          font-size: 12px;
          color: #555;
          padding-bottom: 8px;
          border-bottom: 1px solid #dde2fb;
        }

        .bs-card-desc {
          font-size: 12.5px;
          color: #444;
          line-height: 1.6;
          flex: 1;
        }

        .bs-reserve-btn {
          margin-top: 10px;
          border: 1px solid #aab3f7;
          background: #f0f2fd;
          color: #5060c8;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          padding: 9px 0;
          width: 100%;
          cursor: pointer;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }

        .bs-reserve-btn:hover {
          background: #7B8FF5;
          color: white;
          border-color: #7B8FF5;
        }

        .bs-promo {
          background: #7B8FF5;
          padding: 36px 28px;
          text-align: center;
        }

        .bs-promo-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.8rem;
          letter-spacing: 0.05em;
          color: white;
          margin: 0 0 8px;
        }

        .bs-promo-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.88);
          max-width: 380px;
          margin: 0 auto 18px;
          line-height: 1.6;
        }

        .bs-promo-btn {
          border: 1px solid rgba(255,255,255,0.6);
          background: transparent;
          color: white;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 0.85rem;
          letter-spacing: 0.12em;
          padding: 10px 28px;
          cursor: pointer;
          transition: background 0.15s;
        }

        .bs-promo-btn:hover {
          background: rgba(255,255,255,0.15);
        }

        .bs-form-wrap {
          max-width: 580px;
          margin: 0 auto;
          padding: 40px 28px 60px;
        }

        .bs-form-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          letter-spacing: 0.06em;
          color: #111;
          margin: 0 0 32px;
        }

        .bs-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 24px;
        }

        .bs-label {
          font-size: 10.5px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #888;
        }

        .bs-input,
        .bs-select,
        .bs-textarea {
          border: none;
          border-bottom: 1px solid #ddd;
          padding: 9px 0;
          font-size: 13.5px;
          color: #111;
          background: transparent;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s;
          width: 100%;
        }

        .bs-input:focus,
        .bs-select:focus,
        .bs-textarea:focus {
          border-bottom-color: #111;
        }

        .bs-select {
          appearance: none;
          cursor: pointer;
        }

        .bs-textarea {
          resize: none;
        }

        .bs-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .bs-submit {
          width: 100%;
          padding: 16px;
          background: #111;
          color: white;
          border: none;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.1rem;
          letter-spacing: 0.12em;
          cursor: pointer;
          margin-top: 8px;
          transition: background 0.15s;
        }

        .bs-submit:hover {
          background: #333;
        }
      `}</style>

            <main className="bs-wrap">

                {/* Header */}
                <div className="bs-header">
                    <h1 className="bs-title">
                        BOOK A <span className="accent">SESSION</span>
                    </h1>
                </div>

                {/* Session Cards */}
                <div className="bs-cards">
                    <div className="bs-card">
                        <p className="bs-card-title">STRENGTH</p>
                        <div className="bs-card-time">
                            <div>Weekdays at 6AM</div>
                            <div style={{ marginTop: 4 }}>Weekends and Holidays at 8AM</div>
                        </div>
                        <p className="bs-card-desc">
                            Build a foundation of raw power with our comprehensive weightlifting and strength training programs.
                        </p>
                        <button className="bs-reserve-btn" onClick={() => handleReserve('strength')}>
                            RESERVE YOUR SPOT
                        </button>
                    </div>

                    <div className="bs-card">
                        <p className="bs-card-title">CONDITIONING</p>
                        <div className="bs-card-time">
                            <div>Weekdays at 8AM</div>
                            <div style={{ marginTop: 4 }}>Weekends and Holidays at 10AM</div>
                        </div>
                        <p className="bs-card-desc">
                            Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build functional fitness.
                        </p>
                        <button className="bs-reserve-btn" onClick={() => handleReserve('conditioning')}>
                            RESERVE YOUR SPOT
                        </button>
                    </div>

                    <div className="bs-card">
                        <p className="bs-card-title">COMMUNITY CLASSES</p>
                        <div className="bs-card-time">
                            <div>Every day on the hour</div>
                        </div>
                        <p className="bs-card-desc">
                            Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside like-minded individuals.
                        </p>
                        <button className="bs-reserve-btn" onClick={() => handleReserve('community')}>
                            RESERVE YOUR SPOT
                        </button>
                    </div>
                </div>

                {/* Promo Banner */}
                <div className="bs-promo">
                    <p className="bs-promo-title">PRIMAL PERSONAL TRAINING</p>
                    <p className="bs-promo-sub">
                        Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our expert coaches will guide you every step of the way.
                    </p>
                    <button className="bs-promo-btn" onClick={() => handleReserve('personal')}>
                        RESERVE YOUR SPOT
                    </button>
                </div>

                {/* Booking Form */}
                <div className="bs-form-wrap" ref={formRef}>
                    <p className="bs-form-title">YOUR DETAILS</p>

                    <div className="bs-row">
                        <div className="bs-field">
                            <label className="bs-label">Full Name</label>
                            <input className="bs-input" type="text" placeholder="John Doe" />
                        </div>
                        <div className="bs-field">
                            <label className="bs-label">Email</label>
                            <input className="bs-input" type="email" placeholder="you@example.com" />
                        </div>
                    </div>

                    <div className="bs-row">
                        <div className="bs-field">
                            <label className="bs-label">Phone Number</label>
                            <input className="bs-input" type="tel" placeholder="+1 000 000 0000" />
                        </div>
                        <div className="bs-field">
                            <label className="bs-label">Session Type</label>
                            <select className="bs-select" ref={sessionSelectRef}>
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

                    <div className="bs-row">
                        <div className="bs-field">
                            <label className="bs-label">Preferred Date</label>
                            <input className="bs-input" type="date" />
                        </div>
                        <div className="bs-field">
                            <label className="bs-label">Preferred Time</label>
                            <input className="bs-input" type="time" />
                        </div>
                    </div>

                    <div className="bs-field">
                        <label className="bs-label">Additional Notes</label>
                        <textarea
                            className="bs-textarea"
                            rows={3}
                            placeholder="Any injuries, goals, or questions..." />
                    </div>

                    <button className="bs-submit">CONFIRM BOOKING</button>
                </div>

            </main>
        </>
    )
}

export default BookSession