import { headers } from "next/headers";

import DELEdPageTitle from "@/components/approval/affilation/deled-1/DELEdPageTitle";
import DELEdReports from "@/components/approval/affilation/deled-1/DELEdReports";

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

export default async function Deled1Page() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  // Document Collection UID
  const documentCollectionId =
    "1076a965-9170-4d2d-a080-1de74fa12014";

  // Page UID
  const pageId =
    "2a9b876f-1b96-4ccd-bb82-088f351f1c2b";

  let documentData: DocumentCollectionData | null = null;
  let pageData: PageData | null = null;

  try {
    documentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      documentCollectionId
    );
  } catch (error) {
    console.error("Document collection error:", error);
  }

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error("Page data error:", error);
  }

  const documents =
    documentData?.collection?.documents || [];

  const sections =
    pageData?.pageItemdataWithSubsection ||
    pageData?.data?.pageItemdataWithSubsection ||
    [];

  // Section index 3 = Page Title section
  const pageTitleSection = sections[3];

  // Section index 2 = Reports section
  const reportSection = sections[2];

  return (
    <>
      <DELEdPageTitle section={pageTitleSection} />

      <DELEdReports
        document={documents[0]}
        section={reportSection}
      />
    </>
  );
}