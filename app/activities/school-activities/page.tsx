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


export default async function SchoolActivities25() {

  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj =
    Object.fromEntries(rqHeaders.entries());


  const pageId =
    "fb77c628-02f2-473c-9c5a-d5537bb0013c";


  let pageData: PageData = {};


  try {

    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );

  } catch(error) {

    console.error(
      "PAGE DATA ERROR:",
      error
    );

  }


  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];


  const schoolActivitiesSection =
    sections[19];


  return (
    <div className="container">

      <div className="text-center py-5">

        <h3>
          {schoolActivitiesSection?.title}
        </h3>


        <p>
          {schoolActivitiesSection?.shortDescription}
        </p>

      </div>

    </div>
  );
}