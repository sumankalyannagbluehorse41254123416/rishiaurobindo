const DownloadSection = () => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Admission Form */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3>Admission Form</h3>
            </div>

            <div>
              <p className="download_button">
                DOCUMENT REQUIRED
                <a
                  href="/images/1643953228802.pdf"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>

            <div>
              <p className="download_button">
                D.El.Ed. Admission Form
                <a
                  href="/images/1643953191962.pdf"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>

            <div>
              <p className="download_button">
                B.Ed. Admission Form
                <a
                  href="/images/1643953146644.pdf"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>
          </div>

          {/* Application for Marksheet */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3>Application for Marksheet</h3>
            </div>

            <div>
              <p className="download_button">
                Application for Marksheet
                <a
                  href="/images/1643973469039.pdf"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;