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
// PAGE TITLE
// ==========================================

export default async function PageTitle() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // ALUMNI PAGE API ID
  // ==========================================

  const alumniPageId =
    "e5b90ac9-af80-433e-9180-daef298d7308";

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
        alumniPageId
      );
  } catch (error) {
    console.error(
      "ALUMNI PAGE TITLE API ERROR:",
      error
    );
  }

  // ==========================================
  // GET SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data
      ?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // PAGE TITLE SECTION
  // ARRAY INDEX 0
  // ==========================================

  const pageTitleSection =
    sections[0];

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
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {pageTitleSection?.title}
        </h3>
      </div>

    </section>
  );
}

