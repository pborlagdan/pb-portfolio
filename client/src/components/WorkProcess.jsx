import React from "react";
import { workProcess } from "../data/content";
import Icon from "./Icon";

export default function WorkProcess() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="checkSquare" />
        </span>
        <h2>Work Process</h2>
      </div>
      <div className="csub">The work process explained in 4 simple steps</div>
      <div className="steps">
        {workProcess.map((s, i) => (
          <div className="step" key={i}>
            <div className="step-ic">
              <Icon name={s.icon} />
            </div>
            <div className="step-b">
              <div className="step-h">
                <h3>{s.title}</h3>
                <span className="num">{s.num}</span>
              </div>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
