import { headers } from "next/headers";

import MinutesOfMeeting from "@/components/grievance-redressal-cell/minutes-of-meeting-grievance-25/MinutesOfMeeting";
import MinutesOfMeetingBanner from "@/components/grievance-redressal-cell/minutes-of-meeting-grievance-25/MinutesOfMeetingBanner";

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

export default async function MinutesOfMeetingGrievance25() {
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
      "MINUTES OF MEETING PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 11
  const section = sections[11];

  // ==========================================
  // MINUTES OF MEETING DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "f14a76d6-7ed9-464c-a46a-dda607081f14";

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
      "MINUTES OF MEETING DOCUMENT COLLECTION DATA"
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
      "MINUTES OF MEETING DOCUMENT API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <MinutesOfMeetingBanner
        section={section}
      />

      <MinutesOfMeeting
        documents={documents}
      />
    </>
  );
}