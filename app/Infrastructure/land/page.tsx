import { headers } from "next/headers";

import LandPage from "@/components/Infrastructure/land/LandPage";
import LandInfo from "@/components/Infrastructure/land/LandInfo";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  image?: string;
  description?: string;
  file_url?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  file_url?: string;
  download_button_name?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function Land() {
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
  } catch (error) {
    console.error(
      "LAND PAGE DATA ERROR:",
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
  // BANNER - ARRAY INDEX 30
  // ==========================================

  const bannerSection =
    sections[30];

  // ==========================================
  // LAND INFORMATION - ARRAY INDEX 29
  // ==========================================

  const landInfoSection =
    sections[29];

  // ==========================================
  // AFFIDAVIT MANDATORY DISCLOSURE - INDEX 0
  // ==========================================

  const affidavitSection =
    sections[0];

  // ==========================================
  // LAND MUTATION - INDEX 1
  // ==========================================

  const landMutationSection =
    sections[1];

  // ==========================================
  // DOCUMENT COLLECTION
  // LAND DEED + AFFIDAVIT
  // ==========================================

  const documentCollectionId =
    "d7c032d8-0f70-4333-b892-8c681b5a0cf4";

  let documentData:
    | DocumentCollectionData
    | null = null;

  try {
    documentData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        documentCollectionId
      );
  } catch (error) {
    console.error(
      "LAND DOCUMENT COLLECTION ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents ||
    [];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      {/* LAND BANNER - ARRAY INDEX 30 */}

      <LandPage
        sectionData={bannerSection}
      />

      {/* LAND INFORMATION - ARRAY INDEX 29
          AFFIDAVIT - ARRAY INDEX 0
          LAND MUTATION - ARRAY INDEX 1
          DOCUMENTS - COLLECTION
      */}

      <LandInfo
        sectionData={landInfoSection}
        affidavitSection={affidavitSection}
        landMutationSection={
          landMutationSection
        }
        documents={documents}
      />
    </>
  );
}