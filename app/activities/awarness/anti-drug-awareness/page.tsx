import { headers } from "next/headers";

import AntiDrugAwarenessBanner from "@/components/activities/awarness/anti-drug-awareness/AntiDrugAwarenessBanner";
import AntiDrugAwareness from "@/components/activities/awarness/anti-drug-awareness/AntiDrugAwareness";

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

export default async function AntiDrugAwarenessPage() {
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
    console.error("ANTI DRUG AWARENESS ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      {/* Index 28 */}
      <AntiDrugAwarenessBanner section={sections[28]} />

      {/* Index 29 */}
      <AntiDrugAwareness section={sections[29]} />
    </>
  );
}