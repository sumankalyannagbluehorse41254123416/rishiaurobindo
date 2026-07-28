export default function SSRReportTable() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>CYCLE WISE REPORT</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            {/* DVV Clarification - Metric Level */}
            <tr>
              <td>2</td>
              <td>DVV Clarification_Metric Level</td>
              <td>
                <a
                  href="/images/1661167677856.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                >
                  View
                </a>
              </td>
            </tr>

            {/* DVV Clarification - Extended Profile */}
            <tr>
              <td>3</td>
              <td>DVV Clarification_Extended Profile</td>
              <td>
                <a
                  href="/images/1661167623340.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                >
                  View
                </a>
              </td>
            </tr>

            {/* IIQA Report */}
            <tr>
              <td>1</td>
              <td>IIQA REPORT_1ST CYCLE</td>
              <td>
                <a
                  href="/images/1661158361251.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                >
                  View
                </a>
              </td>
            </tr>

            {/* Self Study Report */}
            <tr>
              <td>4</td>
              <td>SELF STUDY REPORT(SSR)_1ST CYCLE</td>
              <td>
                <a
                  href="/images/1661158021163.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                >
                  View
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}