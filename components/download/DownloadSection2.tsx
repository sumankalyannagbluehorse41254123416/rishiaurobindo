const DownloadSection2 = () => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Application for Migration */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3>Application for Migration</h3>
            </div>

            <div className="row mt-2">
              <div className="col-md-9">
                <p className="download_button">
                  Application for Migration
                </p>
              </div>

              <div className="col-md-3">
                <a
                  href="https://wip.tezcommerce.com:3304/admin/module/25/1643973947467.pdf"
                  className="btn_theme"
                >
                  Download
                </a>
              </div>
            </div>
          </div>

          {/* Application for Co-Curricular Activities */}
          <div className="lan_info_inner col-md-6 col-sm-6">
            <div>
              <h3 className="application-text">
                APPLICATION FOR CO-CURRICULAR ACTIVITIES
              </h3>
            </div>

            <div>
              <p className="download_button">
                Application for Migration
                <a
                  href="https://wip.tezcommerce.com:3304/admin/module/25/1643973947467.pdf"
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

export default DownloadSection2;