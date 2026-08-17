import { headers } from "next/headers";

import MathematicsLabBanner from "@/components/Infrastructure/laboratory/mathematics-lab/MathematicsLabBanner";
import MathematicsLabGallery from "@/components/Infrastructure/laboratory/mathematics-lab/MathematicsLabGallery";

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

export default async function MathematicsLab() {
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

    console.log("MATHEMATICS LAB PAGE DATA");

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "MATHEMATICS LAB PAGE DATA ERROR:",
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
  // BANNER
  // INDEX 17
  // ==========================================

  const bannerSection = sections[17];

  // ==========================================
  // GALLERY
  // INDEX 18
  // ==========================================

  const gallerySection = sections[18];

  return (
    <>
      <MathematicsLabBanner
        sectionData={bannerSection}
      />

      <MathematicsLabGallery
        sectionData={gallerySection}
      />
    </>
  );
}