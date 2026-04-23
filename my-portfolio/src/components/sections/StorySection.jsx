import React, { useEffect, useRef } from "react";
import "./StorySection.css";
import { storyValues, storyHobbies, storyJourney } from "../../data/data";

export default function StorySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20px" }
    );

    const items = document.querySelectorAll("[data-animate]");
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="story" className="story-section" ref={sectionRef}>
      {/* Background Effects */}
      <div className="section-bg-mesh"></div>
      <div className="section-glow-orb orb-left"></div>
      <div className="section-glow-orb orb-right"></div>

      <div className="section-content">
        {/* Header */}
        <div className="section-header" data-animate data-id="header">
          <div className="header-badge">
            <span className="badge-icon">👤</span>
            <span>Personal Journey</span>
          </div>
          <h2 className="section-title">
            My Life <span className="title-accent">Story</span>
          </h2>
          <p className="section-description">
            See my world and what i like in my life, and follow my journey.
          </p>
        </div>

        {/* Main Quote */}
        <div className="story-intro" data-animate data-id="intro">
          <blockquote className="main-quote">
            "Love yourself and just be yourself."
            <cite>— Willy Pieter Julius Situmorang</cite>
          </blockquote>
        </div>

        {/* Two Column Layout: Values + Hobbies */}
        <div className="story-grid">
          {/* Values Column */}
          <div className="story-column" data-animate data-id="values">
            <h3 className="column-title">💡 Core Values</h3>
            <div className="values-grid">
              {storyValues.map((v, i) => (
                <div key={i} className="value-card">
                  <span className="value-icon">{v.icon}</span>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Column */}
          <div className="story-column" data-animate data-id="hobbies">
            <h3 className="column-title">🌱 Life Beyond The Terminal</h3>
            <div className="hobbies-grid">
              {storyHobbies.map((h, i) => (
                <div key={i} className="hobby-card">
                  <div className="hobby-icon-wrapper">
                    <span className="hobby-icon">{h.icon}</span>
                    <div className="icon-pulse"></div>
                  </div>
                  <div className="hobby-content">
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="story-timeline" data-animate data-id="timeline">
          <h3 className="column-title">🪧 My Journey So Far</h3>
          <div className="timeline-track">
            {storyJourney.map((j, i) => (
              <div key={i} className="timeline-node">
                <span className={`node-year ${j.active ? "active" : ""}`}>{j.year}</span>
                <div className={`node-dot ${j.active ? "active" : ""}`}></div>
                <p className="node-label">{j.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div className="story-cta" data-animate data-id="cta">
          <p>Curious about how my story can align with your project?</p>
          <a href="#contact" className="btn-story-connect">
            <span>Let's Connect</span>
            <span className="btn-arrow">→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
}