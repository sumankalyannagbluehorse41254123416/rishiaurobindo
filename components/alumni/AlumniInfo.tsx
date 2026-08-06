import Image from "next/image";
import { headers } from "next/headers";

import {
  fetchDocumentCollection,
} from "@/service/fetchdata.services";

// ==========================================
// TYPES
// ==========================================

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
// REMOVE HTML TAGS
// ==========================================

const stripHtml = (
  html?: string
) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

// ==========================================
// ALUMNI INFO
// ==========================================

export default async function AlumniInfo() {
  const rqHeaders = await headers();

  const host =
    rqHeaders.get("host") ||
    "localhost:3000";

  const headersObj =
    Object.fromEntries(
      rqHeaders.entries()
    );

  // ==========================================
  // ALUMNI COLLECTION ID
  // ==========================================

  const alumniCollectionId =
    "81c2a280-f5b8-40ff-82c4-7749c3eb3963";

  // ==========================================
  // FETCH ALUMNI DATA
  // ==========================================

  let alumniData:
    | CollectionData
    | null = null;

  try {
    alumniData =
      await fetchDocumentCollection(
        {
          host,
          ...headersObj,
        },
        alumniCollectionId
      );
  } catch (error) {
    console.error(
      "ALUMNI API ERROR:",
      error
    );
  }

  // ==========================================
  // GET DOCUMENTS
  // ==========================================

  const documents =
    alumniData?.collection?.documents ||
    [];

  // ==========================================
  // FIRST DOCUMENT
  // COMMITTEE MEMBERS
  // ==========================================

  const committeeDocument =
    documents[0];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* =====================================
              LEFT SECTION
              COMMITTEE MEMBERS
          ====================================== */}

          <div className="lan_info_inner lan-left col-lg-6 col-md-6">

            <div>
              <h3>
                {committeeDocument?.title ||
                  "Committee Members"}
              </h3>
            </div>

            <div>
              <p></p>
            </div>

            <div>

              {/* Thumbnail Image */}
              {committeeDocument?.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={
                    committeeDocument.thumbnail_url
                  }
                  alt={
                    committeeDocument.title ||
                    "Committee Members"
                  }
                  width={800}
                  height={500}
                />
              )}

              {/* Description + Download */}
              <p className="download_button">

                {stripHtml(
                  committeeDocument?.description
                )}

                {committeeDocument?.file_url &&
                  committeeDocument?.is_downloadable && (
                    <>
                      {" "}

                      <a
                        href={
                          committeeDocument.file_url
                        }
                        className="btn_theme"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {committeeDocument.download_button_name ||
                          "Download"}
                      </a>
                    </>
                  )}

              </p>

            </div>
          </div>

          {/* =====================================
              RIGHT SECTION
              MEETING OF ALUMNI ASSOCIATION
          ====================================== */}

          <div className="lan_info_inner lan-right col-lg-6 col-md-6">

            <div>
              <h4>
                MEETING OF ALUMNI ASSOCIATION
              </h4>
            </div>

            {/* Meeting 3 */}
            <div>
              <p className="download_button">
                MEETING – 3{" "}

                <a
                  href="#"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>

            {/* Meeting 2 */}
            <div>
              <p className="download_button">
                MEETING- 2{" "}

                <a
                  href="#"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>

            {/* Meeting 1 */}
            <div>
              <p className="download_button">
                MEETING -1{" "}

                <a
                  href="#"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

