export interface DocumentItem {
  id?: number | string;
  uid?: string;
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

export interface ImageNoticeItem {
  id?: number | string;
  uid?: string;
  title: string;
  image: string;
}

interface NoticesPageProps {
  documents?: DocumentItem[];
  items?: ImageNoticeItem[];
}

export default function NoticesPage({
  documents = [],
  items = [],
}: NoticesPageProps) {
  return (
    <section className="features-box py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">

            {/* ==========================================
                1. PDF DOCUMENT COLLECTION (TOP)
            ========================================== */}
            {documents.length > 0 && (
              <div className="notice-list mb-3">
                {documents.map((document, index) => {
                  const fileUrl = document.file_url || "";

                  return (
                    <div
                      key={document.uid || String(document.id) || `document-${index}`}
                      className="notice-part mb-3"
                    >
                      <div className="download_button bg-white rounded-3 shadow-sm hover-shadow transition-all">
                        {fileUrl ? (
                          <a
                            href={fileUrl}
                            className="btn_theme d-flex align-items-center text-decoration-none text-dark hover-text-primary gap-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="notice-text flex-grow-1">
                              {document.title || ""}
                            </span>

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
                              {document.title || ""}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {/* ==========================================
                2. SUBSECTION IMAGE NOTICES (LAST / BOTTOM)
            ========================================== */}
            {items.length > 0 && (
              <div className="notice-list">
                {items.map((item, index) => (
                  <div
                    key={item.uid || item.id || index}
                    className="notice-part mb-3"
                  >
                    <p className="download_button m-0">
                      {item.image ? (
                        <a
                          href={item.image}
                          className="btn_theme"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span className="btn_theme">{item.title}</span>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {documents.length === 0 && items.length === 0 && (
              <div className="text-center py-5">
                <p className="text-muted">No notices available.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
