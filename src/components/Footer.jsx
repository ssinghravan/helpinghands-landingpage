import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="logo">
              <img src="/logo.png" alt="HelpingHands Logo" style={{ height: "40px", width: "40px", objectFit: "cover", borderRadius: "50%" }} /> HelpingHands
            </div>
            <p>
              We empower underprivileged communities through skill development courses we provide,
              education, and healthcare services. Together, we build a bridge from need to hope!
            </p>
            <div className="social">
              <a href="https://www.facebook.com/helpinghandsngo/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/helpinghand9943/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/bobsingh1977" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"><i className="fa-brands fa-x-twitter"></i></a>
              <a href="https://www.youtube.com/@HelpingHandsNews-z2z" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4>Our Courses</h4>
            <ul>
              <li><a href="#">Stitching & Sewing</a></li>
              <li><a href="#">Mehendi Art</a></li>
              <li><a href="#">Beautician Course</a></li>
              <li><a href="#">Basic Computer</a></li>
              <li><a href="#">Spoken English</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <div className="footer-contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <a href="https://www.google.com/maps/place/Helping+Hands/@22.542556,88.3828245,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277e27db50691:0xcfb17f30da50c04c!8m2!3d22.542556!4d88.3828245!16s%2Fg%2F11fd4lnq0d?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">7A Mahendra Roy Lane Post Office, Gobinda Khatick Rd, Topsia, Kolkata, WB 700046</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+919038334810">+91 9038334810</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-envelope"></i>
              <a href="https://mail.google.com/mail/?view=cm&to=bob1977singh@gmail.com" target="_blank" rel="noopener noreferrer">bob1977singh@gmail.com</a>
            </div>
            <div className="footer-contact-item">
              <i className="fa-solid fa-clock"></i>
              <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} HelpingHands NGO. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
