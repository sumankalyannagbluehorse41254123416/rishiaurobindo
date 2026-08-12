import { headers } from "next/headers";

import PageTitle from "@/components/grievance-redressal-cell/grievance-online-form-25/PageTitle";
import GrievanceRedressalForm from "@/components/grievance-redressal-cell/grievance-online-form-25/GrievanceRedressalForm";

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

export default async function GrievanceOnlineForm25() {
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
    "fd93fcf3-f14e-400e-b51a-42968c62eaed";

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
      "GRIEVANCE ONLINE FORM PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 8
  const section = sections[8];

  // ==========================================
  // GRIEVANCE REDRESSAL FORM DOCUMENT
  // ==========================================

  const collectionId =
    "588e08e3-01b1-4d8c-b311-2de65dc2c1ad";

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

    // Console log for checking API data
    console.log(
      "===================================="
    );

    console.log(
      "GRIEVANCE REDRESSAL FORM DOCUMENT COLLECTION DATA"
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
      "GRIEVANCE REDRESSAL FORM DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <PageTitle section={section} />

      <GrievanceRedressalForm
        documents={documents}
      />
    </>
  );
}