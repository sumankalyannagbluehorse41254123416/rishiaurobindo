import { headers } from "next/headers";

import LibraryBanner from "@/components/Infrastructure/library/LibraryBanner";
import LibraryInfo from "@/components/Infrastructure/library/LibraryInfo";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
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

export default async function Library() {
  // ==========================================
  // HEADERS
  // ==========================================

  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "73d53a49-9aa0-4800-b4b7-fe98cca4a464";

  let pageData: PageData = {};

  // ==========================================
  // API
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
      "===================================="
    );

    console.log("LIBRARY PAGE DATA");

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "LIBRARY API ERROR:",
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

  // ==========================================
  // BANNER
  // ARRAY INDEX 0
  // ==========================================

  const bannerSection = sections[0];

  // ==========================================
  // LIBRARY INFORMATION
  // ARRAY INDEX 1
  // ==========================================

  const libraryInfoSection = sections[1];

  const libraryDetails =
    libraryInfoSection?.subsections || [];

  // ==========================================
  // LIBRARY IMAGES
  // ARRAY INDEX 2
  // ==========================================

  const imageSection = sections[2];

  const libraryImages =
    imageSection?.subsections || [];

  // ==========================================
  // CONSOLE LOG
  // ==========================================

  console.log(
    "===================================="
  );

  console.log(
    "LIBRARY INFO SECTION:",
    libraryInfoSection
  );

  console.log(
    "LIBRARY DETAILS:",
    libraryDetails
  );

  console.log(
    "IMAGE SECTION:",
    imageSection
  );

  console.log(
    "LIBRARY IMAGES:",
    libraryImages
  );

  console.log(
    "===================================="
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <LibraryBanner
        sectionData={bannerSection}
      />

      <LibraryInfo
        librarySection={libraryInfoSection}
        imageSection={imageSection}
        libraryDetails={libraryDetails}
        images={libraryImages}
      />
    </>
  );
}