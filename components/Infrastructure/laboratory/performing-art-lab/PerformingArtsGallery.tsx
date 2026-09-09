"use client";

import { ExpandIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Subsection {
  title?: string;
  image?: string;
  description?: string;
  link?: string;
}

interface Section {
  subsections?: Subsection[];
}

interface Props {
  sectionData?: Section;
}

export default function PerformingArtsGallery({ sectionData }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = sectionData?.subsections || [];
  const validImages = galleryImages
    .map((item) => item.image)
    .filter((img): img is string => Boolean(img));

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((image, index) => {
            const imgSrc = image.image || "/images/no-image.png";
            return (
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
                    src={imgSrc}
                    alt={`main-gallery${index + 1}`}
                    width={800}
                    height={600}
                  />
                  <ExpandIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {validImages.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={validImages.map((src) => ({ src }))}
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
