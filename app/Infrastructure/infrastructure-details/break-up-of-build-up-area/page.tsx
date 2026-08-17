import { headers } from "next/headers";

import BreakUpOfBuildUpAreaContent from "@/components/Infrastructure/infrastructure-details/break-up-of-build-up-area/BreakUpOfBuildUpAreaContent";

import BreakUpOfBuildingAreaBanner from "@/components/Infrastructure/infrastructure-details/break-up-of-build-up-area/BreakUpOfBuildingAreaBanner";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
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

export default async function BreakUpOfBuildUpArea() {
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
    "5093bc75-1c1e-48b4-90f2-f2a9a6032432";

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
      "BREAK-UP OF BUILD UP AREA DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "BREAK-UP OF BUILD UP AREA API ERROR:",
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
  // INDEX 0
  // ==========================================

  const bannerSection = sections[0];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <BreakUpOfBuildingAreaBanner
        sectionData={bannerSection}
      />

      <BreakUpOfBuildUpAreaContent
        sections={sections}
      />
    </>
  );
}