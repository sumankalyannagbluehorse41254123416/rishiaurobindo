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

interface SyllabusContentsProps {
  documents?: DocumentItem[];
}

export default function SyllabusContents({
  documents = [],
}: SyllabusContentsProps) {
  return (
    <section className="land_info_wrap land-text-center">
      <div className="container">

        <div>
          <p></p>
        </div>

        <div>
          <p></p>
        </div>

        <div className="bd-border">

          <table className="table table-bordered">

            {/* =====================================
                STATIC TABLE HEADER
            ====================================== */}

            <thead>
              <tr>
                <th>Sl. No</th>
                <th>Programme Name</th>
                <th>Teacher List</th>
              </tr>
            </thead>

            {/* =====================================
                DYNAMIC DOCUMENT DATA
            ====================================== */}

            <tbody>
              {documents.length > 0 ? (
                documents.map(
                  (document, index) => {

                    // Remove HTML tags like <p>, </p>, etc.
                    const description =
                      document.description
                        ?.replace(/<[^>]*>/g, "")
                        .trim();

                    return (
                      <tr
                        key={
                          document.uid ||
                          document.id
                        }
                      >

                        {/* =================================
                            SL NO
                        ================================== */}

                        <td>
                          {description ||
                            `${index + 1}.`}
                        </td>

                        {/* =================================
                            PROGRAMME NAME
                        ================================== */}

                        <td>
                          {document.title}
                        </td>

                        {/* =================================
                            DOWNLOAD
                        ================================== */}

                        <td>
                          {document.file_url &&
                          document.is_downloadable !==
                            false ? (
                            <a
                              href={
                                document.file_url
                              }
                              target="_blank"
                              className="btn-border"
                              rel="noopener noreferrer"
                            >
                              {document.download_button_name ||
                                "Download"}
                            </a>
                          ) : (
                            "-"
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
                    No syllabus documents found.
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