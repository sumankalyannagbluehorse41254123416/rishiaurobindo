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

interface AcademicCalendarContentsProps {
  documents?: DocumentItem[];
}

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

export default function AcademicCalendarContents({
  documents = [],
}: AcademicCalendarContentsProps) {
  return (
    <section className="land_info_wrap land-text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
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
                <div className="bd-border">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sl. No</th>
                        <th>Academic Year</th>
                        <th>Download</th>
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
                          <tr key={document.id || index}>
                            <td>{index + 1}.</td>

                            <td>
                              {stripHtml(
                                document.description
                              )}
                            </td>

                            <td>
                              <a
                                href={fileUrl}
                                target="_blank"
                                className="btn-border"
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