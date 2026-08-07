import { headers } from "next/headers";

import MainPage from "@/components/activities/awarness/MainPage";

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


export default async function Awarness() {

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


  } catch (error) {

    console.error(
      "AWARENESS PAGE ERROR:",
      error
    );

  }


  const sections =
    pageData.pageItemdataWithSubsection ||
    pageData.data?.pageItemdataWithSubsection ||
    [];


  // Awareness main section index
  const awarenessSection =
    sections[19];


  return (
    <>
      <MainPage section={awarenessSection} />
    </>
  );
}