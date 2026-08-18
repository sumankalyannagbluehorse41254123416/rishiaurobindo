import Image from "next/image";
import Link from "next/link";

interface Subsection {
  title?: string;
  image?: string;
  description?: string;
  file_url?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  file_url?: string;
  download_button_name?: string;
  subsections?: Subsection[];
}

interface DocumentItem {
  id?: number;
  uid?: string;
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

interface LandInfoProps {
  sectionData?: Section;
  affidavitSection?: Section;
  landMutationSection?: Section;
  documents?: DocumentItem[];
}

export default function LandInfo({
  sectionData,
  affidavitSection,
  landMutationSection,
  documents = [],
}: LandInfoProps) {
  return (
    <div className="land-banner">
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner">

            {/* =========================================
                LAND DETAILS
                API ARRAY INDEX 29
            ========================================== */}

            <div>
              {/* Section Title */}

              {sectionData?.title && (
                <h3>
                  {sectionData.title}
                </h3>
              )}

              {/* Short Description */}

              {sectionData?.shortDescription && (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      sectionData.shortDescription,
                  }}
                />
              )}

              {/* Alternative Short Description */}

              {!sectionData?.shortDescription &&
                sectionData?.short_description && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        sectionData.short_description,
                    }}
                  />
                )}

              {/* Description */}

              {sectionData?.description && (
                <div
                  dangerouslySetInnerHTML={{
                    __html:
                      sectionData.description,
                  }}
                />
              )}

              {/* Subsections */}

              {sectionData?.subsections?.map(
                (subsection, index) => (
                  <div key={index}>

                    {subsection.title && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            subsection.title,
                        }}
                      />
                    )}

                    {subsection.description && (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            subsection.description,
                        }}
                      />
                    )}

                  </div>
                )
              )}
            </div>

            {/* =========================================
                AFFIDAVIT MANDATORY DISCLOSURE
                API ARRAY INDEX 0
            ========================================== */}

            <div>
              {affidavitSection?.title && (
                <h3>
                  <strong>
                    {affidavitSection.title}
                  </strong>
                </h3>
              )}

              {(affidavitSection?.shortDescription ||
                affidavitSection?.short_description) && (
                <p>
                  <strong
                    dangerouslySetInnerHTML={{
                      __html:
                        affidavitSection.shortDescription ||
                        affidavitSection.short_description ||
                        "",
                    }}
                  />
                </p>
              )}
            </div>

            {/* =========================================
                LAND MUTATION
                API ARRAY INDEX 1
            ========================================== */}

            <div className="land-image">

              {/* Dynamic Section Title */}

              {landMutationSection?.title && (
                <h3>
                  {landMutationSection.title}
                </h3>
              )}

              {/* Dynamic Section Image */}

              {landMutationSection?.image && (
                <Image
                  className="img-responsive land_img"
                  src={
                    landMutationSection.image
                  }
                  alt={
                    landMutationSection.title ||
                    "Land Mutation"
                  }
                  width={800}
                  height={600}
                />
              )}

              {/* Download Same Image */}

              {landMutationSection?.image && (
                <p className="download_button pt-3">
                  <Link
                    href={
                      landMutationSection.image
                    }
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download
                  </Link>
                </p>
              )}

            </div>

            {/* =========================================
                LAND DEED + AFFIDAVIT
                DOCUMENT COLLECTION
            ========================================== */}

            {documents.map((document) => (
              <div
                className="land-image"
                key={
                  document.uid ||
                  document.id ||
                  document.sequence
                }
              >

                {/* Document Title */}

                {document.title && (
                  <h3>
                    {document.title}
                  </h3>
                )}

                {/* Document Thumbnail */}

                {document.thumbnail_url && (
                  <Image
                    className="img-responsive land_img"
                    src={
                      document.thumbnail_url
                    }
                    alt={
                      document.title ||
                      "Document"
                    }
                    width={800}
                    height={600}
                  />
                )}

                {/* Document Download */}

                {document.file_url && (
                  <p className="download_button pt-3">
                    <Link
                      href={
                        document.file_url
                      }
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
    </div>
  );
}