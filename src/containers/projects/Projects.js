import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Project.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects?.display) return null;

  const [featured, ...rest] = bigProjects.projects || [];

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="main" id="projects">
        <p className="section-kicker">{bigProjects.subtitle}</p>
        <h2 className="section-title">{bigProjects.title}</h2>

        {/* Featured project — full width */}
        {featured && (
          <article
            className={`project-featured ${isDark ? "dark-card" : ""}`}
          >
            <div className="project-featured-image">
              <img
                src={featured.image}
                alt={featured.projectName}
                loading="lazy"
              />
            </div>
            <div className="project-featured-body">
              <div className="project-tags">
                {featured.tags?.map(tag => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-featured-name">{featured.projectName}</h3>
              <p className="project-description">{featured.projectDesc}</p>
              {(featured.github || featured.demo) && (
                <div className="project-cta">
                  {featured.github && (
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      GitHub
                    </a>
                  )}
                  {featured.demo && (
                    <a
                      href={featured.demo}
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
        )}

        {/* Remaining projects — 2-column grid */}
        {rest.length > 0 && (
          <div className="project-grid">
            {rest.map((project, index) => (
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
        )}
      </section>
    </Fade>
  );
}
