"use client";
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
  cta_text?: string;
  cta_url?: string | null;
  thumbnail_url?: string | null;
  sequence?: number;
  status?: string;
}

interface AdmissionFormProps {
  documents?: DocumentItem[];
}

export default function AdmissionForm({
  documents = [],
}: AdmissionFormProps) {
  // Sequence 1, 2 = B.Ed
  const bedDocuments = documents
    .filter(
      (document) =>
        document.sequence === 1 ||
        document.sequence === 2
    )
    .sort(
      (a, b) =>
        (a.sequence || 0) - (b.sequence || 0)
    );

  // Sequence 3, 4 = D.El.Ed
  const deledDocuments = documents
    .filter(
      (document) =>
        document.sequence === 3 ||
        document.sequence === 4
    )
    .sort(
      (a, b) =>
        (a.sequence || 0) - (b.sequence || 0)
    );

  return (
    <section className="land_info_wrap">
      <div className="container">

        {/* Main Title */}
        <div className="title_box2">
          <h3>Admission Form</h3>
        </div>

        <div className="row">

          {/* ==========================================
              B.Ed Section
          ========================================== */}

          <div className="column col-12 col-md-6">
            <div className="title_box4">
              <h3>B.ED</h3>
            </div>

            <div className="bd-border">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Session</th>
                    <th>Download</th>
                  </tr>
                </thead>

                <tbody>
                  {bedDocuments.length > 0 ? (
                    bedDocuments.map((document, index) => (
                      <tr
                        key={
                          document.uid || document.id
                        }
                      >
                        <td>{index + 1}.</td>

                        <td>
                          {document.title || ""}
                        </td>

                        <td>
                          {document.file_url ? (
                            <a
                              href={document.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-border"
                            >
                              {document.download_button_name ||
                                "Download"}
                            </a>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>
                        No documents available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* ==========================================
              D.El.Ed Section
          ========================================== */}

          <div className="column col-12 col-md-6 mt-4 mt-md-0">
            <div className="title_box4">
              <h3>D.El.ED</h3>
            </div>

            <div className="bd-border">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl. No</th>
                    <th>Session</th>
                    <th>Download</th>
                  </tr>
                </thead>

                <tbody>
                  {deledDocuments.length > 0 ? (
                    deledDocuments.map((document, index) => (
                      <tr
                        key={
                          document.uid || document.id
                        }
                      >
                        <td>{index + 1}.</td>

                        <td>
                          {document.title || ""}
                        </td>

                        <td>
                          {document.file_url ? (
                            <a
                              href={document.file_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-border"
                            >
                              {document.download_button_name ||
                                "Download"}
                            </a>
                          ) : (
                            ""
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3}>
                        No documents available.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

