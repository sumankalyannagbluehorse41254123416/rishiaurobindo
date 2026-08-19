import { headers } from "next/headers";

import QuestionPaperBanner from "@/components/academic/question-paper/bed-25/QuestionPaperBanner";
import QuestionPaperContent from "@/components/academic/question-paper/bed-25/QuestionPaperContent";

import {
  fetchPageData,
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
  longDescription?: string;
  description?: string;
  subsections?: Subsection[];
}

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  file_url?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
  data?: {
    pageItemdataWithSubsection?: Section[];
  };
}

interface DocumentItem {
  id?: number;
  uid?: string;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  download_button_name?: string;
  [key: string]: unknown;
}

interface DocumentCollectionData {
  documents?: DocumentItem[];

  data?: {
    documents?: DocumentItem[];
  };

  collection?: {
    documents?: DocumentItem[];
  };

  [key: string]: unknown;
}

export default async function Bed25() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // PAGE ID
  // ==========================================

  const pageId =
    "d56c22c4-9324-404e-ab20-278ba107c8d6";

  // ==========================================
  // DOCUMENT COLLECTION IDS
  // ==========================================

  const collections = {
    "2016":
      "f36b1627-e564-43ba-899a-55e29010712d",

    "2017":
      "17f32a05-c158-4551-9120-b1ef7941efec",

    "2018":
      "0691ef51-0bb7-4b7d-8c39-5680c68566cd",

    "2019":
      "de072414-4043-4304-bb12-651731654183",

    "2020":
      "cfc80e65-c70b-4565-b841-7eff72166533",

    "2021":
      "e8db2bff-8795-4e2c-be23-bab829beb637",

    "2022":
      "fe15f64f-aa7a-45e1-8a31-67e3e650b5dc",
  };

  // ==========================================
  // PAGE DATA
  // ==========================================

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
      "QUESTION PAPER PAGE DATA ERROR:",
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
  // BANNER
  // ARRAY INDEX 17
  // ==========================================

  const bannerSection =
    sections[17];

  // ==========================================
  // DOCUMENT FETCH
  // ==========================================

  async function getDocuments(
    collectionId: string
  ): Promise<DocumentItem[]> {
    try {
      const response =
        (await fetchDocumentCollection(
          {
            host,
            ...headersObj,
          },
          collectionId
        )) as DocumentCollectionData;

      return (
        response.documents ||
        response.data?.documents ||
        response.collection?.documents ||
        []
      );
    } catch (error) {
      console.error(
        "DOCUMENT COLLECTION ERROR:",
        collectionId,
        error
      );

      return [];
    }
  }

  // ==========================================
  // FETCH ALL YEARS
  // ==========================================

  const [
    documents2016,
    documents2017,
    documents2018,
    documents2019,
    documents2020,
    documents2021,
    documents2022,
  ] = await Promise.all([
    getDocuments(collections["2016"]),
    getDocuments(collections["2017"]),
    getDocuments(collections["2018"]),
    getDocuments(collections["2019"]),
    getDocuments(collections["2020"]),
    getDocuments(collections["2021"]),
    getDocuments(collections["2022"]),
  ]);

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      <QuestionPaperBanner
        sectionData={bannerSection}
      />

      <QuestionPaperContent
        documents2016={documents2016}
        documents2017={documents2017}
        documents2018={documents2018}
        documents2019={documents2019}
        documents2020={documents2020}
        documents2021={documents2021}
        documents2022={documents2022}
      />
    </>
  );
}