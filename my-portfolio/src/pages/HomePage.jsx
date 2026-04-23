import React, { useState } from "react";
import "./HomePage.css";
import { educationData, experienceData } from "../data/data";
import HeroSection from "../components/sections/HeroSection";
import EducationSection from "../components/sections/EducationSection";
import NavbarSection from "../components/sections/NavbarSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ProjectSection from "../components/sections/ProjectSection";
import StorySection from "../components/sections/StorySection";
import FooterSection from "../components/sections/FooterSection";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const handleContact = () => {
    window.open(
      "https://wa.me/6281266088224?text=Halo%20Willy,%20saya%20tertarik%20dengan%20potensi%20Anda!",
      "_blank"
    );
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="homepage">
      <NavbarSection 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleContact={handleContact}
      />
      
      <main className="main-content">
        <HeroSection handleContact={handleContact} />
        <EducationSection />
        <ExperienceSection />
        <ProjectSection />
        <StorySection />
      </main>

      {/* FOOTER SECTION */}
      <FooterSection handleContact={handleContact} />
    </div>
  );
}