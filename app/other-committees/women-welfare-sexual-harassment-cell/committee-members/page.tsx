import CommitteeMembersBanner from "@/components/other-committees/women-welfare-sexual-harassment-cell/committee-members/committee-members/CommitteeMembersBanner";

import CommitteeMembersComponent from "@/components/other-committees/women-welfare-sexual-harassment-cell/committee-members/committee-members/CommitteeMembers";

import { fetchPageData } from "@/service/fetchdata.services";

import { headers } from "next/headers";

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
  // WOMEN WELFARE SEXUAL HARASSMENT CELL PAGE ID
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
  // INDEX 9
  // ==========================================

  const bannerSection = sections[9];

  return (
    <>
      <CommitteeMembersBanner
        sectionData={bannerSection}
      />

      <CommitteeMembersComponent   sections={sections}/>
    </>
  );
}