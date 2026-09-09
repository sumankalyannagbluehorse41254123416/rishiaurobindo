"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  section?: {
    title?: string;
    subsections?: {
      image?: string;
    }[];
  };
}

export default function DataPrivacyAwareness({ section }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images =
    section?.subsections?.filter(
      (item): item is { image: string } => Boolean(item.image)
    ) || [];

  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        {section?.title && <h3>{section.title}</h3>}
      </div>

      <div className="container main-gallery">
        <div className="row">
          {images.map((item, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${item.image}-${index}`}
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
                  src={item.image}
                  alt={`Data Privacy Awareness ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
                <Expand />
              </div>
            </div>
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((item) => ({ src: item.image }))}
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