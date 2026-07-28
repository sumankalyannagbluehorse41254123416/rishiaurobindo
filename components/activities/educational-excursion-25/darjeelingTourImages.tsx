"use client";

import Image from "next/image";

const darjeelingTourImages = [
  "/images/1731741913991.jpeg",
  "/images/1731741902780.jpeg",
  "/images/1731741889679.jpg",
  "/images/1731741877940.jpg",
  "/images/1731741864360.jpg",
  "/images/1731741852590.jpg",
];

export default function DarjeelingTourGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Darjeeling Tour</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {darjeelingTourImages.map((image, index) => (
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
                  alt={`Darjeeling Tour ${index + 1}`}
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