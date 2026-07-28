export default function MinutesOfMeeting() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>Meeting Name</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Minutes Of Meeting1</td>
              <td>
                <a
                  href="/images/1652359633716.pdf"
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
    </section>
  );
}