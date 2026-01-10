interface Props {
  activeSection?: string;
}

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
      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 768px) {
          footer {
            grid-template-columns: 1fr !important;
            gap: 40px;
            padding: 40px 24px !important;
          }

          /* Explore + Resources → two columns */
          footer > div:nth-child(2) {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }

          /* Illustration centered and moved below links naturally */
          footer > div:nth-child(3) {
            justify-content: center !important;
          }

          footer img {
            width: 100% !important;
            max-width: 360px;
            margin: 0 auto;
            display: block;
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
