"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface LibraryInfoProps {
  librarySection?: Section;
  imageSection?: Section;
  libraryDetails?: Subsection[];
  images?: Subsection[];
}

export default function LibraryInfo({
  librarySection,
  imageSection,
  libraryDetails = [],
  images = [],
}: LibraryInfoProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = images
    .map((item) => item.image)
    .filter((img): img is string => Boolean(img));

  return (
    <section className="land_info_wrap">
      <div className="container">
        {/* =====================================
            LIBRARY INFORMATION
        ===================================== */}

        <div className="lan_info_inner">
          <div className="title_box2">
            <h3>{librarySection?.title || "Library"}</h3>
          </div>

          <ul
            className="land_details_li"
            style={{
              margin: "0 auto",
              padding: 0,
            }}
          >
            {libraryDetails.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>

        {/* =====================================
            LIBRARY IMAGES
        ===================================== */}

        <div className="title_box2">
          <h3>{imageSection?.title || "Image"}</h3>
        </div>

        <div className="row mb-5">
          {images.map((item, index) => {
            const imageUrl = item.image;

            if (!imageUrl) {
              return null;
            }

            return (
              <div className="col-md-3" key={index}>
                <div
                  className="gal-inr"
                  onClick={() => {
                    setCurrentIndex(index);
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={imageUrl}
                    alt={item.title || `Library Image ${index + 1}`}
                    width={275}
                    height={204}
                  />
                  <Expand />
                </div>
              </div>
            );
          })}
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
