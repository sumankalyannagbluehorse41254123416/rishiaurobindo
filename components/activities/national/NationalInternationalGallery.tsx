"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Subsection {
  image?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface Props {
  section?: Section;
}

export default function NationalInternationalGallery({ section }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = (section?.subsections || [])
    .map((item) => item.image)
    .filter((image): image is string => Boolean(image));

  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>{section?.title}</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {section?.subsections?.map((item, index) =>
            item.image ? (
              <div className="col-lg-3 col-md-4 col-6" key={index}>
                <div
                  className="gal-inr"
                  onClick={() => {
                    const imgIndex = images.indexOf(item.image as string);
                    setCurrentIndex(imgIndex >= 0 ? imgIndex : 0);
                    setOpen(true);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={item.image}
                    alt={`National & International ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-100"
                  />
                  <Expand />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>

      {images.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={images.map((src) => ({ src }))}
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