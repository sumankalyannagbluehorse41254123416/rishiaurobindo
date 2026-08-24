"use client";

import { Expand } from "lucide-react";
import Image from "next/image";

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
        <div className="pt-2">
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

                  <a
                    className="gal-inr"
                    href={imageUrl}
                    data-lightbox="Gallery 1"
                  >

                    <Image
                      src={imageUrl}
                      alt={
                        item.title ||
                        `Online class gallery image ${
                          index + 1
                        }`
                      }
                      width={400}
                      height={300}
                    />

                    <Expand />

                  </a>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
};

export default OnlineClassGallery;