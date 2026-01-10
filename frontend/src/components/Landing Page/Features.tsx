import { useState, useEffect } from 'react';

export default function Features() {
  const [gridColumns, setGridColumns] = useState("repeat(4, 1fr)");
  const [gridGap, setGridGap] = useState("28px");
  const [sectionPadding, setSectionPadding] = useState("100px 60px");
  const [headingSize, setHeadingSize] = useState("48px");
  const [headingMargin, setHeadingMargin] = useState("70px");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width <= 767) {
        setGridColumns("1fr");
        setGridGap("20px");
        setSectionPadding("60px 20px");
        setHeadingSize("32px");
        setHeadingMargin("40px");
      } else if (width <= 1199) {
        setGridColumns("repeat(2, 1fr)");
        setGridGap("24px");
        setSectionPadding("80px 40px");
        setHeadingSize("40px");
        setHeadingMargin("50px");
      } else {
        setGridColumns("repeat(4, 1fr)");
        setGridGap("28px");
        setSectionPadding("100px 60px");
        setHeadingSize("48px");
        setHeadingMargin("70px");
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const features = [
    {
      title: "Share posts and stories",
      desc: "Post photos, stories and updates from around the campus",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      ),
      iconBg: "#6366F1"
    },
    {
      title: "Follow & Connect with others",
      desc: "Engage with fellow students. Follow, chat and interact",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <line x1="19" y1="8" x2="19" y2="14"/>
          <line x1="22" y1="11" x2="16" y2="11"/>
        </svg>
      ),
      iconBg: "#6366F1"
    },
    {
      title: "Discover Campus Moments",
      desc: "Stay updated with latest events, fests and news",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      iconBg: "#6366F1"
    },
    {
      title: "Most Influential on Campus",
      desc: "Highlights influential students based on engagement and followers",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      iconBg: "#6366F1"
    },
  ];

  return (
    <div 
      data-section="features"
      style={{
        width: "100%",
        padding: sectionPadding,
        boxSizing: "border-box",
        position: "relative",
        background: "transparent"
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
        Features built for you
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
        {features.map((f, index) => (
          <div 
            key={index}
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
              borderRadius: "24px",
              padding: "40px 24px",
              color: "white",
              border: "1px solid rgba(148, 163, 184, 0.1)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
              transition: "all 0.3s ease",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              minHeight: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              cursor: "pointer"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 12px 48px rgba(139, 92, 246, 0.2)";
              e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
              const iconWrapper = e.currentTarget.querySelector('.icon-wrapper-' + index) as HTMLElement;
              if (iconWrapper) {
                iconWrapper.style.transform = "scale(1.1) rotateZ(5deg)";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.4)";
              e.currentTarget.style.borderColor = "rgba(148, 163, 184, 0.1)";
              const iconWrapper = e.currentTarget.querySelector('.icon-wrapper-' + index) as HTMLElement;
              if (iconWrapper) {
                iconWrapper.style.transform = "scale(1) rotateZ(0deg)";
              }
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
            
            <div 
              className={'icon-wrapper-' + index}
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: f.iconBg,
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                marginBottom: "24px",
                flexShrink: 0,
                transition: "transform 0.3s ease"
              }}
            >
              <span style={{ 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                color: "white",
                filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))"
              }}>
                {f.icon}
              </span>
            </div>
            
            <h3 
              style={{
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "12px",
                color: "white",
                lineHeight: 1.3,
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              }}
            >
              {f.title}
            </h3>
            
            <p 
              style={{
                fontSize: "15px",
                opacity: 0.7,
                lineHeight: 1.6,
                color: "#cbd5e1",
                margin: 0,
                fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
              }}
            >
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}