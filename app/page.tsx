import BannerSlider from "@/components/BannerSlider";
import WelcomeSection from "@/components/WelcomeSection";
import Achievement from "@/components/Achievement";
import Notice from "@/components/Notice";
import MissionVision from "@/components/MissionVision";
import ChairmanQuote from "@/components/ChairmanQuote";
import CollegeAtGlance from "@/components/CollegeAtGlance";
import GalleryItems from "@/components/GalleryItems";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

import { headers } from "next/headers";

// ==========================================
// TYPES
// ==========================================

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

// ==========================================
// HOME
// ==========================================

export default async function Home() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  // ==========================================
  // HOME PAGE API
  // ==========================================

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "24dd981f-bd93-458e-a0c3-cca752c0e34e",
    );

    console.log("HOME API RESPONSE:", JSON.stringify(siteData, null, 2));
  } catch (error) {
    console.error("HOME API ERROR:", error);
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER
  // ==========================================

  const bannerSection = sections.find(
    (section) => section.title === "BannerSlider",
  );

  const banners =
    bannerSection?.subsections
      ?.map((item) => item.image)
      .filter((image): image is string => Boolean(image)) || [];

  // ==========================================
  // NOTICE COLLECTION
  // ==========================================

  const noticeCollectionId = "28a6e9eb-bef3-4bd6-937e-0724c2465ceb";

  let noticeData: any = null;

  try {
    noticeData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      noticeCollectionId,
    );

    // IMPORTANT
    console.log("================================");

    console.log("NOTICE API FULL RESPONSE:");

    console.log(JSON.stringify(noticeData, null, 2));

    console.log("================================");
  } catch (error) {
    console.error("NOTICE API ERROR:", error);
  }

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <BannerSlider banners={banners} />

      <WelcomeSection section={sections[1]} />

      <Achievement section={sections[2]} />

      {/* NOTICE */}
      <Notice data={noticeData} />

      <MissionVision section={sections[3]} />

      <ChairmanQuote section={sections[4]} />

      <CollegeAtGlance section={sections[5]} />

      <GalleryItems />
    </>
  );
}
