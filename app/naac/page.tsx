
import { headers } from "next/headers";
import { fetchPageData } from "@/service/fetchdata.services";

interface Section {
  title?: string;
  shortDescription?: string;
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

function stripHtml(value?: string) {
  if (!value) return "";

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export default async function Naac() {
  const rqHeaders = await headers();

  const host = rqHeaders.get("host") || "localhost:3000";
  const headersObj = Object.fromEntries(rqHeaders.entries());

  const pageId =
    "e283bc70-e9d8-4020-96be-37acfa4d08e6";

  let pageData: PageData = {};

  try {
    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );
  } catch (error) {
    console.error("NAAC PAGE DATA ERROR:", error);
  }

  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];

  // Array index 0
  const section = sections[0];

  const title = stripHtml(section?.title);
  const shortDescription = stripHtml(
    section?.shortDescription
  );

  return (
    <div className="container">
      <div className="text-center py-5">
        <h3>
          {title || "Page Under Maintenance"}
        </h3>

        <p>
          {shortDescription }
        </p>
      </div>
    </div>
  );
}

