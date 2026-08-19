import { headers } from "next/headers";

import EmptyBanner from "@/components/academic/college-test/EmptyBanner";
import PreviousInternalQuestionPaper from "@/components/academic/college-test/PreviousInternalQuestionPaper";

import { fetchPageData } from "@/service/fetchdata.services";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
  file?: string;
  file_url?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;

  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];

  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };

  [key: string]: unknown;
}

export default async function CollegeTest() {
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

  let pageData: PageData = {};

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
      "COLLEGE TEST FULL PAGE DATA"
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
      "COLLEGE TEST PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // GET SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log(
    "========================================"
  );

  console.log(
    "COLLEGE TEST SECTIONS LENGTH:",
    sections.length
  );

  console.log(
    "========================================"
  );

  // ==========================================
  // BANNER
  // INDEX 15
  // ==========================================

  const bannerSection =
    sections[15];

  console.log(
    "========== SECTION [15] =========="
  );

  console.log(
    JSON.stringify(
      bannerSection,
      null,
      2
    )
  );

  // ==========================================
  // B.ED
  // ==========================================

  const bedAcademicSection =
    sections[9];

  const bedSemesterSection =
    sections[10];

  const bedYearSection =
    sections[11];

  // ==========================================
  // D.EL.ED
  // ==========================================

  const deledAcademicSection =
    sections[12];

  const deledSemesterSection =
    sections[13];

  const deledYearSection =
    sections[14];

  console.log(
    "========== SECTION [9] =========="
  );

  console.log(
    JSON.stringify(
      bedAcademicSection,
      null,
      2
    )
  );

  console.log(
    "========== SECTION [10] =========="
  );

  console.log(
    JSON.stringify(
      bedSemesterSection,
      null,
      2
    )
  );

  console.log(
    "========== SECTION [11] =========="
  );

  console.log(
    JSON.stringify(
      bedYearSection,
      null,
      2
    )
  );

  console.log(
    "========== SECTION [12] =========="
  );

  console.log(
    JSON.stringify(
      deledAcademicSection,
      null,
      2
    )
  );

  console.log(
    "========== SECTION [13] =========="
  );

  console.log(
    JSON.stringify(
      deledSemesterSection,
      null,
      2
    )
  );

  console.log(
    "========== SECTION [14] =========="
  );

  console.log(
    JSON.stringify(
      deledYearSection,
      null,
      2
    )
  );

  console.log(
    "========================================"
  );

  return (
    <>
      {/* Banner - Section Index 15 */}
      <EmptyBanner
        section={bannerSection}
      />

      {/* College Test Contents */}
      <PreviousInternalQuestionPaper
        bedAcademicSection={
          bedAcademicSection
        }
        bedSemesterSection={
          bedSemesterSection
        }
        bedYearSection={
          bedYearSection
        }
        deledAcademicSection={
          deledAcademicSection
        }
        deledSemesterSection={
          deledSemesterSection
        }
        deledYearSection={
          deledYearSection
        }
      />
    </>
  );
}