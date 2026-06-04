import { profile } from "../data/content";
import Icon, { LinkedInIcon } from "./Icon";

export default function ContactCTA() {
  return (
    <div className="card cta">
      <div className="cta-ic">
        <Icon name="users" />
      </div>
      <h2>Let's Work Together</h2>
      <p>
        and make your ideas come to <b>reality</b>
      </p>
      <div className="cta-links">
        <a href={`mailto:${profile.email}`} className="cl" title="Email">
          <Icon name="mail" />
        </a>
        <a href={`mailto:${profile.email}`} className="cl" title="Message">
          <Icon name="send" />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="cl"
          title="LinkedIn"
        >
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
