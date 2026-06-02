// ============================================================
//  EDIT YOUR PORTFOLIO HERE
//  All text, links, and numbers live in this one file.
//  Change anything below and the site updates automatically.
// ============================================================

export const profile = {
  name: "Paul Jason",                 // shown big under the avatar
  fullName: "Paul Jason Borlagdan",   // used in the footer
  role: "Full Stack Developer",
  avatarInitials: "PB",               // used if no photo is set
  avatarImage: "/ptitlehead.jpg",     // e.g. "/avatar.jpg" (put the file in client/public)
  available: true,                    // toggles the green "Available To Work" pill
  email: "paulkezo1008@gmail.com",
  linkedin: "https://www.linkedin.com/in/paul-jason-borlagdan-a40a7518a/",
  github: "",                         // optional; leave "" to hide the GitHub button
  pills: [
    { icon: "💬", label: "English & Filipino" },
    { icon: "📍", label: "Philippines" },
    { icon: "🌐", label: "UTC+8" },
    { icon: "☕", label: "Coffee Addict" },
    { icon: "🧑‍💻", label: "Freelancer" },
    { icon: "🏆", label: "~10y exp" },
  ],
};

export const services = [
  "Web Development",
  "E-commerce Builds",
  "API Integrations",
  "Cloud / AWS Setup",
  "Performance Tuning",
  "Database Optimization",
  "Internal Tooling",
];

export const projects = [
  { badge: "E-COMMERCE", title: "Multi-brand Platform", glow: "var(--primary)", x: "18%", y: "28%" },
  { badge: "TOOL", title: "Asset Manager · React", glow: "#f0a8d8", x: "auto", right: "8%", y: "38%" },
];
export const projectsLink = "#"; // link for "View All Projects"

// color = the brand color; the tile gets that color at 10% opacity behind the glyph
export const techStack = [
  { name: "ReactJS", note: "Frontend", glyph: "⚛", color: "#61DAFB" },
  { name: "PHP", note: "Backend", glyph: "🐘", color: "#777BB4" },
  { name: "Node.js", note: "v20.17", glyph: "⬢", color: "#339933" },
  { name: "AWS", note: "Lambda · S3 · CF", glyph: "☁", color: "#F5961E" },
  { name: "Python", note: "Automation", glyph: "🐍", color: "#3776AB" },
  { name: "Snowflake", note: "Data", glyph: "❄", color: "#38BDF8" },
];

export const stats = [
  { value: "19", suffix: "+", label: "Projects", icon: "briefcase" },
  { value: "5", suffix: "+", label: "Brands", icon: "users" },
  { value: "10", suffix: "+", label: "Yrs Exp.", icon: "award" },
];

export const workProcess = [
  { num: "#1", title: "Project Brief", icon: "users", desc: "We will discuss your project and its goals." },
  { num: "#2", title: "Design & Develop", icon: "code", desc: "I will design and develop your website according to your needs." },
  { num: "#3", title: "Testing & Review", icon: "flask", desc: "I will let you test the website and make any changes if needed." },
  { num: "#4", title: "Launch", icon: "rocket", desc: "I will give you the source code and help you with the launch." },
];

export const highlights = [
  { name: "Cloud Architecture", org: "Gray Lemon Tech", text: "Architected secure, scalable AWS ecosystems with zero-downtime reliability across five global brands." },
  { name: "Internal Tooling", org: "TechStyle", text: "Built a custom ReactJS Asset Management Tool that streamlined internal workflows." },
  { name: "API Integrations", org: "5 platforms", text: "Scaled integrations (ElasticSearch, SailThru, GTM) lifting performance & automation." },
  { name: "Multi-brand Lead", org: "TechStyle", text: "Lead full-stack work across JustFab, Fabletics, FabKids, ShoeDazzle & Savage X Fenty." },
];
