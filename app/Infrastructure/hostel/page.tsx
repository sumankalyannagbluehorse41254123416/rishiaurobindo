import { headers } from "next/headers";

import HostelInfo from "@/components/Infrastructure/hostel/HostelInfo";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
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

export default async function Hostel() {
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
    "73d53a49-9aa0-4800-b4b7-fe98cca4a464";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log(
      "===================================="
    );

    console.log("HOSTEL PAGE DATA");

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "HOSTEL PAGE API ERROR:",
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

  console.log(
    "===================================="
  );

  console.log("HOSTEL SECTIONS:");

  console.log(
    JSON.stringify(sections, null, 2)
  );

  console.log(
    "===================================="
  );

  // ==========================================
  // SECTION INDEX 3
  // ==========================================

  const hostelSection = sections[3];

  console.log(
    "===================================="
  );

  console.log("HOSTEL SECTION INDEX 3:");

  console.log(
    JSON.stringify(hostelSection, null, 2)
  );

  console.log(
    "===================================="
  );

  // ==========================================
  // DOCUMENT COLLECTION
  // ==========================================

  const documentCollectionId =
    "706a2983-2d8e-4ea6-9cc1-e4bdabed59f0";

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

    console.log(
      "===================================="
    );

    console.log(
      "HOSTEL DOCUMENT COLLECTION DATA"
    );

    console.log(
      JSON.stringify(
        documentData,
        null,
        2
      )
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "HOSTEL DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentData?.collection?.documents ||
    [];

  console.log(
    "===================================="
  );

  console.log("HOSTEL DOCUMENTS:");

  console.log(
    JSON.stringify(
      documents,
      null,
      2
    )
  );

  console.log(
    "===================================="
  );

  return (
    <HostelInfo
      section={hostelSection}
      documents={documents}
    />
  );
}