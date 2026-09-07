import { headers } from "next/headers";
import { Metadata } from "next";

import MinutesOfMeetingsPageTitle from "@/components/iqec-cell/minutes-of-meetings/MinutesOfMeetingsPageTitle";
import MinutesOfMeetingsSection from "@/components/iqec-cell/minutes-of-meetings/MinutesOfMeetingsSection";

import { fetchDocumentCollection } from "@/service/fetchdata.services";

export const metadata: Metadata = {
  title: "Minutes Of Meetings",
  description: "Minutes Of Meetings",
};

interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  thumbnail_url?: string;
}

interface DocumentCollectionData {
  collection?: {
    documents?: DocumentItem[];
  };
}

export default async function MinutesOfMeetings() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const documentCollectionId =
    "6d219fd2-4ebd-4dfd-b484-375dc7f4a209";

  let documentData:
    | DocumentCollectionData
    | null = null;

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
    console.error(error);
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <MinutesOfMeetingsPageTitle />

      <MinutesOfMeetingsSection
        documents={documents}
      />
    </>
  );
}