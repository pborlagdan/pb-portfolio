import { useState } from "react";
import { highlights } from "../data/content";
import Icon from "./Icon";
import Modal from "./Modal";

export default function Highlights() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">
        <div className="ch">
          <span className="ch-ic">
            <Icon name="message" />
          </span>
          <h2>Key Achievements</h2>
        </div>
        <div className="csub">Notable work I'm proud of delivering</div>
        <div className="hl-clip">
          <div className="hl">
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
          <div className="hl-fade" />
          <div className="hl-cta">
            <button
              type="button"
              className="pbtn pbtn-fill"
              style={{ padding: "0 1.25rem", height: "2.5rem" }}
              onClick={() => setOpen(true)}
            >
              <Icon name="award" /> View All Achievements
            </button>
          </div>
        </div>
      </div>

      {open && (
        <Modal
          title="Key Achievements"
          subtitle="Notable work I'm proud of delivering"
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
