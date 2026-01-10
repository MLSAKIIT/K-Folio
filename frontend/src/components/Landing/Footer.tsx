interface Props {
  activeSection?: string;
}

// Footer
// Site footer for the landing page. Uses inline style objects so styles are
// colocated with markup; receives `activeSection` purely for display (and
// previously for theming). Keep visual logic here small so it stays portable.
export default function Footer({ activeSection }: Props) {
  const footerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1.5fr",
    padding: "30px 50px",
    background: "black",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    color: "white",
    alignItems: "start",
  };

  const logoStyle: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 600,
  };

  const linksStyle: React.CSSProperties = {
    display: "flex",
    gap: "150px",
  };

  const h4Style: React.CSSProperties = {
    marginBottom: 16,
    fontSize: 16,
    opacity: 0.8,
  };

  const linkStyle: React.CSSProperties = {
    display: "block",
    marginBottom: 10,
    fontSize: 14,
    opacity: 0.7,
    color: "inherit",
    textDecoration: "none",
    cursor: "pointer",
  };

  const visualStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  };

  return (
    <>
      {/* Responsive CSS */}
      <style>{`
        /* Desktop - default styles above */
        
        /* Tablet (max-width: 1023px) */
        @media (max-width: 1023px) {
          footer[data-active] {
            grid-template-columns: 1fr !important;
            gap: 40px;
            padding: 40px 30px !important;
          }
          
          footer[data-active] > div:first-child {
            text-align: center;
            font-size: 22px !important;
          }
          
          footer[data-active] > div:nth-child(2) {
            gap: 60px !important;
            justify-content: center;
          }
          
          footer[data-active] > div:last-child {
            justify-content: center !important;
          }
          
          footer[data-active] img {
            width: 400px !important;
          }
        }
        
        /* Mobile (max-width: 767px) */
        @media (max-width: 767px) {
          footer[data-active] {
            padding: 30px 20px !important;
            gap: 30px;
          }
          
          footer[data-active] > div:first-child {
            font-size: 20px !important;
          }
          
          footer[data-active] > div:nth-child(2) {
            flex-direction: column !important;
            gap: 30px !important;
            text-align: center;
          }
          
          footer[data-active] > div:nth-child(2) h4 {
            font-size: 15px !important;
          }
          
          footer[data-active] > div:nth-child(2) a {
            font-size: 13px !important;
          }
          
          footer[data-active] img {
            width: 300px !important;
          }
        }
        
        /* Extra small mobile (max-width: 480px) */
        @media (max-width: 480px) {
          footer[data-active] {
            padding: 25px 15px !important;
          }
          
          footer[data-active] > div:first-child {
            font-size: 18px !important;
          }
          
          footer[data-active] img {
            width: 250px !important;
          }
        }
      `}</style>

      <footer style={footerStyle} data-active={activeSection ?? "hero"}>
        {/* Logo */}
        <div style={logoStyle}>K-Folio</div>

        {/* Links */}
        <div style={linksStyle}>
          <div>
            <h4 style={h4Style}>Explore</h4>
            <a style={linkStyle}>Home</a>
            <a style={linkStyle}>Stories</a>
            <a style={linkStyle}>Profile</a>
            <a style={linkStyle}>Create Post</a>
            <a style={linkStyle}>Search</a>
            <a style={linkStyle}>Messages</a>
          </div>

          <div>
            <h4 style={h4Style}>Resources</h4>
            <a style={linkStyle}>About K-Folio</a>
            <a style={linkStyle}>Contact Us</a>
            <a style={linkStyle}>Privacy and Terms</a>
          </div>
        </div>

        {/* Visual / Illustration */}
        <div style={visualStyle}>
          <img
            src="/footer.svg"
            alt="Footer illustration"
            style={{
              width: "500px",
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
      </footer>
    </>
  );
}

