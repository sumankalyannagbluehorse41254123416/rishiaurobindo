"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface PressReleaseProps {
  title: string;
  galleryImages: string[];
}

export default function PressRelease({
  title,
  galleryImages,
}: PressReleaseProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="container main-gallery">
        <div className="w-100 mt-3 text-md-center title-bx1">
          <h3 className="one8">{title}</h3>
        </div>

        <div className="row mb-5">
          {galleryImages.map((image, index) => (
            <div
              className="col-6 col-sm-4 col-md-3"
              key={`${image}-${index}`}
              style={{display:"flex", justifyContent:"center"}}
            >
              <button
                type="button"
                className="gal-inr"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image}
                  alt={`${title} ${index + 1}`}
                  width={205}
                  height={200}
                  style={{
                    width: "205px",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <Expand/>
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
            alt={title}
            width={800}
            height={600}
            className="press-lightbox-image"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "90vw",
              maxHeight: "90vh",
              objectFit: "contain",
            }}
          />
        </div>
      )}
    </>
  );
}