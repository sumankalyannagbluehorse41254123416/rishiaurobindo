"use client";

import Image from "next/image";

const galleryImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820923311.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820903482.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820887833.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820873063.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820846847.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820832542.jpg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1677820812366.jpg",
];

export default function NationalInternationalGallery() {
  return (
    <>
   
      {/* Gallery */}
      <section className="land_info_wrap">
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
                    alt="main-gallery2"
                    width={400}
                    height={300}
                    unoptimized
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