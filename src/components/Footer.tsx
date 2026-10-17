import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 mt-space-xl">
      <div className="max-w-[1200px] mx-auto px-gutter-mobile md:px-gutter py-space-xl flex flex-col md:flex-row items-center justify-between gap-space-lg">
        {/* Brand & Stack Info */}
        <div className="flex flex-col items-center md:items-start gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-md text-label-md text-primary font-semibold">
              {profile.fullName} • {profile.degree}
            </span>
            <span className="text-outline-variant">/</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Teknik Informatika
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-outline text-center md:text-left">
            Built with React, TypeScript &amp; Tailwind CSS design system.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-space-lg font-label-sm text-label-sm text-on-surface-variant">
          <a className="hover:text-primary transition-colors" href="#home">
            HOME
          </a>
          <a className="hover:text-primary transition-colors" href="#projects">
            PROJECTS
          </a>
          <a
            aria-label="GitHub"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            href={profile.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SiGithub className="text-sm" />
            GITHUB
          </a>
          <a
            aria-label="LinkedIn"
            className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
            href={profile.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin className="text-sm" />
            LINKEDIN
          </a>
        </div>

        {/* Copyright */}
        <div className="font-label-sm text-label-sm text-outline">
          © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
