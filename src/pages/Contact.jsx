import { useState, useEffect, useRef } from "react";

const LAT = 22.542556;
const LNG = 88.3828245;

const GMAPS_URL = "https://www.google.com/maps/place/Helping+Hands/@22.542556,88.3828245,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e27db50691:0xcfb17f30da50c04c!8m2!3d22.542556!4d88.3828245!16s%2Fg%2F11fd4lnq0d?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D";

const MapEmbed = () => {
  const mapRef = useRef(null);
  const instanceRef = useRef(null);

  useEffect(() => {
    if (!window.L || instanceRef.current) return;
    const L = window.L;
    const map = L.map(mapRef.current, { zoomControl: true, scrollWheelZoom: false }).setView([LAT, LNG], 17);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
    const icon = L.icon({
      iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
      shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34],
    });
    L.marker([LAT, LNG], { icon })
      .addTo(map)
      .bindPopup("<b>HelpingHands NGO</b><br>7A Mahendra Roy Lane,<br>Gobinda Khatick Rd, Topsia,<br>Kolkata, WB 700046<br><a href='" + GMAPS_URL + "' target='_blank' style='color:#6c3fc5;font-weight:600;'>Open in Google Maps ↗</a>")
      .openPopup();
    // Click anywhere on map → open Google Maps in new tab
    map.on("click", () => window.open(GMAPS_URL, "_blank"));
    // Change cursor to pointer to hint clickability
    mapRef.current.style.cursor = "pointer";
    instanceRef.current = map;
  }, []);

  return (
    <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
      <div
        ref={mapRef}
        style={{ width: "100%", height: "420px" }}
        title="Click to open in Google Maps"
      />
      <a
        href={GMAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
          padding: "14px", background: "var(--hero-grad)", color: "#fff",
          fontWeight: 600, fontSize: "0.95rem", textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseOver={e => e.currentTarget.style.opacity = "0.85"}
        onMouseOut={e => e.currentTarget.style.opacity = "1"}
      >
        <i className="fa-solid fa-location-dot"></i>
        Open in Google Maps — 7A Mahendra Roy Lane, Topsia, Kolkata 700046
        <i className="fa-solid fa-arrow-up-right-from-square"></i>
      </a>
    </div>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    
    // Extract form data
    const formData = new FormData(e.target);
    
    // Construct a beautifully formatted object for the email layout
    const object = {
      access_key: "75597644-a565-4828-a121-2a57e97bb2a9",
      subject: "New Website Submission - HelpingHands",
      from_name: "HelpingHands Contact Form",
      replyto: formData.get("email"), // Enables direct replies from your inbox
      "Full Name": formData.get("name"),
      "Email Address": formData.get("email"),
      "Phone Number": formData.get("phone") || "Not provided",
      "Inquiry Subject": formData.get("subject"),
      "User Message": formData.get("message")
    };

    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 6000);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <h1>Contact Us</h1>
        <p>We value your feedback! Please share your thoughts or queries with us.</p>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* ── Info Box ── */}
            <div className="contact-info-box">
              <h3>Get in Touch</h3>
              <p className="tagline">Our team is available Monday–Saturday to assist you.</p>

              <div className="ci-item">
                <div className="ci-icon"><i className="fa-solid fa-location-dot"></i></div>
                <div className="ci-text">
                  <h4>Address</h4>
                  <p>7A Mahendra Roy Lane Post Office, Gobinda Khatick Rd, Topsia, Kolkata, WB 700046</p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon"><i className="fa-solid fa-phone"></i></div>
                <div className="ci-text">
                  <h4>Phone</h4>
                  <p>+91 9038334810</p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon"><i className="fa-solid fa-envelope"></i></div>
                <div className="ci-text">
                  <h4>Email</h4>
                  <p><a href="https://mail.google.com/mail/?view=cm&to=bob1977singh@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", textDecoration: "underline" }}>bob1977singh@gmail.com</a></p>
                </div>
              </div>

              <div className="ci-item">
                <div className="ci-icon"><i className="fa-solid fa-clock"></i></div>
                <div className="ci-text">
                  <h4>Office Hours</h4>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                </div>
              </div>

              <div className="contact-social">
                <a href="https://www.facebook.com/helpinghandsngo/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/helpinghand9943/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://x.com/bobsingh1977" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Twitter / X"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/@HelpingHandsNews-z2z" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>

            {/* ── Form ── */}
            <div className="contact-form-wrap">
              <h3>Send Us a Message</h3>
              {submitted ? (
                <div style={{
                  background: "var(--green-pale)",
                  border: "1px solid var(--green-main)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                  textAlign: "center",
                  color: "var(--green-dark)"
                }}>
                  <i className="fa-solid fa-circle-check" style={{ fontSize: "2.5rem", marginBottom: "12px", display: "block"}}></i>
                  <strong>Thank you for reaching out!</strong>
                  <p>We will get back to you soon.</p>
                </div>
              ) : (
                <>
                  {error && (
                    <div style={{ background: "#fee2e2", border: "1px solid #f87171", borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: "16px", color: "#b91c1c", fontSize: ".9rem" }}>
                      <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: 8 }}></i>{error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="subject">Subject *</label>
                      <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" placeholder="Tell us more..." required></textarea>
                  </div>

                  <button type="submit" className="btn btn-green" style={{ width: "100%", justifyContent: "center" }} disabled={sending}>
                    {sending
                      ? <><i className="fa-solid fa-spinner fa-spin"></i> Sending...</>
                      : <><i className="fa-solid fa-paper-plane"></i> Send Message</>
                    }
                  </button>
                </form>
                </>
              )}
            </div>
          </div>

          {/* ── Map ── */}
          <MapEmbed />
        </div>
      </section>
    </>
  );
};

export default Contact;
