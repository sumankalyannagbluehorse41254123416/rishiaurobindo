import { headers } from "next/headers";

import DElEdPageTitle from "@/components/approval/recognition/deled/DElEdPageTitle";
import DELEdRecognitionOrder from "@/components/approval/recognition/deled/DELEdRecognitionOrder";

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

export default async function DElEdRecognitionPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // D.EL.ED RECOGNITION COLLECTION ID
  // ==========================================

  const deledRecognitionCollectionId =
    "c87fdaee-69e2-44a5-9cf3-f5625ebcf91f";

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "2a9b876f-1b96-4ccd-bb82-088f351f1c2b";

  // ==========================================
  // DATA
  // ==========================================

  let deledRecognitionData: DocumentCollectionData | null = null;
  let pageData: PageData | null = null;

  // ==========================================
  // D.EL.ED RECOGNITION DOCUMENTS
  // ==========================================

  try {
    deledRecognitionData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      deledRecognitionCollectionId
    );
  } catch (error) {
    console.error(
      "D.EL.ED RECOGNITION API ERROR:",
      error
    );
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
    console.error(
      "D.EL.ED PAGE API ERROR:",
      error
    );
  }

  // ==========================================
  // PAGE SECTIONS
  // ==========================================

  const sections =
    pageData?.pageItemdataWithSubsection ||
    pageData?.data?.pageItemdataWithSubsection ||
    [];

  // index 3 = D.EL.ED Page Title
  const pageTitleSection = sections[3];

  return (
    <>
      <DElEdPageTitle section={pageTitleSection} />

      <DELEdRecognitionOrder
        data={deledRecognitionData}
      />
    </>
  );
}