import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* FIXED wrapper */}
      <div className="w-full flex justify-center pt-4 fixed top-0 left-0 z-50">
        <nav
          className="
            w-[90%] max-w-6xl
            flex items-center justify-between
            px-6 py-3
            rounded-full
            bg-[rgb(6,10,30)]
            border border-[rgba(59,130,246,0.6)]
            shadow-[0_0_20px_rgba(59,130,246,0.25)]
          "
          style={{
            animation:
              "fadeDown 0.6s ease-out, navFloat 6s ease-in-out infinite",
          }}
        >
          {/* Logo */}
          <Link to="/" className="relative text-white font-semibold text-lg">
            K-Folio
            <span
              style={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "999px",
                background:
                  "radial-gradient(circle, rgba(59,130,246,0.35), transparent 70%)",
                filter: "blur(8px)",
                zIndex: -1,
                animation: "logoPulse 4s ease-in-out infinite",
              }}
            />
          </Link>

          {/* Links */}
          <ul className="hidden md:flex gap-8 text-sm text-gray-300">
            <li>
              <Link to="/home" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              About Us
            </li>
            <li className="hover:text-white cursor-pointer transition-colors">
              Contact
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4 text-sm">
            <Link to="/signin" className="text-gray-300 hover:text-white">
              Log in
            </Link>

            {/* Join Now — CORRECT glowing border */}
            <Link to="/signin">
              <button
                style={{
                  position: "relative",
                  display: "inline-flex",
                  height: "40px",
                  padding: "1px",
                  borderRadius: "999px",
                  overflow: "hidden",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {/* Rotating border (NO blob bug) */}
                <span
                  style={{
                    position: "absolute",
                    inset: "-35%",
                    background:
                      "conic-gradient(from 90deg, #E2CBFF, #393BB2, #E2CBFF)",
                    animation: "spin 2.2s linear infinite",
                    filter: "blur(1.5px)",
                  }}
                />

                {/* Inner */}
                <span
                  style={{
                    position: "relative",
                    zIndex: 1,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    padding: "0 18px",
                    borderRadius: "999px",
                    background: "#01071f",
                    color: "white",
                    fontSize: "13px",
                    fontWeight: 500,
                    backdropFilter: "blur(24px)",
                  }}
                >
                  Join Now
                </span>
              </button>
            </Link>
          </div>
        </nav>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes navFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes logoPulse {
          0%,100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
