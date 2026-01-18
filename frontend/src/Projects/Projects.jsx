import React, { useState } from "react";
import eCommerceImage from "./e-commerce-website.jpg";
import movieTrailerImage from "./movie-trailer-website.png";
import reportWebsiteImage from "./report-website.png";
import btcGuessImage from "./btc_tahmin.png";
import "./Projects.css";

const projects = [
  {
    title: "E-Commerce App",
    image: eCommerceImage,
    link: "https://e-commerce-omersoyleyen.vercel.app",
    description:
      "Built a responsive e-commerce platform using Next.js and TypeScript. Optimized frontend performance (85+ Lighthouse score), integrated backend APIs securely, and improved overall user experience.",
  },
  {
    title: "Movie Trailer Website",
    image: movieTrailerImage,
    link: "https://movie-trailer-omersoyleyen.netlify.app/",
    description:
      "Developed a movie trailer platform using React and TMDB API. Implemented dynamic routing, search functionality, and a responsive UI focused on clean design.",
  },
  {
    title: "Cryptocurrency Prediction App",
    image: btcGuessImage,
    description:
      "AI-assisted cryptocurrency prediction interface. Focused on data visualization, trend analysis, and scalable UI architecture.",
  },
  {
    title: "Municipality Bus Reporting Dashboard (Internship)",
    image: reportWebsiteImage,
    description:
      "Developed a real-time reporting dashboard using React and TypeScript. Implemented efficient API calls, worked in Agile sprints, and reduced reporting time by 70%.",
  },
];

const Projects = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDescription = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={project.image} alt={project.title} />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <button
                  className="project-toggle"
                  onClick={() => toggleDescription(index)}
                >
                  {openIndex === index ? "Hide Details" : "View Details"}
                </button>

                {openIndex === index && (
                  <p className="project-description">
                    {project.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
