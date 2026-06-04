import { useState } from "react";
import { projects, highlights } from "../data/content";
import Icon from "./Icon";
import Modal from "./Modal";

const ACHIEVEMENT_GLOWS = [
  "#a78bfa",
  "#f0a8d8",
  "#a8d8f0",
  "#a8f0c6",
  "#f0d8a8",
  "#d8a8f0",
  "#f0a8a8",
  "#a8f0d8",
];

export default function ProjectsCard() {
  const [open, setOpen] = useState(false);

  const achievementCards = highlights.map((h, i) => ({
    badge: "ACHIEVEMENT",
    title: h.name,
    glow: ACHIEVEMENT_GLOWS[i % ACHIEVEMENT_GLOWS.length],
    x: "15%",
    y: "30%",
  }));

  const allCards = [...projects, ...achievementCards];
  const items = [...allCards, ...allCards, ...allCards];

  return (
    <>
      <div className="card">
        <div className="ch">
          <span className="ch-ic">
            <Icon name="briefcase" />
          </span>
          <h2>Projects</h2>
        </div>
        <div className="csub">
          All corporate & internal projects — no public websites yet. Just
          starting my freelance journey.
        </div>
        <div className="pscroll-wrap">
          <div className="pscroll-track">
            {items.map((p, i) => (
              <div className="pscroll-thumb" key={i}>
                {p.image && <img src={p.image} alt={p.title} />}
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
        </div>
        <button
          type="button"
          className="vall"
          style={{ marginTop: "1rem" }}
          onClick={() => setOpen(true)}
        >
          <Icon name="briefcase" /> View All Projects
        </button>
      </div>

      {open && (
        <Modal
          title="Projects & Key Achievements"
          subtitle="Corporate & internal work — no public websites yet. Just starting my freelance journey."
          onClose={() => setOpen(false)}
        >
          <div className="modal-hl-grid">
            {highlights.map((h, i) => (
              <div className="hlc" key={i}>
                <div className="hlc-t">
                  <div>
                    <div className="nm">{h.name}</div>
                    <div className="og">{h.org}</div>
                  </div>
                </div>
                <p>{h.text}</p>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </>
  );
}
