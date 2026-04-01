import React from "react";
import {Fade} from "react-reveal";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";
import "./Github.scss";
import {githubSection} from "../../portfolio";

export default function Github() {
  if (!githubSection.display) return null;

  return (
    <Fade bottom duration={700} distance="20px">
      <section className="main github-section" id="github">
        <div className="github-header">
          <p className="section-kicker">{githubSection.subtitle}</p>
          <h2 className="section-title">{githubSection.title}</h2>
          <a
            href={githubSection.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            <FaGithub />
            <span>{githubSection.githubProfile.replace("https://", "")}</span>
          </a>
        </div>

        <div className="github-projects">
          {githubSection.projects.map((project, index) => (
            <article key={index} className="github-project-card">
              <div className="github-project-header">
                <h3 className="github-project-name">{project.name}</h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-project-link"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <FaExternalLinkAlt />
                  <span>View on GitHub</span>
                </a>
              </div>

              <ul className="github-bullets">
                <li>
                  <span className="github-bullet-label">Built</span>
                  {project.built}
                </li>
                <li>
                  <span className="github-bullet-label">Impact</span>
                  {project.impact}
                </li>
                <li>
                  <span className="github-bullet-label">Stack</span>
                  {project.stack}
                </li>
              </ul>
            </article>
          ))}
        </div>

        <div className="github-cta">
          <a
            href={githubSection.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="github-all-link"
          >
            <FaGithub />
            <span>All projects on GitHub</span>
          </a>
        </div>
      </section>
    </Fade>
  );
}
