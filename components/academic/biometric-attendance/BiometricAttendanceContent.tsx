const attendanceData = {
  bed: [
    {
      academicSession: "2021-2022",
      semester: "2021-2022",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668603962843.pdf",
    },
    {
      academicSession: "1st semister",
      semester: "2020-2021",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668604044982.pdf",
    },
    {
      academicSession: "",
      semester: "2019-2020",
      link: "",
    },
  ],

  deled: [
    {
      academicSession: "2021-2022",
      semester: "2021-2022",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668603962843.pdf",
    },
    {
      academicSession: "1st semister",
      semester: "2020-2021",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668604044982.pdf",
    },
    {
      academicSession: "",
      semester: "2019-2020",
      link: "",
    },
  ],

  teachersStaff: [
    {
      slNo: 3,
      academicSession: "2021-2022",
      details: "2021-2022",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668603962843.pdf",
    },
    {
      slNo: 2,
      academicSession: "1st semister",
      details: "2020-2021",
      link: "https://wip.tezcommerce.com:3304/admin/module/25/1668604044982.pdf",
    },
    {
      slNo: 1,
      academicSession: "",
      details: "2019-2020",
      link: "",
    },
  ],
};

const BiometricAttendanceContent = () => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* B.Ed */}
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>B.ED</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Academic Session</th>
                        <th>Semester</th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {attendanceData.bed.map((item, index) => (
                        <tr key={index}>
                          <td>{item.academicSession}</td>
                          <td>{item.semester}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* D.El.Ed */}
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>D.EL.ED</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Academic Session</th>
                        <th>Semester</th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {attendanceData.deled.map((item, index) => (
                        <tr key={index}>
                          <td>{item.academicSession}</td>
                          <td>{item.semester}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers & Staff */}
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>Teachers & Staff</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>SI.No</th>
                        <th>Academic Session</th>
                        <th>Details (Month wise)</th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {attendanceData.teachersStaff.map((item, index) => (
                        <tr key={index}>
                          <td>{item.slNo}</td>
                          <td>{item.academicSession}</td>
                          <td>{item.details}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
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
    </section>
  );
};

export default BiometricAttendanceContent;