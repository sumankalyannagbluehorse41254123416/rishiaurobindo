import Image from "next/image";
import Link from "next/link";

export default function BuildingInfo() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {/* Institution Details */}
          <div>
            <p>
              <span style={{ fontFamily: "Century", fontSize: "18px" }}>
                <strong>
                  <u>Name of Institution</u>
                </strong>
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "18px",
                }}
              >
                RISHI AUROBINDO INSTITUTE OF TEACHER EDUCATION
              </span>

              <br />

              <span style={{ fontFamily: "Century", fontSize: "18px" }}>
                <strong>
                  <u>Course</u>
                </strong>
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "16px",
                }}
              >
                <strong>B.Ed. (Bachelor of Education)</strong>
                <br />
                Intake – 100 students
                <br />
                <strong>D.EL.ED (Diploma in Elementary Education)</strong>
                <br />
                Intake – 100 students
              </span>

              <br />

              <span style={{ fontFamily: "Century", fontSize: "18px" }}>
                <strong>
                  <u>Location</u>
                </strong>
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "16px",
                }}
              >
                <strong>Mouza</strong> – Panchkhuri,{" "}
                <strong>P.O. –</strong> Panchkhuri,
                <br />
                <strong>P.S. –</strong> Kotowali,{" "}
                <strong>Dist.-</strong> Paschim Medinipur,
                <br />
                <strong>Pin –</strong> 721150,{" "}
                <strong>State-</strong> West Bengal
              </span>

              <br />

              <span style={{ fontFamily: "Century", fontSize: "18px" }}>
                <strong>
                  <u>Total Land</u>
                </strong>
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "18px",
                }}
              >
                4046.82 sq.mt. (100 Decm.)
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "16px",
                }}
              >
                Plot No. – 482
                <br />
                J.L. No. 241
              </span>

              <br />

              <span style={{ fontFamily: "Century", fontSize: "18px" }}>
                <strong>
                  <u>Total Built up Area</u>
                </strong>
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "18px",
                }}
              >
                3211.87 sq.mt.
              </span>

              <br />

              <span
                style={{
                  fontFamily: "Times New Roman",
                  fontSize: "16px",
                }}
              >
                Ground Floor – 8639.94 sq.ft. = 802.97 SQ.MT.
                <br />
                First Floor – 8639.94 sq.ft. = 802.97 SQ.MT.
                <br />
                Second Floor – 8639.94 sq.ft. = 802.97 SQ.MT.
                <br />
                Third Floor – 8639.94 sq.ft. = 802.96 SQ.MT.
                <br />
                Other Remaining Built Up Area viz gallery, staircase,
                ramp = 588.4 SQ.MT
                <br />
                Student Amenity – 1585.23 sq.ft.
              </span>
            </p>
          </div>

          {/* Empty Div - Kept from Original HTML */}
          <div>
            <p></p>
          </div>

          {/* Building Completion Certificate */}
          <div>
            <h3>BUILDING COMPLETION CERTIFICATE</h3>

            <Image
              className="img-responsive land_img"
              src="https://wip.tezcommerce.com:3304/admin/module/25/1668153007982.jpg"
              alt="Building Completion Certificate"
              width={300}
              height={117}
            />

            <p className="download_button">
              <Link
                href="https://wip.tezcommerce.com:3304/admin/module/25/1668155866042.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </Link>
            </p>
          </div>

          {/* Building Plan */}
          <div>
            <h3>BUILDING PLAN</h3>

            <Image
              className="img-responsive land_img"
              src="https://wip.tezcommerce.com:3304/admin/module/25/1668155996934.jpg"
              alt="Building Plan"
              width={300}
              height={117}
            />

            <p className="download_button">
              <Link
                href="https://wip.tezcommerce.com:3304/admin/module/25/1668156031342.pdf"
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
}