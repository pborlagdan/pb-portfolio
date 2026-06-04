// ============================================================
//  EDIT YOUR PORTFOLIO HERE
//  All text, links, and numbers live in this one file.
//  Change anything below and the site updates automatically.
// ============================================================

export const profile = {
  name: "Paul Jason",                 // shown big under the avatar
  fullName: "Paul Jason Borlagdan",   // used in the footer
  role: "Full Stack Software Engineer",
  avatarInitials: "PB",               // used if no photo is set
  avatarImage: "public/ptitlehead.jpg",     // e.g. "/avatar.jpg" (put the file in client/public)
  available: true,                    // toggles the green "Available To Work" pill
  phone: "+63 9176265182",
  email: "paulkezo1008@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-jason-borlagdan-a40a7518a/",
  github: "https://github.com/pborlagdan",
  pills: [
    { icon: "💬", label: "English & Filipino" },
    { icon: "📍", label: "Philippines" },
    { icon: "🌐", label: "UTC+8" },
    { icon: "☕", label: "Coffee Addict" },
    { icon: "🏢", label: "Corporate" },
    { icon: "🌱", label: "New to Freelancing" },
    { icon: "🏆", label: "9y+ exp" },
  ],
};

export const services = [
  "Internal Tooling",
  "API Integrations",
  "Email Automation",
  "Database Architecture",
  "Cloud / AWS Setup",
  "Product Systems",
  "Scheduled Jobs",
  "CMS & Console",
  "Warehouse Systems",
];

export const projects = [
  {
    badge: "MULTI-BRAND SCALE",
    title: "TechStyle",
    glow: "var(--primary)",
    x: "18%",
    y: "28%",
  },
  {
    badge: "ASSET MANAGEMENT TOOL",
    title: "TechStyle",
    glow: "#f0a8d8",
    x: "auto",
    right: "8%",
    y: "38%",
  },
  {
    badge: "APIs & DATA INTEGRATIONS",
    title: "TechStyle",
    glow: "#a8d8f0",
    x: "20%",
    y: "40%",
  },
  {
    badge: "DATABASE MANAGEMENT",
    title: "TechStyle",
    glow: "#a8f0c6",
    x: "auto",
    right: "12%",
    y: "30%",
  },
  {
    badge: "AWS INFRASTRACTURE",
    title: "TechStyle",
    glow: "#a8f0c6",
    x: "auto",
    right: "12%",
    y: "30%",
  },
  {
    badge: "MONITORING & AUTOMATION",
    title: "TechStyle",
    glow: "#a8f0c6",
    x: "auto",
    right: "12%",
    y: "30%",
  },
  {
    badge: "INTERNAL CONSOLE",
    title: "TechStyle",
    glow: "#a8f0c6",
    x: "auto",
    right: "12%",
    y: "30%",
  },
  {
    badge: "CMS DEVELOPMENT",
    title: "TechStyle",
    glow: "#a8f0c6",
    x: "auto",
    right: "12%",
    y: "30%",
  },
];

// color = the brand color; the tile gets that color at 10% opacity behind the glyph
export const techStack = [
  { name: "ReactJS",   note: "Frontend",          glyph: "⚛", color: "#61DAFB" },
  { name: "PHP",       note: "Backend",           glyph: "🐘", color: "#777BB4" },
  { name: "Node.js",   note: "v20.17",            glyph: "⬢", color: "#339933" },
  { name: "AWS",       note: "Lambda · S3 · CF",  glyph: "☁", color: "#F5961E" },
  { name: "Python",    note: "Automation",        glyph: "🐍", color: "#3776AB" },
  { name: "Snowflake", note: "Data Warehouse",    glyph: "❄", color: "#38BDF8" },
  { name: "ColdFusion", note: "Backend/Frontend", glyph: "CF", color: "#38BDF8" },
  { name: "SQL",        note: "Database",         glyph: "SQL", color: "#38BDF8" },
];

export const stats = [
  { value: "5",  suffix: "+", label: "Brands",   icon: "users"     },
  { value: "9", suffix: "+", label: "Yrs Exp.",  icon: "award"     },
  { value: "19", suffix: "+", label: "Projects",  icon: "briefcase" },
];

export const workProcess = [
  {
    num: "#1",
    title: "Gather Requirements",
    icon: "users",
    desc: "Align with stakeholders on goals, constraints, and integration needs.",
  },
  {
    num: "#2",
    title: "Design & Architect",
    icon: "code",
    desc: "Plan the system design, data flow, and API contracts before writing a line.",
  },
  {
    num: "#3",
    title: "Build & Integrate",
    icon: "flask",
    desc: "Develop, connect third-party services, and wire up automated jobs.",
  },
  {
    num: "#4",
    title: "Test & Deploy",
    icon: "rocket",
    desc: "QA across environments, then ship with confidence to production.",
  },
];

export const highlights = [
  {
    name: "Multi-brand Scale",
    org: "TechStyle",
    text: "Engineered and maintained platform services across Savage X Fenty, Fabletics, JustFab, ShoeDazzle and FabKids global fashion brands, ensuring consistent reliability and data integrity.",
  },
  {
    name: "Asset Management Tool",
    org: "TechStyle",
    text: "Built a React-based internal Asset Management System that centralized brand assets and cut manual workflows significantly.",
  },
  {
    name: "3rd Party APIs & Data Integrations",
    org: "TechStyle",
    text: "Architected critical integrations connecting internal platforms and external APIs across all brands.",
  },
  {
    name: "Database Management",
    org: "TechStyle",
    text: "Architected database structure design and stored procedure using SQL",
  },
  {
    name: "AWS Cloud Infrastructure",
    org: "Techstyle",
    text: "Designed and managed AWS ecosystems — Lambda, S3, CloudFront, and IAM — ensuring zero-downtime deployments and secure, scalable infrastructure across all brands.",
  },
  {
    name: "Python Monitoring & Automation",
    org: "TechStyle",
    text: "Built Python-based monitoring scripts and automation jobs to track system health, alert on anomalies, and automate repetitive operational tasks across brand environments.",
  },
  {
    name: "Internal Console",
    org: "TechStyle",
    text: "Developed and maintained an internal Console used across teams to manage brand configurations, operational settings, and platform-wide controls in one centralized interface.",
  },
  {
    name: "CMS Development",
    org: "TechStyle",
    text: "Built and maintained the Content Management System powering multi-brand content workflows, enabling non-technical teams to manage and publish content across Savage X Fenty, Fabletics, JustFab, ShoeDazzle and FabKids.",
  },
];
