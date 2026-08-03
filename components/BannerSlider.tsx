"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerSliderProps {
  banners: string[];
}

export default function BannerSlider({ banners }: BannerSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === banners.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    if (banners.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (!banners.length) {
    return null;
  }

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
        style={{
          position: "relative",
          width: "100%",
        }}
      >
        <Image
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          width={1366}
          height={700}
          priority={currentIndex === 0}
          unoptimized
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {banners.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              style={{
                position: "absolute",
                top: "50%",
                left: "15px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                cursor: "pointer",
                borderRadius: "50%",
                fontSize: "18px",
                zIndex: 10,
              }}
            >
              ❮
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              style={{
                position: "absolute",
                top: "50%",
                right: "15px",
                transform: "translateY(-50%)",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                border: "none",
                padding: "12px 18px",
                cursor: "pointer",
                borderRadius: "50%",
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
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    border: "none",
                    background:
                      currentIndex === index
                        ? "#e31e24"
                        : "rgba(255,255,255,0.6)",
                    cursor: "pointer",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}