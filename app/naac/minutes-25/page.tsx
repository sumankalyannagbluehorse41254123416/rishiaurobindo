
import { headers } from "next/headers";

import PageTitle from "@/components/naac/minutes-25/PageTitle";
import MinutesOfMeeting from "@/components/naac/minutes-25/MinutesOfMeeting";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

interface DocumentData {
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  [key: string]: unknown;
}

interface DocumentCollectionData {
  success?: boolean;

  collection?: {
    id?: number;
    uid?: string;
    name?: string;
    slug?: string;
    description?: string;
    status?: string;
    sequence?: number;
    document_count?: number;
    documents?: DocumentData[];
  };
}

export default async function Minutes25() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PAGE DATA
  // ==========================================

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "e283bc70-e9d8-4020-96be-37acfa4d08e6"
    );

    console.log(
      "MINUTES PAGE DATA:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "MINUTES PAGE API ERROR:",
      error
    );
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // MINUTES OF MEETING DOCUMENT COLLECTION
  // ==========================================

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
        "687ee045-3e15-46d1-b0f2-16d9e64e3e58"
      );

    console.log(
      "MINUTES DOCUMENT COLLECTION DATA:",
      JSON.stringify(
        documentData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "MINUTES DOCUMENT COLLECTION API ERROR:",
      error
    );
  }

  const documents =
    documentData?.collection?.documents || [];

  return (
    <>
      <PageTitle section={sections[7]} />

      <MinutesOfMeeting
        documents={documents}
      />
    </>
  );
}

