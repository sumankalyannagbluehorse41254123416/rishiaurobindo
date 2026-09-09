"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  title: string;
  galleryImages: string[];
}

export default function AlumniGalleryClient({ title, galleryImages }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div>
          <h4>{title}</h4>
        </div>

        <div className="row">
          {galleryImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 mt-4"
              key={`${image}-${index}`}
            >
              <div
                className="gal-inr"
                onClick={() => {
                  setCurrentIndex(index);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={800}
                  height={600}
                />
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
