import { headers } from "next/headers";

import IctEnabledClassroomBanner from "@/components/Infrastructure/ictenabled/IctEnabledClassroomBanner";
import IctEnabledClassroomGallery from "@/components/Infrastructure/ictenabled/IctEnabledClassroomGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function IctEnabled() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "0199a445-c5d9-4ab4-b188-7205501de7d2"
    );

    console.log(
      "ICT ENABLED PAGE DATA:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "ICT ENABLED PAGE API ERROR:",
      error
    );
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <IctEnabledClassroomBanner
        section={sections[2]}
      />

      <IctEnabledClassroomGallery
        section={sections[3]}
      />
    </>
  );
}