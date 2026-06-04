import { useEffect } from "react";
import { profile } from "../data/content";

export default function Resume({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="resume-overlay">
      {/* Action bar */}
      <div className="resume-bar no-print">
        <button type="button" className="resume-back" onClick={onClose}>
          ← Back to Portfolio
        </button>
        <button type="button" className="resume-print" onClick={() => window.print()}>
          🖨 Print / Save as PDF
        </button>
      </div>

      {/* Scrollable area */}
      <div className="resume-scroll">
        <div className="resume-paper">

          {/* ── HEADER ── */}
          <div className="rv-header">
            <h1>{profile.fullName.toUpperCase()}</h1>
            <p className="rv-role">{profile.role}</p>
            <p className="rv-contact">
              Davao City, Philippines &nbsp;·&nbsp; {profile.phone} &nbsp;·&nbsp;
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              &nbsp;·&nbsp;
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              {profile.github && (
                <>&nbsp;·&nbsp;<a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></>
              )}
            </p>
          </div>

          {/* ── SUMMARY ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Professional Summary</h2>
            <p className="rv-body">
              Highly accomplished Full Stack Software Engineer with nearly a decade of experience architecting,
              developing, and optimizing high-scale e-commerce applications and enterprise tools across five global
              fashion brands. Proven track record managing complex multi-brand environments, integrating intricate
              third-party APIs, and leveraging AWS cloud infrastructure to boost platform reliability and performance.
              Adept at bridging front-end user experiences with scalable back-end architecture while thriving in
              collaborative, fast-paced corporate environments. Currently exploring freelance opportunities to apply
              deep engineering expertise to new challenges.
            </p>
          </div>

          {/* ── SKILLS ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Technical Skills</h2>
            <div className="rv-skills">
              <div className="rv-skill-row">
                <span className="rv-skill-label">Languages</span>
                <span>PHP, JavaScript (ES6+), Python, Node.js, ColdFusion, HTML5, CSS3, MSSQL, MySQL</span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Frameworks & Libraries</span>
                <span>ReactJS, jQuery, AJAX</span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Cloud & DevOps</span>
                <span>AWS (CloudFormation, S3, Elastic Beanstalk, Lambda, Secrets Manager), Git</span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Database</span>
                <span>Snowflake, Microsoft SQL Server, MySQL — optimization, stored procedures, schema design</span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">API & Integrations</span>
                <span>Google Tag Manager, SailThru, Iterable, Smartly, ElasticSearch, ProductsUp, Product Feed</span>
              </div>
              <div className="rv-skill-row">
                <span className="rv-skill-label">Systems</span>
                <span>Internal CMS, Admin Consoles, Asset Management, Warehouse Systems, Promo Tools, Scheduled Jobs</span>
              </div>
            </div>
          </div>

          {/* ── EXPERIENCE ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Professional Experience</h2>

            <div className="rv-job">
              <div className="rv-job-header">
                <div>
                  <div className="rv-company">Gray Lemon Tech.</div>
                  <div className="rv-job-title">Full Stack Software Engineer — Key Initiative Tech Team</div>
                </div>
                <div className="rv-job-meta">
                  <div>Davao City, Philippines</div>
                  <div>August 2022 – Present</div>
                </div>
              </div>
              <ul className="rv-bullets">
                <li><strong>Multi-Brand Architecture:</strong> Lead and maintain global full-stack functionality across five major e-commerce brands under TechStyle: JustFab, Fabletics, FabKids, ShoeDazzle, and Savage X Fenty.</li>
                <li><strong>Internal Tooling:</strong> Engineered a custom Asset Management Tool in ReactJS, significantly improving operational workflows and reducing manual effort across all brands.</li>
                <li><strong>Cloud Architecture:</strong> Architected and managed secure, scalable AWS ecosystems using CloudFormation, Lambda, S3, Elastic Beanstalk, and Secrets Manager ensuring zero-downtime deployments.</li>
                <li><strong>Infrastructure & Automation:</strong> Built Python-based monitoring scripts and automation jobs to track system health, surface anomalies, and automate repetitive operational tasks.</li>
                <li><strong>Core Platform Systems:</strong> Developed and maintained internal CMS, administrative consoles, warehouse management integrations, promo tools, and scheduled job pipelines.</li>
                <li><strong>API Integrations:</strong> Architected critical third-party integrations including ElasticSearch, GTM, SailThru, Iterable, Smartly, and ProductsUp across all brands.</li>
                <li><strong>Database Management:</strong> Designed database schemas, stored procedures, and managed SQL-based data operations across multi-brand platforms.</li>
                <li><strong>A/B Testing:</strong> Implemented and supported A/B testing frameworks driving data-driven product decisions across brands.</li>
              </ul>
            </div>

            <div className="rv-job">
              <div className="rv-job-header">
                <div>
                  <div className="rv-company">AWESOMEOS Phil.</div>
                  <div className="rv-job-title">Full Stack Software Engineer — Shared Ecom Tech Team</div>
                </div>
                <div className="rv-job-meta">
                  <div>Davao City, Philippines</div>
                  <div>August 2016 – August 2022</div>
                </div>
              </div>
              <ul className="rv-bullets">
                <li><strong>Global Feature Deployment:</strong> Spearheaded core full-stack features and critical user journeys for five international e-commerce platforms.</li>
                <li><strong>API Management:</strong> Built and scaled data-driven integrations with third-party service providers, improving application performance and marketing automation workflows.</li>
                <li><strong>Database Admin & GUI:</strong> Optimized database schemas, managed content configurations via internal CMS, and designed high-fidelity graphical user interfaces.</li>
              </ul>
            </div>

            <div className="rv-job">
              <div className="rv-job-header">
                <div>
                  <div className="rv-company">University of the Immaculate Conception</div>
                  <div className="rv-job-title">Web Developer Intern</div>
                </div>
                <div className="rv-job-meta">
                  <div>Davao City, Philippines</div>
                  <div>April 2015 – June 2015</div>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Designed and initiated development for the university's official web platform.</li>
                <li>Maintained computer laboratory infrastructure and oversaw software update deployments.</li>
              </ul>
            </div>
          </div>

          {/* ── PROJECT & THESIS ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Project & Thesis</h2>
            <div className="rv-job">
              <div className="rv-job-header">
                <div>
                  <div className="rv-company">Three-Parent In Vitro Fertilization Integrated Genetic Algorithm for Conflict Resolution</div>
                  <div className="rv-job-title">Lead Developer / Researcher</div>
                </div>
                <div className="rv-job-meta">
                  <div>June 2015 – March 2016</div>
                </div>
              </div>
              <ul className="rv-bullets">
                <li>Researched and built a custom hybrid Genetic Algorithm mimicking biological IVF concepts to resolve scheduling overlaps.</li>
                <li>Proved increased efficiency in conflict resolution for generating complex academic class timetables within secondary school systems.</li>
              </ul>
            </div>
          </div>

          {/* ── EDUCATION ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Education</h2>
            <div className="rv-job">
              <div className="rv-job-header">
                <div>
                  <div className="rv-company">Bachelor of Science in Computer Science</div>
                  <div className="rv-job-title">University of the Immaculate Conception, Davao City</div>
                </div>
                <div className="rv-job-meta">
                  <div>2012 – 2016</div>
                </div>
              </div>
            </div>
          </div>

          {/* ── AFFILIATIONS ── */}
          <div className="rv-section">
            <h2 className="rv-section-title">Affiliations</h2>
            <ul className="rv-bullets">
              <li>Member, Davao DeFi Community (2023 – Present)</li>
              <li>Member, Philippine Society of Information Technology Students (PSITS)</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
