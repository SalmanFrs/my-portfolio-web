import React, { useEffect, useCallback } from 'react';

export interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onIndexChange?: (index: number) => void;
  title?: string;
  altPrefix?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onIndexChange,
  title,
  altPrefix = 'Image',
}) => {
  const isMultiple = images.length > 1;

  const handlePrev = useCallback(() => {
    if (!isMultiple || !onIndexChange) return;
    onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  }, [currentIndex, images.length, isMultiple, onIndexChange]);

  const handleNext = useCallback(() => {
    if (!isMultiple || !onIndexChange) return;
    onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, images.length, isMultiple, onIndexChange]);

  // Handle ESC and Arrow keys
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];
  const altText = isMultiple
    ? `${title || altPrefix} - ${currentIndex + 1} of ${images.length}`
    : title || altPrefix;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ? `${title} Preview` : 'Image Preview'}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-surface-dim/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header / Bar */}
      <div
        className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 pointer-events-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 pointer-events-auto">
          {title && (
            <h4 className="font-headline-sm text-sm sm:text-base text-on-surface font-medium max-w-[200px] sm:max-w-md truncate drop-shadow-md">
              {title}
            </h4>
          )}
          {isMultiple && (
            <span className="px-2.5 py-1 rounded-full bg-surface-container/80 backdrop-blur-md font-code-inline text-xs text-on-surface border border-outline-variant/30 shadow-sm">
              {currentIndex + 1} / {images.length}
            </span>
          )}
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="pointer-events-auto w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-surface-container/80 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage}
          alt={altText}
          className="max-w-full max-h-[82vh] object-contain select-none rounded-lg shadow-2xl transition-all duration-200"
        />

        {/* Previous Button (if multiple images) */}
        {isMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xl cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
        )}

        {/* Next Button (if multiple images) */}
        {isMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-surface-dim/85 hover:bg-surface-container-high text-on-surface border border-outline-variant/40 flex items-center justify-center transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-xl cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        )}
      </div>

      {/* Bottom Hint on Desktop */}
      <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-surface-container/60 backdrop-blur-md text-[11px] font-body-sm text-outline border border-outline-variant/20">
          Press <kbd className="font-code-inline text-on-surface">ESC</kbd> to close
          {isMultiple && (
            <>
              , <kbd className="font-code-inline text-on-surface">←</kbd> /{' '}
              <kbd className="font-code-inline text-on-surface">→</kbd> to navigate
            </>
          )}
        </span>
      </div>
    </div>
  );
};
