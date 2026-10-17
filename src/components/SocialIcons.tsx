import React from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

interface SocialIconLinkProps {
  href: string;
  label: string;
  icon: React.ReactElement;
  className?: string;
}

/**
 * Reusable social icon link with accessibility attributes.
 * Opens in a new tab with security attributes.
 */
export const SocialIconLink: React.FC<SocialIconLinkProps> = ({
  href,
  label,
  icon,
  className = "",
}) => (
  <a
    aria-label={label}
    className={`inline-flex items-center gap-1.5 hover:text-primary transition-colors ${className}`}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <span className="text-base flex items-center">{icon}</span>
  </a>
);

/** GitHub brand icon link */
export const GitHubIconLink: React.FC<{ href: string; showLabel?: boolean; label?: string; className?: string }> = ({
  href,
  showLabel = true,
  label = "GITHUB",
  className = "",
}) => (
  <a
    aria-label="GitHub"
    className={`inline-flex items-center gap-1.5 hover:text-primary transition-colors ${className}`}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <SiGithub className="text-base" />
    {showLabel && <span>{label}</span>}
  </a>
);

/** LinkedIn brand icon link */
export const LinkedInIconLink: React.FC<{ href: string; showLabel?: boolean; label?: string; className?: string }> = ({
  href,
  showLabel = true,
  label = "LINKEDIN",
  className = "",
}) => (
  <a
    aria-label="LinkedIn"
    className={`inline-flex items-center gap-1.5 hover:text-primary transition-colors ${className}`}
    href={href}
    rel="noopener noreferrer"
    target="_blank"
  >
    <FaLinkedin className="text-base" />
    {showLabel && <span>{label}</span>}
  </a>
);
