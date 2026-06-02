import React from "react";
import { stats } from "../data/content";
import Icon from "./Icon";

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s, i) => (
        <div className="stat" key={i}>
          <div className="n">
            {s.value}
            <span className="p">{s.suffix}</span>
          </div>
          <div className="l">
            <Icon name={s.icon} />
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
