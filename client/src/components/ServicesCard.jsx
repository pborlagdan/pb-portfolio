import { services } from "../data/content";
import Icon from "./Icon";

export default function ServicesCard() {
  const row1 = [...services, ...services];
  const row2 = [...services, ...services];

  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="sparkle" />
        </span>
        <h2>Services</h2>
      </div>
      <div className="csub">My services are tailored to your needs and budget</div>
      <div className="mq-wrap">
        <div className="mq-track mq-rtl">
          {row1.map((s, i) => (
            <span className="svc" key={i}>{s}</span>
          ))}
        </div>
        <div className="mq-track mq-ltr">
          {row2.map((s, i) => (
            <span className="svc" key={i}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
