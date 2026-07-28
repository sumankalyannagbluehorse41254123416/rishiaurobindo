"use client";

import Image from "next/image";

const galleryImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670712401.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670702894.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670692677.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670682775.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670673961.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670659571.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670639771.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670629140.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677670619280.jpeg",
];

export default function SportsGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Sports</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((image, index) => (
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
                  alt={`Sports Gallery ${index + 1}`}
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