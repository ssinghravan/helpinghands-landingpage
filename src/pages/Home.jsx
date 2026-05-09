const Home = () => {
  const impactItems = [
    { icon: "fa-users", label: "1,500+ Lives Impacted" },
    { icon: "fa-graduation-cap", label: "6 Courses Offered" },
    { icon: "fa-certificate", label: "Certificates Provided" },
    { icon: "fa-briefcase", label: "Job Opportunities" },
  ];

  const highlights = [
    {
      icon: "fa-person-chalkboard",
      title: "Education Programs",
      desc: "Empowering students through quality education and modern learning facilities.",
      image: "/education-programs.jpg",
    },
    {
      icon: "fa-scissors",
      title: "Skill Training We Provide",
      desc: "Professional skills development, paired with certificates and job placement support.",
      image: "/free-skill-training.jpg",
    },
    {
      icon: "fa-stethoscope",
      title: "Healthcare Services",
      desc: "Providing accessible healthcare and medical checkups to rural communities.",
      image: "/healthcare-services.jpg",
    },
    {
      icon: "fa-eye",
      title: "Eye Checkup Camp",
      desc: "Providing eye checkup camps and vision care services to underprivileged communities.",
      image: "/free-eye-checkup.jpg",
    },
    {
      icon: "fa-droplet",
      title: "Blood Donation Camp",
      desc: "Organising voluntary blood donation camps to save lives and support local hospitals.",
      image: "/blood-donation-camp.jpg",
    },
  ];



  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          {/* LEFT — text content */}
          <div className="hero-content">
            <div className="hero-badge">
              <i className="fa-solid fa-star"></i> Non-Profit Organisation
            </div>
            <h1>Join Us in Creating<br />Positive Change</h1>
            <p className="hero-tagline">
              "Together, we build a bridge from need to hope!"
            </p>
            <div className="hero-btns">
              <a
                href="https://amazing-starlight-f938f9.netlify.app/"
                className="btn btn-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-heart"></i> Donate Now
              </a>
              <a href="/programs" className="btn btn-outline-green" style={{ borderColor: "rgba(255,255,255,.6)", color: "#fff" }}>
                <i className="fa-solid fa-book-open"></i> Our Programs
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">1,500+</div>
                <div className="stat-label">Lives Impacted</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">6</div>
                <div className="stat-label">Courses Offered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Fully Provided</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Active</div>
              </div>
            </div>
          </div>

          {/* RIGHT — event photo */}
          <div className="hero-image-side">
            <img src="/hero-event.jpg" alt="HelpingHands NGO Event — Lamp Lighting Ceremony" />
          </div>
        </div>
      </section>


      {/* ── IMPACT STRIP ── */}
      <div className="impact-strip">
        <div className="impact-strip-inner container">
          {impactItems.map((item, i) => (
            <div className="impact-item" key={i}>
              <i className={`fa-solid ${item.icon}`}></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MISSION / VISION ── */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Making a Difference Every Day</h2>
            <div className="divider-bar"></div>
            <p className="section-sub">
              Our non-charitable NGO offers various courses for underprivileged individuals so they
              can make a better future. Courses include stitching, mehendi, beautician, drawing,
              basic computer, and spoken English.
            </p>
          </div>

          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Our Mission</h3>
              <p>
                After the completion of the course we provide the students with certificates and a
                job opportunity. Through this initiative our only intention is to reach maximum
                underprivileged and help them to get a better lifestyle and be a support to their
                family.
              </p>
            </div>
            <div className="mv-card">
              <div className="mv-card-icon"><i className="fa-solid fa-eye"></i></div>
              <h3>Our Vision</h3>
              <p>
                Our vision is to create a world where every individual has access to basic needs,
                education, and opportunities for a better life. We strive to empower communities
                and uplift lives through sustainable initiatives. We believe in the power of
                collective action and the impact of small contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="programs-section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Our Impact Areas</h2>
            <div className="divider-bar"></div>
          </div>
          <div className="courses-grid">
            {highlights.map((h, i) => (
              <div className="course-card" key={i}>
                <div className="course-img" style={h.image ? { padding: 0, overflow: "hidden" } : {}}>
                  {h.image ? (
                    <img
                      src={h.image}
                      alt={h.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                    />
                  ) : (
                    <i className={`fa-solid ${h.icon}`}></i>
                  )}
                </div>
                <div className="course-body">
                  <h3>{h.title}</h3>
                  <p>{h.desc}</p>
                  <div className="course-footer">
                    <i className="fa-solid fa-arrow-right"></i> Learn More
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── GALLERY PREVIEW ── */}
      <section className="gallery-preview">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Gallery</span>
            <h2 className="section-title">Capturing Moments of Hope</h2>
            <div className="divider-bar"></div>
            <p className="section-sub">
              Glimpses of transformation and community impact through our programmes.
            </p>
          </div>

          <div className="gallery-grid">
            {[
              { cls: "g1", image: "/education-programs.jpg", title: "Education Programs", desc: "Empowering through quality education" },
              { cls: "g2", image: "/healthcare-services.jpg", title: "Healthcare Services", desc: "Medical checkups for rural communities" },
              { cls: "g3", image: "/women-empowerment.jpg", title: "Women Empowerment", desc: "Skill development workshops" },
              { cls: "g4", image: "/sports-activities.jpg", title: "Sports Activities", desc: "Promoting healthy lifestyles" },
              { cls: "g5", image: "/community-development.jpg", title: "Community Development", desc: "Building stronger communities" },
              { cls: "g6", image: "/literacy-program-event.jpg", title: "Literacy Program", desc: "Community education & cultural events" },
            ].map((item, i) => (
              <div className={`gallery-item ${item.cls}`} key={i}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                ) : (
                  <div className="gallery-thumb">{item.icon}</div>
                )}
                <div className="gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a href="/gallery" className="btn btn-outline-green">
              <i className="fa-solid fa-images"></i> View Full Gallery
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
