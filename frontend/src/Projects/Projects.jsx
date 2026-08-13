import React, { useState } from "react";
import eCommerceImage from "./e-commerce-website.jpg";
import reportWebsiteImage from "./report-website.png";
import btcGuessImage from "./btc_tahmin.png";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    image: eCommerceImage,
    link: "https://e-commerce-omersoyleyen.vercel.app",
    shortDescription: "Responsive e-commerce platform built with Next.js and TypeScript, optimized for high performance.",
    fullDescription: "Built a responsive e-commerce platform using Next.js and TypeScript. Optimized frontend performance (85+ Lighthouse score), integrated backend APIs securely, and improved overall user experience across all devices with clean component architectures.",
  },
  {
    id: 2,
    title: "Cryptocurrency Web Application",
    image: btcGuessImage,
    link: "https://omersoyleyen-cryptocurrency.netlify.app/",
    shortDescription: "AI-powered cryptocurrency forecasting and real-time market analysis platform.",
    fullDescription: "End-to-end AI-powered cryptocurrency forecasting and market analysis platform leveraging custom deep learning models (LSTM/GRU) and Qdrant vector databases for real-time risk assessment. Engineered with a high-performance Next.js and TypeScript frontend, supported by a scalable Python (FastAPI) backend and Apache Kafka event streaming.",
  },
  {
    id: 3,
    title: "Municipality Bus Reporting Web Application (Internship)",
    image: reportWebsiteImage,
    shortDescription: "Real-time reporting dashboard developed during internship to optimize municipality data workflows.",
    fullDescription: "Developed a real-time reporting dashboard using React and TypeScript. Implemented efficient API calls, worked in Agile sprints, and optimized database queries to reduce reporting workflow processing time by 70%.",
  },
];

const Projects = () => {
  const [expandedCardId, setExpandedCardId] = useState(null); // 1. Tık durumu (Kart genişlemesi)
  const [showFullDetailsId, setShowFullDetailsId] = useState(null); // 2. Tık durumu (Tam detay)

  const handleCardClick = (id) => {
    if (expandedCardId === id) {
      // Eğer zaten açıksa kapat ve detayları sıfırla
      setExpandedCardId(null);
      setShowFullDetailsId(null);
    } else {
      // Kartı aç, detay aşamasını sıfırla
      setExpandedCardId(id);
      setShowFullDetailsId(null);
    }
  };

  const handleToggleDetails = (e, id) => {
    e.stopPropagation(); // Kartın click olayının tetiklenmesini engelle
    setShowFullDetailsId(showFullDetailsId === id ? null : id);
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => {
            const isExpanded = expandedCardId === project.id;
            const hasFullDetails = showFullDetailsId === project.id;

            return (
              <div 
                className={`project-card ${isExpanded ? 'expanded' : ''}`} 
                key={project.id}
                onClick={() => handleCardClick(project.id)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-info">
                  <h3>{project.title}</h3>

                  {/* 1. TIK: Kısa Özet Alanı */}
                  {isExpanded && (
                    <div className="project-details-container" onClick={(e) => e.stopPropagation()}>
                      <p className="project-description">
                        {hasFullDetails ? project.fullDescription : project.shortDescription}
                      </p>

                      <div className="action-buttons">
                        <button 
                          className="project-toggle"
                          onClick={(e) => handleToggleDetails(e, project.id)}
                        >
                          {hasFullDetails ? "Show Less" : "Detailed Info"}
                        </button>

                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="project-link"
                          >
                            Live Preview
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {!isExpanded && (
                    <span className="click-hint">Click to expand</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;