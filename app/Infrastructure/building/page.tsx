import { headers } from "next/headers";

import BuildingBanner from "@/components/Infrastructure/building/BuildingBanner";
import BuildingInfo from "@/components/Infrastructure/building/BuildingInfo";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
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

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function Building() {
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

  // ==========================================
  // DOCUMENT COLLECTION ID
  // BUILDING
  // ==========================================

  const documentCollectionId =
    "b2276394-0e20-4aae-9a67-9b4dd63c3502";

  let pageData: PageData = {};

  let documentData:
    | DocumentCollectionData
    | null = null;

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
  } catch (error) {
    console.error(
      "BUILDING PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // FETCH DOCUMENT COLLECTION
  // ==========================================

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
      "BUILDING DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER
  // ARRAY INDEX 31
  // ==========================================

  const bannerSection =
    sections[31];

  // ==========================================
  // BUILDING INFO
  // ARRAY INDEX 32
  // ==========================================

  const buildingInfoSection =
    sections[32];

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
      <BuildingBanner
        sectionData={bannerSection}
      />

      <BuildingInfo
        sectionData={buildingInfoSection}
        documents={documents}
      />
    </>
  );
}