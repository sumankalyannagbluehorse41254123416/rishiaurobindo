import { headers } from "next/headers";

import GardenBannerContent from "@/components/Infrastructure/garden/GardenBannerContent";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Garden() {
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
  // FETCH PAGE DATA
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
    console.log("GARDEN PAGE DATA");
    console.log(
      JSON.stringify(pageData, null, 2)
    );
    console.log("====================================");
  } catch (error) {
    console.error(
      "GARDEN PAGE DATA ERROR:",
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
  // GARDEN - ARRAY INDEX 9
  // ==========================================

  const gardenSection = sections[9];

  console.log("====================================");
  console.log("GARDEN SECTION - INDEX 9");
  console.log(
    JSON.stringify(gardenSection, null, 2)
  );
  console.log("====================================");

  return (
    <>
      <GardenBannerContent
        sectionData={gardenSection}
      />
    </>
  );
}