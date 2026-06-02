import React, { useState } from "react";
import { profile } from "../data/content";
import Icon, { LinkedInIcon } from "./Icon";

export default function ContactCTA() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", msg: "" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus({ state: "ok", msg: data.message || "Thanks! I'll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ state: "error", msg: err.message });
    }
  };

  return (
    <div className="card cta">
      <div className="cta-ic">
        <Icon name="users" />
      </div>
      <h2>Let's Work Together</h2>
      <p>
        and make your ideas come to <b>real</b>
      </p>

      <form className="cform" onSubmit={onSubmit}>
        <div className="cform-row">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={onChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={3}
          value={form.message}
          onChange={onChange}
          required
        />
        <button type="submit" className="cform-btn" disabled={status.state === "sending"}>
          {status.state === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status.state === "ok" && <div className="cform-status ok">{status.msg}</div>}
        {status.state === "error" && <div className="cform-status err">{status.msg}</div>}
      </form>

      <div className="cta-links">
        <a href={`mailto:${profile.email}`} className="cl" title="Email">
          <Icon name="mail" />
        </a>
        <a href={`mailto:${profile.email}`} className="cl" title="Message">
          <Icon name="send" />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="cl" title="LinkedIn">
          <LinkedInIcon />
        </a>
      </div>
    </div>
  );
}
