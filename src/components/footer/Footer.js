import React from "react";
import {greeting, socialMediaLinks, contactInfo} from "../../portfolio";

const NAV_LINKS = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Experience", href: "#experience"},
  {label: "Work", href: "#github"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

function GitHubIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.5"
        y="3"
        width="11"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M1.5 4.5l5.5 3.5 5.5-3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-main">
        {/* Main footer row */}
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-sm font-bold text-gray-900">{greeting.name}</p>
            <p className="text-xs text-gray-400 mt-0.5">{greeting.eyebrow}</p>
          </div>

          {/* Nav */}
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3" aria-label="Social links">
            <a
              href={`mailto:${contactInfo.email}`}
              aria-label="Send email"
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 border border-border hover:text-accent hover:border-accent/40 transition-all duration-200"
            >
              <MailIcon />
            </a>
            {socialMediaLinks.github && (
              <a
                href={socialMediaLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 border border-border hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <GitHubIcon />
              </a>
            )}
            {socialMediaLinks.linkedin && (
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="w-8 h-8 flex items-center justify-center rounded-full text-gray-400 border border-border hover:text-accent hover:border-accent/40 transition-all duration-200"
              >
                <LinkedInIcon />
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border py-5 text-center">
          <p className="text-xs text-gray-300">
            &copy; {new Date().getFullYear()} {greeting.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
