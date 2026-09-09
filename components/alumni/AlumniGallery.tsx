import { headers } from "next/headers";
import { fetchPageData } from "@/service/fetchdata.services";
import AlumniGalleryClient from "./AlumniGalleryClient";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function AlumniGallery() {
  const rqHeaders = await headers();
  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());
  const alumniPageId = "e5b90ac9-af80-433e-9180-daef298d7308";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      alumniPageId
    );
  } catch (error) {
    console.error("ALUMNI GALLERY API ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  const gallerySection = sections[1];

  const galleryImages =
    gallerySection?.subsections
      ?.map((item) => item.image)
      .filter((image): image is string => Boolean(image)) || [];

  return (
    <AlumniGalleryClient
      title={gallerySection?.title || "ALUMNI PHOTOS & VIDEOS"}
      galleryImages={galleryImages}
    />
  );
}
