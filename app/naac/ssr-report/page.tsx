import { headers } from "next/headers";

import PageTitle from "@/components/naac/ssr-report/PageTitle";
import SSRReportTable from "@/components/naac/ssr-report/SSRReportTable";

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

export default async function SSRReport() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId =
    "e283bc70-e9d8-4020-96be-37acfa4d08e6";

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
      "SSR REPORT PAGE DATA ERROR:",
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
      <PageTitle section={section} />

      <SSRReportTable />
    </>
  );
}