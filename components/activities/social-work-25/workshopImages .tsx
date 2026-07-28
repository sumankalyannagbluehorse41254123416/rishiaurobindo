"use client";

import Image from "next/image";

const workshopImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221339477.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221330005.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221320233.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221310590.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221165782.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221154243.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221145341.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677221136071.jpeg",

  // Add the remaining image URLs from your HTML here
];

export default function WorkshopGallery() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>Workshop</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          {workshopImages.map((image, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={image}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Workshop ${index + 1}`}
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