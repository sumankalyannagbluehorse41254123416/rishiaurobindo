import Image from "next/image";

export default function CodeOfConduct() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {/* Rules and Regulations */}
          <div className="text-center">
            <Image
              className="img-responsive land_img m-auto"
              src="/images/1651044568078.jpg"
              alt="land_img2"
              width={800}
              height={500}
            />

            <p className="download_button mt-3">
              Rules and Regulations including Duties &amp; Responsibilities in
              connection with Appointment of Teaching Staff

              <a
                href="/images/1651044568232.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>

          {/* Code of Conduct */}
          <div className="text-center">
            <Image
              className="img-responsive land_img m-auto"
              src="/images/1644302258423.jpg"
              alt="land_img2"
              width={800}
              height={500}
            />

            <p className="download_button mt-3">
              Code of Conduct

              <a
                href="/images/1671441034310.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}