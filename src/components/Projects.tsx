import React, { useState, useEffect, useCallback } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';

interface ProjectImageCarouselProps {
  project: ProjectItem;
  images: string[];
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ project, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check user prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  // Autoplay every 5 seconds (paused on hover, focus, or reduced motion)
  useEffect(() => {
    if (images.length <= 1 || isHovered || isFocused || prefersReducedMotion) {
      return;
    }

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, isHovered, isFocused, prefersReducedMotion, nextSlide]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (images.length <= 1) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    }
  };

  const isMultiple = images.length > 1;

  return (
    <div
      role={isMultiple ? 'region' : undefined}
      aria-roledescription={isMultiple ? 'carousel' : undefined}
      aria-label={isMultiple ? `${project.title} screenshot carousel` : undefined}
      tabIndex={isMultiple ? 0 : undefined}
      onKeyDown={isMultiple ? handleKeyDown : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="relative w-full aspect-video overflow-hidden bg-surface-container-low border-b border-surface-container-highest group/carousel focus:outline-none focus:ring-1 focus:ring-primary/60"
    >
      {/* Sliding Images Container */}
      <div
        className={`flex w-full h-full ${
          prefersReducedMotion ? '' : 'transition-transform duration-500 ease-out'
        }`}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgSrc, idx) => (
          <div
            key={idx}
            className="w-full h-full flex-shrink-0 relative flex items-center justify-center bg-[#0e1117] overflow-hidden"
          >
            {/* Ambient subtle blurred backdrop to seamlessly fill any non-16:9 aspect ratios */}
            <img
              src={imgSrc}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-xl opacity-25 pointer-events-none scale-110"
              aria-hidden="true"
            />
            {/* Main high-clarity screenshot - perfectly framed and never cropped */}
            <img
              src={imgSrc}
              alt={`${project.title} - Screenshot ${idx + 1} of ${images.length}`}
              className="w-full h-full object-contain object-center relative z-0 transition-transform duration-500 group-hover/carousel:scale-105"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
      </div>

      {/* Subtle Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/90 via-surface-dim/15 to-surface-dim/60 pointer-events-none"></div>

      {/* Pipeline info removed */}

      {/* Navigation Arrows (only displayed if multiple images exist) */}
      {isMultiple && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-20 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-lg leading-none">chevron_left</span>
          </button>

          <button
            type="button"
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 group-focus-within/carousel:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-20 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined text-lg leading-none">chevron_right</span>
          </button>
        </>
      )}

      {/* Bottom Bar: Category, Indicators & Tag */}
      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between z-10">
        <span className="px-2 py-0.5 rounded bg-surface-dim/85 backdrop-blur-md font-label-sm text-label-sm text-outline border border-outline-variant/30 pointer-events-none">
          {project.category}
        </span>

        {/* Carousel Position Dots (only if multiple images) */}
        {isMultiple && (
          <div
            className="flex items-center gap-1.5 bg-surface-dim/80 backdrop-blur-md px-2 py-1 rounded-full border border-outline-variant/30"
            role="tablist"
            aria-label="Screenshot navigation dots"
          >
            {images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                role="tab"
                aria-selected={currentIndex === dotIdx}
                aria-label={`Slide ${dotIdx + 1} of ${images.length}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(dotIdx);
                }}
                className={`transition-all rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:ring-offset-surface-dim ${
                  currentIndex === dotIdx
                    ? 'w-4 h-1.5 bg-secondary'
                    : 'w-1.5 h-1.5 bg-outline-variant hover:bg-outline'
                }`}
              />
            ))}
          </div>
        )}

        {/* Project Tag / Private Badge */}
        <span
          className={`px-2 py-0.5 rounded backdrop-blur-md font-label-sm text-label-sm border pointer-events-none ${
            project.isPrivate || project.tagLabel === 'Private Project'
              ? 'bg-surface-container-high/90 text-primary border-primary/30 flex items-center gap-1'
              : 'bg-surface-container-highest/90 text-secondary border-secondary/20'
          }`}
        >
          {(project.isPrivate || project.tagLabel === 'Private Project') && (
            <span className="material-symbols-outlined text-[13px] leading-none">lock</span>
          )}
          {project.tagLabel}
        </span>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  const renderVisualPreview = (project: ProjectItem) => {
    switch (project.visualType) {
      case 'wave':
        return (
          <div className="absolute inset-x-0 bottom-4 px-4 flex items-center opacity-80 group-hover:opacity-100 transition-opacity">
            <svg className="w-full h-20 text-primary" fill="none" viewBox="0 0 300 80">
              <path
                d="M 0 50 Q 20 10, 40 50 T 80 50 T 120 20 T 160 70 T 200 45 T 240 10 T 280 60 L 300 40"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              ></path>
              <circle className="animate-pulse" cx="160" cy="70" fill="#adc6ff" r="4"></circle>
              <circle cx="240" cy="10" fill="#d0bcff" r="4"></circle>
            </svg>
          </div>
        );

      case 'terminal':
        return (
          <div className="font-code-inline text-label-sm text-on-surface-variant space-y-1.5 py-2 opacity-75 group-hover:opacity-100 transition-opacity">
            <p className="text-outline">&gt; const model = ibm.llm("granite-instruct");</p>
            <p className="text-secondary">&gt; const summary = await model.generate(payload);</p>
            <p className="text-on-surface">&gt; status: 200 OK [Response hydrated]</p>
          </div>
        );

      case 'bbox':
        return (
          <div className="relative w-full h-24 rounded bg-surface-container flex items-center justify-center overflow-hidden">
            <div className="w-28 h-14 border border-secondary rounded flex flex-col justify-between p-1">
              <span className="text-[9px] font-code-inline text-secondary font-bold">
                POTHOLE_DEFECT
              </span>
              <div className="flex justify-end">
                <span className="text-[8px] font-code-inline text-outline">bbox_detected</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-primary/5 pointer-events-none"></div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 scroll-mt-20" id="projects">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-12">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">terminal</span>
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
            Selected Projects &amp; Applications
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          A selection of projects showcasing practical applications of machine learning, data analysis, and modern web technologies.
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          // Normalize images: supports both images array and legacy image string
          const projectImages: string[] =
            project.images && project.images.length > 0
              ? project.images
              : project.image
              ? [project.image]
              : [];

          const hasImages = projectImages.length > 0;

          // Only show links if real URL is provided (not empty, "#", or placeholder)
          const hasLiveDemo = Boolean(
            project.liveDemoUrl &&
              project.liveDemoUrl.trim() !== '' &&
              project.liveDemoUrl !== '#' &&
              project.liveDemoUrl !== '#projects'
          );

          const hasGithub = Boolean(
            project.githubUrl &&
              project.githubUrl.trim() !== '' &&
              project.githubUrl !== '#' &&
              project.githubUrl !== 'https://github.com'
          );

          return (
            <div
              key={project.id}
              className="flex flex-col rounded-2xl bg-surface-container overflow-hidden shadow-lg hover:shadow-2xl transition-all group border border-outline-variant/20 hover:border-outline-variant/40"
            >
              {/* Top Section: Carousel (if multiple/single image) or Fallback Canvas Preview */}
              {hasImages ? (
                <ProjectImageCarousel project={project} images={projectImages} />
              ) : (
                /* Fallback Stitch Canvas Preview (for projects without screenshots) */
                <div className="p-4 bg-surface-container-low border-b border-surface-container-highest flex flex-col justify-between h-48 relative overflow-hidden">
                  <div className="flex items-center justify-between text-outline font-label-sm text-label-sm z-10">
                    <span className="flex items-center gap-1.5 text-secondary">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      {project.pipelineFile}
                    </span>
                    <span className="font-code-inline text-code-inline">{project.pipelineTag}</span>
                  </div>

                  {renderVisualPreview(project)}

                  <div className="flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-outline border border-outline-variant/20">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-label-sm text-label-sm">
                      {project.tagLabel}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div>
                    <span className="text-primary font-label-sm text-label-sm block mb-1">
                      {project.subtitle}
                    </span>
                    <h3 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, index) => {
                      const colorClass =
                        tech.colorVariant === 'primary'
                          ? 'text-primary'
                          : tech.colorVariant === 'secondary'
                          ? 'text-secondary'
                          : 'text-on-surface-variant';
                      return (
                        <span
                          key={index}
                          className={`px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm border border-outline-variant/10 ${colorClass}`}
                        >
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>

                  {/* Actions / Optional Links / Private Badge */}
                  {hasLiveDemo || hasGithub ? (
                    <div
                      className={`grid ${
                        hasLiveDemo && hasGithub ? 'grid-cols-2' : 'grid-cols-1'
                      } gap-3 pt-2`}
                    >
                      {hasLiveDemo && (
                        <a
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-primary-fixed-dim hover:text-on-primary-fixed transition-colors shadow-sm cursor-pointer"
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="material-symbols-outlined text-sm">visibility</span>
                          <span>Live Demo</span>
                        </a>
                      )}
                      {hasGithub && (
                        <a
                          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm hover:bg-surface-bright transition-colors border border-outline-variant/40"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="material-symbols-outlined text-sm text-outline">
                            code
                          </span>
                          <span>GitHub Repo</span>
                        </a>
                      )}
                    </div>
                  ) : project.isPrivate || project.tagLabel === 'Private Project' ? (
                    <div className="pt-2">
                      <div className="flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 text-outline font-label-sm text-label-sm">
                        <span className="flex items-center gap-1.5 text-on-surface-variant">
                          <span className="material-symbols-outlined text-sm text-secondary">
                            lock
                          </span>
                          <span>Private Repository</span>
                        </span>
                        <span className="font-code-inline text-[11px] text-outline">
                          Internal / Research
                        </span>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
