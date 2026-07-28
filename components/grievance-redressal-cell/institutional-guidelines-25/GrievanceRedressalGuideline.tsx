import Image from "next/image";
import Link from "next/link";

const GrievanceRedressalGuideline = () => {
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
              src="/images/1644238700246.jpg"
              alt="land_img2"
              width={800}
              height={500}
            />

            <p className="download_button">
              Grievance Redressal Guideline

              <Link
                href="https://wip.tezcommerce.com:3304/admin/module/25/1644238700304.docx"
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

export default GrievanceRedressalGuideline;