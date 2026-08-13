import { headers } from "next/headers";

import CommitteeMembersBanner from "@/components/other-committees/placement-cell/committee-members/CommitteeMembersBanner";
import CommitteeMembers from "@/components/other-committees/placement-cell/committee-members/CommitteeMembers";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
  subsections?: Subsection[];
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

export default async function CommitteeMembersContent() {
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

  // Banner
  const bannerSection = sections[9];

  return (
    <>
      <CommitteeMembersBanner
        section={bannerSection}
      />

      <CommitteeMembers
        sections={sections}
      />
    </>
  );
}