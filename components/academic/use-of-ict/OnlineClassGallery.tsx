"use client";

import { Expand } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface SubSection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  backgroundImage?: string;
  [key: string]: unknown;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  bannerImage?: string;
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface OnlineClassGalleryProps {
  section?: Section;
  frontPageSection?: Section;
  galleryImages?: SubSection[];
}

const OnlineClassGallery = ({
  section,
  frontPageSection,
  galleryImages = [],
}: OnlineClassGalleryProps) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ==========================================
  // FRONT PAGE IMAGE
  // ==========================================

  /*
    IMPORTANT:

    section.image = "section_image_45"

    এটা actual image URL নয়।
    তাই সরাসরি Image src হিসেবে use করা যাবে না।
  */

  const frontPageImage =
    typeof frontPageSection?.image === "string" &&
      (
        frontPageSection.image.startsWith("http://") ||
        frontPageSection.image.startsWith("https://") ||
        frontPageSection.image.startsWith("/")
      )
      ? frontPageSection.image
      : null;

  // Extract gallery image URLs
  const validGalleryImages = galleryImages
    .map((item) =>
      typeof item.image === "string" && item.image.trim() !== ""
        ? item.image
        : ""
    )
    .filter((img): img is string => Boolean(img));

  // Build slides array for Lightbox
  const slides: string[] = [];
  if (frontPageImage) {
    slides.push(frontPageImage);
  }
  validGalleryImages.forEach((img) => {
    if (!slides.includes(img)) {
      slides.push(img);
    }
  });

  // ==========================================
  // SECTION TITLE
  // ==========================================

  const sectionTitle =
    section?.title || "ONLINE CLASS";

  return (
    <div className="banner-line">

      {/* ======================================
          FRONT PAGE TITLE
      ====================================== */}

      <div className="fontpage-text text-center pt-3">
        <h2>
          FRONTPAGE
        </h2>
      </div>

      {/* ======================================
          FRONT PAGE IMAGE
      ====================================== */}

      {frontPageImage && (
        <div
          className="pt-2 text-center"
          style={{ cursor: "pointer" }}
          onClick={() => {
            const idx = slides.indexOf(frontPageImage);
            setCurrentIndex(idx >= 0 ? idx : 0);
            setOpen(true);
          }}
        >
          <Image
            className="fontpage-image"
            src={frontPageImage}
            alt="Frontpage"
            width={500}
            height={700}
            priority
          />
        </div>
      )}

      {/* ======================================
          ONLINE CLASS
      ====================================== */}

      <div className="container main-gallery">

        <div className="w-100 mt-3 text-md-center title-bx1">

          <h3 className="one8">
            {sectionTitle}
          </h3>

        </div>

        {/* ====================================
            GALLERY
        ==================================== */}

        <div className="row mb-5">

          {galleryImages.map(
            (item, index) => {

              const imageUrl =
                typeof item.image === "string" &&
                  item.image.trim() !== ""
                  ? item.image
                  : "";

              if (!imageUrl) {
                return null;
              }

              return (
                <div
                  className="col-md-3"
                  key={
                    item.id ||
                    `${imageUrl}-${index}`
                  }
                >

                  <div
                    className="gal-inr"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      const slideIdx = slides.indexOf(imageUrl);
                      setCurrentIndex(slideIdx >= 0 ? slideIdx : 0);
                      setOpen(true);
                    }}
                  >

                    <Image
                      src={imageUrl}
                      alt={
                        item.title ||
                        `Online class gallery image ${index + 1
                        }`
                      }
                      width={400}
                      height={300}
                    />

                    <Expand />

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

      {slides.length > 0 && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={slides.map((src) => ({ src }))}
          index={currentIndex}
          carousel={{ finite: false }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, 0.9)",
            },
          }}
        />
      )}

    </div>
  );
};

export default OnlineClassGallery;