"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerSliderProps {
  banners: string[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  // All hooks must be called unconditionally at the top
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);

  // Clone first banner at the end - only if banners exist
  const slides = banners.length > 0 ? [...banners, banners[0]] : [];

  const nextSlide = () => {
    if (banners.length === 0) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (banners.length === 0) return;
    
    if (currentIndex === 0) {
      // Jump to last real slide without animation
      setEnableTransition(false);
      setCurrentIndex(banners.length - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Auto Slide - Now always called unconditionally
  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  // When reached clone slide, instantly jump to first original
  const handleTransitionEnd = () => {
    if (banners.length === 0) return;
    
    if (currentIndex === banners.length) {
      setEnableTransition(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
    }
  };

  // Early return after all hooks - but still need to render something
  if (!banners.length) return null;

  return (
    <section
      className="banner_slider_wrap"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div
        onTransitionEnd={handleTransitionEnd}
        style={{
          display: "flex",
          width: `${slides.length * 100}%`,
          transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
          transition: enableTransition
            ? "transform 700ms ease-in-out"
            : "none",
        }}
      >
        {slides.map((banner, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / slides.length}%`,
            }}
          >
            <Image
              src={banner}
              alt={`Banner ${index + 1}`}
              width={1366}
              height={700}
              priority={index === 0}
              unoptimized
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {banners.length > 1 && (
        <>
          {/* Previous */}
          <button
            onClick={prevSlide}
            aria-label="Previous banner"
            style={{
              position: "absolute",
              top: "50%",
              left: "15px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
            }}
          >
            ❮
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            aria-label="Next banner"
            style={{
              position: "absolute",
              top: "50%",
              right: "15px",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.6)",
              color: "#fff",
              border: "none",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: "18px",
              zIndex: 10,
            }}
          >
            ❯
          </button>

          {/* Dots */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "10px",
              zIndex: 10,
            }}
          >
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setEnableTransition(true);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to banner ${index + 1}`}
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                  background:
                    (currentIndex === banners.length ? 0 : currentIndex) ===
                    index
                      ? "#e31e24"
                      : "rgba(255,255,255,0.6)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}