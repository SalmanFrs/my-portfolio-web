import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { LinkedInIconLink, GitHubIconLink } from './SocialIcons';

export const Contact: React.FC = () => {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(profile.email)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        })
        .catch(() => {
          alert(`Email: ${profile.email}`);
        });
    } else {
      alert(`Email: ${profile.email}`);
    }
  };

  return (
    <section className="py-20 scroll-mt-20 mb-8" id="contact">
      {/* Call to Action Banner */}
      <div className="rounded-3xl bg-surface-container p-8 md:p-12 shadow-xl relative overflow-hidden border border-outline-variant/30">
        {/* Subtle Decorative Radial Highlight */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary-container/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>Open for Opportunities</span>
          </div>

          <h2 className="font-headline-xl text-headline-xl tracking-tight text-on-surface">
            Let’s Connect &amp; Collaborate
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            I am seeking entry-level opportunities in Data Science and Web Development. 
            I am open to full-time positions with on-site, hybrid, or remote working arrangements.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-on-primary font-body-md text-body-md font-semibold hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors shadow-md"
              href={`mailto:${profile.email}`}
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              <span>{profile.email}</span>
            </a>

            <button
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-surface-container-high text-on-surface font-body-md text-body-md hover:bg-surface-bright transition-colors border border-outline-variant/40 cursor-pointer"
              onClick={handleCopyEmail}
              type="button"
            >
              <span
                className={`material-symbols-outlined text-sm ${
                  copied ? 'text-primary' : 'text-secondary'
                }`}
              >
                {copied ? 'check' : 'content_copy'}
              </span>
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6 text-on-surface-variant font-label-sm text-label-sm">
            <LinkedInIconLink href={profile.linkedinUrl} label="LinkedIn Profile" />
            <span className="text-surface-container-highest">/</span>
            <GitHubIconLink href={profile.githubUrl} />
          </div>
        </div>
      </div>
    </section>
  );
};
