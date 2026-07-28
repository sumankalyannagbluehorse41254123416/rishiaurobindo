export default function SeminarPresentationContent() {
  return (
    <section className="land_info_wrap">
      <div className="row">
        {/* Topics Column */}
        <div className="column">
          <div className="container">
            <div className="lan_info_inner">
              <div>
                <p>TOPICS</p>
              </div>

              <div>
                <p className="download_button">
                  গণিতের ধারণা
                </p>
              </div>

              <div>
                <p className="download_button">
                  দলিত শিক্ষা
                </p>
              </div>

              <div>
                <p className="download_button">
                  উপভাষা
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* File Column */}
        <div className="column">
          <div className="container">
            <div className="lan_info_inner">
              <div>
                <p>FILE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}