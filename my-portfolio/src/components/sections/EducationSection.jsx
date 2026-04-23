import React, { useEffect, useRef, useState } from "react";
import "./EducationSection.css";
import { educationData } from "../../data/data";

export default function EducationSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-30px" }
    );

    const cards = document.querySelectorAll(".edu-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="education-section" ref={sectionRef}>
      {/* Background Effects - DARK THEME */}
      <div className="section-bg-mesh"></div>
      <div className="section-glow-orb orb-left"></div>
      <div className="section-glow-orb orb-right"></div>

      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">🎓</span>
            <span>Academic Background</span>
          </div>
          
          <h2 className="section-title">
            My <span className="title-accent">Education</span>
          </h2>
          
          <p className="section-description">
            Complete a formal academic journey from elementary education to a <span className="text-highlight">Bachelor's degree in Information Technology. </span> 
            Focus on developing technology solutions and digital innovation.
          </p>
        </div>

        {/* Education Grid */}
        <div className="education-grid">
          {educationData.map((edu, i) => (
            <div 
              className={`edu-card ${visibleCards.includes(i) ? "in-view" : ""} ${edu.featured ? 'featured' : ''}`} 
              key={i}
              data-index={i}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card Decorative Elements */}
              <div className="card-decoration">
                <div className="decor-gradient"></div>
                <div className="decor-corner corner-tl"></div>
                <div className="decor-corner corner-br"></div>
              </div>

              {/* Card Header */}
              <div className="edu-header">
                <div className="edu-icon-wrapper">
                  <span className="edu-icon">{edu.icon || "🎓"}</span>
                  <div className="icon-glow"></div>
                </div>
                <span className="edu-year">{edu.year}</span>
                {edu.type && (
                  <span className={`edu-type type-${edu.type}`}>{edu.type}</span>
                )}
              </div>

              {/* Card Body */}
              <div className="edu-body">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">
                  <span className="institution-name">{edu.school}</span>
                  <span className="institution-location">📍 {edu.location}</span>
                </p>
                <p className="edu-desc">{edu.desc}</p>
                
                {/* Key Highlights/Achievements */}
                {edu.highlights && edu.highlights.length > 0 && (
                  <div className="highlights-section">
                    <span className="highlights-label">Key Highlights:</span>
                    <ul className="highlights-list">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="highlight-item">
                          <span className="highlight-bullet">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Skills/Courses Learned */}
                {edu.skills && edu.skills.length > 0 && (
                  <div className="skills-section">
                    <span className="skills-label">Skills Acquired:</span>
                    <div className="skills-tags">
                      {edu.skills.map((skill, idx) => (
                        <span key={idx} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              {edu.certificateUrl && (
                <div className="edu-footer">
                  <a 
                    href={edu.certificateUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-certificate"
                  >
                    <span>View Certificate</span>
                    <span className="btn-arrow">↗</span>
                  </a>
                </div>
              )}

              {/* Hover Glow Effect */}
              <div className="card-hover-glow"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="education-cta">
          <p>Interested in my learning journey?</p>
          <a href="#experience" className="btn-view-experience">
            <span>See My Experience</span>
            <span className="btn-arrow">→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}