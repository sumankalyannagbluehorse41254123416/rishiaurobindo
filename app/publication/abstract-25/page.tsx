import Image from "next/image";
import { headers } from "next/headers";

import { fetchDocumentCollection } from "@/service/fetchdata.services";

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

// ==========================================
// GET TEXT FROM HTML DESCRIPTION
// ==========================================

const getDescriptionText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default async function Abstract() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // ABSTRACT COLLECTION ID
  // ==========================================

  const abstractCollectionId =
    "70da1a2f-6b68-4261-b698-256d57834ef7";

  // ==========================================
  // FETCH ABSTRACT DATA
  // ==========================================

  let abstractData:
    | CollectionData
    | null = null;

  try {
    abstractData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        abstractCollectionId
      );
  } catch (error) {
    console.error(
      "ABSTRACT API ERROR:",
      error
    );
  }

  // ==========================================
  // DOCUMENTS
  // ==========================================

  const documents =
    abstractData?.collection?.documents ||
    [];

  return (
    <>
      {/* ==========================================
          PAGE TITLE
      ========================================== */}

      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="https://www.rabedc.com/img/page_title_bg.jpg"
          alt="page_title_bg"
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>ABSTARCT</h3>
        </div>
      </section>

      {/* ==========================================
          ABSTRACT SECTION
      ========================================== */}

      <div className="abstarct-banner">
        <div className="container pt-5">

          {documents.map(
            (document, index) => {

              // Description থেকে
              // "Abstract-Paper" text বের করবে
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

                  {/* =================================
                      DOCUMENT TITLE
                  ================================= */}

                  <div className="abstarct-text col-md-8 col-sm-6">
                    <h4>
                      {document.title}
                    </h4>
                  </div>

                  {/* =================================
                      THUMBNAIL + DOWNLOAD
                  ================================= */}

                  <div className="col-md-4 col-sm-6">

                    {/* Thumbnail Image */}
                    {document.thumbnail_url && (
                      <Image
                        className="abstarct-img mt-2"
                        src={
                          document.thumbnail_url
                        }
                        alt={
                          document.title ||
                          "abstract-banner-img"
                        }
                        width={400}
                        height={250}
                      />
                    )}

                    {/* Download Button */}
                    {document.file_url &&
                      document.is_downloadable && (
                        <div className="abstarct-btn pt-3 pb-2">
                          <a
                            href={
                              document.file_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {descriptionText ||
                              "Abstract-Paper"}

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
          )}

        </div>
      </div>
    </>
  );
}

