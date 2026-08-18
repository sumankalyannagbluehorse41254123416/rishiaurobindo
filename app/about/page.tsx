import { headers } from "next/headers";

import PageTitle from "@/components/about/PageTitle";
import LandInfo from "@/components/about/LandInfo";

import { fetchPageData } from "@/service/fetchdata.services";

type PageData = Awaited<
  ReturnType<typeof fetchPageData>
>;

export default async function About() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // ABOUT PAGE ID
  // ==========================================

  const pageId =
    "57751c9d-62f4-4669-9934-4cc8c07365d6";

  let pageData: PageData | null = null;

  // ==========================================
  // API
  // ==========================================

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log(
      "===================================="
    );

    console.log("ABOUT PAGE DATA");

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ABOUT PAGE API ERROR:",
      error
    );
  }

  return (
    <>
      {/* Array Index 0 */}
      <PageTitle
        section={pageData?.pageItemdataWithSubsection?.[0]}
      />

      {/* Array Index 1 */}
      <LandInfo
        section={pageData?.pageItemdataWithSubsection?.[1]}
      />
    </>
  );
}