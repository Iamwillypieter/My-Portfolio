import React from "react";
import "./FooterSection.css";
import { socialLinks } from "../../data/data";

export default function FooterSection({ handleContact }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { id: "home", label: "Home" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "portfolio", label: "Projects" },
    { id: "story", label: "Story" }
  ];

  return (
    <footer className="site-footer">
      {/* Background Effects */}
      <div className="footer-bg-mesh"></div>
      <div className="footer-glow-orb orb-left"></div>
      <div className="footer-glow-orb orb-right"></div>
      
      <div className="footer-content">
        {/* Top Section: Brand + Social + Quick Links */}
        <div className="footer-top">
          
          {/* Brand */}
          <div className="footer-brand">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              <div className="logo-wrapper">
                <span className="logo-icon">⚡</span>
                <div className="logo-glow"></div>
              </div>
              <span className="logo-text">
                Willy<span className="logo-accent"> Pieter</span>
              </span>
            </a>
            <p className="footer-tagline">
              Building digital experiences that merge creativity with technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="social-title">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="social-link"
                  aria-label={social.label}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-tooltip">{social.label}</span>
                  <span className="social-glow"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="links-title">Quick Links</h4>
            <ul className="links-list">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a 
                    href={`#${link.id}`} 
                    onClick={(e) => handleNavClick(e, link.id)}
                  >
                    {link.label}
                    <span className="link-indicator"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section: Copyright + Back to Top */}
        <div className="footer-bottom">
          <div className="copyright-group">
            <p className="copyright">
              © {new Date().getFullYear()}{" "}
              <span className="copyright-name">Willy Pieter Julius Situmorang</span>. 
              All rights reserved.
            </p>
            <p className="footer-credit">
              Crafted with <span className="heart">꒒ ০ ⌵ ୧ ♡</span> &{" "}
              <span className="tech">𝓟𝓮𝓪𝓬𝓮𓇢𓆸</span>
            </p>
          </div>
          
          {/* Back to Top Button */}
          <button 
            className="btn-back-top" 
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span className="btn-icon">↑</span>
            <span className="btn-text">Back to Top</span>
            <span className="btn-glow"></span>
          </button>
        </div>
      </div>
    </footer>
  );
}