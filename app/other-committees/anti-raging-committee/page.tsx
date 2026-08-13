import { headers } from "next/headers";

import AntiRagingCommitteeBanner from "@/components/other-committees/anti-raging-committee/AntiRagingCommitteeBanner";

import { fetchPageData } from "@/service/fetchdata.services";

type PageData = Awaited<
  ReturnType<typeof fetchPageData>
>;

export default async function AntiRagingCommittee() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ANTI-RAGING COMMITTEE SECTION
  // ==========================================

  const sectionId =
    "16998dff-0ec7-47e2-94e0-ae03c4828bf2";

  let sectionData: PageData | null = null;

  // ==========================================
  // API
  // ==========================================

  try {
    sectionData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      sectionId
    );

    console.log(
      "===================================="
    );

    console.log(
      "ANTI-RAGING COMMITTEE SECTION DATA"
    );

    console.log(
      JSON.stringify(sectionData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ANTI-RAGING COMMITTEE API ERROR:",
      error
    );
  }

  return (
    <>
      <AntiRagingCommitteeBanner
        sectionData={sectionData}
      />
    </>
  );
}