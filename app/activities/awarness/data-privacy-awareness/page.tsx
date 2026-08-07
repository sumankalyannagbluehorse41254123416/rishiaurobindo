import { headers } from "next/headers";

import PageTitle from "@/components/activities/awarness/data-privacy-awareness/PageTitle";
import DataPrivacyAwareness from "@/components/activities/awarness/data-privacy-awareness/DataPrivacyAwareness";

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

export default async function DataPrivacyAwarenessPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "fb77c628-02f2-473c-9c5a-d5537bb0013c";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId,
    );
  } catch (error) {
    console.error("DATA PRIVACY ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  const dataPrivacySection = sections[24];

  return (
    <>
      <PageTitle section={dataPrivacySection} />

      <DataPrivacyAwareness section={sections[25]} />
    </>
  );
}
