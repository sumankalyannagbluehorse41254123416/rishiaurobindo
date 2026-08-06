import { headers } from "next/headers";

import PageTitle from "@/components/practice-teaching/bed-teaching/PageTitle";
import BedSchoolList from "@/components/practice-teaching/bed-teaching/BedSchoolList";
import BedDocuments from "@/components/practice-teaching/bed-teaching/BedDocuments";

import { fetchPageData } from "@/service/fetchdata.services";

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
// B.ED TEACHING PAGE
// ==========================================

export default async function BedTeaching() {
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
  // B.ED TEACHING PAGE ID
  // ==========================================

  const bedPageId =
    "639ccc7c-e421-47da-ade9-62541903b079";

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
      bedPageId
    );
  } catch (error) {
    console.error(
      "B.ED TEACHING API ERROR:",
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

  const schools: School[] =
    schoolSection?.subsections
      ?.map(
        (subsection, index) => ({
          id:
            Number(
              subsection.title
            ) || index,

          name:
            subsection.description
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
  // GALLERY SECTION
  // ARRAY INDEX 2
  // ==========================================

  const gallerySection =
    sections[2];

  // ==========================================
  // GALLERY TITLE
  // ==========================================

  const galleryTitle =
    gallerySection?.title ||
    "Gallery";

  // ==========================================
  // GALLERY IMAGES
  // SUBSECTION IMAGE
  // ==========================================

  const galleryImages =
    gallerySection?.subsections
      ?.map(
        (subsection) =>
          subsection.image
      )
      .filter(
        (
          image
        ): image is string =>
          Boolean(image)
      ) || [];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <PageTitle
        section={pageTitleSection}
      />

      <BedSchoolList
        schools={schools}
      />

      <BedDocuments
        galleryTitle={galleryTitle}
        galleryImages={galleryImages}
      />
    </>
  );
}