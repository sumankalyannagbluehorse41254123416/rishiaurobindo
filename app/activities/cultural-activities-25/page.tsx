import { headers } from "next/headers";

import CulturalActivities from "@/components/activities/cultural-activities-25/CulturalActivities";
import CulturalActivitiesImages from "@/components/activities/cultural-activities-25/culturalActivitiesImages";

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

export default async function CulturalActivities25() {
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
    console.error(error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <CulturalActivities section={sections[13]} />
      <CulturalActivitiesImages section={sections[14]} />
    </>
  );
}