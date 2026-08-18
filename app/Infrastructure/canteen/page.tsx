import { headers } from "next/headers";

import CanteenContent from "@/components/Infrastructure/canteen/CanteenContent";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
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

export default async function Canteen() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================


  const pageId = "73d53a49-9aa0-4800-b4b7-fe98cca4a464";

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

    console.log("====================================");
    console.log("CANTEEN PAGE DATA");
    console.log(
      JSON.stringify(pageData, null, 2)
    );
    console.log("====================================");
  } catch (error) {
    console.error(
      "CANTEEN PAGE DATA ERROR:",
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
  // CONSOLE LOG
  // ==========================================

  console.log("====================================");
  console.log("CANTEEN SECTIONS");
  console.log(
    JSON.stringify(sections, null, 2)
  );

  console.log("CANTEEN SECTION INDEX 4");
  console.log(
    JSON.stringify(sections[4], null, 2)
  );

  console.log("CANTEEN SECTION INDEX 5");
  console.log(
    JSON.stringify(sections[5], null, 2)
  );

  console.log("CANTEEN SECTION INDEX 6");
  console.log(
    JSON.stringify(sections[6], null, 2)
  );

  console.log("====================================");

  // ==========================================
  // SECTIONS
  // ==========================================

  const objectiveSection = sections[4];

  const highlightsSection = sections[5];

  const functionsSection = sections[6];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <CanteenContent
      objectiveSection={objectiveSection}
      highlightsSection={highlightsSection}
      functionsSection={functionsSection}
    />
  );
}