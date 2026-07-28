export default function DELEdReports() {
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
                    <tr>
                      <td>1</td>
                      <td>2016-2019</td>
                      <td>
                        <a
                          href="https://wip.tezcommerce.com:3304/admin/module/25/1651828278379.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          Download
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>2</td>
                      <td>2020-2023</td>
                      <td>
                        <a
                          href="https://wip.tezcommerce.com:3304/admin/module/25/1644318163843.jpg"
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