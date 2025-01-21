'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { createTiltEffect } from '../utils/tilt';
import type { SlideData } from '../types/slider';
import styles from './image-slider.module.css';

interface ImageSliderProps {
  slides: SlideData[];
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textWrapperRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cleanupRefs = useRef<(() => void)[]>([]);

  const nextIndex = (currentIndex + 1) % slides.length;
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;

  useEffect(() => {
    cleanupRefs.current.forEach((cleanup) => cleanup());
    cleanupRefs.current = [];

    slideRefs.current.forEach((slide, i) => {
      if (slide && innerRefs.current[i] && textWrapperRefs.current[i]) {
        const cleanup = createTiltEffect(slide, [
          innerRefs.current[i]!,
          textWrapperRefs.current[i]!,
        ]);
        cleanupRefs.current.push(cleanup);
      }
    });

    return () => {
      cleanupRefs.current.forEach((cleanup) => cleanup());
    };
  }, [currentIndex]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    setCurrentIndex(nextIndex);
  };

  return (
    <div className={styles.slider}>
      <button onClick={handlePrevClick} className={styles.sliderBtn}>
        <ChevronLeft />
      </button>

      <div className={styles.slidesWrapper}>
        <div className={styles.slidesBg}>
          {slides.map((slide, i) => (
            <div
              key={`bg-${slide.id}`}
              className={styles.slideBg}
              data-position={
                i === currentIndex
                  ? 'current'
                  : i === nextIndex
                  ? 'next'
                  : 'previous'
              }
              style={
                {
                  '--bg-image': `url(${slide.imageUrl})`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
        <div className={styles.slides}>
          {slides.map((slide, i) => {
            const position =
              i === currentIndex
                ? 'current'
                : i === nextIndex
                ? 'next'
                : 'previous';

            return (
              <div
                key={slide.id}
                ref={(el) => {
                  slideRefs.current[i] = el; // Assign to ref array but do not return the element
                }}
                className={styles.slide}
                data-position={position}
              >
                <div
                  ref={(el) => {
                    innerRefs.current[i] = el; // Assign to ref array but do not return the element
                  }}
                  className={styles.slideInner}
                >
                  <div className={styles.slideContent}>
                    <div className={styles.slideImageWrapper}>
                      <img
                        src={slide.imageUrl || '/placeholder.svg'}
                        alt={`${slide.title} - ${slide.subtitle}`}
                        className={styles.slideImage}
                      />
                    </div>
                    <div
                      ref={(el) => {
                        textWrapperRefs.current[i] = el; // Assign to ref array but do not return the element
                      }}
                      className={styles.slideInfoTextWrapper}
                    >
                      <div className={styles.slideInfoText} data-type="title">
                        <span>{slide.title}</span>
                      </div>
                      <div
                        className={styles.slideInfoText}
                        data-type="subtitle"
                      >
                        <span>{slide.subtitle}</span>
                      </div>
                      <div
                        className={styles.slideInfoText}
                        data-type="description"
                      >
                        <span>{slide.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button onClick={handleNextClick} className={styles.sliderBtn}>
        <ChevronRight />
      </button>
    </div>
  );
}
