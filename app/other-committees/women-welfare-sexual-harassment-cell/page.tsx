import { headers } from "next/headers";

import WomenWelfareSexualHarassmentCellBanner from "@/components/other-committees/women-welfare-sexual-harassment-cell/committee-members/WomenWelfareSexualHarassmentCellBanner";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
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

export default async function WomenWelfareSexualHarassmentCell() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // WOMEN WELFARE SEXUAL HARASSMENT CELL PAGE ID
  // ==========================================

  const pageId =
    "16998dff-0ec7-47e2-94e0-ae03c4828bf2";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error(
      "WOMEN WELFARE SEXUAL HARASSMENT CELL PAGE DATA ERROR:",
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
  // INDEX 23
  // ==========================================

  const bannerSection = sections[23];

  return (
    <>
      <WomenWelfareSexualHarassmentCellBanner
        sectionData={bannerSection}
      />
    </>
  );
}