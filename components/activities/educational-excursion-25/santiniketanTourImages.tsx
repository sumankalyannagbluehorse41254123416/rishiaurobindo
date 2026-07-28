"use client";

import Image from "next/image";

const santiniketanTourImages = [
  "/images/1677137012776.jpg",
  "/images/1677136998018.jpg",
  "/images/1677136983779.jpg",
  "/images/1677136970039.jpg",
  "/images/1677136958859.jpg",
  "/images/1677136947999.jpg",
];

export default function SantiniketanTourGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Santiniketan Tour</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {santiniketanTourImages.map((image, index) => (
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
                  alt={`Santiniketan Tour ${index + 1}`}
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