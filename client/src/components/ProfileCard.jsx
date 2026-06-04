import { profile } from "../data/content";
import Icon, { LinkedInIcon } from "./Icon";

export default function ProfileCard({ onResumeClick }) {
  return (
    <div className="card">
      <div className="ptop">
        <div className="avatar">
          {profile.avatarImage ? (
            <img src={profile.avatarImage} alt={profile.fullName} />
          ) : (
            profile.avatarInitials
          )}
        </div>
        <div>
          {profile.available && (
            <span className="pavail">
              <span className="d" />
              Available To Work
            </span>
          )}
          <div className="pname">{profile.name}</div>
          <div className="prole">
            I'm a <b>{profile.role}</b>
          </div>
        </div>
      </div>

      <div className="pills">
        {profile.pills.map((p, i) => (
          <div className="pill" key={i}>
            <span className="e">{p.icon}</span> {p.label}
          </div>
        ))}
      </div>

      <div className="pbtns">
        <a href={`mailto:${profile.email}`} className="pbtn pbtn-fill">
          ✉ Hire Me
        </a>
        {profile.github ? (
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="pbtn pbtn-gho">
            <Icon name="code" /> GitHub
          </a>
        ) : (
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="pbtn pbtn-gho">
            <LinkedInIcon /> LinkedIn
          </a>
        )}
      </div>

      <button
        type="button"
        className="pbtn pbtn-gho"
        style={{ width: "100%", marginTop: ".75rem" }}
        onClick={onResumeClick}
      >
        <Icon name="briefcase" /> View Resume
      </button>
    </div>
  );
}
