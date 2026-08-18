import { headers } from "next/headers";

import AffidavitBanner from "@/components/Infrastructure/affidavit/AffidavitBanner";
import AffidavitContent from "@/components/Infrastructure/affidavit/AffidavitContent";

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

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function Affidavit() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "73d53a49-9aa0-4800-b4b7-fe98cca4a464";

  const documentCollectionId =
    "fbf34777-6152-42da-9f60-e8378ad06993";

  let pageData: PageData = {};
  let documentData: DocumentCollectionData | null =
    null;

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
      "AFFIDAVIT PAGE DATA ERROR:",
      error
    );
  }

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
      "AFFIDAVIT DOCUMENT API ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  const affidavitSection =
    sections[10];

  const documents =
    documentData?.collection?.documents || [];

  const affidavitDocument =
    documents[0];

  return (
    <>
      <AffidavitBanner
        sectionData={affidavitSection}
      />

      <AffidavitContent
        document={affidavitDocument}
      />
    </>
  );
}