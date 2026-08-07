import { headers } from "next/headers";

import SocialWorkBanner from "@/components/activities/social-work-25/SocialWorkBanner";
import SocialWorkDocuments from "@/components/activities/social-work-25/socialWorkDocuments";
import WorkshopGallery from "@/components/activities/social-work-25/workshopImages";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Subsection {
  image?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function SocialWork25() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "fb77c628-02f2-473c-9c5a-d5537bb0013c";

  const documentCollectionId =
    "684fe1b4-5e4d-43c4-b019-503108d3ef88";

  let pageData: PageData = {};
  let documentData = null;

  // Fetch Page Data
  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error("PAGE API ERROR:", error);
  }

  // Fetch Document Collection Data
  try {
    documentData = await fetchDocumentCollection(
      {
        host,
        ...headersObj,
      },
      documentCollectionId
    );
  } catch (error) {
    console.error("DOCUMENT API ERROR:", error);
  }

  console.log("========== DOCUMENT DATA ==========");
  console.log(documentData);
  console.log(JSON.stringify(documentData, null, 2));
  console.log("===================================");

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <SocialWorkBanner />

      <SocialWorkDocuments
        documentData={documentData as never}
      />

      <WorkshopGallery section={sections[5]} />
    </>
  );
}