export default function AdmissionInfo() {
  return (
    <section className="land_info_wrap admission-box">
      <div className="container">
        <div className="row">
          {/* Admission Procedure */}
          <div className="lan_info_inner lan-left col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                Admission Procedure
              </p>
            </div>

            {/* D.EL.ED */}
            <div>
              <p className="download_button">
                <a href="#" className="btn_theme">
                  D.EL.ED
                </a>
              </p>
            </div>

            {/* B.ED */}
            <div>
              <p className="download_button">
                <a
                  href="/images/1644319464839.pdf"
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B.ED
                </a>
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="lan_info_inner lan-right col-md-6 col-sm-6">
            <div>
              <p className="admission-text">
                Eligibility
              </p>
            </div>

            {/* D.EL.ED */}
            <div>
              <p className="download_button">
                <a href="#" className="btn_theme">
                  D.EL.ED
                </a>
              </p>
            </div>

            {/* B.ED */}
            <div>
              <p className="download_button">
                <a
                  href="/images/1644319464839.pdf"
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B.ED
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}