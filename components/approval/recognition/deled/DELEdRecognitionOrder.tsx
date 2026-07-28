import Image from "next/image";

export default function DELEdRecognitionOrder() {
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
              src="https://wip.tezcommerce.com:3304/admin/module/25/1644313258018.jpg"
              alt="land_img2"
              width={800}
              height={600}
            />

            <p className="download_button">
              <a
                href="https://wip.tezcommerce.com:3304/admin/module/25/1644313258069.pdf"
                className="btn_theme1"
                target="_blank"
                rel="noopener noreferrer"
              >
                D.EL.ED RECOGNITION ORDER
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}