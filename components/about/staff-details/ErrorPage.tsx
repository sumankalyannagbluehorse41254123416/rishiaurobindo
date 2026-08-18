import { headers } from "next/headers";

import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

export default async function ErrorPage() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId = "57751c9d-62f4-4669-9934-4cc8c07365d6";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

    console.log("====================================");
    console.log("ERROR PAGE DATA");
    console.log("====================================");
    console.log(JSON.stringify(pageData, null, 2));
    console.log("====================================");
  } catch (error) {
    console.error("ERROR PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 13
  const section = sections[13];

  const description =
    section?.shortDescription || "Please try again later.";

  return (
    <section className="py-5">
      <div className="container text-center">
        <h3>
          {section?.title ||
            "Sorry, this page is currently unavailable."}
        </h3>

        <div
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
    </section>
  );
}