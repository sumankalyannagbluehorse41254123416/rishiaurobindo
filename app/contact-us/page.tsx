import { headers } from "next/headers";

import ContactDetailsBanner from "@/components/contact-us/ContactDetailsBanner";
import ContactDetails from "@/components/contact-us/ContactDetails";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  pageItemdataWithSubsection?: Section[];
  subSectionData?: Section[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function ContactUs() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "4624f0b9-4ebd-48b0-b286-b836841d989f";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("========== CONTACT PAGE ==========");
    console.log(JSON.stringify(pageData, null, 2));
  } catch (error) {
    console.error("CONTACT PAGE ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array Index 0 = Banner
  const bannerSection = sections[0];

  // Array Index 1 = Contact Details
  const contactDetailsSection = sections[1];

  console.log("========== BANNER SECTION ==========");
  console.log(JSON.stringify(bannerSection, null, 2));

  console.log("========== CONTACT DETAILS SECTION ==========");
  console.log(JSON.stringify(contactDetailsSection, null, 2));

  return (
    <>
      <ContactDetailsBanner section={bannerSection} />

      <ContactDetails section={contactDetailsSection} />
    </>
  );
}