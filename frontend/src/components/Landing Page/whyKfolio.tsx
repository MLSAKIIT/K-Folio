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
          width: 100%;
          max-width: 460px;
          aspect-ratio: 1/1;
          margin: 0 auto;
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

        /* Desktop positions */
        .item-1 { width: 130px; height: 130px; top: 40px; left: -15px; --tilt: 17deg; --float-time: 6.5s; }
        .item-2 { width: 300px; height: 170px; top: 0; left: 200px; --tilt: 0deg; --float-time: 7.2s; }
        .item-3 { width: 260px; height: 330px; top: 110px; left: 120px; --tilt: 0deg; --float-time: 6.2s; z-index: 5; }
        .item-4 { width: 190px; height: 210px; top: 330px; left: 260px; --tilt: 0deg; --float-time: 7.8s; }
        .item-5 { width: 130px; height: 130px; bottom: -30px; left: 10px; --tilt: -9deg; --float-time: 7.5s; }

        /* Tablet */
        @media (max-width: 1024px) {
          .why-collage { max-width: 380px; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .why-collage { max-width: 300px; }

          .item-1 { width: 90px; height: 90px; }
          .item-2 { width: 220px; height: 120px; left: 100px; }
          .item-3 { width: 200px; height: 260px; left: 60px; top: 80px; }
          .item-4 { width: 140px; height: 160px; left: 160px; top: 230px; }
          .item-5 { width: 90px; height: 90px; bottom: -10px; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <section className="min-h-screen py-24 px-6 lg:px-20 grid lg:grid-cols-2 gap-20 items-center text-white max-w-7xl mx-auto overflow-hidden">

        {/* LEFT — COLLAGE */}
        <div className="why-collage">
          <div className="collage-item item-1"><img src="/WhyKfolio3.jpg" /></div>
          <div className="collage-item item-2"><img src="/WhyKfolio5.svg" /></div>
          <div className="collage-item item-3"><img src="/WhyKfolio6.svg" /></div>
          <div className="collage-item item-4"><img src="/WhyKfolio4.svg" /></div>
          <div className="collage-item item-5"><img src="/WhyKfolio7.jpg" /></div>
        </div>

        {/* RIGHT — CONTENT */}
        <div className="max-w-xl mx-auto text-center lg:text-left">

          {/* Heading */}
          <div className="flex items-end justify-center lg:justify-start gap-4 mb-8">
            <div>
              <div className="text-[56px] sm:text-[80px] lg:text-[110px] font-extrabold leading-none">
                Why
              </div>
              <div className="text-[48px] sm:text-[70px] lg:text-[95px] font-extrabold text-transparent [-webkit-text-stroke:3px_white]">
                K-Folio
              </div>
            </div>

            <div
              ref={questionRef}
              className={`text-[120px] sm:text-[180px] lg:text-[250px] font-bold transition-transform duration-700 ${
                rotateQ ? "rotate-[360deg]" : "rotate-0"
              }`}
            >
              ?
            </div>
          </div>

          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-10">
            College is full of moments that never make it to social media.
            K-Folio is where those moments live. Shared easily, seen by the
            right people, and free from the noise of generic platforms.
          </p>

          <button className="relative inline-flex p-[1px] rounded-full overflow-hidden">
            <span
              className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
              style={{
                background:
                  "conic-gradient(from 90deg at 50% 50%, #E2CBFF, #393BB2, #E2CBFF)",
              }}
            />
            <span className="relative z-10 inline-flex items-center gap-2 h-12 px-8 rounded-full bg-[#030b2d] text-white text-sm font-medium">
              Join Now! →
            </span>
          </button>
        </div>
      </section>
    </>
  );
}
