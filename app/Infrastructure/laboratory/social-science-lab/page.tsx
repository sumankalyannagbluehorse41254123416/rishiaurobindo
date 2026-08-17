import { headers } from "next/headers";

import SocialScienceLabBanner from "@/components/Infrastructure/laboratory/social-science-lab/SocialScienceLabBanner";

import SocialScienceLabGallery from "@/components/Infrastructure/laboratory/social-science-lab/SocialScienceLabGallery";

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

export default async function SocialScienceLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // SOCIAL SCIENCE LAB PAGE ID
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
      "SOCIAL SCIENCE LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "SOCIAL SCIENCE LAB PAGE DATA ERROR:",
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

  const bannerSection = sections[13];

  // ==========================================
  // GALLERY
  // INDEX 14
  // ==========================================

  const gallerySection = sections[14];

  return (
    <>
      <SocialScienceLabBanner
        sectionData={bannerSection}
      />

      <SocialScienceLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}