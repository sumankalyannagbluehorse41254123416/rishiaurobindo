"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

interface Subsection {
  image?: string;
  [key: string]: unknown;
}

interface GallerySectionProps {
  subsections?: Subsection[];
}

const GallerySection = ({ subsections = [] }: GallerySectionProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get images from subsection image
  const galleryImages = subsections
    .map((item) => item.image)
    .filter((image): image is string => Boolean(image));

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className="land_info_wrap">
        <div className="container main-gallery">
          <div className="row">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-6"
              >
                <div
                  className="gal-inr"
                  onClick={() => openLightbox(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    width={283}
                    height={200}
                    style={{
                      width: "283px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    priority={index < 8}
                  />
                  <Expand/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {galleryImages.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={galleryImages.map((src) => ({
            src,
          }))}
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
};

export default GallerySection;
