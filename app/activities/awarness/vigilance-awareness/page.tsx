import { headers } from "next/headers";

import VigilanceAwarenessBanner from "@/components/activities/awarness/vigilance-awareness/VigilanceAwarenessBanner";
import VigilanceAwarenessGallery from "@/components/activities/awarness/vigilance-awareness/VigilanceAwarenessGallery";

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

export default async function VigilanceAwarenessPage() {
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
    console.error("VIGILANCE AWARENESS ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      {/* Index 26 */}
      <VigilanceAwarenessBanner section={sections[26]} />

      {/* Index 27 */}
      <VigilanceAwarenessGallery section={sections[27]} />
    </>
  );
}