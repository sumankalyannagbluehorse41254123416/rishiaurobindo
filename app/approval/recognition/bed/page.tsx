import { headers } from "next/headers";

import BEdPageTitle from "@/components/approval/recognition/bed/BEdPageTitle";
import BedRecognition from "@/components/approval/recognition/bed/approvalDocuments";

import {
  fetchDocumentCollection,
  fetchPageData,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

type PageData = Awaited<
  ReturnType<typeof fetchPageData>
>;

export default async function BedRecognitionPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // B.ED RECOGNITION COLLECTION ID
  // ==========================================

  const bedRecognitionCollectionId =
    "f93612c8-8d90-4770-a306-8c295adbb227";

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "2a9b876f-1b96-4ccd-bb82-088f351f1c2b";

  // ==========================================
  // DATA
  // ==========================================

  let bedRecognitionData: DocumentCollectionData | null = null;
  let pageData: PageData | null = null;

  // ==========================================
  // B.ED RECOGNITION DOCUMENTS
  // ==========================================

  try {
    bedRecognitionData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      bedRecognitionCollectionId
    );
  } catch (error) {
    console.error("B.ED RECOGNITION API ERROR:", error);
  }

  // ==========================================
  // PAGE DATA
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
    console.error("B.ED PAGE API ERROR:", error);
  }

  // ==========================================
  // PAGE SECTIONS
  // ==========================================

  const sections =
    pageData?.pageItemdataWithSubsection ||
    pageData?.data?.pageItemdataWithSubsection ||
    [];

  // index 4 = B.Ed Page Title
  const pageTitleSection = sections[4];

  return (
    <>
      <BEdPageTitle section={pageTitleSection} />

      <BedRecognition data={bedRecognitionData} />
    </>
  );
}