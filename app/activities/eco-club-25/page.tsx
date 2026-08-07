import { headers } from "next/headers";

import EcoClubBanner from "@/components/activities/eco-club-25/EcoClubBanner";

import { fetchPageData } from "@/service/fetchdata.services";
import EcoClub from "@/components/activities/eco-club-25/ecoClubImages";

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

export default async function EcoClub25() {
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
    console.error(error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      {/* Array Index 2 */}
      <EcoClubBanner section={sections[2]} />

      {/* Array Index 3 */}
      <EcoClub section={sections[3]} />
    </>
  );
}
