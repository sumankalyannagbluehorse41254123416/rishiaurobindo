import Image from "next/image";
import Link from "next/link";

export default function LandInfo() {
  return (
    <div className="land-banner">
      <section className="land_info_wrap">
        <div className="container">
          <div className="lan_info_inner">

            {/* Land Details */}
            <div>
              <p>
                <span
                  style={{
                    fontFamily: "Century",
                    fontSize: "18px",
                  }}
                >
                  Amaranth Altruist Charitable Trust is in possession of own
                  land for setting up B.Ed. College titled
                  <br />
                  <strong>RISHI AUROBINDO INSTITUTE OF TEACHERS’ EDUCATION</strong>
                  <br />
                  The details of land are as follows:
                </span>

                <br />
                <br />

                <span
                  style={{
                    fontFamily: "Bookman Old Style",
                    fontSize: "20px",
                  }}
                >
                  <u>
                    <strong>Area of land</strong>
                  </u>
                </span>

                <br />

                <span
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "18px",
                  }}
                >
                  100 decm. = 1 ACRE (4046.82 SQ.MT)
                </span>

                <br />
                <br />

                <span
                  style={{
                    fontFamily: "Bookman Old Style",
                    fontSize: "20px",
                  }}
                >
                  <strong>
                    <u>Location</u>
                  </strong>
                </span>

                <br />

                <span
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "18px",
                  }}
                >
                  Mouza – Panchkhuri,
                  <br />
                  Gram Panchayat – Panchkhuri
                  <br />
                  Block – Midnapore Sadar
                  <br />
                  Dist. – Paschim Medinipur
                  <br />
                  State – West Bengal
                </span>

                <br />
                <br />

                <span
                  style={{
                    fontFamily: "Bookman Old Style",
                    fontSize: "20px",
                  }}
                >
                  <strong>
                    <u>Land particulars</u>
                  </strong>
                </span>

                <br />

                <span
                  style={{
                    fontFamily: "Times New Roman",
                    fontSize: "18px",
                  }}
                >
                  L.R. Plot No. 482,
                  <br />
                  J.L. No. 241,
                  <br />
                  L.R. Khatian No. 746
                </span>
              </p>
            </div>

            {/* Affidavit Description */}
            <div>
              <h3>
                <strong>AFFIDAVIT (Mandatory Disclosure)</strong>
              </h3>

              <p>
                <strong>
                  Copy of Affidavit on Rs. 100 on Non-Judicial Stamp Paper
                  before Notary Public, Midnapore (In terms of provision of
                  NCTE (Recognition Norms and Procedure) Regulation 2007 as
                  amended to time to time)
                </strong>
              </p>
            </div>

            {/* Land Mutation */}
            <div className="land-image">
              <h3>LAND MUTATION</h3>

              <Image
                className="img-responsive land_img"
                src="https://wip.tezcommerce.com:3304/admin/module/25/LAND%20MUTATION.jpg"
                alt="Land Mutation"
                width={800}
                height={600}
              />

              <p className="download_button pt-3">
                <Link
                  href="https://wip.tezcommerce.com:3304/admin/module/25/1646134072789.jpg"
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Link>
              </p>
            </div>

            {/* Land Deed */}
            <div className="land-image">
              <h3>LAND DEED</h3>

              <Image
                className="img-responsive land_img"
                src="https://wip.tezcommerce.com:3304/admin/module/25/LAND%20DEED-2.jpg"
                alt="Land Deed"
                width={800}
                height={600}
              />

              <p className="download_button pt-3">
                <Link
                  href="https://wip.tezcommerce.com:3304/admin/module/25/1646133886710.pdf"
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </Link>
              </p>
            </div>

            {/* Affidavit */}
            <div className="land-image">
              <h3>AFFIDAVIT</h3>

              <Image
                className="img-responsive land_img"
                src="https://wip.tezcommerce.com:3304/admin/module/25/AFFIDAVIT%20(Mandatory%20Disclosure).jpg"
                alt="Affidavit"
                width={800}
                height={600}
              />

              <p className="download_button pt-3">
                <Link
                  href="https://wip.tezcommerce.com:3304/admin/module/25/1646133799791.pdf"
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
    </div>
  );
}