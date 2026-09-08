import { headers } from "next/headers";
import { Metadata } from "next";

import NoticeBanner from "@/components/notice/list/NoticeBanner";
import NoticesPage, { DocumentItem, ImageNoticeItem } from "@/components/notice/list/NoticesPage";

import { fetchPageData, fetchDocumentCollection } from "@/service/fetchdata.services";

export const metadata: Metadata = {
  title: "Notice list",
  description: "Notice list",
};

interface DocumentCollectionData {
  collection?: {
    documents?: DocumentItem[];
  };
}

interface SubSectionItem {
  id?: number | string;
  uid?: string;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  file_url?: string;
  file?: string;
  url?: string;
  path?: string;
}

interface SectionItem {
  id?: number | string;
  uid?: string;
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  file_url?: string;
  file?: string;
  url?: string;
  path?: string;
  subsections?: SubSectionItem[];
  pageItemdataWithSubsection?: SubSectionItem[];
}

interface PageFetchResponse {
  pageItemdataWithSubsection?: SectionItem[];
  data?: {
    pageItemdataWithSubsection?: SectionItem[];
  };
}

const stripHtml = (html?: string) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default async function NoticeListPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") || "localhost:3000";

  const headersObj = Object.fromEntries(
    rqHeaders.entries()
  );

  // ==========================================
  // FETCH 1: DOCUMENT COLLECTION (PDFs)
  // ==========================================
  const documentCollectionId = "3a9aa555-7c67-4d58-a833-f4d66de3e9b5";
  let documents: DocumentItem[] = [];

  try {
    const documentData: DocumentCollectionData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        documentCollectionId
      );

    documents = documentData?.collection?.documents || [];
  } catch (error) {
    console.error("NOTICE DOCUMENT API ERROR:", error);
  }

  // ==========================================
  // FETCH 2: PAGE DATA (Image Notices from UID)
  // ==========================================
  const pageUid = "57609e11-2d22-4723-956b-9db06a8e38b2";
  const items: ImageNoticeItem[] = [];

  try {
    const pageData: PageFetchResponse = await fetchPageData(
      {
        host,
        ...headersObj,
      },
      pageUid
    );

    const sections: SectionItem[] =
      pageData?.pageItemdataWithSubsection ||
      pageData?.data?.pageItemdataWithSubsection ||
      [];

    if (Array.isArray(sections)) {
      sections.forEach((section: SectionItem) => {
        const subList: SubSectionItem[] | undefined =
          section?.subsections ||
          section?.pageItemdataWithSubsection;

        if (Array.isArray(subList) && subList.length > 0) {
          subList.forEach((sub: SubSectionItem) => {
            const title = stripHtml(sub?.title || sub?.shortDescription || "");
            const image = sub?.image || sub?.file_url || sub?.file || sub?.url || "";

            if (title || image) {
              items.push({
                id: sub?.id || sub?.uid || items.length,
                uid: sub?.uid,
                title: title || "Notice",
                image: image,
              });
            }
          });
        } else {
          const title = stripHtml(section?.title || section?.shortDescription || "");
          const image = section?.image || section?.file_url || section?.file || section?.url || "";

          if (title || image) {
            items.push({
              id: section?.id || section?.uid || items.length,
              uid: section?.uid,
              title: title || "Notice",
              image: image,
            });
          }
        }
      });
    }
  } catch (error) {
    console.error("NOTICE PAGE API ERROR:", error);
  }

  console.log("====================================");
  console.log("PDF DOCUMENTS FETCHED:", documents.length);
  console.log("IMAGE NOTICES FETCHED:", items.length);
  console.log("====================================");

  return (
    <>
      <NoticeBanner />

      <NoticesPage
        documents={documents}
        items={items}
      />
    </>
  );
}