import React, { useEffect, useState } from "react";
import "./NavbarSection.css";

export default function NavbarSection({ menuOpen, setMenuOpen, handleContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect & active section detection
  useEffect(() => {
    const handleScroll = () => {
      // Navbar background change on scroll
      setScrolled(window.scrollY > 50);

      // Detect active section for highlight
      const sections = ["home", "education", "experience", "portfolio", "story", "skills"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Projects" },
    { id: "story", label: "Story" },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      {/* Background Blur & Gradient */}
      <div className="navbar-bg-effect"></div>
      <div className="navbar-glow"></div>

      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, "home")}>
          <span className="brand-icon">⚡</span>
          <span className="brand-text">My <span className="brand-accent">Portfolio</span></span>
        </a>

        {/* Hamburger Menu - Mobile */}
        <button
          className="hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`hamburger-line line-1 ${menuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line line-2 ${menuOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line line-3 ${menuOpen ? "open" : ""}`}></span>
        </button>

        {/* Navigation Menu */}
        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                >
                  <span className="link-text">{link.label}</span>
                  <span className="link-underline"></span>
                  {activeSection === link.id && <span className="link-dot"></span>}
                </a>
              </li>
            ))}
          </ul>

          {/* Contact Button - Desktop */}
          <div className="nav-right">
            <button 
              className="btn-contact-nav" 
              type="button" 
              onClick={handleContact}
              aria-label="Contact me"
            >
              <span className="btn-text">Let's Talk</span>
              <span className="btn-arrow">→</span>
              <span className="btn-glow"></span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {menuOpen && (
          <div 
            className="mobile-overlay" 
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          ></div>
        )}
      </div>
    </nav>
  );
}