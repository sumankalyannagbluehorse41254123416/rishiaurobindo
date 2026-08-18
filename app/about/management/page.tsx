import { headers } from "next/headers";

import CourseOfferedPage from "@/components/about/management/CourseOfferedPage";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  shortDescription?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function ManagementPage() {
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
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("====================================");
    console.log("MANAGEMENT PAGE DATA");
    console.log(
      JSON.stringify(pageData, null, 2)
    );
    console.log("====================================");
  } catch (error) {
    console.error(
      "MANAGEMENT PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 12
  const section = sections[12];

  return (
    <CourseOfferedPage section={section} />
  );
}