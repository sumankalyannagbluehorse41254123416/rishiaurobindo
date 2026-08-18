import { headers } from "next/headers";

import NonTeachingStaff from "@/components/about/non-teaching/NonTeachingStaff";
import StaffData from "@/components/about/non-teaching/staffData";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  subsection_sequence?: number;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function NonTeaching() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "57751c9d-62f4-4669-9934-4cc8c07365d6";

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
      "================ NON-TEACHING PAGE DATA ================"
    );
    console.log(JSON.stringify(pageData, null, 2));
    console.log(
      "========================================================="
    );
  } catch (error) {
    console.error(
      "NON-TEACHING STAFF PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  console.log(
    "NON-TEACHING SECTIONS:",
    sections
  );

  // Section index 9 = Non-Teaching Staff banner
  const bannerSection = sections[9];

  // Section index 10 = Non-Teaching Staff details
  const staffSection = sections[10];

  console.log(
    "NON-TEACHING BANNER SECTION:",
    bannerSection
  );

  console.log(
    "NON-TEACHING STAFF SECTION:",
    staffSection
  );

  console.log(
    "NON-TEACHING SUBSECTIONS:",
    staffSection?.subsections
  );

  return (
    <>
      <NonTeachingStaff section={bannerSection} />

      <StaffData section={staffSection} />
    </>
  );
}