import { headers } from "next/headers";

import CollegeRoutineBanner from "@/components/academic/college-routine/CollegeRoutineBanner";
import CollegeRoutineData from "@/components/academic/college-routine/collegeRoutineData";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
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

interface RoutineCollection {
  year: string;
  uid: string;
  documents: DocumentItem[];
}

export default async function CollegeRoutine() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE UID
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================

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
      "========================================"
    );

    console.log(
      "COLLEGE ROUTINE FULL PAGE DATA"
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

    console.log(
      "========================================"
    );
  } catch (error) {
    console.error(
      "COLLEGE ROUTINE PAGE DATA ERROR:",
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

  console.log(
    "========================================"
  );

  console.log(
    "COLLEGE ROUTINE SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // INDEX 7 - BANNER
  // ==========================================

  const bannerSection = sections[7];

  console.log(
    "========== COLLEGE ROUTINE SECTION [7] =========="
  );

  console.log(
    JSON.stringify(
      bannerSection,
      null,
      2
    )
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // DOCUMENT COLLECTION UIDS
  // ==========================================

  const routineCollections = [
    {
      year: "2015-2017",
      uid: "876a9945-4a81-4ba9-bef8-3382dd9a997e",
    },
    {
      year: "2016-2018",
      uid: "b136250d-1fdf-45ac-b9b0-cbe76fde723d",
    },
    {
      year: "2017-2019",
      uid: "795e3fdf-0c67-4558-af61-5d7601a6b7c4",
    },
    {
      year: "2018-2020",
      uid: "fdd4d857-6340-4d9b-86b7-8e11c9d51dac",
    },
    {
      year: "2019-2021",
      uid: "6372b5fc-459d-4480-ba6a-608c8881922d",
    },
    {
      year: "2020-2022",
      uid: "de30c93c-d481-4e02-9c1e-9ba0b31fb59a",
    },
    {
      year: "2021-2023",
      uid: "c8aa5e9c-7921-4fb1-80fc-872079467a58",
    },
  ];

  // ==========================================
  // FETCH DOCUMENT COLLECTIONS
  // ==========================================

  const routineData: RoutineCollection[] =
    await Promise.all(
      routineCollections.map(
        async (item) => {
          let collectionData:
            | DocumentCollectionData
            | null = null;

          try {
            collectionData =
              await fetchDocumentCollection(
                {
                  host,
                  ...headersObj,
                },
                item.uid
              );

            console.log(
              "========================================"
            );

            console.log(
              `COLLEGE ROUTINE - ${item.year}`
            );

            console.log(
              "COLLECTION UID:",
              item.uid
            );

            console.log(
              "========================================"
            );

            console.log(
              JSON.stringify(
                collectionData,
                null,
                2
              )
            );

            console.log(
              "========================================"
            );
          } catch (error) {
            console.error(
              `COLLEGE ROUTINE ${item.year} COLLECTION ERROR:`,
              error
            );
          }

          const documents =
            collectionData?.documents ||
            collectionData?.data?.documents ||
            collectionData?.collection?.documents ||
            [];

          return {
            year: item.year,
            uid: item.uid,
            documents,
          };
        }
      )
    );

  // ==========================================
  // FINAL DEBUG
  // ==========================================

  console.log(
    "========================================"
  );

  console.log(
    "COLLEGE ROUTINE FINAL DATA"
  );

  console.log(
    JSON.stringify(
      routineData,
      null,
      2
    )
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      {/* Banner - Page Section Index 7 */}

      <CollegeRoutineBanner
        section={bannerSection}
      />

      {/* Routine Content */}

      <CollegeRoutineData
        routineData={routineData}
      />
    </>
  );
}