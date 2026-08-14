import React from 'react'
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiPython, 
  SiFastapi, 
  SiNodedotjs, 
  SiExpress, 
  SiApachekafka, 
  SiPostgresql, 
  SiQdrant, 
  SiDocker, 
  SiGithubactions 
} from 'react-icons/si'
import './About.css'

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="about-wrapper">
          <h2>About</h2>
          <hr/>
          <p>
            I am Omer Soyleyen, a Computer Engineering graduate from Konya Technical University with a strong foundation in building scalable web applications. Throughout my engineering journey, I have evolved from developing core web architectures to specializing in the Next.js, TypeScript, and Python ecosystem, with a focus on creating efficient, secure, and user-centric solutions.
          </p>
          <p>
            Dedicated to engineering high-impact applications that solve real-world problems, my goal is to continue delivering innovative solutions at the intersection of modern web technologies and artificial intelligence, contributing to the global tech industry as a versatile and highly skilled engineer.
          </p>

          <div className="tech-stack-section">
            <h3>Tech Stack & Core Skills</h3>
            <div className="tech-grid">
              <div className="tech-item"><SiNextdotjs /><span>Next.js</span></div>
              <div className="tech-item"><SiReact /><span>React</span></div>
              <div className="tech-item"><SiTypescript /><span>TypeScript</span></div>
              <div className="tech-item"><SiPython /><span>Python</span></div>
              <div className="tech-item"><SiFastapi /><span>FastAPI</span></div>
              <div className="tech-item"><SiNodedotjs /><span>Node.js</span></div>
              <div className="tech-item"><SiExpress /><span>Express</span></div>
              <div className="tech-item"><SiApachekafka /><span>Kafka</span></div>
              <div className="tech-item"><SiPostgresql /><span>PostgreSQL</span></div>
              <div className="tech-item"><SiQdrant /><span>Qdrant</span></div>
              <div className="tech-item"><SiDocker /><span>Docker</span></div>
              <div className="tech-item"><SiGithubactions /><span>CI/CD</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About