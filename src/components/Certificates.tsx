import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import type { CertificationItem } from '../types/portfolio';
import { ImageModal } from './ImageModal';

interface CertificateCardProps {
  cert: CertificationItem;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ cert }) => {
  const images = cert.imagesUrl && cert.imagesUrl.length > 0
    ? cert.imagesUrl
    : cert.imageUrl
    ? [cert.imageUrl]
    : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMultiple = images.length > 1;

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsModalOpen(true);
      return;
    }
    if (!isMultiple) return;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const isPrimary = cert.accentColor === 'primary';
  const accentTextClass = isPrimary ? 'text-primary' : 'text-secondary';
  const accentBorderClass = isPrimary
    ? 'hover:border-primary/40'
    : 'hover:border-secondary/40';

  const hasLink = Boolean(cert.credentialUrl);
  const linkUrl = cert.credentialUrl;
  const linkLabel = 'View Credential';

  const currentImage = images[currentIndex];
  const altText = isMultiple
    ? `${cert.name} - Page ${currentIndex + 1} of ${images.length}`
    : cert.name;

  return (
    <div
      className={`group rounded-xl bg-surface-container border border-outline-variant/20 ${accentBorderClass} transition-all duration-200 overflow-hidden flex flex-col`}
    >
      {/* Image Area / Lightbox Trigger */}
      {images.length === 0 ? (
        <div className="relative w-full aspect-[16/10] bg-surface-container-low overflow-hidden">
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <span className={`material-symbols-outlined text-4xl ${accentTextClass} opacity-40`}>
              verified
            </span>
            <span className="font-label-sm text-label-sm text-outline/60 text-center px-4">
              {cert.issuer}
            </span>
          </div>
        </div>
      ) : (
        <div
          role="button"
          tabIndex={0}
          aria-label={`Preview ${cert.name}`}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={handleKeyDown}
          className="relative w-full aspect-[16/10] bg-[#0c0f14] overflow-hidden group/slider select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/80"
        >
          {/* Subtle ambient blurred background */}
          <img
            src={currentImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-md opacity-20 pointer-events-none scale-105"
          />

          {/* Main image with object-contain */}
          <div className="relative w-full h-full flex items-center justify-center p-2.5 z-0">
            <img
              alt={altText}
              className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
              loading="lazy"
              src={currentImage}
            />
          </div>

          {/* Hover zoom icon badge */}
          <div className="absolute inset-0 bg-surface-dim/20 opacity-0 group-hover/slider:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="w-10 h-10 rounded-full bg-surface-dim/80 backdrop-blur-md border border-outline-variant/30 flex items-center justify-center text-on-surface shadow-md">
              <span className="material-symbols-outlined text-xl">zoom_in</span>
            </span>
          </div>

          {/* Slider controls: only shown if multiple images */}
          {isMultiple && (
            <>
              {/* Position indicator pill */}
              <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded-full bg-surface-dim/85 backdrop-blur-md text-[11px] font-code-inline text-on-surface border border-outline-variant/30 pointer-events-none shadow-sm">
                {currentIndex + 1} / {images.length}
              </div>

              {/* Navigation buttons */}
              <button
                type="button"
                aria-label="Previous image"
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 min-w-[36px] min-h-[36px] sm:w-8 sm:h-8 rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center opacity-90 sm:opacity-0 group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10 cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base leading-none">chevron_left</span>
              </button>

              <button
                type="button"
                aria-label="Next image"
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 min-w-[36px] min-h-[36px] sm:w-8 sm:h-8 rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center opacity-90 sm:opacity-0 group-hover/slider:opacity-100 group-focus-within/slider:opacity-100 transition-opacity focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary z-10 cursor-pointer shadow-md"
              >
                <span className="material-symbols-outlined text-base leading-none">chevron_right</span>
              </button>
            </>
          )}
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Issuer */}
        <span className={`font-label-sm text-label-sm ${accentTextClass} uppercase tracking-wider`}>
          {cert.issuer}
        </span>

        {/* Certificate Name */}
        <h3 className="font-headline-sm text-body-md text-on-surface font-semibold leading-snug">
          {cert.name}
        </h3>

        {/* Date */}
        <span className="font-code-inline text-[11px] text-outline leading-tight">
          {cert.issuedYear}
        </span>

        {/* Credential ID */}
        {cert.credentialId && (
          <span className="font-code-inline text-[11px] text-on-surface-variant/70 break-all">
            ID: {cert.credentialId}
          </span>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* Action Button */}
        {hasLink && linkUrl && (
          <a
            className={`inline-flex items-center justify-center gap-1.5 mt-1 px-3.5 py-2 rounded-lg text-body-sm font-body-sm font-medium transition-colors border border-outline-variant/30 hover:border-outline-variant/60 ${accentTextClass} hover:bg-surface-container-high focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim`}
            href={linkUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-base">open_in_new</span>
            {linkLabel}
          </a>
        )}
      </div>

      {/* Synchronized Image Lightbox Modal */}
      {images.length > 0 && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          images={images}
          currentIndex={currentIndex}
          onIndexChange={(newIndex) => setCurrentIndex(newIndex)}
          title={cert.name}
          altPrefix={cert.name}
        />
      )}
    </div>
  );
};

export const Certificates: React.FC = () => {
  const { certifications } = portfolioData;

  return (
    <section className="py-20 scroll-mt-20" id="certificates">
      {/* Header */}
      <div className="flex flex-col space-y-2 mb-14">
        <div className="inline-flex items-center gap-2 font-label-sm text-label-sm text-primary uppercase tracking-widest">
          <span className="material-symbols-outlined text-sm">workspace_premium</span>
          <span>Credentials &amp; Certifications</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg tracking-tight text-on-surface">
          Certificates
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
          Industry-recognized certifications and professional credentials earned through coursework and assessments.
        </p>
      </div>

      {/* Certificate Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <CertificateCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  );
};
