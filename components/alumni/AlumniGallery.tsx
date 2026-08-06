import Image from "next/image";
import { headers } from "next/headers";

import { fetchPageData } from "@/service/fetchdata.services";

// ==========================================
// TYPES
// ==========================================

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

// ==========================================
// ALUMNI GALLERY
// ==========================================

export default async function AlumniGallery() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // ALUMNI PAGE API ID
  // ==========================================

  const alumniPageId =
    "e5b90ac9-af80-433e-9180-daef298d7308";

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================

  let pageData: PageData = {};

  try {
    pageData =
      await fetchPageData(
        {
          host,
          ...headersObj,
        },
        alumniPageId
      );
  } catch (error) {
    console.error(
      "ALUMNI GALLERY API ERROR:",
      error
    );
  }

  // ==========================================
  // GET SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // GALLERY SECTION
  // ARRAY INDEX 1
  // ==========================================

  const gallerySection =
    sections[1];

  // ==========================================
  // GALLERY IMAGES
  // SUBSECTION IMAGES
  // ==========================================

  const galleryImages =
    gallerySection?.subsections
      ?.map(
        (item) => item.image
      )
      .filter(
        (image): image is string =>
          Boolean(image)
      ) || [];

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">

        {/* =====================================
            GALLERY TITLE
        ====================================== */}

        <div>
          <h4>
            {gallerySection?.title ||
              "ALUMNI PHOTOS & VIDEOS"}
          </h4>
        </div>

        {/* =====================================
            GALLERY IMAGES
        ====================================== */}

        <div className="row">

          {galleryImages.map(
            (image, index) => (
              <div
                className="col-lg-3 col-md-4 col-6 mt-4"
                key={`${image}-${index}`}
              >
                <a
                  className="gal-inr"
                  href={image}
                  data-lightbox="Gallery 1"
                >
                  <Image
                    src={image}
                    alt={
                      `${gallerySection?.title || "Alumni Gallery"} ${index + 1}`
                    }
                    width={800}
                    height={600}
                  />
                </a>
              </div>
            )
          )}

        </div>

      </div>
    </section>
  );
}

