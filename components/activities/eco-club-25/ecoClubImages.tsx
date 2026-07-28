"use client";

import Image from "next/image";

const ecoClubImages = [
  "/images/1644839154010.jpeg",
  "/images/1644045153583.jpeg",
  "/images/1644045142669.jpeg",
  "/images/1644045133172.jpeg",
  "/images/1644045123673.jpeg",
  "/images/1644045114505.jpeg",
  "/images/1644045104490.jpeg",
  "/images/1644045094332.jpeg",
  "/images/1644045084797.jpeg",
];

export default function EcoClub() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Eco Club</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {ecoClubImages.map((image, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={image}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Eco Club ${index + 1}`}
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