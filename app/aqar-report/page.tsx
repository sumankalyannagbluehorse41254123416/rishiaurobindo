import { headers } from "next/headers";

import AQARReport from "@/components/aqar-report/AQARReport";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  shortdescription?: string[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function AQARReportPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "9c852ad2-f656-4035-8db5-3fc7645b72f0";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("AQAR REPORT PAGE DATA:", pageData);
  } catch (error) {
    console.error("AQAR REPORT PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ??
    pageData.data?.pageItemdataWithSubsection ??
    [];

  console.log("AQAR REPORT SECTIONS:", sections);

  const aqarReportSection = sections[0];

  console.log("AQAR REPORT SECTION:", aqarReportSection);
  console.log("AQAR REPORT TITLE:", aqarReportSection?.title);
  console.log(
    "AQAR REPORT SHORT DESCRIPTION:",
    aqarReportSection?.shortdescription?.[0]
  );

  return (
    <>
      <AQARReport section={aqarReportSection} />
    </>
  );
}