import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  return (
    <section className="py-20 scroll-mt-20" id="experience">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">history_edu</span>
          <span>Track Record &amp; Foundation</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
          Education &amp; Experience
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          A record of professional experience and academic achievements.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 md:pl-8 space-y-12 before:absolute before:left-2 md:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-container-highest">
        {experiences.map((item) => {
          const isPrimary = item.accentColor === 'primary';
          const isSecondary = item.accentColor === 'secondary';

          const borderDotClass = isPrimary
            ? 'border-primary group-hover:bg-primary'
            : isSecondary
            ? 'border-secondary group-hover:bg-secondary'
            : 'border-outline group-hover:border-primary';

          const innerDotClass = isPrimary
            ? 'bg-primary-fixed'
            : isSecondary
            ? 'bg-secondary-fixed'
            : 'bg-outline';

          const orgClass = isPrimary
            ? 'text-primary'
            : isSecondary
            ? 'text-secondary'
            : 'text-on-surface-variant';

          return (
            <div key={item.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[27px] md:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-surface-dim border-2 ${borderDotClass} transition-colors flex items-center justify-center`}
              >
                <div className={`w-1.5 h-1.5 rounded-full ${innerDotClass}`}></div>
              </div>

              {/* Card */}
              <div className="rounded-xl bg-surface-container p-6 shadow-sm hover:bg-surface-container-high transition-colors border border-outline-variant/20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {item.role}
                  </h3>
                  <span className="font-label-sm text-label-sm text-secondary px-2.5 py-0.5 rounded bg-surface-container-highest w-fit">
                    {item.period}
                  </span>
                </div>
                <p className={`font-body-sm text-body-sm font-medium mb-3 ${orgClass}`}>
                  {item.organization} • {item.location}
                </p>
                <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed space-y-1.5">
                  {item.bullets.map((bullet, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {bullet.startsWith('•') ? bullet : `• ${bullet}`}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
