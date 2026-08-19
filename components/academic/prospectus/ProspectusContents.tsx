interface DocumentItem {
  id: number;
  uid: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  file_size?: number;
  download_button_name?: string;
  download_count?: number;
  is_downloadable?: boolean;
  thumbnail_url?: string;
  sequence?: number;
  status?: string;
}

interface ProspectusContentsProps {
  documents?: DocumentItem[];
}

// ==========================================
// CLEAN HTML / <p></p>
// ==========================================

const cleanText = (
  value?: string
): string => {
  if (!value) return "";

  return value
    .replace(/<p[^>]*>/gi, "")
    .replace(/<\/p>/gi, "")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

export default function ProspectusContents({
  documents = [],
}: ProspectusContentsProps) {
  return (
    <section className="land_info_wrap land-text-center">
      <div className="container">

        <div>
          <p>Prospectus</p>
        </div>

        <div>
          <p></p>
        </div>

        <div className="bd-border">

          <table className="table table-bordered">

            {/* ==================================
                STATIC HEADER
            =================================== */}

            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Session</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>

              {documents.length > 0 ? (
                documents.map(
                  (document, index) => {

                    // ==============================
                    // DESCRIPTION → SL NO
                    // ==============================

                    const slNo =
                      cleanText(
                        document.description
                      ) ||
                      `${index + 1}.`;

                    // ==============================
                    // TITLE → SESSION
                    // ==============================

                    const title =
                      cleanText(
                        document.title
                      );

                    // ==============================
                    // FILE URL
                    // ==============================

                    const fileUrl =
                      document.file_url;

                    // ==============================
                    // DOWNLOAD BUTTON
                    // ==============================

                    const buttonName =
                      cleanText(
                        document.download_button_name
                      ) ||
                      "Download";

                    return (
                      <tr
                        key={
                          document.uid ||
                          document.id
                        }
                      >

                        {/* SL NO */}
                        <td>
                          {slNo}
                        </td>

                        {/* SESSION / TITLE */}
                        <td>
                          {title}
                        </td>

                        {/* DOWNLOAD */}
                        <td>
                          {fileUrl ? (
                            <a
                              href={fileUrl}
                              target="_blank"
                              className="btn-border"
                              rel="noopener noreferrer"
                            >
                              {buttonName}
                            </a>
                          ) : (
                            <span>
                              No File
                            </span>
                          )}
                        </td>

                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <td
                    colSpan={3}
                    className="text-center"
                  >
                    No data available
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>
      </div>
    </section>
  );
}