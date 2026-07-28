"use client";

import Image from "next/image";

const culturalActivitiesImages = [
  "/images/1677223806309.jpg",
  "/images/1677223794750.jpg",
  "/images/1677223783301.jpg",
  "/images/1677223772087.jpg",
  "/images/1677223749852.jpg",
  "/images/1677223734034.jpg",
];

export default function CulturalActivities() {
  return (
    <section className="land_info_wrap">
      {/* Gallery Title */}
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Cultural Activities</h3>
      </div>

      {/* Gallery */}
      <div className="container main-gallery">
        <div className="row">
          {culturalActivitiesImages.map((imageUrl, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${imageUrl}-${index}`}
            >
              <a
                className="gal-inr"
                href={imageUrl}
                data-lightbox="Gallery 1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={imageUrl}
                  alt={`Cultural Activities ${index + 1}`}
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