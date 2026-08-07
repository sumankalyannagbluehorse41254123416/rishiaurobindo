"use client";

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

export default function WallMagazine({
  section,
}: Props) {
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
            <div
              className="col-lg-3 col-md-4 col-6 mt-2"
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
                  className="img-fluid"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}