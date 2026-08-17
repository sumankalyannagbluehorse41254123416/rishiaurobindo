import Image from "next/image";
import { headers } from "next/headers";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function AdministrativeOffice() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "5093bc75-1c1e-48b4-90f2-f2a9a6032432";

  let pageData: PageData = {};

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

    console.log(
      "ADMINISTRATIVE OFFICE PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "ADMINISTRATIVE OFFICE API ERROR:",
      error
    );
  }

  // ==========================================
  // SECTIONS
  // ==========================================

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ==========================================
  // ADMINISTRATIVE OFFICE
  // ARRAY INDEX 7
  // ==========================================

  const section = sections[7];

  console.log(
    "ADMINISTRATIVE OFFICE SECTION:",
    section
  );

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <section className="page_title_wrap bottom_border">
        <Image
          src={
            section?.image ||
            "/images/page_title_bg.jpg"
          }
          alt={
            section?.title ||
            "Administrative Office"
          }
          width={1920}
          height={300}
          className="page_title_bg"
        />

        <div className="container">
          <h3>
            {section?.title ||
              "ADMINISTRATIVE OFFICE"}
          </h3>
        </div>
      </section>
    </>
  );
}