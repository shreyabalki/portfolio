import React, {useContext} from "react";
import "./Project.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects?.display) return null;

  return (
    <section className="main" id="projects">
      <p className="section-kicker">{bigProjects.subtitle}</p>
      <h2 className="section-title">{bigProjects.title}</h2>

      <div className="project-grid">
        {bigProjects.projects?.map((project, index) => (
          <article
            key={index}
            className={`project-card ${isDark ? "dark-card" : ""}`}
          >
            <div className="project-image-wrap">
              <img
                src={project.image}
                alt={project.projectName}
                className="project-image"
                loading="lazy"
              />
            </div>

            <div className="project-body">
              <div className="project-tags">
                {project.tags?.map(tag => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-name">{project.projectName}</h3>
              <p className="project-description">{project.projectDesc}</p>

              {(project.github || project.demo) && (
                <div className="project-cta">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
