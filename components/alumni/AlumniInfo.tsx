import Image from "next/image";

export default function AlumniInfo() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Left Section */}
          <div className="lan_info_inner lan-left col-lg-6 col-md-6">
            <div>
              <h3>Committee Members</h3>
            </div>

            <div>
              <p></p>
            </div>

            <div>
              <Image
                className="img-responsive land_img"
                src="/images/1643895974849.jpg"
                alt="Committee Members"
                width={800}
                height={500}
              />

              <p className="download_button">
                Committee Members{" "}
                <a
                  href="/images/1643895974886.pdf"
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="lan_info_inner lan-right col-lg-6 col-md-6">
            <div>
              <h4>MEETING OF ALUMNI ASSOCIATION</h4>
            </div>

            {/* Meeting 3 */}
            <div>
              <p className="download_button">
                MEETING – 3{" "}
                <a href="#" className="btn_theme">
                  Download
                </a>
              </p>
            </div>

            {/* Meeting 2 */}
            <div>
              <p className="download_button">
                MEETING- 2{" "}
                <a href="#" className="btn_theme">
                  Download
                </a>
              </p>
            </div>

            {/* Meeting 1 */}
            <div>
              <p className="download_button">
                MEETING -1{" "}
                <a href="#" className="btn_theme">
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}