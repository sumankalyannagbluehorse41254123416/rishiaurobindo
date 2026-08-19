import { headers } from "next/headers";

import AcademicCalendarBanner from "@/components/academic/academic-calendar/AcademicCalendarBanner";
import AcademicCalendarContents from "@/components/academic/academic-calendar/AcademicCalendarContents";

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

export default async function AcademicCalendar() {
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
    "7add1834-a440-4f3b-a278-d4b1afb34dc0";

  let pageData: PageData = {};

  let documentCollection: DocumentCollectionData = {};

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
      "ACADEMIC CALENDAR FULL PAGE DATA"
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
      "ACADEMIC CALENDAR PAGE DATA ERROR:",
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
      "ACADEMIC CALENDAR DOCUMENT COLLECTION"
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
      "ACADEMIC CALENDAR DOCUMENT COLLECTION ERROR:",
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
    "ACADEMIC CALENDAR SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // INDEX 3 - BANNER
  // ==========================================

  const bannerSection =
    sections[3];

  console.log(
    "========== ACADEMIC CALENDAR SECTION [3] =========="
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
    "ACADEMIC CALENDAR DOCUMENTS LENGTH:",
    documents.length
  );

  console.log(
    "========================================"
  );

  documents.forEach(
    (document, index) => {
      console.log(
        `========== ACADEMIC CALENDAR DOCUMENT [${index}] ==========`
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
      {/* Banner - Page Section Index 3 */}
      <AcademicCalendarBanner
        section={bannerSection}
      />

      {/* Academic Calendar Documents */}
      <AcademicCalendarContents
        documents={documents}
      />
    </>
  );
}