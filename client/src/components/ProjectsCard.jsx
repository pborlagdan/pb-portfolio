import React from "react";
import { projects, projectsLink } from "../data/content";
import Icon from "./Icon";

export default function ProjectsCard() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="briefcase" />
        </span>
        <h2>Projects</h2>
      </div>
      <div className="csub">Some of the work I've shipped</div>
      <div className="thumbs">
        {projects.map((p, i) => (
          <div className="thumb" key={i}>
            <span className="bdg">{p.badge}</span>
            <div
              className="g"
              style={{
                background: p.glow,
                top: p.y,
                left: p.x,
                right: p.right,
              }}
            />
            <span className="tl">{p.title}</span>
          </div>
        ))}
      </div>
      <a href={projectsLink} className="vall">
        <Icon name="briefcase" /> View All Projects
      </a>
    </div>
  );
}
