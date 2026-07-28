const bedData = [
  {
    slNo: "10.",
    session: "2024-26",
    pdf: "/images/1744011335608.pdf",
  },
  {
    slNo: "9.",
    session: "2023-25",
    pdf: "/images/1724319654438.pdf",
  },
  {
    slNo: "8.",
    session: "2022-24",
    pdf: "/images/1666159312710.pdf",
  },
  {
    slNo: "7.",
    session: "2021-23",
    pdf: "/images/1666159320085.pdf",
  },
  {
    slNo: "6.",
    session: "2020-22",
    pdf: "/images/1666159327693.pdf",
  },
  {
    slNo: "5.",
    session: "2019-21",
    pdf: "/images/1666159335889.pdf",
  },
  {
    slNo: "4.",
    session: "2018-20",
    pdf: "/images/1666159342988.pdf",
  },
  {
    slNo: "3.",
    session: "2017-19",
    pdf: "/images/1666159351853.pdf",
  },
  {
    slNo: "2.",
    session: "2016-18",
    pdf: "/images/1666159369928.pdf",
  },
  {
    slNo: "1.",
    session: "2015-17",
    pdf: "/images/1666159303867.pdf",
  },
];

const deledData = [
  {
    slNo: "9.",
    session: "2024-26",
    pdf: "/images/1744011898547.pdf",
  },
  {
    slNo: "8.",
    session: "2023-25",
    pdf: "/images/1724319696907.pdf",
  },
  {
    slNo: "7.",
    session: "2022-24",
    pdf: "/images/1724319689125.pdf",
  },
  {
    slNo: "6.",
    session: "2021-23",
    pdf: "/images/1666159409312.pdf",
  },
  {
    slNo: "5.",
    session: "2020-22",
    pdf: "/images/1666159417326.pdf",
  },
  {
    slNo: "4.",
    session: "2019-21",
    pdf: "/images/1666159426254.pdf",
  },
  {
    slNo: "3.",
    session: "2018-20",
    pdf: "/images/1666159438192.pdf",
  },
  {
    slNo: "2.",
    session: "2017-19",
    pdf: "/images/1666159445219.pdf",
  },
  {
    slNo: "1.",
    session: "2016-18",
    pdf: "/images/1666159453509.pdf",
  },
];

export default function StudentDetails() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="title_box2">
          <h3>Student Details</h3>
        </div>

        <div className="row">
          {/* B.ED */}
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
                  {bedData.map((item) => (
                    <tr key={item.slNo}>
                      <td>{item.slNo}</td>
                      <td>{item.session}</td>
                      <td>
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* D.ELED */}
          <div className="column">
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
                  {deledData.map((item) => (
                    <tr key={item.slNo}>
                      <td>{item.slNo}</td>
                      <td>{item.session}</td>
                      <td>
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-border"
                        >
                          Download
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
    </section>
  );
}