import React from "react";
import eCommerceImage from "./e-commerce-website.jpg";
import movieTrailerImage from "./movie-trailer-website.png";
import reportWebsiteImage from "./report-website.png";
import btcGuessImage from "./btc_tahmin.png";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce Website",
    image: eCommerceImage,
    link: "https://e-commerce-omersoyleyen.netlify.app",
  },
  {
    title: "Movie Trailer Website",
    image: movieTrailerImage,
    link: "https://movie-trailer-omersoyleyen.netlify.app/",
  },
  {
    title: "Cryptocurrency",
    image: btcGuessImage,
  },
   {
    title: "Reports Website (Internship)",
    image: reportWebsiteImage,
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={project.image} alt={project.title} />
                </a>
              ) : (
                <img src={project.image} alt={project.title} />
              )}

              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;