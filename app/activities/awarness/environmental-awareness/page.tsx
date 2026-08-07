import { headers } from "next/headers";

import EnvironmentalAwarenessImages from "@/components/activities/awarness/environmental-awareness/environmentalAwarenessImages";

import { fetchPageData } from "@/service/fetchdata.services";


interface Subsection {
  image?: string;
}


interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}


interface PageData {
  pageItemdataWithSubsection?: Section[];

  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}



export default async function EnvironmentalAwarenessPage() {

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
      "ENVIRONMENTAL AWARENESS ERROR:",
      error
    );

  }



  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];



  const titleSection =
    sections[20];


  const gallerySection =
    sections[21];



  return (
    <>

      <section className="page_title_wrap bottom_border">

        {titleSection?.image && (
          <img
            className="page_title_bg"
            src={titleSection.image}
            alt=""
          />
        )}


        <div className="container">

          {titleSection?.title && (
            <h3>
              {titleSection.title}
            </h3>
          )}

        </div>

      </section>



      <EnvironmentalAwarenessImages
        section={gallerySection}
      />


    </>
  );
}