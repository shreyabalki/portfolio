import React from "react";
import {Fade} from "react-reveal";
import "./Project.scss";
import {bigProjects} from "../../portfolio";

export default function Projects() {
  if (!bigProjects?.display) return null;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="main" id="projects">
        <p className="section-kicker">{bigProjects.subtitle}</p>
        <h2 className="section-title">{bigProjects.title}</h2>

        <div className="project-list">
          {bigProjects.projects?.map((project, index) => (
            <article
              key={index}
              className={`project-row ${index % 2 !== 0 ? "project-row--reverse" : ""}`}
            >
              <div className="project-row-image">
                <img
                  src={project.image}
                  alt={project.projectName}
                  loading="lazy"
                />
              </div>

              <div className="project-row-content">
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
    </Fade>
  );
}
