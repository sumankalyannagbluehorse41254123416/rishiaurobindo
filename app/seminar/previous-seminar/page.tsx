import { fetchPageData } from "@/service/fetchdata.services";
import { headers } from "next/headers";

interface Subsection {
  title?: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface SiteData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function PreviousSeminar() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  let siteData: SiteData = {};

  try {
    siteData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      "c81c6991-0984-492a-8f32-d9b38944c4b2"
    );

    console.log(
      "PREVIOUS SEMINAR API RESPONSE:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "PREVIOUS SEMINAR API ERROR:",
      error
    );
  }

  // Get sections from API
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  // Array index 2
  const section = sections[2];

  // Dynamic section title
  const sectionTitle =
    section?.title ||
    "Previous Seminar";

  // Dynamic section short description
  const sectionShortDescription =
    section?.shortDescription ||
    "This page is under construction. Please check back later.";

  // Console logs
  console.log(
    "PREVIOUS SEMINAR SECTION [2]:",
    JSON.stringify(
      section,
      null,
      2
    )
  );

  console.log(
    "SECTION TITLE:",
    sectionTitle
  );

  console.log(
    "SECTION SHORT DESCRIPTION:",
    sectionShortDescription
  );

  return (
    <div className="container">
      <div className="text-center py-5">
        {/* Dynamic Section Title */}
        <h3>
          {sectionTitle}
        </h3>

        {/* Dynamic Section Short Description */}
        <div
          dangerouslySetInnerHTML={{
            __html:
              sectionShortDescription,
          }}
        />
      </div>
    </div>
  );
}