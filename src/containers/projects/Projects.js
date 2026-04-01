import React, {useContext} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects?.display) return null;

  return (
    <section className="main" id="projects">
      <h2 className="project-title">{bigProjects.title}</h2>
      <p className="project-subtitle">{bigProjects.subtitle}</p>
      <div className="repo-cards-div-main">
        {bigProjects.projects?.map((project, index) => (
          <article
            key={index}
            className={`repo-card-div ${isDark ? "dark-card" : ""}`}
          >
            <img
              src={project.image}
              alt={project.projectName}
              className="project-image"
            />
            <h3 className="project-name">{project.projectName}</h3>
            <p className="project-description">{project.projectDesc}</p>
            <div className="project-tags">
              {project.tags?.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              {project.footerLink?.map((link, i) => (
                <Button key={i} text={link.name} href={link.url} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
