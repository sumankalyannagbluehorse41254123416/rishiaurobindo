import Image from "next/image";
import { headers } from "next/headers";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Books",
};

interface DocumentItem {
  id?: number;
  uid?: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
  thumbnail_url?: string;
}

interface CollectionData {
  success?: boolean;

  collection?: {
    id?: number;
    uid?: string;
    name?: string;
    description?: string;
    documents?: DocumentItem[];
  };
}

const getDescriptionText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default async function BookPage() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // BOOKS COLLECTION ID
  // ==========================================

  const booksCollectionId =
    "5b7f048f-9aa4-4120-9893-26b82844cf9a";

  // ==========================================
  // BOOK DOCUMENT DATA
  // ==========================================

  let booksData:
    | CollectionData
    | null = null;

  try {
    booksData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        booksCollectionId
      );
  } catch (error) {
    console.error(
      "BOOKS DOCUMENT API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    booksData?.collection?.documents ||
    [];

  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>
      {/* ==========================================
          PAGE TITLE
      ========================================== */}

      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="/images/page_title_bg.jpg"
          alt="page_title_bg"
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>BOOK</h3>
        </div>
      </section>

      {/* ==========================================
          BOOK SECTION
      ========================================== */}

      <div className="abstarct-banner">
        <div className="container pt-5">

          {documents.length > 0 ? (
            documents.map(
              (document, index) => {

                const descriptionText =
                  getDescriptionText(
                    document.description
                  );

                return (
                  <div
                    className="row"
                    key={
                      document.uid ||
                      document.id ||
                      index
                    }
                  >

                    {/* BOOK TITLE */}

                    <div className="abstarct-text col-md-8 col-sm-6">
                      <h4>
                        {document.title || ""}
                      </h4>
                    </div>

                    {/* IMAGE + DOWNLOAD */}

                    <div className="col-md-4 col-sm-6">

                      {document.thumbnail_url && (
                        <Image
                          className="abstarct-img mt-2"
                          src={
                            document.thumbnail_url
                          }
                          alt={
                            document.title ||
                            "book-banner-img"
                          }
                          width={235}
                          height={167}
                        />
                      )}

                      {document.file_url && (
                        <div className="abstarct-btn pt-3 pb-2">
                          <a
                            href={
                              document.file_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {descriptionText ||
                              "Book"}

                            &nbsp;

                            <span className="download">
                              {document.download_button_name ||
                                "Download"}
                            </span>
                          </a>
                        </div>
                      )}

                    </div>
                  </div>
                );
              }
            )
          ) : (
            <div className="text-center py-4">
              <p>
                No books available.
              </p>
            </div>
          )}

        </div>
      </div>
    </>
  );
}