import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="banner_slider_wrap">
        <div className="container">
          <div className="row">
            {/* Important Links */}
            <div className="col-md-3 text-left p-text">
              <h2 className="title-bx1">Important Link</h2>

              <ul className="area8">
                <li>
                  <a
                    href="http://vidyasagar.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logo-f.png"
                      alt="logo-f"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.wbbpe.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logo-f1.png"
                      alt="logo-f1"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://ncte.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/ncte.jpg"
                      alt="ncte"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.wbuttepa.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/images/logo-f2.jpg"
                      alt="logo-f2"
                      width={150}
                      height={50}
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Hidden Links */}
            <div
              className="Links"
              style={{ display: "none" }}
            ></div>

            {/* Useful Links */}
            <div
              className="col-md-3 ul-link"
              id="NavBarIudyogFooter"
            >
              <h2 className="footer_title">Useful Links</h2>

              <ul>
                <li className="gr1">
                  <a href="https://www.rabedc.com/building">
                    BUILDING
                  </a>
                </li>

                <li className="gr2">
                  <a href="https://www.rabedc.com/land">
                    LAND
                  </a>
                </li>

                <li className="gr3">
                  <a href="https://www.rabedc.com/admission">
                    ADMISSION
                  </a>
                </li>

                <li className="gr4">
                  <a href="https://www.rabedc.com/gallery">
                    GALLERY
                  </a>
                </li>

                <li className="gr5">
                  <a href="https://www.rabedc.com/contact-us">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>

            {/* External Links */}
            <div className="col-md-3 ul-link">
              <h2 className="footer_title">External Links</h2>

              <ul>
                <li>
                  <a
                    href="http://vidyasagar.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vidyasagar University
                  </a>
                </li>

                <li>
                  <a
                    href="https://ncte.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    N.C.T.E.
                  </a>
                </li>

                <li>
                  <a
                    href="http://www.wbbpe.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W.B.B.P.E.
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.wbkanyashree.gov.in/kp_4.0/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kanyashree
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.wbcupa.org.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    W.B.C.U.P.A.
                  </a>
                </li>
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="col-md-3">
              <h2 className="footer_title">Get in Touch</h2>

              <p>
                At: Panchkhuri P.O.: Panchkhuri,
                <br />
                Dist.: Paschim Medinipur,
                <br />
                Pin: 721150, West Bengal
              </p>

              <div className="news_letter">
                <input
                  type="email"
                  placeholder="Enter your email"
                />

                <button type="button">
                  <i
                    className="fa fa-chevron-right"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>

              <ul className="f-share">
                <li>
                  <a
                    href="https://www.facebook.com/rishiaurobindo.shikhanmahavidyalaya/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-facebook"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
                  <a href="#" target="_blank">
                    <i
                      className="fa fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.youtube.com/channel/UCCsdurPdyeeTO_9Q9MVcP4A/featured/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-youtube-play"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-areain">
        <div className="container">
          <div className="row justify-content-center">
            <div className="text-center">
              <p>
                Copyright © 2022 Rishi Aurobindo. All Rights Reserved.
                Powered by{" "}
                <a
                  href="https://iudyog.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  iUdyog
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}