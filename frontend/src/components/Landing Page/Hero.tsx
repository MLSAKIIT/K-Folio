export default function Hero() {
  return (
    <>
      <style>
        {`
        :root {
          --hero-ease: cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* =====================
          BASE FADE + LIFE
          ===================== */
        .hero-animate {
          opacity: 0;
          transform: translateY(14px);
          animation:
            heroFadeUp 0.9s var(--hero-ease) forwards,
            heroFloat 6s ease-in-out infinite;
        }

        .hero-line-1 { animation-delay: 0.12s; }
        .hero-line-2 { animation-delay: 0.24s; }
        .hero-glow   { animation-delay: 0.36s; }
        .hero-paragraph { animation-delay: 0.5s; }
        .hero-cta { animation-delay: 0.65s; }

        @keyframes heroFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes heroFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        /* =====================
          SHIMMER TEXT
          ===================== */
        .hero-shimmer {
          background: linear-gradient(90deg, #3f56c8, #6b82ff, #3f56c8);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;

          animation:
            heroFadeUp 0.9s var(--hero-ease) forwards,
            shimmerMove 5.5s ease-in-out infinite,
            glowPulse 4s ease-in-out infinite;
        }

        @keyframes shimmerMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes glowPulse {
          0%,100% {
            text-shadow:
              0 0 6px rgba(63,86,200,0.35),
              0 0 14px rgba(63,86,200,0.2);
          }
          50% {
            text-shadow:
              0 0 14px rgba(63,86,200,0.55),
              0 0 32px rgba(63,86,200,0.35);
          }
        }

        /* =====================
          BUTTON
          ===================== */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .hero-button-inner {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hero-cta:hover .hero-button-inner {
          transform: translateY(-2px);
          box-shadow: 0 10px 40px rgba(99,102,241,0.45);
        }

        /* =====================
          VIDEO
          ===================== */
        .hero-video-wrapper {
          width: 600px;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: videoFloat 8s ease-in-out infinite;
        }

        @keyframes videoFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-6px) scale(1.015); }
        }

        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: contain;
          mask-image: radial-gradient(ellipse at center, black 55%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 55%, transparent 75%);
        }

        /* =====================
          RESPONSIVE BREAKPOINTS
          ===================== */

        /* Tablets */
        @media (max-width: 1024px) {
          section[data-section="hero"] {
            grid-template-columns: 1fr;
            padding: 40px 30px;
            text-align: center;
          }

          section[data-section="hero"] h1,
          section[data-section="hero"] p,
          section[data-section="hero"] button {
            margin-left: 0 !important;
          }

          .hero-video-wrapper {
            width: 520px;
            height: 300px;
            margin: 40px auto 0;
          }

          h1 {
            font-size: 42px !important;
          }

          p {
            font-size: 18px !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          section[data-section="hero"] {
            padding: 32px 20px;
          }

          h1 {
            font-size: 32px !important;
            line-height: 1.25 !important;
          }

          p {
            font-size: 16px !important;
            margin: 24px 0 !important;
          }

          .hero-video-wrapper {
            width: 100%;
            height: 220px;
          }

          .hero-button-inner {
            height: 44px;
            font-size: 14px;
          }
        }
        `}
        </style>


      <section
        data-section="hero"
        style={{
          minHeight: "80vh",
          padding: "30px 50px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* LEFT */}
        <div style={{ maxWidth: "520px" }}>
          <h1 style={{ fontSize: "50px", fontWeight: 600, lineHeight: 1.15, marginLeft: "50px" }}>
            <span className="hero-animate hero-line-1">
              See what’s happening on campus–from
            </span>
            <br />
            <span className="hero-animate hero-glow hero-shimmer">
              people who live it.
            </span>
          </h1>

          <p
            className="hero-animate hero-paragraph"
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "36px",
              marginTop: "36px",
              marginLeft: "50px"
            }}
          >
            A social platform for students to share their experiences,
            stories, and moments from campus life.
          </p>

          <button className="hero-animate hero-cta" style={{ position: "relative", padding: "1px", borderRadius: "999px", border: "none", background: "transparent", overflow: "hidden", marginLeft: "50px"}}>
            <span
              style={{
                position: "absolute",
                inset: "-1000%",
                background: "conic-gradient(from 90deg, #E2CBFF, #393BB2, #E2CBFF)",
                animation: "spin 2s linear infinite",
              }}
            />
            <span
              className="hero-button-inner"
              style={{
                position: "relative",
                zIndex: 1,
                padding: "0 22px",
                height: "48px",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                borderRadius: "999px",
                background: "#030b2d",
                color: "white",
                backdropFilter: "blur(24px)",
              }}
            >
              GET STARTED →
            </span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="hero-video-wrapper">
          <video autoPlay loop muted playsInline className="hero-video">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
