import { headers } from "next/headers";

import ApprovalPageComponent from "@/components/approval/ApprovalPage";
import ApprovalImages from "@/components/approval/approvalImages";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
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

export default async function ApprovalPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "2a9b876f-1b96-4ccd-bb82-088f351f1c2b";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("APPROVAL PAGE DATA:", pageData);
  } catch (error) {
    console.error("APPROVAL PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ??
    pageData.data?.pageItemdataWithSubsection ??
    [];

  console.log("APPROVAL SECTIONS:", sections);

  // Array index 0
  const pageTitleSection = sections[0];

  console.log("APPROVAL SECTION [0]:", pageTitleSection);
  console.log("APPROVAL TITLE:", pageTitleSection?.title);
  console.log("APPROVAL IMAGE:", pageTitleSection?.image);

  // Array index 1
  const gallerySection = sections[1];

  console.log("========== APPROVAL GALLERY ==========");
  console.log("GALLERY SECTION [1]:", gallerySection);
  console.log("GALLERY TITLE:", gallerySection?.title);
  console.log("GALLERY SUBSECTIONS:", gallerySection?.subsections);

  return (
    <>
      <ApprovalPageComponent section={pageTitleSection} />

      <ApprovalImages section={gallerySection} />
    </>
  );
}

