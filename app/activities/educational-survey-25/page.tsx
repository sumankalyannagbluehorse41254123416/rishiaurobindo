import { headers } from "next/headers";

import EducationalSurveyBanner from "@/components/activities/educational-survey-25/EducationalSurveyBanner";

import { fetchPageData } from "@/service/fetchdata.services";
import EducationalSurveyGallery from "@/components/activities/educational-survey-25/educationalSurveyImages ";

interface Subsection {
  image?: string;
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

export default async function EducationalSurvey25() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "fb77c628-02f2-473c-9c5a-d5537bb0013c";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId,
    );
  } catch (error) {
    console.error(error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <EducationalSurveyBanner section={sections[6]} />
      <EducationalSurveyGallery section={sections[7]} />
    </>
  );
}
