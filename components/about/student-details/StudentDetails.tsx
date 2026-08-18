interface DocumentItem {
  id?: number;
  uid?: string;
  title?: string;
  description?: string;
  file_url?: string;
  file_type?: string;
  file_size?: number;
  download_button_name?: string;
  is_downloadable?: boolean;
  sequence?: number;
  status?: string;
}

interface StudentDetailsProps {
  bedDocuments?: DocumentItem[];
  deledDocuments?: DocumentItem[];
}

export default function StudentDetails({
  bedDocuments = [],
  deledDocuments = [],
}: StudentDetailsProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">

        {/* =====================================
            MAIN TITLE
        ===================================== */}

        <div className="title_box2">
          <h3>Student Details</h3>
        </div>

        <div className="row">

          {/* =====================================
              B.ED
          ===================================== */}

          <div className="col-md-6">
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
                  {bedDocuments.map(
                    (item, index) => (
                      <tr
                        key={
                          item.uid ||
                          item.id ||
                          index
                        }
                      >
                        <td>
                          {item.title}
                        </td>

                        <td>
                          {item.description
                            ?.replace(
                              /<[^>]*>/g,
                              ""
                            )
                            .trim()}
                        </td>

                        <td>
                          {item.file_url && (
                            <a
                              href={
                                item.file_url
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-border"
                            >
                              {item.download_button_name ||
                                "Download"}
                            </a>
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* =====================================
              D.EL.ED
          ===================================== */}

          <div className="mt-4 mt-md-0 col-md-6">
            <div className="title_box4">
              <h3>D.ELED</h3>
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
                  {deledDocuments.map(
                    (item, index) => (
                      <tr
                        key={
                          item.uid ||
                          item.id ||
                          index
                        }
                      >
                        <td>
                          {item.title}
                        </td>

                        <td>
                          {item.description
                            ?.replace(
                              /<[^>]*>/g,
                              ""
                            )
                            .trim()}
                        </td>

                        <td>
                          {item.file_url && (
                            <a
                              href={
                                item.file_url
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-border"
                            >
                              {item.download_button_name ||
                                "Download"}
                            </a>
                          )}
                        </td>
                      </tr>
                    )
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