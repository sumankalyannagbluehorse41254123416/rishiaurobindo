import { headers } from "next/headers";

import LearningOutcomesBanner from "@/components/academic/learning-outcomes/LearningOutcomesBanner";
import LearningOutcomesContents from "@/components/academic/learning-outcomes/LearningOutcomesContents";

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

export default async function LearningOutcomes() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
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
    "0ad4a2eb-9b15-4667-aa10-7bdc623f5a70";

  let pageData: PageData = {};

  let documentCollection: DocumentCollectionData =
    {};

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
      "LEARNING OUTCOMES FULL PAGE DATA"
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
      "LEARNING OUTCOMES PAGE DATA ERROR:",
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
      "LEARNING OUTCOMES DOCUMENT COLLECTION"
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
      "LEARNING OUTCOMES DOCUMENT COLLECTION ERROR:",
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
    "LEARNING OUTCOMES SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // INDEX 7 - BANNER
  // ==========================================

  const bannerSection =
    sections[7];

  console.log(
    "========== LEARNING OUTCOMES SECTION [7] =========="
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
    "LEARNING OUTCOMES DOCUMENTS LENGTH:",
    documents.length
  );

  console.log(
    "========================================"
  );

  documents.forEach(
    (document, index) => {
      console.log(
        `========== LEARNING OUTCOMES DOCUMENT [${index}] ==========`
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
      {/* Banner - Page Section Index 7 */}
      <LearningOutcomesBanner
        section={bannerSection}
      />

      {/* Documents */}
      <LearningOutcomesContents
        documents={documents}
      />
    </>
  );
}