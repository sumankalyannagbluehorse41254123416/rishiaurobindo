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

export default async function NewSeminar() {
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
      "NEW SEMINAR API RESPONSE:",
      JSON.stringify(
        siteData,
        null,
        2
      )
    );
  } catch (error) {
    console.error(
      "NEW SEMINAR API ERROR:",
      error
    );
  }

  // Get sections from API
  const sections =
    siteData.pageItemdataWithSubsection ||
    siteData.data
      ?.pageItemdataWithSubsection ||
    [];

  // Get section index 0
  const section = sections[0];

  console.log(
    "SECTION TITLE:",
    section?.title
  );

  console.log(
    "SECTION SHORT DESCRIPTION:",
    section?.shortDescription
  );

  return (
    <div className="container">
      <div className="text-center py-5">

        {/* Dynamic Section Title */}
        <h3>
          {section?.title}
        </h3>

        {/* Dynamic Short Description */}
        {section?.shortDescription && (
          <div
            dangerouslySetInnerHTML={{
              __html:
                section.shortDescription,
            }}
          />
        )}

      </div>
    </div>
  );
}