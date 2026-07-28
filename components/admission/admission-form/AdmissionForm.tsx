export default function AdmissionForm() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        {/* Main Title */}
        <div className="title_box2">
          <h3>Admission Form</h3>
        </div>

        <div className="row">
          {/* B.Ed Section */}
          <div className="column">
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
                  <tr>
                    <td>1.</td>
                    <td>Document Required</td>
                    <td>
                      <a
                        href="/images/1666173467260.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-border"
                      >
                        Download
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>1.</td>
                    <td>Admission Form</td>
                    <td>
                      <a
                        href="/images/1724403808031.pdf"
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

          {/* D.El.Ed Section */}
          <div className="column">
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
                  <tr>
                    <td>1.</td>
                    <td>Document Required</td>
                    <td>
                      <a
                        href="/images/1666173479217.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-border"
                      >
                        Download
                      </a>
                    </td>
                  </tr>

                  <tr>
                    <td>1.</td>
                    <td>Admission Form</td>
                    <td>
                      <a
                        href="/images/1724405946631.pdf"
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
    </section>
  );
}