import { headers } from "next/headers";

import PageTitle from "@/components/practice-teaching/deled-teaching/PageTitle";
import DElEdSchoolList from "@/components/practice-teaching/deled-teaching/DElEdSchoolList";

import { fetchPageData } from "@/service/fetchdata.services";
import DocumentsSection from "@/components/practice-teaching/deled-teaching/DocumentsSection";

// ==========================================
// TYPES
// ==========================================

interface Subsection {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

interface School {
  id: number;
  name: string;
}

// ==========================================
// D.EL.ED TEACHING PAGE
// ==========================================

export default async function DeledTeaching() {
  // ==========================================
  // REQUEST HEADERS
  // ==========================================

  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // D.EL.ED TEACHING PAGE ID
  // ==========================================

  const deledPageId =
    "50400363-418e-4681-a1ef-f699badc608a";

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
      deledPageId
    );
  } catch (error) {
    console.error(
      "D.EL.ED TEACHING API ERROR:",
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

  // ==========================================
  // PAGE TITLE
  // ARRAY INDEX 0
  // ==========================================

  const pageTitleSection =
    sections[0];

  // ==========================================
  // SCHOOL LIST
  // ARRAY INDEX 1
  // ==========================================

  const schoolSection =
    sections[1];

  // ==========================================
  // GET SCHOOLS
  // title = SCHOOL NAME
  // description = SCHOOL ID
  // ==========================================

  const schools: School[] =
    schoolSection?.subsections
      ?.map(
        (subsection, index) => ({
          // School ID comes from description
          id:
            Number(
              subsection.description
                ?.replace(
                  /<[^>]*>/g,
                  ""
                )
                .replace(
                  /&nbsp;/g,
                  " "
                )
                .trim()
            ) || index,

          // School Name comes from title
          name:
            subsection.title
              ?.replace(
                /<[^>]*>/g,
                ""
              )
              .replace(
                /&nbsp;/g,
                " "
              )
              .trim() || "",
        })
      )
      .filter(
        (school) =>
          school.name !== ""
      ) || [];

  // ==========================================
  // RETURN
  // ==========================================
const documentSections = sections.slice(2);
  return (
    <>
      <PageTitle
        section={pageTitleSection}
      />

      <DElEdSchoolList
        schools={schools}
      />
    <DocumentsSection sections={documentSections} />
    </>
  );
}