import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [gridColumns, setGridColumns] = useState("repeat(3, 1fr)");
  const [gridGap, setGridGap] = useState("32px");
  const [sectionPadding, setSectionPadding] = useState("100px 60px");
  const [headingSize, setHeadingSize] = useState("48px");
  const [headingMargin, setHeadingMargin] = useState("70px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width <= 767) {
        setGridColumns("1fr");
        setGridGap("24px");
        setSectionPadding("60px 20px");
        setHeadingSize("32px");
        setHeadingMargin("40px");
      } else if (width <= 1199) {
        setGridColumns("repeat(2, 1fr)");
        setGridGap("28px");
        setSectionPadding("80px 40px");
        setHeadingSize("40px");
        setHeadingMargin("50px");
      } else {
        setGridColumns("repeat(3, 1fr)");
        setGridGap("32px");
        setSectionPadding("100px 60px");
        setHeadingSize("48px");
        setHeadingMargin("70px");
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const testimonials = [
    {
      text: "I found new friends from other branches through this!!",
      name: "Priya Sharma",
      uni: "KIIT University",
    },
    {
      text: "The Social aspect works well because everyone shares the same campus context",
      name: "Ritvik Kumar",
      uni: "KIIT University",
    },
    {
      text: "From fest updates to everyday campus life, K-Folio captures the real student experience.",
      name: "Ananya Mishra",
      uni: "KIIT University",
    },
  ];

  return (
    <div 
      data-section="testimonials"
      style={{
        width: "100%",
        padding: sectionPadding,
        boxSizing: "border-box",
        position: "relative",
        background: "transparent",
        textAlign: "center"
      }}
    >
      <h2 
        style={{
          color: "white",
          fontSize: headingSize,
          fontWeight: 700,
          marginBottom: headingMargin,
          textAlign: "center",
          letterSpacing: "-0.5px",
          fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        }}
      >
        What Students Say About K-Folio
      </h2>
      
      <div 
        style={{
          display: "grid",
          gridTemplateColumns: gridColumns,
          gap: gridGap,
          maxWidth: "1300px",
          margin: "0 auto",
          width: "100%"
        }}
      >
        {testimonials.map((t, index) => (
          <div 
            key={index}
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "24px",
              padding: "40px 32px",
              color: "white",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              textAlign: "left",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow = "0 12px 48px rgba(236, 72, 153, 0.15)";
              e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.4)";
              e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
            }}
          >
            {/* Subtle top border gradient */}
            <div 
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: "linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)"
              }}
            />
            
            {/* Quote icon */}
            <div 
              style={{
                fontSize: "56px",
                lineHeight: 1,
                color: "rgba(148, 163, 184, 0.25)",
                marginBottom: "16px",
                fontFamily: "Georgia, serif",
                fontWeight: 700
              }}
            >
              &ldquo;&ldquo;
            </div>
            
            {/* Testimonial text */}
            <p 
              style={{
                fontSize: "17px",
                margin: "0 0 28px",
                color: "#e2e8f0",
                lineHeight: 1.7,
                fontWeight: 400,
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                flex: 1
              }}
            >
              {t.text}
            </p>
            
            {/* Author info */}
            <div 
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(148, 163, 184, 0.15)"
              }}
            >
              <span 
                style={{
                  display: "block",
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "6px",
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}
              >
                --{t.name}
              </span>
              <span 
                style={{
                  display: "block",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "rgba(148, 163, 184, 0.7)",
                  fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                }}
              >
                {t.uni}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}