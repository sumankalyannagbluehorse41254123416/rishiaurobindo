import Image from "next/image";

export default function Grievances() {
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
              src="https://wip.tezcommerce.com:3304/admin/module/25/1644240703879.jpg"
              alt="land_img2"
              width={800}
              height={500}
            />

            <p className="download_button">
              Grievances{" "}
              <a
                target="_blank"
                href="https://wip.tezcommerce.com:3304/admin/module/25/1644240703879.jpg"
                className="btn_theme"
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