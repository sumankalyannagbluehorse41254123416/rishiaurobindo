"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface FacilitiesGalleryProps {
  galleryImages?: string[];
}

export default function FacilitiesGallery({
  galleryImages = [],
}: FacilitiesGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((img, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <div
                className="gal-inr"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={img}
                  alt={`Facilities Gallery ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-100"
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
          carousel={{ finite: false }}
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