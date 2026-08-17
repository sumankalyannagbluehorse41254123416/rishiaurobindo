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

export default async function SmartClassRoom() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

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
      "SMART CLASS ROOM DATA:",
      JSON.stringify(pageData, null, 2)
    );
  } catch (error) {
    console.error(
      "SMART CLASS ROOM API ERROR:",
      error
    );
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // ARRAY INDEX 10
  const section = sections[10];

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={
          section?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          section?.title ||
          "Smart Class Room"
        }
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>
          {section?.title ||
            "SMART CLASS ROOM"}
        </h3>
      </div>
    </section>
  );
}