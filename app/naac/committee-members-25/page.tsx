import { headers } from "next/headers";

import CommitteeMembers from "@/components/naac/committee-members-25/CommitteeMembers";
import PageTitle from "@/components/naac/committee-members-25/PageTitle";

import { fetchPageData } from "@/service/fetchdata.services";

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

export default async function CommitteeMembers25() {
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
      "e283bc70-e9d8-4020-96be-37acfa4d08e6"
    );

    console.log(
      "COMMITTEE MEMBERS API RESPONSE:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "COMMITTEE MEMBERS API ERROR:",
      error
    );
  }

  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  return (
    <>
      <PageTitle section={sections[1]} />

      <CommitteeMembers
        sections={sections}
      />
    </>
  );
}