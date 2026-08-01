"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ImageLightboxProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ImageLightbox({
  src,
  alt,
  className = "",
  sizes = "(max-width: 850px) 100vw, 90vw",
  priority = false,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className={`lightbox-trigger ${className}`}
        onClick={() => setIsOpen(true)}
        aria-label={`${alt} 크게 보기`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="b2b-output-image b2b-output-image-contain"
        />

        <span className="lightbox-hint" aria-hidden="true">
          VIEW FULL IMAGE ↗
        </span>
      </button>

      {isOpen && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} 확대 이미지`}
          onClick={() => setIsOpen(false)}
        >
          <div className="lightbox-toolbar">
            <span className="lightbox-title">{alt}</span>

            <button
              ref={closeButtonRef}
              type="button"
              className="lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="확대 이미지 닫기"
            >
              CLOSE
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div
            className="lightbox-viewport"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-image-wrap">
              <img
                src={src}
                alt={alt}
                className="lightbox-full-image"
                draggable={false}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}