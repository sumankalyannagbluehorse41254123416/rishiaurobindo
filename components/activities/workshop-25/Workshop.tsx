"use client";

import Image from "next/image";

const workshopImages = [
  "/images/1677221339477.jpg",
  "/images/1677221330005.jpg",
  "/images/1677221320233.jpg",
  "/images/1677221310590.jpg",
  "/images/1677221165782.jpeg",
  "/images/1677221154243.jpeg",
  "/images/1677221145341.jpeg",
  "/images/1677221136071.jpeg",
  "/images/1677221126851.jpg",
  "/images/1677221117194.jpg",
];

export default function Workshop() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Workshop</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {workshopImages.map((image, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Workshop ${index + 1}`}
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