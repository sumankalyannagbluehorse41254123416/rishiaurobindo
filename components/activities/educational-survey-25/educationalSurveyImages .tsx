"use client";

import Image from "next/image";

const educationalSurveyImages = [
  "/images/1677820646849.jpg",
  "/images/1677820634314.jpg",
  "/images/1677820614016.jpg",
  "/images/1677820598617.jpg",
  "/images/1677820585705.jpg",
  "/images/1677820572934.jpg",
  "/images/1677820562312.jpg",
  "/images/1677820552839.jpg",
  "/images/1677143034516.jpg",
  "/images/1677143024160.jpg",
];

export default function EducationalSurveyGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Educational Survey</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {educationalSurveyImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${image}-${index}`}
            >
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Educational Survey ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-100"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}