import { headers } from "next/headers";

import PerformingArtsBanner from "@/components/Infrastructure/laboratory/performing-art-lab/PerformingArtsBanner";
import PerformingArtsGallery from "@/components/Infrastructure/laboratory/performing-art-lab/PerformingArtsGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function PerformingArtLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PERFORMING ARTS LAB PAGE ID
  // ==========================================

  const pageId =
    "0199a445-c5d9-4ab4-b188-7205501de7d2";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log(
      "===================================="
    );

    console.log(
      "PERFORMING ARTS LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "PERFORMING ARTS LAB PAGE DATA ERROR:",
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
  // BANNER - INDEX 25
  // ==========================================

  const bannerSection = sections[25];

  // ==========================================
  // GALLERY - INDEX 26
  // ==========================================

  const gallerySection = sections[26];

  return (
    <>
      <PerformingArtsBanner
        sectionData={bannerSection}
      />

      <PerformingArtsGallery
        sectionData={gallerySection}
      />
    </>
  );
}