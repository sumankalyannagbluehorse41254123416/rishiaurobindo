import BannerSlider from "@/components/BannerSlider";

import WelcomeSection from "@/components/WelcomeSection";

import Achievement from "@/components/Achievement";

import Notice from "@/components/Notice";

import MissionVision from "@/components/MissionVision";

import ChairmanQuote from "@/components/ChairmanQuote";

import CollegeAtGlance from "@/components/CollegeAtGlance";
import GalleryItems from "@/components/GalleryItems";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";
// ✅ Remove HTML tags
const stripHtml = (html: string) => (html ? html.replace(/<[^>]*>/g, "") : "");

// ✅ Types
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
export default async function Home() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "24dd981f-bd93-458e-a0c3-cca752c0e34e",
    );

    console.log("API RESPONSE:", siteData);
  } catch (error) {
    console.error("Fetch error:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  console.log("SECTIONS:", sections);

  // Find BannerSlider section
  const bannerSection = sections.find(
    (section) => section.title === "BannerSlider",
  );

  console.log("BANNER SECTION:", bannerSection);

  // Get banner images from subsections
  const banners =
    bannerSection?.subsections
      ?.map((item) => item.image)
      .filter((image): image is string => Boolean(image)) || [];

  console.log("BANNER IMAGES:", banners);

  return (
    <>
      <BannerSlider banners={banners} />

    <WelcomeSection section={sections[1]} />
    <Achievement section={sections[2]} />
      <Notice />
      <MissionVision />
      <ChairmanQuote />
      <CollegeAtGlance />
      <GalleryItems />
    </>
  );
}
