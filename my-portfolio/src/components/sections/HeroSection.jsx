import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import profile from "../../assets/me.png";
import cv from "../../assets/CV_Willy_Pieter_Julius_Situmorang.pdf";

export default function HeroSection({ handleContact }) {
  const [ageText, setAgeText] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'Willy_Situmorang_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);

    const calculateAgeDetail = () => {
      const birthDate = new Date(2003, 7, 1);
      const today = new Date();

      let years = today.getFullYear() - birthDate.getFullYear();
      let months = today.getMonth() - birthDate.getMonth();
      let days = today.getDate() - birthDate.getDate();

      if (days < 0) {
        months--;
        const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setAgeText(`${years}y ${months}m ${days}d`);
    };

    calculateAgeDetail();
    const interval = setInterval(calculateAgeDetail, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      {/* Animated Background */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-bg-mesh"></div>
      <div className="hero-glow-orb orb-1"></div>
      <div className="hero-glow-orb orb-2"></div>

      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>

      <div className="hero-content">
        {/* Left: Text Content */}
        <div className={`hero-text ${isLoaded ? 'animate-in' : ''}`}>
          <div className="status-badge-glass">
            <span className="pulse-dot"></span>
            Open to Opportunities
          </div>

          <h1 className="hero-title">
            Hy! I Am <br />
            <span className="name-gradient">Willy Pieter Julius Situmorang</span>
          </h1>

          <p className="hero-description">
            Experienced <span className="text-accent">IT Web Developer</span> focused on
            functionality & scalability. Strong analytical skills to create
            <span className="text-accent"> innovative digital products</span>.
            Committed to driving real change through technology.
          </p>

          <div className="hero-actions">
            <button className="btn-premium btn-orange" onClick={handleContact}>
              <span className="btn-icon">📞</span> Hire Me
            </button>
            <button
              className="btn-premium btn-outline"
              onClick={handleDownloadCV}
              aria-label="Download CV"
              type="button"
            >
              <span className="btn-icon">📄</span> See My CV
            </button>
          </div>

          {/* Quick Stats */}
          {/* <div className="quick-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedication</span>
            </div>
          </div> */}
        </div>

        {/* Right: Image & Floating Elements */}
        <div className={`hero-visual ${isLoaded ? 'animate-in' : ''}`}>
          <div className="image-frame-container">
            {/* Circular Frame with Glow */}
            <div className="circular-frame">
              <img
                src={profile}
                alt="Willy Pieter Julius Situmorang"
                className="main-photo"
              />
              <div className="frame-glow"></div>
              <div className="frame-border"></div>
            </div>

            {/* Floating Badges */}
            <div className="floating-badge badge-experience">
              <div className="badge-icon">💼</div>
              <div>
                <p className="badge-value">Under 1 Year</p>
                <p className="badge-label">Experience</p>
              </div>
            </div>

            <div className="floating-badge badge-projects">
              <div className="badge-icon">✨</div>
              <div>
                <p className="badge-value">3 Projects</p>
                <p className="badge-label">Completed</p>
              </div>
            </div>

            <div className="floating-badge badge-age">
              <div className="badge-icon">🎂</div>
              <div>
                <p className="badge-value">{ageText}</p>
                <p className="badge-label">Since 1 July 2003</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="decorative-ring ring-1"></div>
            <div className="decorative-ring ring-2"></div>
          </div>
        </div>
      </div>

      {/* Tech Stack Marquee */}
      <div className="hero-tech-marquee">
        <div className="marquee-track">
          {[1, 2].map((g) => (
            <React.Fragment key={g}>
              <span className="tech-item">⚛️ React</span>
              <span className="tech-item">｡🇯‌🇸‌ JavaScript</span>
              <span className="tech-item">🟢 Node.js</span>
              <span className="tech-item">🐘 PostgreSQL</span>
              <span className="tech-item">𝐊 Kotlin</span>
              <span className="tech-item">🐍 Python</span>
              <span className="tech-item">🎨 Figma</span>
              <span className="tech-item">📦 Git/Github</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        {/* <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div> */}
      </div>
    </section>
  );
  {
    showToast && (
      <div className="download-toast">
        <span>✅ CV downloaded successfully!</span>
      </div>
    )
  }
}