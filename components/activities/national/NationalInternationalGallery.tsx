"use client";

import { Expand } from "lucide-react";
import Image from "next/image";

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

export default function NationalInternationalGallery({
  section,
}: Props) {
  const images = section?.subsections ?? [];

  return (
    <>
      <section className="land_info_wrap">
        <div className="container main-gallery">
          <div className="row">
            {images.map((item, index) =>
              item.image ? (
                <div
                  className="col-lg-3 col-md-4 col-6"
                  key={index}
                >
                  <a
                    className="gal-inr"
                    href={item.image}
                    data-lightbox="Gallery 1"
                  >
                    <Image
                      src={item.image}
                      alt={`${section?.title ?? "Gallery"} ${index + 1}`}
                      width={400}
                      height={300}
                      className="img-fluid"
                      unoptimized
                    />
                    <Expand/>
                  </a>
                </div>
              ) : null
            )}
          </div>
        </div>
      </section>
    </>
  );
}