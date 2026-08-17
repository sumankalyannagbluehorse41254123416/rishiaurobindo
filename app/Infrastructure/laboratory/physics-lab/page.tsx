import { headers } from "next/headers";

import PhysicsLabBanner from "@/components/Infrastructure/laboratory/physics-lab/PhysicsLabBanner";
import PhysicsLabGallery from "@/components/Infrastructure/laboratory/physics-lab/PhysicsLabGallery";

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

export default async function PhysicsLab() {
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

  // ==========================================
  // API
  // ==========================================

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("====================================");
    console.log("PHYSICS LAB PAGE DATA");
    console.log(JSON.stringify(pageData, null, 2));
    console.log("====================================");
  } catch (error) {
    console.error(
      "PHYSICS LAB PAGE DATA ERROR:",
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
  // BANNER - INDEX 7
  // ==========================================

  const bannerSection = sections[7];

  // ==========================================
  // GALLERY - INDEX 8
  // ==========================================

  const gallerySection = sections[8];

  // ==========================================
  // CONSOLE LOG
  // ==========================================

  console.log("====================================");
  console.log("PHYSICS LAB BANNER:");
  console.log(JSON.stringify(bannerSection, null, 2));

  console.log("PHYSICS LAB GALLERY:");
  console.log(JSON.stringify(gallerySection, null, 2));

  console.log("PHYSICS LAB GALLERY SUBSECTIONS:");
  console.log(
    JSON.stringify(
      gallerySection?.subsections || [],
      null,
      2
    )
  );

  console.log("====================================");

  return (
    <>
      <PhysicsLabBanner
        sectionData={bannerSection}
      />

      <PhysicsLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}