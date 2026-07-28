"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const banners = [
  "/images/1681462654519.jpg",
  "/images/1652787555306.jpg",
  "/images/1652785495311.jpg",
  "/images/1652783141053.jpg",
  "/images/1652779817090.jpg",
  "/images/1652789103156.jpg",
  "/images/1652779096748.jpg",
  "/images/1652777814833.jpg",
  "/images/1652509294555.jpg",
  "/images/1652784670421.jpg",
  "/images/1652352464990.jpg",
  "/images/1652356127097.jpg",
  "/images/1652348463018.jpg",
  "/images/1652348118056.jpg",
  "/images/1652347343508.jpg",
  "/images/1652346050402.jpg",
  "/images/1652345294779.jpg",
  "/images/1652345200868.jpg",
  "/images/1652344721916.jpg",
  "/images/1652775310561.jpg",
  "/images/1652343217017.jpg",
  "/images/1652343203344.jpg",
  "/images/1652784436533.jpg",
];

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="banner_slider_wrap" style={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%" }}>
        <Image
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          width={1366}
          height={700}
          priority
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            transition: "opacity 0.5s ease-in-out",
          }}
          unoptimized={true}
        />

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
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
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
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.6)")}
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
                background: currentIndex === index ? "#e31e24" : "rgba(255,255,255,0.6)",
                cursor: "pointer",
                transition: "background 0.3s",
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}