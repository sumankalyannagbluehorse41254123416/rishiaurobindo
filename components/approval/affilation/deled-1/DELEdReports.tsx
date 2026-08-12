interface DocumentData {
  description?: string;
  title?: string;
  file_url?: string;
}

interface SectionData {
  shortDescription?: string;
  title?: string;
  image?: string;
}

interface Props {
  document?: DocumentData;
  section?: SectionData;
}

export default function DELEdReports({
  document,
  section,
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
                  <h2>D.EL.ED</h2>
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
                    {/* Document */}
                    <tr>
                      <td>
                        {document?.description?.replace(
                          /<[^>]+>/g,
                          ""
                        )}
                      </td>

                      <td>{document?.title}</td>

                      <td>
                        <a
                          href={document?.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          Download
                        </a>
                      </td>
                    </tr>

                    {/* Page Section */}
                    <tr>
                      <td>
                        {section?.shortDescription?.replace(
                          /<[^>]+>/g,
                          ""
                        )}
                      </td>

                      <td>{section?.title}</td>

                      <td>
                        <a
                          href={section?.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
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