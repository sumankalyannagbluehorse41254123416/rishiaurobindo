import { headers } from "next/headers";

import CommitteeMembersBanner from "@/components/other-committees/eco-club-committee/committee-members/CommitteeMembersBanner";

import CommitteeMembersContent from "@/components/other-committees/eco-club-committee/committee-members/CommitteeMembersContent";

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

export default async function CommitteeMembers() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ECO CLUB COMMITTEE PAGE ID
  // ==========================================

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
      "ECO CLUB COMMITTEE PAGE DATA ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // BANNER
  // INDEX 26
  // ==========================================

  const bannerSection = sections[15];

  return (
    <>
      <CommitteeMembersBanner
        sectionData={bannerSection}
      />

      <CommitteeMembersContent
        sections={sections}
      />
    </>
  );
}