import PageTitle from "@/components/gallery/PageTitle";
import GallerySection from "@/components/gallery/GallerySection";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

interface Subsection {
  image?: string;
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

export default async function Gallery() {
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
      "59d700fe-01bb-41e4-a9d4-79e8c8baacb2"
    );

    console.log(
      "GALLERY API RESPONSE:",
      JSON.stringify(siteData, null, 2)
    );
  } catch (error) {
    console.error("GALLERY API ERROR:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];

  // Get first section (index 0)
  const firstSection = sections[0];
const gallerySection = sections[1];
  return (
    <>
      <PageTitle
        title={firstSection?.title || "Gallery"}
        image={firstSection?.image || "/images/page_title_bg.jpg"}
      />

      <GallerySection
      subsections={gallerySection?.subsections || []}
    />
    </>
  );
}