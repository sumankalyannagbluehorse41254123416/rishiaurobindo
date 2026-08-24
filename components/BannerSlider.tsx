"use client";

import Image from "next/image";
import { useEffect, useState, useCallback, useRef } from "react";

interface BannerSliderProps {
  banners: string[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  // All hooks must be called unconditionally at the top
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);
  const isTabVisibleRef = useRef(true);

  // Clone first banner at the end - only if banners exist
  const slides = banners.length > 0 ? [...banners, banners[0]] : [];

  // Memoized nextSlide function
  const nextSlide = useCallback(() => {
    if (banners.length === 0 || !isMountedRef.current || !isTabVisibleRef.current) return;
    setCurrentIndex((prev) => prev + 1);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    if (banners.length === 0 || !isMountedRef.current) return;
    
    if (currentIndex === 0) {
      // Jump to last real slide without animation
      setEnableTransition(false);
      setCurrentIndex(banners.length - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (isMountedRef.current) {
            setEnableTransition(true);
          }
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [banners.length, currentIndex]);

  // Function to start/stop auto-slide
  const startAutoSlide = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (banners.length <= 1 || !isTabVisibleRef.current) return;

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  }, [banners.length, nextSlide]);

  // Handle tab visibility change
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === 'visible';
      isTabVisibleRef.current = isVisible;
      
      if (isVisible) {
        // Tab is visible again - restart auto-slide
        startAutoSlide();
      } else {
        // Tab is hidden - stop auto-slide
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [startAutoSlide]);

  // Auto Slide with proper cleanup
  useEffect(() => {
    isMountedRef.current = true;
    
    if (banners.length <= 1) return;

    // Start auto-slide
    startAutoSlide();

    // Cleanup function
    return () => {
      isMountedRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [banners.length, startAutoSlide]);

  // When reached clone slide, instantly jump to first original
  const handleTransitionEnd = useCallback(() => {
    if (banners.length === 0 || !isMountedRef.current) return;
    
    if (currentIndex === banners.length) {
      setEnableTransition(false);
      setCurrentIndex(0);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (isMountedRef.current) {
            setEnableTransition(true);
          }
        });
      });
    }
  }, [banners.length, currentIndex]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      isTabVisibleRef.current = false;
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // Early return after all hooks
  if (!banners.length) return null;

  return (
    <section
      className="banner_slider_wrap"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        background: "#f5f5f5", // Fallback background
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
          willChange: "transform", // Performance optimization
        }}
      >
        {slides.map((banner, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / slides.length}%`,
              position: "relative",
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
                objectFit: "cover",
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.6)";
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            }}
          >
            ❯
          </button>

          {/* Dots */}
          {/* <div
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
                  // Reset auto-slide timer on manual click
                  startAutoSlide();
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
                  transition: "background 0.3s ease",
                }}
              />
            ))}
          </div> */}
        </>
      )}
    </section>
  );
}