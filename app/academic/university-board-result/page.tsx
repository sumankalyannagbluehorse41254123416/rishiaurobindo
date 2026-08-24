import { headers } from "next/headers";
import UniversityBoardResultBanner from "@/components/academic/university-board-result/UniversityBoardResultBanner";
import UniversityBoardResult from "@/components/academic/university-board-result/UniversityBoardResult";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
  file?: string;
  file_url?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];
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

export default async function UniversityBoardResultPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // PAGE UID
  // ==========================================
  const pageId = "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION UID
  // ==========================================
  const documentCollectionId = "c21d3fc7-51c5-4e96-b642-1aa4bd162198";

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

    console.log("========== UNIVERSITY RESULT PAGE ==========");
    console.log(JSON.stringify(pageData, null, 2));
  } catch (error) {
    console.error("UNIVERSITY RESULT PAGE ERROR:", error);
  }

  // ==========================================
  // FETCH DOCUMENT COLLECTION
  // ==========================================
  try {
    documentCollection = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      documentCollectionId
    );

    console.log("========== UNIVERSITY RESULT DOCUMENT ==========");
    console.log(JSON.stringify(documentCollection, null, 2));
  } catch (error) {
    console.error("UNIVERSITY RESULT DOCUMENT ERROR:", error);
  }

  // ==========================================
  // PAGE SECTIONS
  // ==========================================
  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // D.EL.ED - Sections (Index 20, 21, 22)
  // ==========================================
  const deledSlSection = sections[20];
  const deledSemesterSection = sections[21];
  const deledTitleSection = sections[22];

  // ==========================================
  // B.ED - Sections (Index 23, 24, 25)
  // ==========================================
  const bedSlSection = sections[23];
  const bedSemesterSection = sections[24];
  const bedTitleSection = sections[25];

  // ==========================================
  // DOCUMENTS
  // ==========================================
  const documents =
    documentCollection.documents ||
    documentCollection.data?.documents ||
    documentCollection.collection?.documents ||
    [];
const bannerSection = sections[19];
  return (
    <>
      <UniversityBoardResultBanner section={bannerSection} />
      <UniversityBoardResult
        deledSlSection={deledSlSection}
        deledSemesterSection={deledSemesterSection}
        deledTitleSection={deledTitleSection}
        bedSlSection={bedSlSection}
        bedSemesterSection={bedSemesterSection}
        bedTitleSection={bedTitleSection}
        documents={documents}
      />
    </>
  );
}