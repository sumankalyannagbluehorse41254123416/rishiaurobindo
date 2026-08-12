import { headers } from "next/headers";

import GrievancesBanner from "@/components/grievance-redressal-cell/grievance-25/GrievancesBanner";
import Grievances from "@/components/grievance-redressal-cell/grievance-25/Grievances";

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

export default async function Grievance25() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

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
      "GRIEVANCES PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 10
  const section = sections[10];

  return (
    <>
      <GrievancesBanner section={sections[9]} />

      <Grievances section={section} />
    </>
  );
}