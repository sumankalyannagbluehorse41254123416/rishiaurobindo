
import Documents from "@/components/practice-teaching/Documents";
import PageTitle from "@/components/practice-teaching/PageTitle";
import PracticeSection from "@/components/practice-teaching/PracticeSection";

import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

// ==========================================
// TYPES
// ==========================================

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

// ==========================================
// PRACTICE TEACHING PAGE
// ==========================================

export default async function PracticeTeaching() {

  // ==========================================
  // REQUEST HEADERS
  // ==========================================

  const rqHeaders =
    await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PRACTICE TEACHING PAGE ID
  // ==========================================

  const practicePageId =
    "7543f06a-fff7-46c2-bc5c-4ecd31a9ae86";

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================

  let pageData: PageData = {};

  try {

    pageData =
      await fetchPageData(
        {
          host,
          ...headersObj,
        },
        practicePageId
      );

    console.log(
      "PRACTICE TEACHING API RESPONSE:",
      JSON.stringify(
        pageData,
        null,
        2
      )
    );

  } catch (error) {

    console.error(
      "PRACTICE TEACHING API ERROR:",
      error
    );

  }

  // ==========================================
  // GET SECTIONS
  // ==========================================

  const sections =
    pageData
      .pageItemdataWithSubsection ||
    pageData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      {/* =====================================
          PAGE TITLE
      ====================================== */}

      <PageTitle />

      {/* =====================================
          B.ED + D.EL.ED
      ====================================== */}

      <PracticeSection />

      {/* =====================================
          DOCUMENTS
          DYNAMIC API DATA
      ====================================== */}

      <Documents
        sections={sections}
      />
    </>
  );
}

