import Image from "next/image";
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

export default async function Page() {
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

  // Array index 1
  const section = sections[1];

  // Get subsection from section index 1
  const subsection =
    section?.subsections?.[0];

  // Dynamic values
  const sectionTitle =
    section?.title ||
    "new-seminar";

  const sectionImage =
    section?.image ||
    "/images/page_title_bg.jpg";

  const subsectionDescription =
    subsection?.description ||
    subsection?.shortDescription ||
    section?.shortDescription ||
    "Coming Soon…..";

  console.log(
    "SECTION [1]:",
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
    "SECTION IMAGE:",
    sectionImage
  );

  console.log(
    "SUBSECTION DESCRIPTION:",
    subsectionDescription
  );

  return (
    <>
      {/* Page Title Section */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src={sectionImage}
          alt={sectionTitle}
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>
            {sectionTitle}
          </h3>
        </div>
      </section>

      {/* Content Section */}
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner">
            <div
              dangerouslySetInnerHTML={{
                __html:
                  subsectionDescription,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}