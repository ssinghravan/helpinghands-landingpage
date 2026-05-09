const About = () => {
  const values = [
    { icon: "fa-hands-helping", title: "Community First", desc: "Every decision we take centres around the well-being of our community." },
    { icon: "fa-shield-halved", title: "Integrity", desc: "We operate with transparency and accountability in all our activities." },
    { icon: "fa-lightbulb", title: "Innovation", desc: "We constantly seek new, effective ways to deliver our programmes." },
    { icon: "fa-people-group", title: "Inclusivity", desc: "We believe every individual deserves equal access to opportunity." },
  ];

  const team = [
    { emoji: "👩‍💼", name: "Dr. Anjali Desai", role: "Founder & President", bio: "Visionary leader with 15+ years in community development and social empowerment." },
    { emoji: "👨‍💻", name: "Rajan Singh", role: "Executive Director", bio: "Expert in NGO operations, resource mobilisation, and strategic partnerships." },
    { emoji: "👩‍🏫", name: "Priya Sharma", role: "Skill Training Head", bio: "Dedicated educator driving the courses we offer for underprivileged women and youth." },
    { emoji: "👨‍⚕️", name: "Dr. Vikram Nair", role: "Healthcare Co-ordinator", bio: "Leads our medical outreach camps and community health initiatives." },
  ];

  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <h1>About HelpingHands NGO</h1>
        <p>Learn who we are, what drives us, and the people who make it all possible.</p>
      </div>

      {/* ── INTRO ── */}
      <section className="about-intro">
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-visual" style={{ padding: 0, overflow: "hidden" }}>
              <img
                src="/who-we-are.jpg"
                alt="Who We Are - HelpingHands NGO"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", borderRadius: "var(--radius-lg)" }}
              />
            </div>
            <div className="about-text">
              <span className="section-label">Our Story</span>
              <h2>Who We Are</h2>
              <p>
                HelpingHands NGO is a non-profit organisation dedicated to uplifting underprivileged
                communities in India. We offer skill development courses — stitching, mehendi,
                beautician training, drawing, basic computer, and spoken English — so every
                participant can build a sustainable livelihood.
              </p>
              <p>
                After the completion of a course, students receive a certificate and access to job
                opportunities. Our only intention is to reach the maximum number of underprivileged
                individuals and help them achieve a better lifestyle and support their families.
              </p>
              <a
                href="https://amazing-starlight-f938f9.netlify.app/"
                className="btn btn-green"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-heart"></i> Support Our Mission
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION + VISION ── */}
      <section className="mission-section" style={{ background: "var(--green-pale)", paddingTop: "70px", paddingBottom: "70px" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Purpose</span>
            <h2 className="section-title">Mission &amp; Vision</h2>
            <div className="divider-bar"></div>
          </div>
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>
                To offer various courses for underprivileged individuals so they can build a
                better future. We pair every course with a certificate and provide job opportunities
                on completion. We strive to reach the maximum number of people who need our
                support.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>
                A world where every individual has access to basic needs, education, and
                opportunities for a better life. We strive to empower communities through
                sustainable initiatives and believe in the power of collective action and the
                impact of small contributions. Together, we can build a brighter future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "80px 0", background: "var(--white)" }}>
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">What Guides Us</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider-bar"></div>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <i className={`fa-solid ${v.icon}`}></i>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section-wrap">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">The People Behind It</span>
            <h2 className="section-title">Meet Our Team</h2>
            <div className="divider-bar"></div>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="role">{m.role}</div>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
