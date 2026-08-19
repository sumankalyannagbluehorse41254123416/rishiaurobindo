import { headers } from "next/headers";

import DElEdBanner from "@/components/academic/question-paper/deled-25/DElEdBanner";
import DElEdContent from "@/components/academic/question-paper/deled-25/DElEdContent";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  file_url?: string;
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

interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  file_size?: number;
  download_button_name?: string;
  download_count?: number;
  is_downloadable?: boolean;
  thumbnail_url?: string;
  sequence?: number;
  status?: string;
}

interface DocumentCollectionData {
  collection?: {
    documents?: DocumentItem[];
  };
}

export default async function Deled25() {
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
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION ID
  // ==========================================

  const documentCollectionId =
    "21e7cff8-885c-49ac-a78b-dce821e969fc";

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
      "DELED PAGE DATA ERROR:",
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
      "DELED DOCUMENT API ERROR:",
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
  // DELED CONTENT
  // ARRAY INDEX 16
  // ==========================================

  const deledSection =
    sections[16];

  // ==========================================
  // DELED BANNER
  // ARRAY INDEX 18
  // ==========================================

  const bannerSection =
    sections[18];

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <DElEdBanner
        sectionData={bannerSection}
      />

      <DElEdContent
        sectionData={deledSection}
        documents={documents}
      />
    </>
  );
}