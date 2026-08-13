import { headers } from "next/headers";

import MinutesContaines from "@/components/other-committees/govt-website-for-scholarship/minutes-of-meetings/MinutesContaines";

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

export default async function MinutesOfMeetings() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "16998dff-0ec7-47e2-94e0-ae03c4828bf2";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error(
      "MINUTES OF MEETINGS PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 7
  const section = sections[7];

  return (
    <MinutesContaines
      section={section}
    />
  );
}