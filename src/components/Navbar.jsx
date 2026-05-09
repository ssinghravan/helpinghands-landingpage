import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="HelpingHands Logo" style={{ height: "42px", width: "42px", objectFit: "cover", borderRadius: "50%" }} /> HelpingHands
        </Link>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <i className={isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </button>

        <nav className={`nav-links${isOpen ? " open" : ""}`}>
          <Link to="/"        className={`nav-link ${isActive("/")}`}>Home</Link>
          <Link to="/about"   className={`nav-link ${isActive("/about")}`}>About Us</Link>
          <Link to="/programs"className={`nav-link ${isActive("/programs")}`}>Programs</Link>
          <Link to="/gallery" className={`nav-link ${isActive("/gallery")}`}>Gallery</Link>
          <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>Contact</Link>
          <a
            href="https://amazing-starlight-f938f9.netlify.app/"
            className="btn-donate nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-heart"></i> Donate Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
