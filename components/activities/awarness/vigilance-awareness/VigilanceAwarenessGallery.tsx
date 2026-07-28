"use client";

import Image from "next/image";

const galleryImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080136014.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080120047.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080105061.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080092036.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080074424.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645080060056.jpg",
];

export default function VigilanceAwarenessGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>VIGILANCE AWARNESS</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={image}
            >
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Vigilance Awareness ${index + 1}`}
                  width={400}
                  height={300}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}