import React, { useState, useEffect, useRef } from "react";
import "./ProjectSection.css";
import { projectsData } from "../../data/data";

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);

  // Filter projects
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleProjects((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-20px" }
    );

    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [filteredProjects]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const filters = [
    { id: "all", label: "All" },
    { id: "web", label: "Web App" },
    { id: "mobile", label: "Mobile" },
    { id: "ui", label: "UI/UX" }
  ];

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef}>
      {/* Background Effects - DARK THEME */}
      <div className="section-bg-mesh"></div>
      <div className="section-glow-orb orb-left"></div>
      <div className="section-glow-orb orb-right"></div>

      <div className="section-content">
        {/* Header */}
        <div className="section-header">
          <div className="header-badge">
            <span className="badge-icon">🚀</span>
            <span>Featured Work</span>
          </div>
          
          <h2 className="section-title">
            My <span className="title-accent">Projects</span>
          </h2>
          
          <p className="section-description">
            Crafting <span className="text-highlight">digital experiences</span> that merge 
            aesthetics with performance, built with modern technologies and best practices.
          </p>
        </div>

        {/* Filter Buttons */}
        {/* <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
              aria-pressed={activeFilter === filter.id}
            >
              {filter.label}
              <span className="filter-indicator"></span>
            </button>
          ))}
        </div> */}

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const isVisible = visibleProjects.includes(project.id);
            const isFeatured = project.featured;
            
            return (
              <article
                key={project.id}
                className={`project-card ${isVisible ? "in-view" : ""} ${isFeatured ? "featured" : ""}`}
                data-id={project.id}
                data-category={project.category}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedProject(project)}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="featured-badge">
                    <span>✨ Featured</span>
                  </div>
                )}

                {/* Image Wrapper */}
                <div className="project-image-wrapper">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image" 
                    loading="lazy"
                  />
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">🔍</span>
                      <span className="overlay-text">View Details</span>
                    </div>
                  </div>
                  <div className="image-glow"></div>
                </div>

                {/* Project Info */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  
                  {/* Tech Stack */}
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">
                        <span className="badge-dot"></span>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="project-actions">
                    {/* {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        className="action-link live"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        🔗 Live
                      </a>
                    )} */}
                    {project.sourceUrl && (
                      <a 
                        href={project.sourceUrl} 
                        className="action-link source"
                        onClick={(e) => e.stopPropagation()}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        💻 Github
                      </a>
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="card-hover-glow"></div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🔍</span>
            <p>No projects found for this category.</p>
            <button 
              className="btn-reset-filter"
              onClick={() => setActiveFilter("all")}
            >
              View All Projects
            </button>
          </div>
        )}

        {/* CTA Section */}
        {/* <div className="portfolio-cta">
          <p>Have a project in mind? Let's build something amazing together.</p>
          <a href="#contact" className="btn-start-project">
            <span>Start a Project</span>
            <span className="btn-arrow">→</span>
          </a>
        </div> */}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div 
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            
            <div className="modal-content">
              <div className="modal-image-wrapper">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-body">
                <h3 id="modal-title" className="modal-title">
                  {selectedProject.title}
                </h3>
                <p className="modal-desc">{selectedProject.desc}</p>
                
                <div className="modal-tech">
                  <span className="tech-label">Technologies:</span>
                  <div className="modal-tech-tags">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="modal-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-actions">
                  {/* {selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl}
                      className="btn-modal-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      🔗 View Live Demo
                    </a>
                  )} */}
                  {selectedProject.sourceUrl && (
                    <a 
                      href={selectedProject.sourceUrl}
                      className="btn-modal-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      💻 View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}