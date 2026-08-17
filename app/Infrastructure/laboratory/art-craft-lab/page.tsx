import { headers } from "next/headers";

import ArtCraftLabBanner from "@/components/Infrastructure/laboratory/art-craft-lab/ArtCraftLabBanner";
import ArtCraftLabGallery from "@/components/Infrastructure/laboratory/art-craft-lab/ArtCraftLabGallery";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  image?: string;
  subsections?: Subsection[];
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

export default async function ArtCraftLab() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "0199a445-c5d9-4ab4-b188-7205501de7d2";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log(
      "===================================="
    );

    console.log(
      "ART & CRAFT LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ART & CRAFT LAB PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER - INDEX 19
  // ==========================================

  const bannerSection = sections[19];

  // ==========================================
  // GALLERY - INDEX 20
  // ==========================================

  const gallerySection = sections[20];

  return (
    <>
      <ArtCraftLabBanner
        section={bannerSection}
      />

      <ArtCraftLabGallery
        section={gallerySection}
      />
    </>
  );
}