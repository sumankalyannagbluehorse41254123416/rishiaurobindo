"use client";

import Image from "next/image";

const environmentalAwarenessImages = [
  "/images/1671790051461.jpg",
  "/images/1671790008238.jpg",
  "/images/1671789983142.jpg",
  "/images/1671789965649.jpg",
  "/images/1671789878107.jpg",
  "/images/1671789854950.jpg",
];

export default function EnvironmentalAwareness() {
  return (
    <>
      {/* Page Title */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="/images/page_title_bg.jpg"
          alt="page_title_bg"
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>Environmental Awareness</h3>
        </div>
      </section>

      {/* Gallery */}
      <section className="land_info_wrap">
        <div
          className="container main-gallery"
          style={{
            textAlign: "center",
            margin: "70px auto",
          }}
        >
          <h3>ENVIRONMENTAL AWARENESS</h3>
        </div>

        <div className="container main-gallery">
          <div className="row">
            {environmentalAwarenessImages.map((image, index) => (
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
                    alt={`Environmental Awareness ${index + 1}`}
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
    </>
  );
}