"use client";

import Image from "next/image";

const healthAwarenessImages = [
  "/images/1645080729284.jpg",
  "/images/1645080710802.jpg",
  "/images/1645080643968.jpg",
  "/images/1645080630607.jpg",
  "/images/1645080615155.jpg",
  "/images/1645080602066.jpg",

];

export default function HealthAwareness() {
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
        <h3>HEALTH AWARENESS</h3>
      </div>

      {/* Gallery */}
      <div className="container main-gallery">
        <div className="row">
          {healthAwarenessImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${image}-${index}`}
            >
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={image}
                  alt={`Health Awareness ${index + 1}`}
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