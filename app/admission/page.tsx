import { headers } from "next/headers";

import AdmissionInfo from "@/components/admission/AdmissionInfo";
import PageTitle from "@/components/admission/PageTitle";
import FeeStructure from "@/components/admission/FeeStructure";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Admission() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "5a322732-9779-4573-83e5-8714c5dc69be";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error("ADMISSION PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // First section
  const admissionSection = sections[0];

  return (
    <div>
      <PageTitle section={admissionSection} />

      <AdmissionInfo />

      <FeeStructure />
    </div>
  );
}