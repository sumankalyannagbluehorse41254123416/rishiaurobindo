
import { headers } from "next/headers";

import PageTitle from "@/components/naac/ssr-report/PageTitle";
import SSRReportTable from "@/components/naac/ssr-report/SSRReportTable";

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

export default async function SSRReport() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE DATA
  // ==========================================

  const pageId =
    "e283bc70-e9d8-4020-96be-37acfa4d08e6";

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
    console.error(
      "SSR REPORT PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 10
  const section = sections[10];

  // ==========================================
  // DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "bd158137-5f80-4106-9527-63d64dae93c8";

  let documentData: DocumentCollectionData | null =
    null;

  try {
    documentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      collectionId
    );

    console.log(
      "===================================="
    );

    console.log(
      "SSR REPORT DOCUMENT COLLECTION DATA"
    );

    console.log(
      "===================================="
    );

    console.log(
      JSON.stringify(documentData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "SSR REPORT DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <PageTitle section={section} />

      <SSRReportTable documents={documents} />
    </>
  );
}

