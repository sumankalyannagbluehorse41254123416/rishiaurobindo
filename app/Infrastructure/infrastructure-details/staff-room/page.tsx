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

export default async function StaffRoom() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // SAME PAGE ID
  // ==========================================

  const pageId =
    "5093bc75-1c1e-48b4-90f2-f2a9a6032432";

  let pageData: PageData = {};

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
      "STAFF ROOM PAGE DATA"
    );

    console.log(
      JSON.stringify(pageData, null, 2)
    );

    console.log(
      "===================================="
    );
  } catch (error) {
    console.error(
      "STAFF ROOM API ERROR:",
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
  // STAFF ROOM - ARRAY INDEX 6
  // ==========================================

  const section = sections[6];

  console.log(
    "STAFF ROOM SECTION:",
    section
  );

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={
          section?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          section?.title ||
          "Staff Room"
        }
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>
          {section?.title}
        </h3>
      </div>
    </section>
  );
}