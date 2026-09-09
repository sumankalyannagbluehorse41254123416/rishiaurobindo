"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ActivityGalleryProps {
  section?: any;
  title?: string;
  fallbackTitle?: string;
}

export default function ActivityGallery({
  section,
  title,
  fallbackTitle = "Gallery",
}: ActivityGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const displayTitle = title || section?.title || fallbackTitle;

  const subsections: any[] = Array.isArray(section?.subsections)
    ? section.subsections
    : [];

  const galleryImages: string[] = subsections
    .map((item) => (typeof item === "string" ? item : item?.image))
    .filter((img): img is string => typeof img === "string" && Boolean(img));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <section className="land_info_wrap">
      {displayTitle && (
        <div
          className="container main-gallery"
          style={{
            textAlign: "center",
            margin: "70px auto",
          }}
        >
          <h3>{displayTitle}</h3>
        </div>
      )}

      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((img, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={`${img}-${index}`}>
              <div
                className="gal-inr"
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img}
                  alt={`${displayTitle} ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-100 img-fluid"
                  style={{ objectFit: "cover" }}
                />
                <Expand />
              </div>
            </div>
          ))}
        </div>
      </div>

      {galleryImages.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={galleryImages.map((src) => ({ src }))}
          index={currentIndex}
          carousel={{
            finite: false,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          }}
        />
      )}
    </section>
  );
}
