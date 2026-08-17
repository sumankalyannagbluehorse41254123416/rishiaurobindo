import { headers } from "next/headers";

import { fetchPageData } from "@/service/fetchdata.services";

import PsychologyLabBanner from "@/components/Infrastructure/laboratory/psychology-lab/PsychologyLabBanner";
import PsychologyLabGallery from "@/components/Infrastructure/laboratory/psychology-lab/PsychologyLabGallery";

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

export default async function PsychologyLab() {
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
      "PSYCHOLOGY LAB PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "PSYCHOLOGY LAB PAGE DATA ERROR:",
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
  // BANNER - INDEX 21
  // ==========================================

  const bannerSection = sections[21];

  // ==========================================
  // GALLERY - INDEX 22
  // ==========================================

  const gallerySection = sections[22];

  const galleryImages =
    gallerySection?.subsections || [];

  // ==========================================
  // CONSOLE
  // ==========================================

  console.log(
    "===================================="
  );

  console.log(
    "PSYCHOLOGY LAB BANNER:"
  );

  console.log(
    JSON.stringify(
      bannerSection,
      null,
      2
    )
  );

  console.log(
    "PSYCHOLOGY LAB GALLERY:"
  );

  console.log(
    JSON.stringify(
      gallerySection,
      null,
      2
    )
  );

  console.log(
    "===================================="
  );

  return (
    <>
      <PsychologyLabBanner
        sectionData={bannerSection}
      />

      <PsychologyLabGallery
        sectionData={gallerySection}
        images={galleryImages}
      />
    </>
  );
}