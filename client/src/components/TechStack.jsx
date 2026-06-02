import React from "react";
import { techStack } from "../data/content";
import Icon from "./Icon";

// converts "#61DAFB" -> "rgba(97,218,251,0.1)" for the tile background
function tint(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},0.1)`;
}

export default function TechStack() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="layers" />
        </span>
        <h2>My Tech Stack</h2>
      </div>
      <div className="csub">My favorite tech I use on my projects</div>
      <div className="stk-grid">
        {techStack.map((t, i) => (
          <div className="stk" key={i}>
            <div className="stk-ic" style={{ background: tint(t.color), color: t.color }}>
              {t.glyph}
            </div>
            <div>
              <div className="nm">{t.name}</div>
              <div className="vr">{t.note}</div>
            </div>
            <Icon name="arrowUpRight" className="x" />
          </div>
        ))}
      </div>
    </div>
  );
}
