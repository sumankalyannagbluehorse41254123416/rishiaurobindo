import Image from "next/image";
import Link from "next/link";

interface Section {
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  description?: string;
  image?: string;
}

interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  slug?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  file_size?: number;
  download_button_name?: string;
  download_count?: number;
  is_downloadable?: boolean;
  cta_text?: string;
  cta_url?: string | null;
  thumbnail_url?: string;
  sequence?: number;
  status?: string;
}

interface BuildingInfoProps {
  sectionData?: Section;
  documents?: DocumentItem[];
}

export default function BuildingInfo({
  sectionData,
  documents = [],
}: BuildingInfoProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {/* ==========================================
              INSTITUTION DETAILS
              API SECTION INDEX 32
          ========================================== */}

          <div>
            {sectionData?.shortDescription ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: sectionData.shortDescription,
                }}
              />
            ) : (
              <p></p>
            )}
          </div>

          {/* ==========================================
              EMPTY DIV
              KEPT FROM ORIGINAL CODE
          ========================================== */}

          <div>
            <p></p>
          </div>

          {/* ==========================================
              BUILDING DOCUMENTS
              DOCUMENT COLLECTION
              ID:
              b2276394-0e20-4aae-9a67-9b4dd63c3502
          ========================================== */}

          {documents.map((document) => (
            <div
              key={document.uid || document.id}
              className="land-image"
            >
              {/* Document Title */}
              {document.title && (
                <h3>{document.title}</h3>
              )}

              {/* Document Thumbnail */}
              {document.thumbnail_url && (
                <Image
                  className="img-responsive land_img"
                  src={document.thumbnail_url}
                  alt={
                    document.title ||
                    "Building Document"
                  }
                  width={300}
                  height={117}
                />
              )}

              {/* Download Button */}
              {document.file_url &&
                document.is_downloadable !== false && (
                  <p className="download_button">
                    <Link
                      href={document.file_url}
                      className="btn_theme"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {document.download_button_name ||
                        "Download"}
                    </Link>
                  </p>
                )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}