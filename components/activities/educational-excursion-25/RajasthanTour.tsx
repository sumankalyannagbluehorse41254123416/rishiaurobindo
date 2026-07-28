"use client";

import Image from "next/image";

const rajasthanTourImages = [
  "/images/1644046530009.jpg",
  "/images/1644047825989.jpg",
  "/images/1644047816454.jpg",
  "/images/1644047806971.jpg",
  "/images/1644047796427.jpg",
  "/images/1644047786981.jpg",
];

export default function RajasthanTour() {
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
        <h3>Rajasthan Tour</h3>
      </div>

      {/* Gallery */}
      <div className="container main-gallery">
        <div className="row">
          {rajasthanTourImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${image}-${index}`}
            >
              <a
                className="gal-inr"
                href={image}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={image}
                  alt={`Rajasthan Tour ${index + 1}`}
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