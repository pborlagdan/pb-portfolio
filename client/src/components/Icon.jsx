// Small reusable icon set (stroke style, matches the design).
// Usage: <Icon name="rocket" className="..." />
import React from "react";

const paths = {
  sparkle: <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4L12 17l-6.3 4.4L8 14 2 9.4h7.6z" />,
  briefcase: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </>
  ),
  layers: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
  users: (
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  ),
  award: <polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9" />,
  checkSquare: <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />,
  code: <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  flask: <path d="M9 2v6l-5 9a2 2 0 002 3h12a2 2 0 002-3l-5-9V2M7 2h10" />,
  rocket: (
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09zM12 15l-3-3a22 22 0 014-5.5C15.5 4 18 3 21 3c0 3-1 5.5-3.5 8a22 22 0 01-5.5 4z" />
  ),
  message: <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />,
  mail: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </>
  ),
  send: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
  arrowUpRight: <path d="M7 17L17 7M17 7H8M17 7v9" />,
  x: (
    <>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </>
  ),
};

export default function Icon({ name, className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || null}
    </svg>
  );
}

// LinkedIn is a filled logo, kept separate from the stroke set.
export function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 17V9.99H6.01V17h2.33zM7.18 8.86a1.35 1.35 0 100-2.7 1.35 1.35 0 000 2.7zM18 17v-3.84c0-2.05-.44-3.63-2.84-3.63-1.15 0-1.92.63-2.24 1.23h-.03V9.99H10.6V17h2.33v-3.47c0-.92.17-1.8 1.3-1.8 1.12 0 1.14 1.05 1.14 1.86V17H18z" />
    </svg>
  );
}
