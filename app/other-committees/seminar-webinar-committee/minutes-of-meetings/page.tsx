import { headers } from "next/headers";

import MinutesOfMeetingsBanner from "@/components/other-committees/seminar-webinar-committee/minutes-of-meetings/MinutesOfMeetingsBanner";

import MinutesOfMeetings from "@/components/other-committees/seminar-webinar-committee/minutes-of-meetings/MinutesOfMeetings";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

type DocumentCollectionData = Awaited<
  ReturnType<typeof fetchDocumentCollection>
>;

export default async function MinutesOfMeetingsPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // MINUTES OF MEETINGS DOCUMENT COLLECTION
  // ==========================================

  const collectionId =
    "0c79a219-5610-4563-b622-f076052b36c0";

  let documentData: DocumentCollectionData | null =
    null;

  // ==========================================
  // API
  // ==========================================

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
      "SEMINAR WEBINAR COMMITTEE MINUTES OF MEETINGS DATA"
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
      "SEMINAR WEBINAR MINUTES OF MEETINGS API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents || [];

  console.log(
    "SEMINAR WEBINAR MINUTES DOCUMENTS:",
    documents
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <MinutesOfMeetingsBanner />

      <MinutesOfMeetings
        documents={documents}
      />
    </>
  );
}