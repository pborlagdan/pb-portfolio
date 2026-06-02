import React from "react";
import { profile } from "./data/content";
import ProfileCard from "./components/ProfileCard";
import ServicesCard from "./components/ServicesCard";
import ProjectsCard from "./components/ProjectsCard";
import TechStack from "./components/TechStack";
import Stats from "./components/Stats";
import ContactCTA from "./components/ContactCTA";
import WorkProcess from "./components/WorkProcess";
import Highlights from "./components/Highlights";

export default function App() {
  return (
    <>
      <div className="glow" />
      <div className="wrap">
        <div className="grid">
          {/* LEFT */}
          <div className="col">
            <ProfileCard />
            <ServicesCard />
            <ProjectsCard />
          </div>

          {/* MIDDLE */}
          <div className="col">
            <TechStack />
            <Stats />
            <ContactCTA />
          </div>

          {/* RIGHT */}
          <div className="col">
            <WorkProcess />
            <Highlights />
          </div>
        </div>

        <footer className="foot">
          <p>
            Made with 💜 by <b>{profile.fullName}</b>
          </p>
          <p style={{ marginTop: ".25rem" }}>© 2026 All rights reserved · Davao City, PH</p>
        </footer>
      </div>
    </>
  );
}
