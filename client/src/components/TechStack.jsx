import { techStack } from "../data/content";
import Icon from "./Icon";

function tint(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},0.1)`;
}

function StkItem({ t }) {
  return (
    <div className="stk">
      <div className="stk-ic" style={{ background: tint(t.color), color: t.color }}>
        {t.glyph}
      </div>
      <div>
        <div className="nm">{t.name}</div>
        <div className="vr">{t.note}</div>
      </div>
      <Icon name="arrowUpRight" className="x" />
    </div>
  );
}

export default function TechStack() {
  const row1 = [...techStack, ...techStack];
  const row2 = [...techStack, ...techStack];

  return (
    <div className="card">
      <div className="ch">
        <span className="ch-ic">
          <Icon name="layers" />
        </span>
        <h2>My Tech Stack</h2>
      </div>
      <div className="csub">My favorite tech I use on my projects</div>
      <div className="mq-wrap stk-mq">
        <div className="mq-track mq-rtl">
          {row1.map((t, i) => <StkItem key={i} t={t} />)}
        </div>
        <div className="mq-track mq-ltr">
          {row2.map((t, i) => <StkItem key={i} t={t} />)}
        </div>
      </div>
    </div>
  );
}
