import React from "react";
import {useParams, Link} from "react-router-dom";
import {bigProjects} from "../portfolio";
import "./CaseStudy.scss";

export default function CaseStudy() {
  const {slug} = useParams();
  const project = bigProjects.projects.find(item => item.slug === slug);

  if (!project) {
    return (
      <main className="case-study-main">
        <h1>Case Study Not Found</h1>
        <Link to="/">Back to portfolio</Link>
      </main>
    );
  }

  return (
    <main className="case-study-main">
      <Link className="case-back" to="/">
        ← Back
      </Link>
      <h1>{project.projectName}</h1>
      <p className="case-tags">{project.tags.join(" · ")}</p>
      <img
        src={project.image}
        alt={project.projectName}
        className="case-image"
      />
      <p>{project.caseStudy}</p>
    </main>
  );
}
