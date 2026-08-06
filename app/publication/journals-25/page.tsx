import Image from "next/image";
import { headers } from "next/headers";

import { fetchPageData } from "@/service/fetchdata.services";

// ==========================================
// TYPES
// ==========================================

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

// ==========================================
// JOURNALS PAGE
// ==========================================

export default async function JournalsPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PAGE API ID
  // ==========================================

  const journalsPageId =
    "b8cb10ae-d27c-4218-ab52-2c80b5372bd2";

  // ==========================================
  // FETCH PAGE DATA
  // ==========================================

  let pageData: PageData = {};

  try {
    pageData =
      await fetchPageData(
        {
          host,
          ...headersObj,
        },
        journalsPageId
      );
  } catch (error) {
    console.error(
      "JOURNALS PAGE API ERROR:",
      error
    );
  }

  // ==========================================
  // GET PAGE SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // PAGE TITLE SECTION
  // ARRAY INDEX 2
  // ==========================================

  const pageTitleSection =
    sections[2];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          pageTitleSection?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          pageTitleSection?.title ||
          "page_title_bg"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {pageTitleSection?.title ||
            "Journals"}
        </h3>
      </div>
    </section>
  );
}
