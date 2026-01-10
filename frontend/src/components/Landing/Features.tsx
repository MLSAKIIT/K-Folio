export default function Features() {
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
      iconBg: "#6366F1" // Indigo
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
      iconBg: "#6366F1" // Indigo
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
      iconBg: "#6366F1" // Indigo
    },
    {
      title: "Most Influential on Campus",
      desc: "Highlights influential students based on engagement and followers",
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      iconBg: "#6366F1" // Indigo
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-heading">Features built for you</h2>
      <div className="features-grid">
        {features.map((f, index) => (
          <div key={index} className="feature-card">
            <div 
              className="feature-icon-wrapper" 
              style={{ backgroundColor: f.iconBg }}
            >
              <span className="feature-icon">{f.icon}</span>
            </div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}