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

export default function EducationalSurveyGallery({
  section,
}: Props) {
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
          {section?.subsections?.map((item, index) => (
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
                  src={item.image || ""}
                  alt={`${section?.title} ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-100"
                />
                <Expand/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}