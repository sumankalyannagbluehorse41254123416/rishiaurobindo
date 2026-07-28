import Image from "next/image";

export default function MagazineContent() {
  return (
    <section className="land_info_wrap">
      {/* Magazine Images / Editions */}
      <div className="container">
        <div className="row lan_info_inner">
          {/* 3RD EDITION */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "5px" }}>&nbsp;</p>
            <p style={{ lineHeight: "5px" }}>3RD EDITION</p>
            <p style={{ lineHeight: "0px" }}>&nbsp;</p>
          </div>

          {/* BAAK 2ND EDITION */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "5px" }}>BAAK</p>
            <p style={{ lineHeight: "5px" }}>2ND EDITION</p>

            <Image
              src="https://wip.tezcommerce.com:3304/admin/module/25/1645018996886.jpeg"
              alt="2ND EDITION"
              width={500}
              height={500}
            />
          </div>

          {/* BAAK 1ST EDITION */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "5px" }}>BAAK</p>
            <p style={{ lineHeight: "5px" }}>1ST EDITION</p>
            <p style={{ lineHeight: "0px" }}>&nbsp;</p>
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="container">
        <div className="row">
          {/* 3RD EDITION DOWNLOAD */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "0px" }}>&nbsp;</p>

            <p className="download_button">
              3RD EDITION{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1679724065390.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>

          {/* 2ND EDITION DOWNLOAD */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "0px" }}>&nbsp;</p>

            <p className="download_button">
              2ND EDITION{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1645018996906.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </p>
          </div>

          {/* Empty Column - Keeping Original Layout */}
          <div className="col-lg-6 col-md-4 col-6">
            <p style={{ lineHeight: "0px" }}>&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
}