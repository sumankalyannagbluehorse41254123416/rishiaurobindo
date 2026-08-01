import Link from "next/link";

const AffidavitContent = () => {
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
            <p className="download_button">
              1. Affidavit on Rs. 100/- stamp paper duly attested by oath
              commissioner or notary public

              <Link
                href="https://wip.tezcommerce.com:3304/admin/module/25/1668167628835.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffidavitContent;