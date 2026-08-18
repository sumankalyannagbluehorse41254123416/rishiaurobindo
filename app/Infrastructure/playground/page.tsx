import { headers } from "next/headers";

import GardenBanner from "@/components/Infrastructure/playground/GardenBanner";
import GardenGallery from "@/components/Infrastructure/playground/GardenGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  image?: string;
  description?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Playground() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "73d53a49-9aa0-4800-b4b7-fe98cca4a464";

  let pageData: PageData = {};

  // ==========================================
  // FETCH API DATA
  // ==========================================

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("====================================");
    console.log("PLAYGROUND PAGE DATA");
    console.log(JSON.stringify(pageData, null, 2));
    console.log("====================================");
  } catch (error) {
    console.error(
      "PLAYGROUND PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER - ARRAY INDEX 8
  // ==========================================

  const bannerSection = sections[8];

  // ==========================================
  // GALLERY - ARRAY INDEX 7
  // ==========================================

  const gallerySection = sections[7];

  // ==========================================
  // GALLERY SUBSECTIONS
  // ==========================================

  const galleryImages =
    gallerySection?.subsections || [];

  // ==========================================
  // CONSOLE LOG
  // ==========================================

  console.log("====================================");
  console.log("PLAYGROUND BANNER - INDEX 8");
  console.log(
    JSON.stringify(bannerSection, null, 2)
  );

  console.log("PLAYGROUND GALLERY - INDEX 7");
  console.log(
    JSON.stringify(gallerySection, null, 2)
  );

  console.log("PLAYGROUND GALLERY IMAGES");
  console.log(
    JSON.stringify(galleryImages, null, 2)
  );

  console.log("====================================");

  return (
    <>
      <GardenBanner
        sectionData={bannerSection}
      />

      <GardenGallery
        sectionData={gallerySection}
      />
    </>
  );
}