export default function Testimonials() {
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
    <section className="testimonials-section">
      {/* CHANGE HERE: Added style={{ textAlign: "left" }} to move heading to left */}
      <h2 className="section-title">What Students Say About K-Folio</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="quote-icon">&ldquo;&ldquo;</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="author">
              <span className="author-name">--{t.name}</span>
              <span className="author-uni">{t.uni}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}