export default function Frames() {
  const tags = [
    {
      text: "#STUDENTCOMMUNITY",
      font: "Montserrat",
      weight: 800,
      size: 46,
      letterSpacing: "0.08em",
      opacity: 1
    },
    {
      text: "#I❤️Kfolio",
      font: "Montserrat",
      weight: 700,
      size: 38,
      letterSpacing: "0.02em",
      opacity: 1
    },
    {
      text: "#OurCampus",
      font: "Montserrat",
      weight: 400,
      size: 28,
      letterSpacing: "0.02em",
      opacity: 0.9
    },
    {
      text: "#SayItYourWay",
      font: "Montserrat",
      weight: 400,
      size: 28,
      letterSpacing: "0.02em",
      opacity: 0.9
    },
    {
      text: "#AfterHours",
      font: "Montserrat",
      weight: 400,
      size: 28,
      letterSpacing: "0.2em",
      opacity: 0.6,
      transform: "uppercase"
    },
    {
      text: "#GLOWUP",
      font: "Montserrat",
      weight: 300,
      size: 24,
      letterSpacing: "0.15em",
      opacity: 0.5
    },
    {
      text: "#maincharacter",
      font: "Montserrat",
      weight: 300,
      size: 24,
      letterSpacing: "0.05em",
      opacity: 0.6,
      outline: true
    }
  ];

  return (
    <section className="frames-section">
      <div className="frames-track">
        <div className="frames-content">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`hashtag-inline ${tag.outline ? 'hashtag-outline' : ''}`}
              style={{
                fontFamily: tag.font,
                fontWeight: tag.weight,
                fontSize: `${tag.size}px`,
                letterSpacing: tag.letterSpacing,
                opacity: tag.opacity,
                textTransform: tag.transform || 'none'
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="frames-content">
          {tags.map((tag, index) => (
            <span
              key={`dup-${index}`}
              className={`hashtag-inline ${tag.outline ? 'hashtag-outline' : ''}`}
              style={{
                fontFamily: tag.font,
                fontWeight: tag.weight,
                fontSize: `${tag.size}px`,
                letterSpacing: tag.letterSpacing,
                opacity: tag.opacity,
                textTransform: tag.transform || 'none'
              }}
            >
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}