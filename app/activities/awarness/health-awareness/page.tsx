import { headers } from "next/headers";

import HealthAwareness from "@/components/activities/awarness/health-awareness/HealthAwareness";
import HealthAwarenessImages from "@/components/activities/awarness/health-awareness/HealthAwarenessImages";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  image?: string;
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

export default async function HealthAwarenessPage() {
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
      pageId
    );
  } catch (error) {
    console.error("HEALTH AWARENESS ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 22
  const healthSection = sections[22];

  // Array index 23
  const healthAwarenessImagesSection = sections[23];

  return (
    <>
      <HealthAwareness section={healthSection} />

      <HealthAwarenessImages
        section={healthAwarenessImagesSection}
      />
    </>
  );
}