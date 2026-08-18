import { headers } from "next/headers";

import MissionVisionPageTitle from "@/components/about/mission-vision/MissionVisionPageTitle";
import MissionVision from "@/components/about/mission-vision/MissionVision";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  description?: string;
}

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
  longDescription?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function MissionVisionPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "57751c9d-62f4-4669-9934-4cc8c07365d6";

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
      "MISSION VISION PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Banner
  const bannerSection = sections[2];

  // Mission
  const missionSection = sections[3];

  // Vision
  const visionSection = sections[4];

  // ==========================
  // CONSOLE LOGS
  // ==========================

  console.log("====================================");
  console.log("ALL SECTIONS");
  console.log("====================================");
  console.log(
    JSON.stringify(
      sections,
      null,
      2
    )
  );
  console.log("====================================");

  console.log("MISSION SECTION");
  console.log(
    JSON.stringify(
      missionSection,
      null,
      2
    )
  );
  console.log("====================================");

  console.log("VISION SECTION");
  console.log(
    JSON.stringify(
      visionSection,
      null,
      2
    )
  );
  console.log("====================================");

  return (
    <>
      <MissionVisionPageTitle
        section={bannerSection}
      />

      <MissionVision
        missionSection={missionSection}
        visionSection={visionSection}
      />
    </>
  );
}