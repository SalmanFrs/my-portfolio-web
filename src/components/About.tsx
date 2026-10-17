import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = portfolioData;

  return (
    <section className="py-20 scroll-mt-20" id="about">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">person_pin</span>
          <span>Engineering Philosophy</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
          About Me &amp; Core Values
        </h2>
      </div>

      {/* Structured 2-Column Card Mosaic */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Professional Philosophy */}
        <div className="lg:col-span-7 rounded-2xl bg-surface-container p-8 shadow-md space-y-6 flex flex-col justify-between border border-outline-variant/20">
          <div className="space-y-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">
              {about.heading}
            </h3>
            {about.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'font-body-lg text-body-lg text-on-surface-variant leading-relaxed'
                    : 'font-body-md text-body-md text-outline leading-relaxed'
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-surface-container-highest">
            {about.specs.map((spec, idx) => (
              <div key={idx}>
                <span className="block font-label-sm text-label-sm text-outline">
                  {spec.label}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface font-medium">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Key Strengths Cards */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {about.strengths.map((item, idx) => {
            const iconColor =
              item.accentColor === 'secondary' ? 'text-secondary' : 'text-primary';
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-container-low shadow-sm flex flex-col justify-between border border-outline-variant/10 hover:border-outline-variant/30 hover:bg-surface-container transition-all"
              >
                <span className={`material-symbols-outlined ${iconColor} text-2xl mb-3`}>
                  {item.icon}
                </span>
                <div>
                  <h4 className="font-headline-sm text-body-md font-semibold text-on-surface mb-1">
                    {item.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-outline leading-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
