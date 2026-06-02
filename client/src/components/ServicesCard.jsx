import React from "react";
import { services } from "../data/content";
import Icon from "./Icon";

export default function ServicesCard() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="sparkle" />
        </span>
        <h2>Services</h2>
      </div>
      <div className="csub">What I can help you build &amp; ship</div>
      <div className="svcs">
        {services.map((s, i) => (
          <span className="svc" key={i}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}
