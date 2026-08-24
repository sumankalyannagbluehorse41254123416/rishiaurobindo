import { headers } from "next/headers";

import DistributionRosterBanner from "@/components/academic/distribution-of-roster/DistributionRosterBanner";
import DistributionRosterContent from "@/components/academic/distribution-of-roster/DistributionRosterContent";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };

  [key: string]: unknown;
}

interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  thumbnail_image?: string;
  thumbnailImage?: string;
  thumbnail?: string;
  image?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface DocumentCollectionData {
  documents?: DocumentItem[];

  data?: {
    documents?: DocumentItem[];
  };

  collection?: {
    documents?: DocumentItem[];
  };

  [key: string]: unknown;
}

export default async function DistributionOfRoster() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PAGE UID
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION UID
  // ==========================================

  const documentCollectionId =
    "4365f379-8983-4e39-92a4-c90eaec59c70";

  let pageData: PageData = {};

  let documentCollection: DocumentCollectionData =
    {};

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

    console.log(
      "========================================"
    );
    console.log(
      "DISTRIBUTION OF ROSTER PAGE DATA"
    );
    console.log(
      "========================================"
    );

    console.log(
      JSON.stringify(
        pageData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "DISTRIBUTION OF ROSTER PAGE ERROR:",
      error
    );
  }

  // ==========================================
  // FETCH DOCUMENT COLLECTION
  // ==========================================

  try {
    documentCollection =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        documentCollectionId
      );

    console.log(
      "========================================"
    );
    console.log(
      "DISTRIBUTION OF ROSTER DOCUMENTS"
    );
    console.log(
      "========================================"
    );

    console.log(
      JSON.stringify(
        documentCollection,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "DISTRIBUTION OF ROSTER DOCUMENT ERROR:",
      error
    );
  }

  // ==========================================
  // GET PAGE SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER
  // Replace the index below with your banner
  // section index
  // ==========================================


  
  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    documentCollection.documents ||
    documentCollection.data?.documents ||
    documentCollection.collection?.documents ||
    [];

  console.log(
    "========================================"
  );

  console.log(
    "DOCUMENT COUNT:",
    documents.length
  );

  console.log(
    "========================================"
  );

  documents.forEach(
    (document, index) => {
      console.log(
        `========== DOCUMENT ${index} ==========`
      );

      console.log(
        JSON.stringify(
          document,
          null,
          2
        )
      );
    }
  );
const bannerSection = sections[43];

console.log(
  "========== BANNER SECTION [44] =========="
);

console.log(
  JSON.stringify(
    bannerSection,
    null,
    2
  )
);
  return (
    <>
     <DistributionRosterBanner
      section={bannerSection}
    />


      <DistributionRosterContent
        documents={documents}
      />
    </>
  );
}