import React, { useEffect, useRef, useState } from "react";
import "./ServicesSection.css";
import { servicesData } from "../../data/data";

export default function ServicesSection({ handleContact }) {
  const sectionRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState([]);
  const [nebulae, setNebulae] = useState([]);

  // Generate realistic starfield & nebula layers on mount
  useEffect(() => {
    const generatedStars = Array.from({ length: 250 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      speed: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      color: ['#ffffff', '#a7c7e7', '#ffd9b3', '#ff8c42'][Math.floor(Math.random() * 4)],
    }));
    setStars(generatedStars);

    const generatedNebulae = [
      { id: 1, x: 15, y: 20, size: 500, color: 'rgba(60, 140, 255, 0.12)', delay: 0 },
      { id: 2, x: 80, y: 65, size: 450, color: 'rgba(255, 120, 60, 0.1)', delay: -10 },
      { id: 3, x: 45, y: 35, size: 400, color: 'rgba(180, 200, 255, 0.08)', delay: -20 },
    ];
    setNebulae(generatedNebulae);
  }, []);

  // Subtle parallax for depth
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="services" className="space-services" ref={sectionRef}>
      {/* ===== REALISTIC SPACE BACKGROUND ===== */}
      <div className="space-background">
        <div className="deep-space-void"></div>
        
        {/* Starfield */}
        <div className="starfield" style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}>
          {stars.map(star => (
            <span
              key={star.id}
              className="star"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                backgroundColor: star.color,
                opacity: star.opacity,
                animation: `twinkle ${star.speed}s ease-in-out infinite`,
                animationDelay: `${star.delay}s`,
                boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
              }}
            />
          ))}
        </div>
        
        {/* Nebula Layers */}
        {nebulae.map(neb => (
          <div
            key={neb.id}
            className="nebula"
            style={{
              left: `${neb.x}%`,
              top: `${neb.y}%`,
              width: `${neb.size}px`,
              height: `${neb.size}px`,
              background: `radial-gradient(ellipse at center, ${neb.color} 0%, transparent 70%)`,
              animationDelay: `${neb.delay}s`,
            }}
          />
        ))}
        
        {/* Distant Galaxy */}
        <div className="distant-galaxy" style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}>
          <div className="galaxy-core"></div>
          <div className="galaxy-spiral"></div>
        </div>
      </div>

      <div className="space-content">
        {/* ===== MISSION BRIEFING HEADER ===== */}
        <div className="mission-header">
          <span className="header-tag">🛰️ What I Can Do</span>
          <h2 className="header-title">
            Check My <span className="title-glow">Capabilities</span>
          </h2>
          <p className="header-desc">
            My capabilities center on architecting high-performance systems and scalable web environments built for long-term stability.
          </p>
        </div>

        {/* ===== MAIN SERVICE MODULES (Always Visible) ===== */}
        <div className="modules-grid">
          {servicesData.map((service, idx) => (
            <article key={service.id} className="service-module" style={{ animationDelay: `${idx * 0.15}s` }}>
              {/* Module Header */}
              <div className="module-header">
                <div className="module-icon-wrapper">
                  <span className="module-icon">{service.icon}</span>
                  <div className="icon-ring"></div>
                </div>
                <div className="module-title-group">
                  <h3 className="module-title">{service.title}</h3>
                  {service.featured && <span className="featured-badge">★ PRIME</span>}
                </div>
              </div>

              {/* Module Description */}
              <p className="module-desc">{service.desc}</p>

              {/* Capabilities List */}
              <div className="module-capabilities">
                <h4>Capabilities</h4>
                <ul className="capabilities-list">
                  {service.features.map((feat, i) => (
                    <li key={i} className="cap-item">
                      <span className="cap-marker">◆</span>
                      <span className="cap-text">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="module-tech">
                <h4>Tech Stack</h4>
                <div className="tech-pills">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Performance Metrics */}
              {/* <div className="module-metrics">
                <div className="metric">
                  <span className="metric-val">99.9%</span>
                  <span className="metric-label">Uptime</span>
                </div>
                <div className="metric">
                  <span className="metric-val">&lt;1.5s</span>
                  <span className="metric-label">Load</span>
                </div>
                <div className="metric">
                  <span className="metric-val">∞</span>
                  <span className="metric-label">Scale</span>
                </div>
              </div> */}

              {/* CTA */}
              {/* <button className="module-cta" onClick={handleContact}>
                <span>Initiate Project</span>
                <span className="cta-arrow">→</span>
              </button> */}

              {/* Ambient Glow */}
              <div className="module-ambient-glow"></div>
            </article>
          ))}
        </div>

        {/* ===== ADDITIONAL CAPABILITIES (More Content) ===== */}
        <div className="secondary-capabilities">
          <h3 className="section-label">Extended Capabilities</h3>
          <div className="cap-grid">
            {[
              { icon: "📊", title: "Data Analytics", desc: "Transform raw metrics into actionable insights with custom dashboards & reporting pipelines.", tech: ["Python", "PostgreSQL"] },
              { icon: "🔧", title: "DevOps & Cloud", desc: "Automate deployment, monitoring & scaling with modern CI/CD & cloud infrastructure.", tech: ["GitHub Actions"] },
              { icon: "🎨", title: "UI/UX Engineering", desc: "Research-driven interfaces that balance aesthetics with usability & conversion.", tech: ["Figma", "React"] },
            ].map((cap, i) => (
              <div key={i} className="cap-card">
                <span className="cap-icon">{cap.icon}</span>
                <h4 className="cap-title">{cap.title}</h4>
                <p className="cap-desc">{cap.desc}</p>
                <div className="cap-tech">
                  {cap.tech.map((t, j) => <span key={j} className="cap-tech-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== MISSION DASHBOARD (Stats) ===== */}
        <div className="mission-dashboard">
          <div className="dash-card">
            <span className="dash-icon">🎯</span>
            <div className="dash-content">
              <span className="dash-value">3</span>
              <span className="dash-label">Systems Deployed</span>
            </div>
          </div>
          <div className="dash-card">
            <span className="dash-icon">⚡</span>
            <div className="dash-content">
              <span className="dash-value">&lt;2s</span>
              <span className="dash-label">Avg. Response</span>
            </div>
          </div>
          <div className="dash-card">
            <span className="dash-icon">🌍</span>
            <div className="dash-content">
              <span className="dash-value">Local Relation</span>
              <span className="dash-label">Client Reach</span>
            </div>
          </div>
          <div className="dash-card">
            <span className="dash-icon">🔄</span>
            <div className="dash-content">
              <span className="dash-value">100%</span>
              <span className="dash-label">Worth</span>
            </div>
          </div>
        </div>

        {/* ===== LAUNCH PAD CTA ===== */}
        <div className="launch-pad">
          <p className="launch-text">
            Ready to <span className="launch-highlight">deploy your next system</span>? 
            Let's engineer something extraordinary.
          </p>
          <button className="btn-launch" onClick={handleContact}>
            <span>🚀 Start Mission Briefing</span>
            <span className="launch-trail"></span>
          </button>
        </div>
      </div>
    </section>
  );
}