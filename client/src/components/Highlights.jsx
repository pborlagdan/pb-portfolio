import { highlights } from "../data/content";
import Icon from "./Icon";

export default function Highlights() {
  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="message" />
        </span>
        <h2>Testimonials</h2>
      </div>
      <div className="csub">What my clients say about me</div>
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
      <a href="#" className="vall" style={{ marginTop: "1rem" }}>
        <Icon name="users" /> View All Testimonials
      </a>
    </div>
  );
}
