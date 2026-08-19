import { headers } from "next/headers";

import FeedbackBanner from "@/components/academic/feedback/FeedbackBanner";
import FeedbackContents from "@/components/academic/feedback/FeedbackContents";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };

  [key: string]: unknown;
}

interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface DocumentCollectionData {
  documents?: DocumentItem[];

  data?: {
    documents?: DocumentItem[];
  };

  collection?: {
    documents?: DocumentItem[];
  };

  [key: string]: unknown;
}

export default async function Feedback() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PAGE UID
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION UID
  // ==========================================

  const documentCollectionId =
    "69b8c8d5-036e-48e7-9704-89163d494407";

  let pageData: PageData = {};

  let documentCollection:
    DocumentCollectionData = {};

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

    console.log(
      "========================================"
    );

    console.log(
      "FEEDBACK FULL PAGE DATA"
    );

    console.log(
      "========================================"
    );

    console.log(
      JSON.stringify(
        pageData,
        null,
        2
      )
    );

    console.log(
      "========================================"
    );
  } catch (error) {
    console.error(
      "FEEDBACK PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // FETCH DOCUMENT COLLECTION
  // ==========================================

  try {
    documentCollection =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        documentCollectionId
      );

    console.log(
      "========================================"
    );

    console.log(
      "FEEDBACK DOCUMENT COLLECTION"
    );

    console.log(
      "========================================"
    );

    console.log(
      JSON.stringify(
        documentCollection,
        null,
        2
      )
    );

    console.log(
      "========================================"
    );
  } catch (error) {
    console.error(
      "FEEDBACK DOCUMENT COLLECTION ERROR:",
      error
    );
  }

  // ==========================================
  // GET PAGE SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log(
    "========================================"
  );

  console.log(
    "FEEDBACK SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // INDEX 8 - BANNER
  // ==========================================

  const bannerSection =
    sections[8];

  console.log(
    "========== FEEDBACK SECTION [8] =========="
  );

  console.log(
    JSON.stringify(
      bannerSection,
      null,
      2
    )
  );

  // ==========================================
  // GET DOCUMENTS
  // ==========================================

  const documents =
    documentCollection.documents ||
    documentCollection.data?.documents ||
    documentCollection.collection?.documents ||
    [];

  console.log(
    "========================================"
  );

  console.log(
    "FEEDBACK DOCUMENTS LENGTH:",
    documents.length
  );

  console.log(
    "========================================"
  );

  documents.forEach(
    (document, index) => {
      console.log(
        `========== FEEDBACK DOCUMENT [${index}] ==========`
      );

      console.log(
        JSON.stringify(
          document,
          null,
          2
        )
      );
    }
  );

  console.log(
    "========================================"
  );

  return (
    <>
      {/* Banner - Section Index 8 */}
      <FeedbackBanner
        section={bannerSection}
      />

      {/* Feedback Documents */}
      <FeedbackContents
        documents={documents}
      />
    </>
  );
}