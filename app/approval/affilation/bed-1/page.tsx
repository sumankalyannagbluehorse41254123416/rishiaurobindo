import { headers } from "next/headers";

import BEDPageTitle from "@/components/approval/affilation/bed-1/BEDPageTitle";
import BEDReports from "@/components/approval/affilation/bed-1/BEDReports";

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

export default async function Bed1Page() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // B.ED AFFILIATION COLLECTION ID
  // ==========================================

  const bedAffiliationCollectionId =
    "5f89682f-84e5-4e94-abd6-6ed1a9021628";

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "2a9b876f-1b96-4ccd-bb82-088f351f1c2b";

  // ==========================================
  // DATA
  // ==========================================

  let bedAffiliationData: DocumentCollectionData | null = null;
  let pageData: PageData | null = null;

  // ==========================================
  // B.ED DOCUMENT COLLECTION
  // ==========================================

  try {
    bedAffiliationData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      bedAffiliationCollectionId
    );
  } catch (error) {
    console.error("B.ED AFFILIATION API ERROR:", error);
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
  // SECTIONS
  // ==========================================

  const sections =
    pageData?.pageItemdataWithSubsection ||
    pageData?.data?.pageItemdataWithSubsection ||
    [];

  // index 4 = B.ED Page Title section
  const pageTitleSection = sections[4];

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    bedAffiliationData?.collection?.documents || [];

  return (
    <>
      <BEDPageTitle section={pageTitleSection} />

      <BEDReports
        documents={documents}
      />
    </>
  );
}