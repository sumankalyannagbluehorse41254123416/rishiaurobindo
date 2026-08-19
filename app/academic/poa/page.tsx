import { headers } from "next/headers";

import POABanner from "@/components/academic/poa/POABanner";
import POAContents from "@/components/academic/poa/POAContents";

import { fetchPageData } from "@/service/fetchdata.services";

interface SubSection {
  title?: string;
  image?: string;
  file?: string | null;
  file_url?: string | null;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;

  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];

  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };

  [key: string]: unknown;
}

export default async function POA() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "d56c22c4-9324-404e-ab20-278ba107c8d6";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("========================================");
    console.log("POA FULL PAGE DATA");
    console.log("========================================");

    console.log(JSON.stringify(pageData, null, 2));

    console.log("========================================");
  } catch (error) {
    console.error("POA PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log("========================================");
  console.log("POA SECTIONS LENGTH:", sections.length);
  console.log("========================================");

  // ==========================================
  // INDEX 2 - BANNER
  // ==========================================

  const bannerSection = sections[2];

  console.log("========== POA SECTION [2] ==========");

  console.log(JSON.stringify(bannerSection, null, 2));

  // ==========================================
  // INDEX 4 - SL. NO
  // ==========================================

  const slSection = sections[4];

  console.log("========== POA SECTION [4] ==========");

  console.log(JSON.stringify(slSection, null, 2));

  // ==========================================
  // INDEX 5 - ACADEMIC YEAR
  // ==========================================

  const yearSection = sections[5];

  console.log("========== POA SECTION [5] ==========");

  console.log(JSON.stringify(yearSection, null, 2));

  console.log("========================================");

  return (
    <>
      {/* Banner - Section Index 2 */}
      <POABanner section={bannerSection} />

      {/* POA Table - Section Index 4 & 5 */}
      <POAContents
        slSection={slSection}
        yearSection={yearSection}
      />
    </>
  );
}