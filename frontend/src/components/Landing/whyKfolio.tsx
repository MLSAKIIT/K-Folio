export default function WhyKfolio() {
  return (
    <>
      <style>{`
        /* =====================
           COLLAGE LAYOUT
           ===================== */
        .why-collage {
          position: relative;
          width: 100%;
          height: 540px;
          z-index: 1;
        }

        .collage-item {
          position: absolute;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;

          border: 2px solid rgba(255,255,255,0.12);
          box-shadow: 0 10px 30px rgba(0,0,0,0.45);

          transform: rotate(var(--tilt));
          animation: floatSoft var(--float-time) ease-in-out infinite;

          transition:
            transform 0.4s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.3s ease;
        }

        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Floating animation */
        @keyframes floatSoft {
          0% {
            transform: translate(0, 0) rotate(var(--tilt));
          }
          50% {
            transform: translate(6px, -14px) rotate(calc(var(--tilt) + 1.2deg));
          }
          100% {
            transform: translate(0, 0) rotate(var(--tilt));
          }
        }

        .collage-item:hover {
          transform: scale(1.12) rotate(0deg);
          z-index: 10;
          box-shadow: 0 25px 60px rgba(96,165,250,0.45);
        }

        /* =====================
           IMAGE POSITIONS (Desktop)
           ===================== */

        /* Top-left (sports) */
        .item-1 {
          width: 200px;
          height: 150px;
          top: 60px;
          left: 0px;
          --tilt: -14deg;
          --float-time: 6.5s;
          z-index: 1;
        }

        /* Top-center (campus building) */
        .item-2 {
          width: 320px;
          height: 190px;
          top: 10px;
          left: 260px;
          --tilt: -4deg;
          --float-time: 7.2s;
          z-index: 2;
        }

        /* CENTER — MAIN FOCUS (student with laptop) */
        .item-3 {
          width: 260px;
          height: 320px;
          top: 170px;
          left: 220px;
          --tilt: 4deg;
          --float-time: 6.2s;
          z-index: 5;
        }

        /* Bottom-right (library) */
        .item-4 {
          width: 200px;
          height: 220px;
          bottom: 0;
          left: 420px;
          --tilt: 6deg;
          --float-time: 7.8s;
          z-index: 2;
        }

        /* Bottom-left (graduation) */
        .item-5 {
          width: 200px;
          height: 180px;
          bottom: 0;
          left: 80px;
          --tilt: 6deg;
          --float-time: 7.5s;
          z-index: 1;
        }

        /* =====================
           JOIN BUTTON BORDER
           ===================== */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* =====================
           RESPONSIVE DESIGN
           ===================== */

        /* Tablet (max-width: 1023px) */
        @media (max-width: 1023px) {
          .why-section {
            grid-template-columns: 1fr !important;
            padding: 80px 40px !important;
            gap: 50px !important;
          }

          .why-collage {
            height: 350px;
            order: 2;
          }

          .why-content {
            order: 1;
            max-width: 100% !important;
            text-align: center;
          }

          .why-logo {
            width: 300px !important;
            height: auto !important;
            max-width: 90% !important;
            margin: 0 auto 20px !important;
          }

          .why-text {
            font-size: 16px !important;
            max-width: 500px;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          /* Adjust collage for tablet */
          .item-1 {
            width: 140px;
            height: 105px;
            top: 30px;
            left: 10px;
          }

          .item-2 {
            width: 220px;
            height: 130px;
            top: 0px;
            left: 160px;
          }

          .item-3 {
            width: 180px;
            height: 230px;
            top: 100px;
            left: 130px;
          }

          .item-4 {
            width: 140px;
            height: 160px;
            bottom: 0;
            left: 280px;
          }

          .item-5 {
            width: 140px;
            height: 130px;
            bottom: 0;
            left: 50px;
          }
        }

        /* Mobile (max-width: 767px) */
        @media (max-width: 767px) {
          .why-section {
            padding: 60px 25px !important;
            gap: 40px !important;
            min-height: auto !important;
          }

          .why-collage {
            height: 280px;
          }

          .why-logo {
            width: 240px !important;
          }

          .why-text {
            font-size: 15px !important;
            margin-bottom: 30px !important;
          }

          .why-button {
            width: 100% !important;
            max-width: 280px;
            justify-content: center;
          }

          /* Simplify collage for mobile */
          .item-1 {
            width: 100px;
            height: 75px;
            top: 20px;
            left: 5px;
          }

          .item-2 {
            width: 160px;
            height: 95px;
            top: 0px;
            left: 115px;
          }

          .item-3 {
            width: 130px;
            height: 165px;
            top: 90px;
            left: 95px;
          }

          .item-4 {
            width: 100px;
            height: 120px;
            bottom: 0;
            left: 190px;
          }

          .item-5 {
            width: 110px;
            height: 100px;
            bottom: 0;
            left: 35px;
          }
        }

        /* Extra small mobile (max-width: 480px) */
        @media (max-width: 480px) {
          .why-section {
            padding: 50px 20px !important;
          }

          .why-collage {
            height: 240px;
          }

          .why-logo {
            width: 200px !important;
          }

          .why-text {
            font-size: 14px !important;
            line-height: 1.6 !important;
          }

          /* Compact collage for small mobile */
          .item-1 {
            width: 85px;
            height: 65px;
            top: 15px;
            left: 5px;
          }

          .item-2 {
            width: 135px;
            height: 80px;
            top: 0px;
            left: 95px;
          }

          .item-3 {
            width: 110px;
            height: 140px;
            top: 75px;
            left: 80px;
          }

          .item-4 {
            width: 85px;
            height: 100px;
            bottom: 0;
            left: 160px;
          }

          .item-5 {
            width: 95px;
            height: 85px;
            bottom: 0;
            left: 30px;
          }
        }

        /* Extra extra small (max-width: 374px) */
        @media (max-width: 374px) {
          .why-section {
            padding: 40px 15px !important;
          }

          .why-collage {
            height: 200px;
          }

          .why-logo {
            width: 180px !important;
          }

          .why-text {
            font-size: 13px !important;
          }

          /* Minimal collage */
          .item-1 {
            width: 70px;
            height: 55px;
            top: 10px;
            left: 5px;
          }

          .item-2 {
            width: 110px;
            height: 65px;
            top: 0px;
            left: 80px;
          }

          .item-3 {
            width: 90px;
            height: 115px;
            top: 60px;
            left: 65px;
          }

          .item-4 {
            width: 70px;
            height: 85px;
            bottom: 0;
            left: 130px;
          }

          .item-5 {
            width: 80px;
            height: 70px;
            bottom: 0;
            left: 25px;
          }
        }
      `}</style>

      <section
        className="why-section"
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          padding: "120px 100px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          alignItems: "center",
          gap: "80px",
          color: "white",
          background: "linear-gradient(135deg, #0b0f2a, #050816)",
        }}
      >
        {/* LEFT — Image Collage */}
        <div className="why-collage">
          <div className="collage-item item-1">
            <img src="/WhyKfolio3.jpg" alt="Sports" />
          </div>

          <div className="collage-item item-2">
            <img src="/WhyKfolio5.svg" alt="Campus" />
          </div>

          <div className="collage-item item-3">
            <img src="/WhyKfolio6.svg" alt="Student with laptop" />
          </div>

          <div className="collage-item item-4">
            <img src="/WhyKfolio4.svg" alt="Library" />
          </div>

          <div className="collage-item item-5">
            <img src="/WhyKfolio7.jpg" alt="Graduation" />
          </div>
        </div>

        {/* RIGHT — Content */}
        <div className="why-content" style={{ maxWidth: "520px", zIndex: 1 }}>
          <img
            src="/WhyKfolio.svg"
            alt="Why K-Folio"
            className="why-logo"
            style={{ 
              width: "492px", 
              height: "auto",
              maxWidth: "100%",
              marginBottom: "24px",
              display: "block"
            }}
          />

          <p
            className="why-text"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              marginBottom: "40px",
            }}
          >
            College is full of moments that never make it to social media.
            K-Folio is where those moments live. Shared easily, seen by the
            right people, and free from the noise of generic platforms.
          </p>

          {/* Join Now Button with glowing animated border */}
          <button
            className="why-button"
            style={{
              position: "relative",
              display: "inline-flex",
              padding: "1px",
              borderRadius: "999px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: "-1000%",
                background:
                  "conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #393BB2 50%, #E2CBFF 100%)",
                animation: "spin 2s linear infinite",
              }}
            />

            <span
              style={{
                position: "relative",
                zIndex: 1,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "48px",
                padding: "0 22px",
                borderRadius: "999px",
                background: "#030b2d",
                color: "white",
                fontSize: "14px",
                fontWeight: 500,
                backdropFilter: "blur(24px)",
              }}
            >
              Join Now!
              <span style={{ fontSize: "16px", transform: "translateY(1px)" }}>→</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}