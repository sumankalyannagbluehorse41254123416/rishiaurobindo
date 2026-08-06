import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

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
// REMOVE HTML TAGS
// ==========================================

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

// ==========================================
// COURSE OFFERED
// ==========================================

export default async function CourseOffered() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // COURSE OFFERED PAGE API
  // ==========================================

  const courseOfferedPageId =
    "b8cb10ae-d27c-4218-ab52-2c80b5372bd2";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      courseOfferedPageId
    );
  } catch (error) {
    console.error(
      "COURSE OFFERED API ERROR:",
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
  // PAGE SECTION
  // ==========================================

  const section = sections[0];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <div className="container">
      <div className="text-center py-5">

        <h3>
          {stripHtml(section?.title)}
        </h3>

        <p>
          {stripHtml(
            section?.shortDescription
          )}
        </p>

      </div>
    </div>
  );
}

