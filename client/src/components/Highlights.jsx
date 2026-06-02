import React from "react";
import { highlights } from "../data/content";
import Icon from "./Icon";

export default function Highlights() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="message" />
        </span>
        <h2>Highlights</h2>
      </div>
      <div className="csub">A few things I'm proud of building</div>
      <div className="hl">
        {highlights.map((h, i) => (
          <div className="hlc" key={i}>
            <div className="hlc-t">
              <div>
                <div className="nm">{h.name}</div>
                <div className="og">{h.org}</div>
              </div>
              <span className="st">★★★★★</span>
            </div>
            <p>{h.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
