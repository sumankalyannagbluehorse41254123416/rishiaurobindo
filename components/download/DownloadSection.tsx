interface DocumentItem {
  id?: number;
  uid?: string;
  title?: string;
  file_url?: string;
  download_button_name?: string;
  is_downloadable?: boolean;
  sequence?: number;
  status?: string;
}

interface CollectionData {
  success?: boolean;
  collection?: {
    id?: number;
    uid?: string;
    name?: string;
    slug?: string;
    description?: string;
    documents?: DocumentItem[];
  };
}

interface DownloadSectionProps {
  admissionData?: CollectionData | null;
  marksheetData?: CollectionData | null;
}

const DownloadSection = ({
  admissionData,
  marksheetData,
}: DownloadSectionProps) => {
  // Admission Form Collection
  const admissionCollection =
    admissionData?.collection;

  const admissionDocuments =
    admissionCollection?.documents || [];

  // Marksheet Collection
  const marksheetCollection =
    marksheetData?.collection;

  const marksheetDocuments =
    marksheetCollection?.documents || [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* ========================================
              LEFT SIDE - ADMISSION FORM
          ======================================== */}

          <div className="lan_info_inner col-md-6 col-sm-6">

            <div>
              <h3>
                {admissionCollection?.name}
              </h3>
            </div>

            {admissionDocuments.map(
              (document) => (
                <div
                  key={
                    document.uid ||
                    document.id
                  }
                >
                  <p className="download_button">
                    {document.title}

                    {document.is_downloadable &&
                      document.file_url && (
                        <a
                          href={
                            document.file_url
                          }
                          className="btn_theme"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {document.download_button_name ||
                            "Download"}
                        </a>
                      )}
                  </p>
                </div>
              )
            )}

          </div>

          {/* ========================================
              RIGHT SIDE - MARKSHEET
          ======================================== */}

          <div className="lan_info_inner col-md-6 col-sm-6">

            <div>
              <h3>
                {marksheetCollection?.name}
              </h3>
            </div>

            {marksheetDocuments.map(
              (document) => (
                <div
                  key={
                    document.uid ||
                    document.id
                  }
                >
                  <p className="download_button">
                    {document.title}

                    {document.is_downloadable &&
                      document.file_url && (
                        <a
                          href={
                            document.file_url
                          }
                          className="btn_theme"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {document.download_button_name ||
                            "Download"}
                        </a>
                      )}
                  </p>
                </div>
              )
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;