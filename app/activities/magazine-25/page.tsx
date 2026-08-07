import { headers } from "next/headers";

import Magazine from "@/components/activities/magazine-25/Magazine";
import MagazineContent from "@/components/activities/magazine-25/MagazineContent";
import WallMagazine from "@/components/activities/magazine-25/wallMagazineImages";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";


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



interface MagazineDocument {
  title?: string;
  thumbnail_url?: string;
  file_url?: string;
}


interface MagazineData {
  collection?: {
    documents?: MagazineDocument[];
  };
}



export default async function Magazine25() {


  const rqHeaders = await headers();


  const host =
    rqHeaders.get("host") || "localhost:3000";


  const headersObj =
    Object.fromEntries(rqHeaders.entries());



  const pageId =
    "fb77c628-02f2-473c-9c5a-d5537bb0013c";


  const magazineCollectionId =
    "316febb8-d04c-4654-9f33-3c06e0e309a3";



  let pageData: PageData = {};

  let magazineData: MagazineData = {};



  try {

    pageData = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageId
    );


  } catch (error) {

    console.error(
      "PAGE DATA ERROR:",
      error
    );

  }




  try {

    magazineData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        magazineCollectionId
      );


    console.log(
      "MAGAZINE DATA:",
      JSON.stringify(
        magazineData,
        null,
        2
      )
    );


  } catch (error) {

    console.error(
      "MAGAZINE DOCUMENT ERROR:",
      error
    );

  }




  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];




  return (
    <>

      {/* Magazine Banner */}
      <Magazine
        section={sections[17]}
      />


      {/* Magazine Editions */}
      <MagazineContent
        magazineData={magazineData}
      />



      {/* Wall Magazine Gallery */}
      <WallMagazine
        section={sections[18]}
      />

    </>
  );
}