import { headers } from "next/headers";

import GrievancesBanner from "@/components/other-committees/anti-raging-committee/grievance-antiraging/GrievancesBanner";

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

export default async function Grievance() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ANTI-RAGING COMMITTEE PAGE ID
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
      "GRIEVANCES PAGE DATA ERROR:",
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
  // GRIEVANCES BANNER
  // INDEX 21
  // ==========================================

  const bannerSection = sections[21];

  return (
    <>
      <GrievancesBanner
        sectionData={bannerSection}
      />
    </>
  );
}