"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

interface GallerySectionProps {
  images?: string[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultImages = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1751107593710.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106593625.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106561651.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106514285.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106483753.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106429861.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106384972.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106356700.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106281683.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106243828.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106224014.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106199471.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106170738.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106136761.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106087062.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106058381.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751106015407.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751105970988.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751105948501.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1751105878198.jpg",
  ];

  const galleryImages = images || defaultImages;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <>
      <section className="land_info_wrap">
        <div className="container main-gallery">
          <div className="row">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-6"
              >
                <div
                  className="gal-inr"
                  onClick={() => openLightbox(index)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    width={283}
                    height={200}
                    style={{
                      width: "283px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                    priority={index < 8}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={galleryImages.map((src) => ({
          src,
        }))}
        index={currentIndex}
        carousel={{
          finite: false,
        }}
        styles={{
          container: {
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          },
        }}
      />
    </>
  );
};

export default GallerySection;