export default function Hero() {
// Hero
// Top-most landing section. Contains headline and short description. Exposes
// `data-section="hero"` for page visibility tracking so background/theme can
// react to user scroll position.
  {
    /* Animation definition (must exist once) */
  }
  <style>
    {`
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}
  </style>;
  return (
    <section
      style={{
        position: "relative",
        minHeight: "80vh",
        padding: "30px 50px",
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        alignItems: "center",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* Left content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "520px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: 600,
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          See what’s happening <br />
          on campus–from <br />
          people who live it.
        </h1>

        <p
          style={{
            fontSize: "20px",
            opacity: 0.75,
            marginBottom: "36px",
            maxWidth: "420px",
          }}
        >
          A social platform for students to share their experiences, stories,
          and moments from campus life.
        </p>

        <button
          style={{
            position: "relative",
            display: "inline-flex",
            height: "48px",
            padding: "1px",
            borderRadius: "999px",
            overflow: "hidden",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          {/* Animated gradient border */}
          <span
            style={{
              position: "absolute",
              inset: "-1000%",
              background:
                "conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)",
              animation: "spin 2s linear infinite",
            }}
          />

          {/* Inner button */}
          <span
            style={{
              position: "relative",
              zIndex: 1,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "100%",
              padding: "0 22px",
              borderRadius: "999px",
              background: "#030b2dff", // slate-950
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              backdropFilter: "blur(24px)",
            }}
          >
            GET STARTED
            <span style={{ fontSize: "16px", transform: "translateY(1px)" }}>
              →
            </span>
          </span>
        </button>
      </div>

      {/* Right illustration placeholder */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/HeroSection.svg"
          alt="Illustration"
          style={{ width: "600px", height: "350px" }}
        />
      </div>
    </section>
  );
}
