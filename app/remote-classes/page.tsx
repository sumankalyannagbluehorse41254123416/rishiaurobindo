
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
// REMOVE EMPTY HTML
// ==========================================

const getDescription = (
  description?: string
) => {
  if (!description) return "";

  const cleaned =
    description
      .replace(/<p>\s*<\/p>/gi, "")
      .trim();

  return cleaned;
};

// ==========================================
// REMOTE CLASSES
// ==========================================

export default async function RemoteClasses() {
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

  const remoteClassesPageId =
    "6449d4ec-84c8-4206-bb89-f675a2892c8a";

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
        remoteClassesPageId
      );

    console.log(
      "REMOTE CLASSES API RESPONSE:",
      JSON.stringify(
        pageData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "REMOTE CLASSES API ERROR:",
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

  const section =
    sections[0];

  // ==========================================
  // DESCRIPTION
  // ==========================================

  const description =
    getDescription(
      section?.shortDescription ||
      section?.description
    );

  return (
    <div className="container">
      <div className="text-center py-5">

        <h3>
          {section?.title ||
            "Page Under Maintenance"}
        </h3>

        {description && (
          <div
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
        )}

      </div>
    </div>
  );
}

