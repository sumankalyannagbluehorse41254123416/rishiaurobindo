export default function CourseFees() {
  return (
    <div className="container">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Course Fees</h3>
      </div>

      <div className="main-gallery">
        <div className="row mb-5">
          {/* D.El.Ed */}
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="courses_in">
              D.El.Ed
            </div>

            <div className="courses_in"></div>

            Fees Structure{" "}
            <a
              href="/images/1712052679100.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-border"
            >
              Download
            </a>
          </div>

          {/* B.Ed */}
          <div className="col-lg-6 col-sm-12 text-center">
            <div className="courses_in">
              B.ED
            </div>

            <div className="courses_in"></div>

            Fees Structure{" "}
            <a
              href="/images/1710308347103.PDF"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-border"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}