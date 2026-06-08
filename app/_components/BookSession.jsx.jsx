import React from 'react'

const BookSession = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      <main className="min-h-screen bg-white">

        {/* ── Header / Title Bar ── */}
        <div className="w-full border-b border-blue-200 px-6 py-4">
          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              letterSpacing: "0.04em",
              lineHeight: 1,
            }}
          >
            <span className="text-black">BOOK A </span>
            <span style={{ color: "#7B8FF5" }}>SESSION</span>
          </h1>
        </div>

        {/* ── Booking Form ── */}
        <div className="max-w-2xl mx-auto px-6 py-12">

          <form className="flex flex-col gap-6">

            {/* Full Name */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
                style={{ fontFamily: "sans-serif" }}
              >
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 000 000 0000"
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors"
              />
            </div>

            {/* Session Type */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Session Type
              </label>
              <select
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select a session</option>
                <option value="personal">Personal Training</option>
                <option value="group">Group Class</option>
                <option value="open">Open Gym</option>
                <option value="online">Online Coaching</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Preferred Date
              </label>
              <input
                type="date"
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Preferred Time
              </label>
              <input
                type="time"
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                className="text-xs font-bold uppercase tracking-widest text-zinc-500"
              >
                Additional Notes
              </label>
              <textarea
                rows={3}
                placeholder="Any injuries, goals, or questions..."
                className="border-b border-zinc-300 focus:border-black outline-none py-2 text-black bg-transparent text-sm transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 w-full py-4 bg-black text-white uppercase tracking-widest text-sm font-bold hover:bg-zinc-800 transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.1rem", letterSpacing: "0.1em" }}
            >
              Confirm Booking
            </button>

          </form>
        </div>

      </main>
    </>
  )
}

export default BookSession