import { headers } from "next/headers";

import CommitteeMembersBanner from "@/components/grievance-redressal-cell/committee-members-25/CommitteeMembersBanner";
import CommitteeMembersTable from "@/components/grievance-redressal-cell/committee-members-25/CommitteeMembersTable";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsection?: Subsection[];
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function CommitteeMembers25() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "fd93fcf3-f14e-400e-b51a-42968c62eaed";

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
    console.error(
      "COMMITTEE MEMBERS PAGE DATA ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Banner = index 6
  const section = sections[6];

  return (
    <>
      <CommitteeMembersBanner
        section={section}
      />

      <CommitteeMembersTable
        sections={sections}
      />
    </>
  );
}