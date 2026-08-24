"use client";

import Image from "next/image";

interface FacilitiesGalleryProps {
  galleryImages?: string[];
}

const FacilitiesGallery = ({
  galleryImages = [],
}: FacilitiesGalleryProps) => {
  // Default gallery images as fallback (যদি API থেকে ডেটা না আসে)
  const defaultImages = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1669801563488.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669801549027.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799272625.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799210381.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799096175.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799083820.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799071266.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799062489.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799051351.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799042536.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799032421.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799023131.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799013037.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669799004230.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669798995008.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1669798985764.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806996034.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806979439.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806959961.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806948646.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806935765.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806924226.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806912233.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806873942.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806863567.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1643806850183.jpg",
  ];

  // API থেকে ইমেজ এলে সেটা ব্যবহার করবে, না হলে ডিফল্ট ব্যবহার করবে
  const images = galleryImages.length > 0 ? galleryImages : defaultImages;

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {images.map((image, index) => (
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
                  alt={`Facilities gallery image ${index + 1}`}
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
};

export default FacilitiesGallery;