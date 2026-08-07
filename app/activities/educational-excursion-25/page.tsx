import { headers } from "next/headers";

import EducationalExcursionBanner from "@/components/activities/educational-excursion-25/EducationalExcursionBanner";
import DarjeelingTourGallery from "@/components/activities/educational-excursion-25/darjeelingTourImages";
import SantiniketanTourGallery from "@/components/activities/educational-excursion-25/santiniketanTourImages";
import KeralaTourGallery from "@/components/activities/educational-excursion-25/keralaTourImages";
import RajasthanTour from "@/components/activities/educational-excursion-25/RajasthanTour";

import { fetchPageData } from "@/service/fetchdata.services";

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

export default async function EducationalExcursion25() {
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
      <EducationalExcursionBanner section={sections[8]} />

      <DarjeelingTourGallery section={sections[9]} />
      <SantiniketanTourGallery section={sections[10]} />
      <KeralaTourGallery section={sections[11]} />
      <RajasthanTour section={sections[12]} />
    </>
  );
}
