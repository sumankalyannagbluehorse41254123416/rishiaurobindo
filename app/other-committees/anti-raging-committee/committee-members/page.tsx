import { headers } from "next/headers";

import CommitteeMembersBanner from "@/components/other-committees/anti-raging-committee/committee-members/CommitteeMembersBanner";

import CommitteeMembers from "@/components/other-committees/anti-raging-committee/committee-members/CommitteeMembersContent";

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

  // ==========================================
  // ANTI-RAGING COMMITTEE PAGE ID
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
      "COMMITTEE MEMBERS PAGE DATA ERROR:",
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
  // INDEX 14
  // ==========================================

  const bannerSection = sections[14];

  return (
    <>
      <CommitteeMembersBanner
        sectionData={bannerSection}
      />

      <CommitteeMembers
        sections={sections}
      />
    </>
  );
}