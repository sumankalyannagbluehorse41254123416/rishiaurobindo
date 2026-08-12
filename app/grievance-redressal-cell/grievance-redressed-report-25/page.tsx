import { headers } from "next/headers";

import GrievanceRedressedReportBanner from "@/components/grievance-redressal-cell/grievance-redressed-report-25/GrievanceRedressedReportBanner";
import RedressReport from "@/components/grievance-redressal-cell/grievance-redressed-report-25/RedressReport";
import RemoteClass from "@/components/grievance-redressal-cell/grievance-redressed-report-25/RemoteClass";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  file?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function GrievanceRedressedReport25() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "fd93fcf3-f14e-400e-b51a-42968c62eaed";

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
      "GRIEVANCE REDRESSED REPORT PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 12
  const bannerSection = sections[12];

  // Array index 13
  const redressReportSection = sections[13];

  // Array index 14
  const remoteClassSection = sections[14];

  return (
    <>
      <GrievanceRedressedReportBanner
        section={bannerSection}
      />

      <RedressReport
        section={redressReportSection}
      />

      <RemoteClass
        section={remoteClassSection}
      />
    </>
  );
}