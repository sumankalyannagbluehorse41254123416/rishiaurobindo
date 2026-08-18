import { headers } from "next/headers";

import CodeOfConductPageTitle from "@/components/about/code-of-conduct/CodeOfConductPageTitle";
import CodeOfConduct from "@/components/about/code-of-conduct/CodeOfConduct";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
  longDescription?: string;
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

export default async function CodeOfConductPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "57751c9d-62f4-4669-9934-4cc8c07365d6";

  // ==========================================
  // DOCUMENT COLLECTION ID
  // ==========================================

  const documentCollectionId =
    "d0a3e2f0-d864-4bed-82ef-2ef492019567";

  let pageData: PageData = {};

  let documentData:
    | DocumentCollectionData
    | null = null;

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
  } catch (error) {
    console.error(
      "CODE OF CONDUCT PAGE DATA ERROR:",
      error
    );
  }

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
      "CODE OF CONDUCT DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // PAGE TITLE SECTION
  // ARRAY INDEX 5
  // ==========================================

  const section = sections[5];

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents || [];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <CodeOfConductPageTitle
        section={section}
      />

      <CodeOfConduct
        documents={documents}
      />
    </>
  );
}