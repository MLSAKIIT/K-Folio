export default function Hero() {
  return (
    <>
      <style>
        {`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <section className="relative bg-[#030b2d] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20">

          {/* GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-xl">

              <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] font-semibold leading-tight mb-6">
                See what’s happening <br />
                on campus — from <br />
                people who live it.
              </h1>

              <p className="text-base sm:text-lg opacity-75 mb-10 max-w-md">
                A social platform for students to share their experiences, stories,
                and moments from campus life.
              </p>

              {/* CTA BUTTON */}
              <button className="relative inline-flex h-12 p-[1px] rounded-full overflow-hidden">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
                  style={{
                    background:
                      "conic-gradient(from 90deg at 50% 50%, #E2CBFF, #393BB2, #E2CBFF)",
                  }}
                />

                <span className="relative z-10 inline-flex items-center gap-2 h-full px-8 rounded-full bg-[#030b2d] text-white text-sm font-medium">
                  GET STARTED →
                </span>
              </button>
            </div>

            {/* RIGHT MEDIA (DESKTOP ONLY) */}
            <div className="hidden lg:flex justify-center">
              {/* IMAGE */}
              <img
                src="/HeroSection.svg"
                alt="Illustration"
                className="w-full max-w-[560px] h-auto"
              />

              {/* If you want video instead, use this and delete image */}
              {/*
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-[560px] rounded-xl shadow-xl"
              />
              */}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
