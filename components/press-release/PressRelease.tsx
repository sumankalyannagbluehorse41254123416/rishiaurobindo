"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface PressReleaseProps {
  title: string;
  galleryImages: string[];
}

export default function PressRelease({
  title,
  galleryImages,
}: PressReleaseProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="container main-gallery">
        <div className="w-100 mt-3 text-md-center title-bx1">
          <h3 className="one8">{title}</h3>
        </div>

        <div className="row mb-5">
          {galleryImages.map((image, index) => (
            <div
              className="col-6 col-sm-4 col-md-3"
              key={`${image}-${index}`}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div
                className="gal-inr gal-inr-width"
                onClick={() => openLightbox(index)}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={205}
                  height={200}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "fill",
                  }}
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
    </>
  );
}