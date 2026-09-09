"use client";

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

export default function WallMagazine({ section }: Props) {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = (section?.subsections || [])
    .map((item) => item.image)
    .filter((image): image is string => Boolean(image));

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div
          style={{
            textAlign: "center",
            margin: "70px auto",
          }}
        >
          <h4>{section?.title}</h4>
        </div>

        <div className="row gallery-broder">
          {section?.subsections?.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-6 mt-2" key={index}>
              <div
                className="gal-inr"
                onClick={() => {
                  const imgIndex = item.image ? images.indexOf(item.image) : -1;
                  setCurrentIndex(imgIndex >= 0 ? imgIndex : 0);
                  setOpen(true);
                }}
                style={{ cursor: "pointer" }}
              >
                <Image
                  src={item.image || ""}
                  alt={`${section?.title || "Wall Magazine"} ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
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