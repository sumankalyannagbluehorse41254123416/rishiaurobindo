
"use client";

import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  "/images/1644836340905.jpeg",
  "/images/1644836324987.jpg",
  "/images/1644836307902.jpg",
  "/images/1644836291367.jpg",
  "/images/1644836275141.jpg",
  "/images/1644836260002.jpeg",
  "/images/1644836247437.jpg",
  "/images/1644836229910.jpg",
  "/images/1644836214238.jpg",
  "/images/1644836199096.jpg",
  "/images/1644836184497.jpg",
  "/images/1644836171607.jpg",
  "/images/1644836158274.jpg",
  "/images/1644836143418.jpg",
  "/images/1644836127181.jpg",
  "/images/1644836100160.jpg",
  "/images/1644836086112.jpeg",
  "/images/1644836068473.jpg",
  "/images/1644836053444.jpg",
  "/images/1644836033228.jpg",
  "/images/1644836016120.jpg",
  "/images/1644836001009.jpg",
  "/images/1644835984068.jpg",
  "/images/1644835969238.jpg",
  "/images/1644835956240.jpg",
  "/images/1644835941322.jpg",
  "/images/1644835926407.jpg",
  "/images/1644835911708.jpeg",
  "/images/1644835870051.jpeg",
  "/images/1644835858082.jpg",
  "/images/1644835842738.jpg",
];

export default function PressRelease() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="container main-gallery">
        <div className="w-100 mt-3 text-md-center title-bx1">
          <h3 className="one8">Press Realese</h3>
        </div>

        <div className="row mb-5">
          {galleryImages.map((image, index) => (
            <div className="col-md-3" key={index}>
              <button
                type="button"
                className="gal-inr"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`Press Release ${index + 1}`}
                  width={205}
                  height={200}
                  style={{
                    width: "205px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="press-lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="press-lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>

          <Image
            src={selectedImage}
            alt="Press Release"
            width={205}
            height={200}
            className="press-lightbox-image"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "205px",
              height: "200px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}

