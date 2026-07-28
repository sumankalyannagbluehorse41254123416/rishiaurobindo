"use client";

import Image from "next/image";

const yogaImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746971468.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746964247.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746956370.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746944025.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746935700.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746927677.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1665746920209.jpg",
];

export default function YogaGallery() {
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
        <h3>Yoga</h3>
      </div>

      {/* Gallery */}
      <div className="container main-gallery">
        <div className="row">
          {yogaImages.map((imageUrl, index) => (
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
                  alt={`Yoga ${index + 1}`}
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