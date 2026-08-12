import { headers } from "next/headers";

import IqacCommitteeMembers from "@/components/iqec-cell/iqac-committee-member/IqacCommitteeMembers";
import IqacCommitteeMemberPageTitle from "@/components/iqec-cell/iqac-committee-member/IqacCommitteeMemberPageTitle";

import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  longDescription?: string;
  image?: string;
  subsection_sequence?: number;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  section_sequence?: number;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function IqacCommitteeMember() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "077bd6c5-99ac-4360-9bf3-2354a7c7caee";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("========== IQAC PAGE DATA ==========");
    console.log(pageData);
  } catch (error) {
    console.error("IQAC PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ??
    pageData.data?.pageItemdataWithSubsection ??
    [];

  console.log("========== ALL SECTIONS ==========");
  console.log(sections);

  // -------------------------------
  // TABLE SECTIONS
  // -------------------------------

  const slNoSection = sections[0];
  const nameSection = sections[1];
  const designationSection = sections[2];
  const memberSection = sections[3];

  console.log("========== TABLE DATA ==========");

  console.log("SL NO SECTION:", slNoSection);
  console.log("NAME SECTION:", nameSection);
  console.log("DESIGNATION SECTION:", designationSection);
  console.log("MEMBER SECTION:", memberSection);

  console.log("SL NO SUBSECTIONS:", slNoSection?.subsections);
  console.log("NAME SUBSECTIONS:", nameSection?.subsections);
  console.log("DESIGNATION SUBSECTIONS:", designationSection?.subsections);
  console.log("MEMBER SUBSECTIONS:", memberSection?.subsections);

  // -------------------------------
  // PAGE TITLE
  // -------------------------------

  const pageTitleSection = sections[4];

  console.log("========== PAGE TITLE ==========");
  console.log("PAGE TITLE SECTION:", pageTitleSection);
  console.log("PAGE TITLE:", pageTitleSection?.title);
  console.log("PAGE TITLE IMAGE:", pageTitleSection?.image);

  // -------------------------------
  // CHECK EACH ROW
  // -------------------------------

  const maxRows = Math.max(
    slNoSection?.subsections?.length ?? 0,
    nameSection?.subsections?.length ?? 0,
    designationSection?.subsections?.length ?? 0,
    memberSection?.subsections?.length ?? 0
  );

  console.log("========== TABLE ROWS ==========");
  console.log("TOTAL ROWS:", maxRows);

  for (let i = 0; i < maxRows; i++) {
    console.log(`----- ROW ${i + 1} -----`);

    console.log(
      "Sl. No:",
      slNoSection?.subsections?.[i]?.title
    );

    console.log(
      "Name:",
      nameSection?.subsections?.[i]?.title
    );

    console.log(
      "Designation:",
      designationSection?.subsections?.[i]?.title
    );

    console.log(
      "Member:",
      memberSection?.subsections?.[i]?.title
    );
  }

  return (
    <>
      <IqacCommitteeMemberPageTitle section={pageTitleSection} />

      <IqacCommitteeMembers sections={sections} />
    </>
  );
}