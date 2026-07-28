"use client";

import Image from "next/image";

const keralaTourImages = [
  "/images/1644046949885.jpg",
  "/images/1644046939423.jpg",
  "/images/1644046929204.jpg",
  "/images/1644046918937.jpg",
  "/images/1644046905156.jpg",
  "/images/1644046895490.jpg",
  "/images/1644046884688.jpg",
  "/images/1644046872835.jpg",
];

export default function KeralaTourGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Kerala Tour</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {keralaTourImages.map((image, index) => (
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
                  alt={`Kerala Tour ${index + 1}`}
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