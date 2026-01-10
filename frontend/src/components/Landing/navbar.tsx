import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Sticky container */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-50 pt-4">
        <nav
          className="
            w-[90%] max-w-6xl
            flex items-center justify-between
            px-6 py-3
            rounded-full
          "
          style={{
            /* ✅ Proper glassmorphism */
            backdropFilter: "blur(10px) saturate(140%)",
            WebkitBackdropFilter: "blur(10px) saturate(140%)",

            background: `
              linear-gradient(
                180deg,
                rgba(20,30,80,0.65),
                rgba(10,15,45,0.55)
              )
            `,

            border: "1px solid rgba(120,160,255,0.25)",

            boxShadow: `
              0 8px 30px rgba(0,0,0,0.35),
              inset 0 1px 0 rgba(255,255,255,0.15)
            `,

            animation:
              "fadeDown 0.6s ease-out, navFloat 6s ease-in-out infinite",
          }}
        >
          {/* Logo */}
          <Link to="/" className="text-white font-semibold text-lg">
            K-Folio
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
            <Link
              to="/signin"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>

            {/* 🔥 Join Now button (same logic as Hero / WhyKfolio) */}
            <Link to="/signin">
              <button
                style={{
                  position: "relative",
                  display: "inline-flex",
                  height: "38px",
                  padding: "1px",
                  borderRadius: "999px",
                  overflow: "hidden",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {/* Animated glowing border */}
                <span
                  style={{
                    position: "absolute",
                    inset: "-1000%",
                    background:
                      "conic-gradient(from 90deg at 50% 50%, #E2CBFF 0%, #5b7cff 50%, #E2CBFF 100%)",
                    animation: "spin 2.2s linear infinite",
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
                    height: "100%",
                    padding: "0 18px",
                    borderRadius: "999px",
                    background: "#030b2d",
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
      `}</style>
    </>
  );
};

export default Navbar;