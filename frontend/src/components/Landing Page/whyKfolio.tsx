
export default function WhyKfolio() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "120px 100px",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        alignItems: "center",
        gap: "80px",
        color: "white",
      }}
    >
      {/* Left image collage */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
        }}
      >
        <img
          src="/WhyKfolio2.svg"
          alt="WhyKfolio Illustration"
          style={{ width: "700px", height: "630px" }}
        />
      </div>

      {/* Right content */}
      <div style={{ maxWidth: "520px" }}>
        <img
          src="/WhyKfolio.svg"
          alt="WhyKfolio Illustration"
          style={{ width: "492px", height: "345px" }}
        />

        <p
          style={{
            fontSize: "18px",
            opacity: 0.75,
            lineHeight: 1.7,
            marginBottom: "40px",
            padding: "0px 30px 0px 0px",
          }}
        >
          College is full of moments that never make it to social media.
          K-Folio is where those moments live. Shared easily, seen by the
          right people, and free from the noise of generic platforms.
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
              background: "#01071fff", // slate-950
              color: "white",
              fontSize: "14px",
              fontWeight: 500,
              backdropFilter: "blur(24px)",
            }}
          >
            Join Now!
            <span style={{ fontSize: "16px", transform: "translateY(1px)" }}>
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
}


