import { headers } from "next/headers";

import NationalInternationalDayCelebrationBanner from "@/components/activities/national/NationalInternationalDayCelebrationBanner";
import NationalInternationalGallery from "@/components/activities/national/NationalInternationalGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
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

export default async function NationalInternationalDayCelebrationPage() {
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
    console.error("NATIONAL/INTERNATIONAL DAY ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      {/* Index 34 */}
      <NationalInternationalDayCelebrationBanner
        section={sections[34]}
      />

      {/* Index 35 */}
      <NationalInternationalGallery
        section={sections[35]}
      />
    </>
  );
}