import Image from "next/image";

export default function CollegeAtGlance() {
  return (
    <section className="counter_wrap">
      <div className="banner_slider_wrap">
        <div className="container">
          <div className="conter_inner">
            <h3 className="counter_title">College at a Glance</h3>

            <div className="row">
              {/* Course */}
              <div className="col-6 col-sm-6 col-md-3">
                <div className="counter_block">
                  <div className="count_icon">
                    <Image
                      src="/images/1662105718894.png"
                      alt="calendar"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="count_details">
                    <h3>COURSE</h3>
                    <p>B.ED. &amp; D.EL.ED.</p>
                  </div>
                </div>
              </div>

              {/* Experienced Teachers */}
              <div className="col-6 col-sm-6 col-md-3">
                <div className="counter_block">
                  <div className="count_icon">
                    <Image
                      src="/images/1662105731257.png"
                      alt="calendar"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="count_details">
                    <h3>EXPERIENCED TEACHERS</h3>
                    <p>26 TEACHERS</p>
                  </div>
                </div>
              </div>

              {/* Students */}
              <div className="col-6 col-sm-6 col-md-3">
                <div className="counter_block">
                  <div className="count_icon">
                    <Image
                      src="/images/1662105747549.png"
                      alt="calendar"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="count_details">
                    <h3>Students</h3>
                    <p>1496 STUDENTS</p>
                  </div>
                </div>
              </div>

              {/* Years Found */}
              <div className="col-6 col-sm-6 col-md-3">
                <div className="counter_block">
                  <div className="count_icon">
                    <Image
                      src="/images/1662105758771.png"
                      alt="calendar"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="count_details">
                    <h3>YEARS FOUND</h3>
                    <p>10 YEARS OF GLORY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <Image
        className="counter_bg"
        src="/images/banner2.jpg"
        alt="banner2"
        width={1920}
        height={600}
      />
    </section>
  );
}