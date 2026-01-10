import { useEffect, useRef, useState } from "react";

export default function WhyKfolio() {
  const [rotateQ, setRotateQ] = useState(false);
  const questionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!questionRef.current) return;

      const rect = questionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.7;

      if (rect.top < triggerPoint) {
        setRotateQ(true);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .why-collage {
          position: relative;
          width: 460px;
          height: 460px;
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
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                      box-shadow 0.3s ease;
        }

        .collage-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        @keyframes floatSoft {
          0% { transform: translate(0,0) rotate(var(--tilt)); }
          50% { transform: translate(6px,-14px) rotate(calc(var(--tilt) + 1.2deg)); }
          100% { transform: translate(0,0) rotate(var(--tilt)); }
        }

        .collage-item:hover {
          transform: scale(1.12) rotate(0deg);
          z-index: 10;
          box-shadow: 0 25px 60px rgba(96,165,250,0.45);
        }

        /* Item positions */
        .item-1 {
          width: 130px;
          height: 130px;
          top: 40px;
          left: -15px;
          --tilt: 17deg;
          --float-time: 6.5s;
        }

        .item-2 {
          width: 300px;
          height: 170px;
          top: 0;
          left: 200px;
          --tilt: 0deg;
          --float-time: 7.2s;
        }

        .item-3 {
          width: 260px;
          height: 330px;
          top: 110px;
          left: 120px;
          --tilt: 0deg;
          --float-time: 6.2s;
          z-index: 5;
        }

        .item-4 {
          width: 190px;
          height: 210px;
          top: 330px;
          left: 260px;
          --tilt: 0deg;
          --float-time: 7.8s;
        }

        .item-5 {
          width: 130px;
          height: 130px;
          bottom: -30px;
          left: 10px;
          --tilt: -9deg;
          --float-time: 7.5s;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* =====================
          RESPONSIVE OVERRIDES
          ===================== */

        /* Tablet */
        @media (max-width: 1024px) {
          section {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
            padding: 80px 40px !important;
            text-align: center;
          }

          .why-collage {
            margin: 0 auto;
            transform: scale(0.9);
          }

          .grid.grid-cols-[auto_90px] {
            justify-content: center;
          }

          .text-[110px] {
            font-size: 84px !important;
          }

          .text-[95px] {
            font-size: 72px !important;
          }

          .text-[250px] {
            font-size: 180px !important;
            margin-left: 0 !important;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          section {
            padding: 60px 20px !important;
            gap: 50px !important;
          }

          .why-collage {
            width: 320px;
            height: 320px;
            transform: scale(0.85);
          }

          .text-[110px] {
            font-size: 56px !important;
          }

          .text-[95px] {
            font-size: 48px !important;
          }

          .text-[250px] {
            font-size: 120px !important;
          }

          p {
            font-size: 16px !important;
          }
        }
        `}</style>


      <section
        style={{
          minHeight: "100vh",
          padding: "120px 100px",
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: "80px",
          alignItems: "center",
          color: "white",
        }}
      >
        {/* LEFT — COLLAGE */}
        <div className="why-collage">
          <div className="collage-item item-1">
            <img src="/WhyKfolio3.jpg" />
          </div>

          <div className="collage-item item-2">
            <img src="/WhyKfolio5.svg" />
          </div>

          <div className="collage-item item-3">
            <img src="/WhyKfolio6.svg" />
          </div>

          <div className="collage-item item-4">
            <img src="/WhyKfolio4.svg" />
          </div>

          <div className="collage-item item-5">
            <img src="/WhyKfolio7.jpg" />
          </div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-[520px]">
          {/* Heading */}
          <div className="grid grid-cols-[auto_90px] gap-x-4 items-center leading-none mb-6">
            <div>
              <div className="text-[110px] font-extrabold tracking-tight mb-[10px]">
                Why
              </div>
              <div className="text-[95px] font-extrabold text-transparent [-webkit-text-stroke:4px_white]">
                K-Folio
              </div>
            </div>

            <div
              ref={questionRef}
              className={`text-[250px] ml-[-50px] font-bold transition-transform duration-900 ${
                rotateQ ? "rotate-[360deg]" : "rotate-0"
              }`}
            >
              ?
            </div>
          </div>

          <p className="text-[18px] text-white/75 leading-relaxed mb-10">
            College is full of moments that never make it to social media.
            K-Folio is where those moments live. Shared easily, seen by the
            right people, and free from the noise of generic platforms.
          </p>

          <button
            style={{
              position: "relative",
              display: "inline-flex",
              padding: "1px",
              borderRadius: "999px",
              overflow: "hidden",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: "-1000%",
                background:
                  "conic-gradient(from 90deg at 50% 50%, #E2CBFF, #393BB2, #E2CBFF)",
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
              }}
            >
              Join Now!
              <span>→</span>
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
