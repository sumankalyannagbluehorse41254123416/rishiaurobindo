import { headers } from "next/headers";

import Administration from "@/components/about/administration/Administration";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function AdministrationPage() {
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

    console.log(
      "===================================="
    );
    console.log(
      "ADMINISTRATION DATA"
    );
    console.log(
      JSON.stringify(pageData, null, 2)
    );
    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ADMINISTRATION PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 11
  const section = sections[11];

  return (
    <Administration section={section} />
  );
}