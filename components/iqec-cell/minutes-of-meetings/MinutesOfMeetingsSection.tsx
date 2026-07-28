import Image from "next/image";

export default function MinutesOfMeetingsSection() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div>
            <p></p>
          </div>

          <div>
            <p></p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1670934789440.jpg"
              alt="ACTION TAKEN REPORT 2020-2021"
              width={800}
              height={500}
            />

            <p className="download_button">
              ACTION TAKEN REPORT 2020-2021{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1670934789601.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn_theme"
              >
                Download
              </a>
            </p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1670934736390.jpg"
              alt="4TH MEETING"
              width={800}
              height={500}
            />

            <p className="download_button">
              4TH MEETING{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1670934736506.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn_theme"
              >
                Download
              </a>
            </p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1670934691738.jpg"
              alt="3RD MEETING"
              width={800}
              height={500}
            />

            <p className="download_button">
              3RD MEETING{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1670934691868.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn_theme"
              >
                Download
              </a>
            </p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1670934652586.jpg"
              alt="2ND MEETING"
              width={800}
              height={500}
            />

            <p className="download_button">
              2ND MEETING{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1670934652710.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn_theme"
              >
                Download
              </a>
            </p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1670934596590.jpg"
              alt="1ST MEETING"
              width={800}
              height={500}
            />

            <p className="download_button">
              1ST MEETING{" "}
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1670934596716.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn_theme"
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