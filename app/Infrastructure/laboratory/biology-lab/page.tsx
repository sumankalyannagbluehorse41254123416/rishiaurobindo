import { headers } from "next/headers";

import BiologyLabBanner from "@/components/Infrastructure/laboratory/biology-lab/BiologyLabBanner";

import BiologyLabGallery from "@/components/Infrastructure/laboratory/biology-lab/BiologyLabGallery";

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

export default async function BiologyLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // BIOLOGY LAB PAGE ID
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
      "BIOLOGY LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "BIOLOGY LAB PAGE DATA ERROR:",
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
  // BANNER - INDEX 11
  // ==========================================

  const bannerSection = sections[11];

  // ==========================================
  // GALLERY - INDEX 12
  // ==========================================

  const gallerySection = sections[12];

  return (
    <>
      <BiologyLabBanner
        sectionData={bannerSection}
      />

      <BiologyLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}