"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Subsection {
  title?: string;
  image?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface ApprovalGalleryProps {
  section?: Section;
}

export default function ApprovalGallery({
  section,
}: ApprovalGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = section?.subsections ?? [];
  const validImages = images
    .map((item) => item.image?.trim())
    .filter((img): img is string => Boolean(img));

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {section?.title?.trim() || "Approval"}
        </h3>
      </div>

      <div className="row mb-5">
        {images.map((item, index) => {
          const image = item.image?.trim();

          if (!image) return null;

          return (
            <div className="col-md-3" key={item.title || index}>
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
                  alt={item.title || "Approval"}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          );
        })}
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
    </div>
  );
}
