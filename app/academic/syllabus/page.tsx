import { headers } from "next/headers";

import SyllabusBanner from "@/components/academic/syllabus/SyllabusBanner";
import SyllabusContents from "@/components/academic/syllabus/SyllabusContents";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
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
}

interface DocumentCollectionData {
  collection?: {
    documents?: DocumentItem[];
  };
}

export default async function Syllabus() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // PAGE DATA
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

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
    console.error("SYLLABUS PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Banner section (array index 1)
  const section = sections[1];

  // ==========================================
  // DOCUMENT COLLECTION
  // ==========================================

  const documentCollectionId =
    "9f6c3c27-5c59-439d-9200-7c9722f0c5c3";

  let documentData: DocumentCollectionData | null = null;

  try {
    documentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      documentCollectionId
    );
  } catch (error) {
    console.error("SYLLABUS DOCUMENT API ERROR:", error);
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <SyllabusBanner section={section} />

      <SyllabusContents documents={documents} />
    </>
  );
}