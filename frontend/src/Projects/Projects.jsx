import React from 'react'

import eCommerceImage from './e-commerce-website.jpg';
import movieTrailerImage from './movie-trailer-website.png';
import reportWebsiteImage from './report-website.png';
import './Projects.css'

const Projects = () => {
  return (
    <div id="projects">
        <div className="container">
            <div className="projects-wrapper">
                <h2>Projects</h2>
                <hr/>
                <ul className="projects-list">
                    <li className="projects-list-item">
                        <h3>E-Commerce Website</h3>
                        <a href="https://e-commerce-omersoyleyen.netlify.app">
                            <img src={eCommerceImage} alt="e-commerce-website" />
                        </a>
                    </li>
                    <li className="projects-list-item">
                        <h3>Movie Trailer Website</h3>
                        <a href="https://movie-trailer-omersoyleyen.netlify.app/">
                            <img src={movieTrailerImage} alt="movie-trailer-website" />
                        </a>
                    </li>
                    <li className="projects-list-item">
                        <h3>Reports Website (Internship)</h3>
                        <img src={reportWebsiteImage} alt="report-website" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Projects;