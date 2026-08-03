import PressRelease from "@/components/press-release/PressRelease";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

interface Subsection {
  image?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function PressReleasePage() {
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
      "8cbd9bb2-f9d0-420a-9712-97f81de08d2c"
    );

    console.log(
      "PRESS RELEASE API RESPONSE:",
      JSON.stringify(siteData, null, 2)
    );
  } catch (error) {
    console.error("PRESS RELEASE API ERROR:", error);
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data?.pageItemdataWithSubsection ||
    [];



  // Section title
  const title = sections[0]?.title || "Press Release";

  // Subsection images
  const galleryImages =
    sections[0]?.subsections
      ?.map((subsection) => subsection.image)
      .filter((image): image is string => Boolean(image)) || [];

  

  return (
    <PressRelease
      title={title}
      galleryImages={galleryImages}
    />
  );
}