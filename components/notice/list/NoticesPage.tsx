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

interface NoticesPageProps {
  documents?: DocumentItem[];
}

export default function NoticesPage({
  documents = [],
}: NoticesPageProps) {
  return (
    <section className="features-box py-5 bg-light">
      <div className="container">

        {/* ==========================================
            PAGE TITLE
        ========================================== */}

        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-4 display-5 fw-bold text-primary">
              Notice Board
            </h1>

            <p className="text-center text-muted mb-5">
              All important announcements and notices
              for students
            </p>
          </div>
        </div>

        {/* ==========================================
            NOTICE LIST
        ========================================== */}

        <div className="row justify-content-center">
          <div className="col-md-12">

            <div className="notice-list">

              {documents.length > 0 ? (
                documents.map(
                  (document, index) => {

                    // ==================================
                    // FILE TYPE
                    // ==================================

                    const fileType =
                      document.file_type
                        ?.split("/")
                        .pop()
                        ?.toLowerCase() || "";

                    const isPdf =
                      fileType === "pdf";

                    return (
                      <div
                        key={
                          document.uid ||
                          document.id ||
                          index
                        }
                        className="notice-part mb-3"
                      >

                        <div className="download_button p-3 bg-white rounded-3 shadow-sm hover-shadow transition-all">

                          {document.file_url ? (
                            <a
                              href={
                                document.file_url
                              }
                              className="btn_theme d-flex align-items-center text-decoration-none text-dark hover-text-primary"
                              target="_blank"
                              rel="noopener noreferrer"
                            >

                              {/* ==============================
                                  FILE ICON
                              ============================== */}

                              <span className="file-icon me-3">

                                {isPdf ? (
                                  <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#dc3545"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

                                    <polyline points="14 2 14 8 20 8" />

                                    <line
                                      x1="16"
                                      y1="13"
                                      x2="8"
                                      y2="13"
                                    />

                                    <line
                                      x1="16"
                                      y1="17"
                                      x2="8"
                                      y2="17"
                                    />

                                    <polyline points="10 9 9 9 8 9" />
                                  </svg>
                                ) : (
                                  <svg
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#28a745"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <rect
                                      x="3"
                                      y="3"
                                      width="18"
                                      height="18"
                                      rx="2"
                                    />

                                    <circle
                                      cx="8.5"
                                      cy="8.5"
                                      r="1.5"
                                    />

                                    <polyline points="21 15 16 10 5 21" />
                                  </svg>
                                )}

                              </span>

                              {/* ==============================
                                  DOCUMENT TITLE
                              ============================== */}

                              <span className="notice-text flex-grow-1">
                                {document.title}
                              </span>

                              {/* ==============================
                                  FILE TYPE
                              ============================== */}

                              <span className="badge bg-secondary ms-2">
                                {fileType.toUpperCase()}
                              </span>

                              {/* ==============================
                                  OPEN ICON
                              ============================== */}

                              <svg
                                className="ms-2"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M7 17L17 7" />

                                <polyline points="7 7 17 7 17 17" />
                              </svg>

                            </a>
                          ) : (
                            <div className="d-flex align-items-center">

                              <span className="file-icon me-3">
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

                                  <polyline points="14 2 14 8 20 8" />
                                </svg>
                              </span>

                              <span className="notice-text flex-grow-1">
                                {document.title}
                              </span>

                            </div>
                          )}

                        </div>

                      </div>
                    );
                  }
                )
              ) : (
                /* ==========================================
                   NO DATA
                ========================================== */

                <div className="text-center py-5">
                  <p className="text-muted">
                    No notices available.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}