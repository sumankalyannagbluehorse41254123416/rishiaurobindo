import { headers } from "next/headers";

import ComputerLabBanner from "@/components/Infrastructure/laboratory/computer-lab/ComputerLabBanner";
import ComputerLabGallery from "@/components/Infrastructure/laboratory/computer-lab/ComputerLabGallery";

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

export default async function ComputerLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // COMPUTER LAB PAGE ID
  // ==========================================

  const pageId =
    "0199a445-c5d9-4ab4-b188-7205501de7d2";

  let pageData: PageData = {};

  // ==========================================
  // API
  // ==========================================

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
      "COMPUTER LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "COMPUTER LAB PAGE DATA ERROR:",
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
  // BANNER - ARRAY INDEX 5
  // ==========================================

  const bannerSection = sections[5];

  // ==========================================
  // GALLERY - ARRAY INDEX 6
  // ==========================================

  const gallerySection = sections[6];

  console.log(
    "COMPUTER LAB BANNER:",
    bannerSection
  );

  console.log(
    "COMPUTER LAB GALLERY:",
    gallerySection
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <ComputerLabBanner
        section={bannerSection}
      />

      <ComputerLabGallery
        section={gallerySection}
      />
    </>
  );
}