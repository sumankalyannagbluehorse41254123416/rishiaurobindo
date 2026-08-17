import { headers } from "next/headers";

import LanguageLabBanner from "@/components/Infrastructure/laboratory/language-lab/LanguageLabBanner";

import LanguageLabGallery from "@/components/Infrastructure/laboratory/language-lab/LanguageLabGallery";

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

export default async function LanguageLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // LANGUAGE LAB PAGE ID
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

    console.log("LANGUAGE LAB PAGE DATA");

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "LANGUAGE LAB PAGE DATA ERROR:",
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
  // BANNER
  // INDEX 13
  // ==========================================

  const bannerSection = sections[15];

  // ==========================================
  // GALLERY
  // INDEX 14
  // ==========================================

  const gallerySection = sections[16];

  return (
    <>
      <LanguageLabBanner
        sectionData={bannerSection}
      />

      <LanguageLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}