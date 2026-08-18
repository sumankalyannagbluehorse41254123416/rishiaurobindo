import { headers } from "next/headers";

import TeachingBanner from "@/components/about/teachers/TeachingBanner";
import TeachingStaff from "@/components/about/teachers/TeachingStaff";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
  subsection_sequence?: number;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  bannerImage?: string;
  section_sequence?: number;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function TeachersPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "57751c9d-62f4-4669-9934-4cc8c07365d6";

  let pageData: PageData = {};

  try {
    pageData = (await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    )) as PageData;

    console.log("TEACHERS PAGE DATA:", pageData);
  } catch (error) {
    console.error(
      "TEACHING STAFF PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log("TEACHERS SECTIONS:", sections);

  // Banner section
  const bannerSection = sections[7];

  // Teaching Staff section
  const teachingStaffSection = sections[8];

  console.log(
    "TEACHING STAFF SECTION DATA:",
    teachingStaffSection
  );

  console.log(
    "TEACHING STAFF SUBSECTIONS:",
    teachingStaffSection?.subsections
  );

  return (
    <>
      <TeachingBanner section={bannerSection} />

      <TeachingStaff section={teachingStaffSection} />
    </>
  );
}