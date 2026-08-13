import { headers } from "next/headers";

import CommitteeMembersBanner from "@/components/other-committees/govt-website-for-scholarship/committee-members/CommitteeMembers";
import CommitteeMembersTable from "@/components/other-committees/govt-website-for-scholarship/committee-members/CommitteeMembersTable";

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

export default async function CommitteeMembers() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  const pageId =
    "16998dff-0ec7-47e2-94e0-ae03c4828bf2";

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

  // Array index 1
  const section = sections[1];
const tableSections = sections.slice(2, 6);
  return (
    <>
      <CommitteeMembersBanner
        section={section}
      />

    
    <CommitteeMembersTable
      sections={tableSections}
    />
    </>
  );
}