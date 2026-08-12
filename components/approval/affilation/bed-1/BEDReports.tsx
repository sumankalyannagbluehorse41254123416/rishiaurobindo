"use client";

interface DocumentItem {
  id: number;
  title: string;
  description: string;
  file_url: string;
  download_button_name: string;
}

interface Props {
  documents: DocumentItem[];
}

export default function BEDReports({
  documents,
}: Props) {
  return (
    <div className="container">
      <div className="row mb-5 mt-5">
        <div className="col-lg-6 col-sm-6 col-xs-12">
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
                <div className="bd-border-text text-center">
                  <h2>B.ED</h2>
                </div>

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>SI.No</th>
                      <th>Session</th>
                      <th>Download</th>
                    </tr>
                  </thead>

                  <tbody>
                    {documents.map((doc) => (
                      <tr key={doc.id}>
                        <td>
                          {doc.description.replace(
                            /<[^>]*>/g,
                            ""
                          )}
                        </td>

                        <td>{doc.title}</td>

                        <td>
                          <a
                            href={doc.file_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-border"
                          >
                            {doc.download_button_name ||
                              "Download"}
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}