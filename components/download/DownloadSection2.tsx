"use client";

interface DocumentItem {
  id?: number;
  uid?: string;
  title?: string;
  description?: string;
  file_url?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
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

interface DownloadSection2Props {
  migrationData?: CollectionData | null;
  coCurricularData?: CollectionData | null;
}

// HTML tag remove করার function
const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

const DownloadSection2 = ({
  migrationData,
  coCurricularData,
}: DownloadSection2Props) => {
  // Migration Data
  const migrationCollection = migrationData?.collection;
  const migrationDocument = migrationCollection?.documents?.[0];

  // Co-Curricular Data
  const coCurricularCollection = coCurricularData?.collection;
  const coCurricularDocument = coCurricularCollection?.documents?.[0];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* APPLICATION FOR MIGRATION */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3>
                {stripHtml(migrationDocument?.description) ||
                  "Application for Migration"}
              </h3>
            </div>

            <div className="row mt-2">
              <div className="col-md-9">
                <p className="download_button">
                  {stripHtml(migrationCollection?.name) ||
                    "Application for Migration"}
                </p>
              </div>

              <div className="col-md-3">
                {migrationDocument?.file_url && (
                  <a
                    href={migrationDocument.file_url}
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {migrationDocument.download_button_name || "Download"}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* APPLICATION FOR CO-CURRICULAR ACTIVITIES */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3 className="application-text">
                {stripHtml(coCurricularDocument?.description) ||
                  "APPLICATION FOR CO-CURRICULAR ACTIVITIES"}
              </h3>
            </div>

            <div>
              <p className="download_button">
                {stripHtml(coCurricularCollection?.name) ||
                  "Application for Migration"}

                {coCurricularDocument?.file_url && (
                  <a
                    href={coCurricularDocument.file_url}
                    className="btn_theme"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {coCurricularDocument.download_button_name || "Download"}
                  </a>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection2;