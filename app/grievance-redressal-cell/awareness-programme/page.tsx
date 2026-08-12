import { headers } from "next/headers";

import AwarenessProgrammeBanner from "@/components/grievance-redressal-cell/awareness-programme/AwarenessProgrammeBanner";
import AwarenessProgrammeContent from "@/components/grievance-redressal-cell/awareness-programme/AwarenessProgrammeContent";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function AwarenessProgramme() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId =
    "fd93fcf3-f14e-400e-b51a-42968c62eaed";

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
      "AWARENESS PROGRAMME PAGE DATA ERROR:",
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
    <>
      <AwarenessProgrammeBanner section={section} />

      <AwarenessProgrammeContent />
    </>
  );
}