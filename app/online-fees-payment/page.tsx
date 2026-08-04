import OnlineFeesPayment from "@/components/online-fees-payment/OnlineFeesPayment";
import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function Page() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "5e2b1729-3050-4831-9b5c-4c3e8ce43f02"
    );

    console.log(
      "ONLINE FEES PAYMENT API RESPONSE:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "ONLINE FEES PAYMENT API ERROR:",
      error
    );
  }

  // Get sections from API
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  return (
    <OnlineFeesPayment
      sections={sections}
    />
  );
}