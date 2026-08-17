import { headers } from "next/headers";

import TeachingLearningResourceCentreBanner from "@/components/Infrastructure/laboratory/teaching-learning-resource-centre-for-arts-work-experience-lab/TeachingLearningResourceCentreBanner";

import TeachingLearningResourceCentreGallery from "@/components/Infrastructure/laboratory/teaching-learning-resource-centre-for-arts-work-experience-lab/TeachingLearningResourceCentreGallery";

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

export default async function TeachingLearningResourceCentre() {
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
      "TEACHING LEARNING RESOURCE CENTRE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "TEACHING LEARNING RESOURCE CENTRE API ERROR:",
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
  // BANNER - INDEX 27
  // ==========================================

  const bannerSection = sections[27];

  // ==========================================
  // GALLERY - INDEX 28
  // ==========================================



  return (
    <>
      <TeachingLearningResourceCentreBanner
        sectionData={bannerSection}
      />

      <TeachingLearningResourceCentreGallery
     
      />
    </>
  );
}