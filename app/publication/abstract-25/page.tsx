import Image from "next/image";

export default function Abstract() {
  return (
    <>
      {/* Page Title */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="https://www.rabedc.com/img/page_title_bg.jpg"
          alt="page_title_bg"
          width={1920}
          height={300}
          priority
        />

        <div className="container">
          <h3>ABSTARCT</h3>
        </div>
      </section>

      {/* Abstract Section */}
      <div className="abstarct-banner">
        <div className="container pt-5">

          {/* First Abstract */}
          <div className="row">
            <div className="abstarct-text col-md-8 col-sm-6">
              <h4>
                In Search of Consciousness &amp; Healthy Living
              </h4>
            </div>

            <div className="col-md-4 col-sm-6">
              <Image
                className="abstarct-img mt-2"
                src="https://wip.tezcommerce.com:3304/admin/module/25/1644392101790.jpeg"
                alt="abstarct-banner-img"
                width={400}
                height={250}
              />

              <div className="abstarct-btn pt-3 pb-2">
                <a href="https://wip.tezcommerce.com:3304/admin/module/25/1644392101822.pdf">
                  Abstract-Paper&nbsp;
                  <span className="download">Download</span>
                </a>
              </div>
            </div>
          </div>

          {/* Second Abstract */}
          <div className="row">
            <div className="abstarct-text col-md-8 col-sm-6">
              <h4>
                Inclusive Education Immerging Issues &amp; Challenges &amp;
                Policy Perspective
              </h4>
            </div>

            <div className="col-md-4 col-sm-6">
              <Image
                className="abstarct-img mt-2"
                src="https://wip.tezcommerce.com:3304/admin/module/25/1644392013287.jpeg"
                alt="abstarct-banner-img"
                width={400}
                height={250}
              />

              <div className="abstarct-btn pt-3 pb-2">
                <a href="https://wip.tezcommerce.com:3304/admin/module/25/1644392013299.pdf">
                  Abstract-Paper&nbsp;
                  <span className="download">Download</span>
                </a>
              </div>
            </div>
          </div>

          {/* Third Abstract */}
          <div className="row">
            <div className="abstarct-text col-md-8 col-sm-6">
              <h4>
                Quality in Education: Issues &amp; Challenges
              </h4>
            </div>

            <div className="col-md-4 col-sm-6">
              <Image
                className="abstarct-img mt-2"
                src="https://wip.tezcommerce.com:3304/admin/module/25/1643807226340.jpg"
                alt="abstarct-banner-img"
                width={400}
                height={250}
              />

              <div className="abstarct-btn pt-3 pb-2">
                <a href="https://wip.tezcommerce.com:3304/admin/module/25/1647427109282.jpg">
                  Abstract-Paper&nbsp;
                  <span className="download">Download</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}