import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { getSkillIcon } from '../data/skillIcons';

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  return (
    <section className="py-20 scroll-mt-20" id="skills">
      {/* Section Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">memory</span>
          <span>Competencies &amp; Tech Stack</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
          Technical Skills & Tools.
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          A versatile skill set built through data science projects, research, and web application development.
        </p>
      </div>

      {/* Grid of Skill Disciplines */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((category) => (
          <div
            key={category.id}
            className={`rounded-xl bg-surface-container p-6 shadow-sm hover:bg-surface-container-high transition-all flex flex-col justify-between border border-outline-variant/20 ${
              category.colSpan ? category.colSpan : ''
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  {category.title}
                </span>
                <span className="material-symbols-outlined text-primary text-xl">
                  {category.icon}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-outline mb-6">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, index) => {
                const icon = getSkillIcon(skill.name);
              
                return (
                  <span
                    key={index}
                    className="group relative inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm border border-outline-variant/20 hover:bg-outline-variant/15 hover:border-outline-variant/60 transition-colors duration-200"
                    title={skill.name}
                  >
                    <span className="text-on-surface-variant text-[15px] flex-shrink-0 flex items-center">
                      {icon}
                    </span>
                    <span>{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
