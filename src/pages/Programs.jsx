const courses = [
  {
    icon: "fa-scissors",
    tag: "Handicraft",
    title: "Stitching & Sewing (Silai)",
    desc: "Master the art of tailoring, garment construction, and modern fashion design from absolute basics to advanced levels. ",
    duration: "3 months",
    seats: "20 seats per batch",
    emoji: "✂️",
    image: "/stitching-sewing.jpg",
  },
  {
    icon: "fa-hand-sparkles",
    tag: "Handicraft",
    title: "Mehendi Art Training",
    desc: "Learn professional henna art, traditional Indian designs, and modern bridal mehendi. Turn your creativity into a viable home-based business.",
    duration: "2 months",
    seats: "15 seats per batch",
    emoji: "🌸",
    image: "/mehendi-art.jpg",
  },
  {
    icon: "fa-spa",
    tag: "Beauty & Wellness",
    title: "Beautician Course",
    desc: "Comprehensive beauty, makeup, skincare, and wellness training to kickstart your career in the growing beauty industry. Practice sessions included.",
    duration: "3 months",
    seats: "12 seats per batch",
    emoji: "💅",
    image: "/beautician-course.jpg",
  },
  {
    icon: "fa-palette",
    tag: "Creative Arts",
    title: "Drawing & Art",
    desc: "Enhance artistic skills and learn various drawing techniques from basic sketches to fine arts, watercolours, and rangoli design, opening doors to creative employment.",
    duration: "2 months",
    seats: "18 seats per batch",
    emoji: "🎨",
    image: "/drawing-art.jpg",
  },
  {
    icon: "fa-laptop",
    tag: "Digital Skills",
    title: "Basic Computer Course",
    desc: "Essential digital literacy covering MS Office (Word, Excel, PowerPoint), internet browsing, email, and basic data entry skills required in today's job market.",
    duration: "2 months",
    seats: "20 seats per batch",
    emoji: "💻",
    image: "/computer-course.jpg",
  },
  {
    icon: "fa-comments",
    tag: "Communication",
    title: "Spoken English Course",
    desc: "Improve communication skills and build confidence to tackle job interviews, workplace interactions, and professional environments. Grammar and pronunciation practice included.",
    duration: "3 months",
    seats: "25 seats per batch",
    emoji: "🗣️",
    image: "/spoken-english.jpg",
  },
];

const Programs = () => {
  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero hero-programs">
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          <div className="hero-content-box">
            <h1>Skill Development Courses We Offer</h1>
            <p>
              After the completion of the course we provide the students with certificates and a job
              opportunity. Fully provided by HelpingHands NGO.
            </p>
          </div>
        </div>
      </div>

      <section className="programs-page">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Our Offerings</span>
            <h2 className="section-title">6 Courses, Offered by Us</h2>
            <div className="divider-bar"></div>
            <p className="section-sub">
              Choose a course that suits you and register today. All materials provided by
              HelpingHands at no charge.
            </p>
          </div>

          <div className="courses-grid">
            {courses.map((c, i) => (
              <div className="course-card" key={i}>
                <div className="course-img" style={c.image ? { padding: 0, overflow: "hidden" } : {}}>
                  {c.image ? (
                    <img
                      src={c.image}
                      alt={c.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                    />
                  ) : (
                    <span style={{ fontSize: "3.5rem" }}>{c.emoji}</span>
                  )}
                </div>
                <div className="course-body">
                  <span className="course-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div style={{ display: "flex", gap: "16px", marginBottom: "16px", flexWrap: "wrap" }}>
                    <span style={{ fontSize: ".8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "5px" }}>
                      <i className="fa-solid fa-clock"></i> {c.duration}
                    </span>
                    <span style={{ fontSize: ".8rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "5px" }}>
                      <i className="fa-solid fa-users"></i> {c.seats}
                    </span>
                  </div>
                  <div className="course-footer">
                    <i className="fa-solid fa-certificate"></i> Certificate on Completion
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "56px", padding: "48px", background: "var(--hero-grad)", borderRadius: "var(--radius-lg)" }}>
            <h3 style={{ color: "#fff", fontSize: "1.8rem", marginBottom: "12px" }}>Ready to Enrol?</h3>
            <p style={{ color: "rgba(255,255,255,.8)", marginBottom: "28px" }}>
              All courses are offered and fully supported by us. Register via our website or visit our office.
            </p>
            <a href="/contact" className="btn btn-white">
              <i className="fa-solid fa-pen-to-square"></i> Register Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
