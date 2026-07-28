export default function FeedbackContents() {
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
                      <tr>
                        <td>2</td>
                        <td></td>
                        <td>ALUMNI FEEDBACK FORM</td>
                        <td>
                          <a
                            target="_blank"
                            href="https://wip.tezcommerce.com:3304/admin/module/25/1666176866930.pdf"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>3</td>
                        <td></td>
                        <td>TEACHER FEEDBACK FORM</td>
                        <td>
                          <a
                            target="_blank"
                            href="https://wip.tezcommerce.com:3304/admin/module/25/1666176879735.pdf"
                            rel="noopener noreferrer"
                          >
                            Download
                          </a>
                        </td>
                      </tr>

                      <tr>
                        <td>1</td>
                        <td></td>
                        <td>STUDENT FEEDBACK FORM</td>
                        <td>
                          <a
                            target="_blank"
                            href="https://wip.tezcommerce.com:3304/admin/module/25/1666176859076.pdf"
                            rel="noopener noreferrer"
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
    </section>
  );
}