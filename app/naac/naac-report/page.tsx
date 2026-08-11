import { headers } from "next/headers";

import PageTitle from "@/components/naac/naac-report/PageTitle";
import NaacCertificateTable from "@/components/naac/naac-report/NaacCertificateTable";

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

export default async function NaacReport() {
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
      "NAAC REPORT PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 9
  const section = sections[9];

  // ==========================================
  // DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "5f8340c1-a10e-4d3e-83d5-7d59a5447b2a";

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
      "NAAC CERTIFICATE DOCUMENT COLLECTION DATA"
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
      "NAAC CERTIFICATE DOCUMENT API ERROR:",
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

      <NaacCertificateTable
        documents={documents}
      />
    </>
  );
}

