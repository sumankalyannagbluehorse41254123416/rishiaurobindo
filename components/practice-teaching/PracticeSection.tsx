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
// PRACTICE SECTION
// ==========================================

export default async function PracticeSection() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PRACTICE PAGE API ID
  // ==========================================

  const practicePageId =
    "7543f06a-fff7-46c2-bc5c-4ecd31a9ae86";

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
        practicePageId
      );

    // ==========================================
    // CONSOLE LOG API RESPONSE
    // ==========================================

    console.log(
      "================================"
    );

    console.log(
      "PRACTICE API FULL RESPONSE:"
    );

    console.log(
      JSON.stringify(
        pageData,
        null,
        2
      )
    );

    console.log(
      "================================"
    );

  } catch (error) {
    console.error(
      "PRACTICE API ERROR:",
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
  // B.ED
  // ARRAY INDEX 1
  // ==========================================

  const bedSection =
    sections[1];

  // ==========================================
  // D.EL.ED
  // ARRAY INDEX 2
  // ==========================================

  const deledSection =
    sections[2];

  // ==========================================
  // RENDER COURSE SECTION
  // ==========================================

  const renderCourse = (
    section?: Section
  ) => {
    if (!section) {
      return null;
    }

    return (
      <div className="col-md-6 col-sm-6">
        <div className="practice_section">

          {/* =====================================
              SECTION TITLE
          ====================================== */}

          <h2>
            {stripHtml(
              section.title
            )}
          </h2>

          {/* =====================================
              SECTION SHORT DESCRIPTION
          ====================================== */}

          <h4>
            {stripHtml(
              section.shortDescription
            )}
          </h4>

          {/* =====================================
              SUBSECTION LIST
          ====================================== */}

          <ul>
            {section.subsections?.map(
              (
                subsection,
                index
              ) => (
                <li
                  key={
                    `${subsection.title}-${index}`
                  }
                >
                  <a href="#">
                    {stripHtml(
                      subsection.title
                    )}
                  </a>
                </li>
              )
            )}
          </ul>

        </div>
      </div>
    );
  };

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <div className="container">
      <div className="row mt-4 mb-5">

        {/* =====================================
            B.ED
            ARRAY INDEX 1
        ====================================== */}

        {renderCourse(
          bedSection
        )}

        {/* =====================================
            D.EL.ED
            ARRAY INDEX 2
        ====================================== */}

        {renderCourse(
          deledSection
        )}

      </div>
    </div>
  );
}

