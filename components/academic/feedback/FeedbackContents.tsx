interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface FeedbackContentsProps {
  documents?: DocumentItem[];
}

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default function FeedbackContents({
  documents = [],
}: FeedbackContentsProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Left Side Navigation */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills"
              id="audit-report-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <a
                className="nav-link active"
                id="balanceTab0"
                href="#balanceInfo0"
                role="tab"
                aria-controls="balanceInfo0"
                aria-selected="true"
              >
                Feedback
              </a>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div
              className="tab-content"
              id="audit-report-tabContent"
            >
              <div
                className="tab-pane show active"
                id="balanceInfo0"
                role="tabpanel"
                aria-labelledby="balanceTab0"
              >
                <div className="theme_table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Semmester</th>
                        <th>Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {documents.map((document, index) => {
                        const fileUrl =
                          document.file_url ||
                          document.fileUrl ||
                          document.file ||
                          "";

                        return (
                          <tr
                            key={
                              document.id ||
                              index
                            }
                          >
                            <td>
                              {stripHtml(
                                document.description
                              )}
                            </td>

                            <td></td>

                            <td>
                              {document.title || ""}
                            </td>

                            <td>
                              <a
                                target="_blank"
                                href={fileUrl}
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}