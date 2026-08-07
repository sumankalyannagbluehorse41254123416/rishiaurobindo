import { headers } from "next/headers";

import SeminarPresentationBanner from "@/components/activities/seminar-presentation/SeminarPresentationBanner";
import SeminarPresentationContent from "@/components/activities/seminar-presentation/SeminarPresentationContent";

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

export default async function SeminarPresentationPage() {
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
    console.error("SEMINAR PRESENTATION ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      {/* Index 32 */}
      <SeminarPresentationBanner section={sections[32]} />

      {/* Index 33 */}
      <SeminarPresentationContent section={sections[33]} />
    </>
  );
}