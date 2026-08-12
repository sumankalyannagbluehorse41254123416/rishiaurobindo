import { headers } from "next/headers";

import GrievanceRedressalGuideline from "@/components/grievance-redressal-cell/institutional-guidelines-25/GrievanceRedressalGuideline";
import InstitutionalGuidelinesBanner from "@/components/grievance-redressal-cell/institutional-guidelines-25/InstitutionalGuidelinesBanner";

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

export default async function InstitutionalGuidelines() {
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
      "INSTITUTIONAL GUIDELINES PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 0
  const section = sections[0];

  // ==========================================
  // GRIEVANCE REDRESSAL GUIDELINE
  // ==========================================

  const collectionId =
    "921c666d-b563-41ce-8aa3-4b818a4b3578";

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
  } catch (error) {
    console.error(
      "GRIEVANCE REDRESSAL GUIDELINE DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <InstitutionalGuidelinesBanner
        section={section}
      />

      <GrievanceRedressalGuideline
        documents={documents}
      />
    </>
  );
}