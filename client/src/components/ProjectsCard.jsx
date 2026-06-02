import { projects, projectsLink } from "../data/content";
import Icon from "./Icon";

export default function ProjectsCard() {
  const items = [...projects, ...projects, ...projects];

  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="briefcase" />
        </span>
        <h2>Projects</h2>
      </div>
      <div className="csub">Here are some of the projects I have worked on</div>
      <div className="pscroll-wrap">
        <div className="pscroll-track">
          {items.map((p, i) => (
            <div className="pscroll-thumb" key={i}>
              {p.image && (
                <img src={p.image} alt={p.title} />
              )}
              <span className="bdg">{p.badge}</span>
              <div
                className="g"
                style={{ background: p.glow, top: p.y, left: p.x, right: p.right }}
              />
              <span className="tl">{p.title}</span>
            </div>
          ))}
        </div>
      </div>
      <a href={projectsLink} className="vall" style={{ marginTop: "1rem" }}>
        <Icon name="briefcase" /> View All Projects
      </a>
    </div>
  );
}
