import { headers } from "next/headers";
import { Metadata } from "next";

import NoticeBanner from "@/components/notice/list/NoticeBanner";
import NoticesPage from "@/components/notice/list/NoticesPage";

import { fetchDocumentCollection } from "@/service/fetchdata.services";

export const metadata: Metadata = {
  title: "Notices - Rishi Aurobindo Shikshan Mahavidyalaya",
  description:
    "View all notices and announcements from Rishi Aurobindo Shikshan Mahavidyalaya",
};

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

export default async function NoticeListPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // DOCUMENT COLLECTION ID
  // ==========================================

  const documentCollectionId =
    "3a9aa555-7c67-4d58-a833-f4d66de3e9b5";

  let documentData:
    | DocumentCollectionData
    | null = null;

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
      "NOTICE DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents || [];

  // ==========================================
  // DEBUG
  // ==========================================

  console.log(
    "===================================="
  );

  console.log(
    "NOTICE DOCUMENTS:"
  );

  console.log(
    JSON.stringify(
      documents,
      null,
      2
    )
  );

  console.log(
    "TOTAL NOTICES:",
    documents.length
  );

  console.log(
    "===================================="
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <NoticeBanner />

      <NoticesPage
        documents={documents}
      />
    </>
  );
}