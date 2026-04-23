import React, { useEffect, useRef, useState } from "react";
import "./ExperienceSection.css";
import { experienceData } from "../../data/data";

export default function ExperienceSection() {
  const sectionRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [stats, setStats] = useState({ years: 0, projects: 0, satisfaction: 0 });

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  // Animated counter for stats
  useEffect(() => {
    const animateValue = (start, end, duration, callback) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        callback(value);
        if (progress < 1) window.requestAnimationFrame(step);
      };
      window.requestAnimationFrame(step);
    };

    const handleStats = (entries) => {
      if (entries[0].isIntersecting) {
        animateValue(0, 1, 1500, (val) => setStats((s) => ({ ...s, years: val })));
        animateValue(0, 3, 1800, (val) => setStats((s) => ({ ...s, projects: val })));
        animateValue(0, 100, 2000, (val) => setStats((s) => ({ ...s, satisfaction: val })));
        observerStats.disconnect();
      }
    };

    const observerStats = new IntersectionObserver(handleStats, { threshold: 0.5 });
    const statsEl = document.querySelector(".stats-bar");
    if (statsEl) observerStats.observe(statsEl);

    return () => observerStats.disconnect();
  }, []);

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      {/* Background Effects - DARK THEME */}
      <div className="section-bg-mesh"></div>
      <div className="section-glow-orb orb-left"></div>
      <div className="section-glow-orb orb-right"></div>

      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">💼</span>
            <span>Career Path</span>
          </div>
          
          <h2 className="section-title">
            My <span className="title-accent">Experience</span>
          </h2>
          
          <p className="section-description">
            Experience in <span className="text-highlight">Web Development </span> 
            and <span className="text-highlight">Network & Server Security</span>, 
            on factory.
          </p>
        </div>

        {/* Animated Stats Bar */}
        <div className="stats-bar">
          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-content">
              <span className="stat-number">
                Under {stats.years}<span className="stat-plus"></span>
              </span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-glow"></div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-content">
              <span className="stat-number">
                {stats.projects}<span className="stat-plus">+</span>
              </span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-glow"></div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <span className="stat-number">{stats.satisfaction}%</span>
              <span className="stat-label">Employee Satisfaction</span>
            </div>
            <div className="stat-glow"></div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          
          {experienceData.map((exp, i) => (
            <div 
              className={`timeline-item ${visibleItems.includes(i) ? "in-view" : ""}`} 
              key={i}
              data-index={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              {/* Timeline Node */}
              <div className="timeline-node">
                <span className="node-year">{exp.year}</span>
                <div className="node-dot"></div>
              </div>

              {/* Timeline Card */}
              <div className="timeline-card">
                {/* Card Header */}
                <div className="card-header">
                  <div className="role-badge">
                    <span className="role-icon">👨‍💻</span>
                    {exp.role}
                  </div>
                  <span className="company-name">{exp.company}</span>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  <p className="card-description">{exp.desc}</p>
                  
                  {/* Key Achievements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="achievement-item">
                          <span className="achievement-dot">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Tags */}
                <div className="tech-stack">
                  <span className="tech-label">Tech Stack:</span>
                  <div className="tech-tags">
                    {exp.tech.map((t, j) => (
                      <span key={j} className="tech-tag">
                        <span className="tag-dot"></span>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Hover Effect */}
                <div className="card-hover-glow"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="experience-cta">
          <p>Want to see more of my projects?</p>
          <a href="#portfolio" className="btn-view-projects">
            <span>View My Projects</span>
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}