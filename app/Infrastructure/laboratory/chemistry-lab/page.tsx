import { headers } from "next/headers";

import ChemistryLabBanner from "@/components/Infrastructure/laboratory/chemistry-lab/ChemistryLabBanner";

import ChemistryLabGallery from "@/components/Infrastructure/laboratory/chemistry-lab/ChemistryLabGallery";

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

export default async function ChemistryLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // CHEMISTRY LAB PAGE ID
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
      "CHEMISTRY LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "CHEMISTRY LAB PAGE DATA ERROR:",
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
  // BANNER - INDEX 9
  // ==========================================

  const bannerSection = sections[9];

  // ==========================================
  // GALLERY - INDEX 10
  // ==========================================

  const gallerySection = sections[10];

  return (
    <>
      <ChemistryLabBanner
        sectionData={bannerSection}
      />

      <ChemistryLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}