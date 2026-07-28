import Image from "next/image";

export default function Notice() {
  const notices = [
    {
      title:
        "NOTICE FOR INTERNAL THEORITICAL EXAMINATION OF B.ED. 23-25 4TH SEM",
      url: "/images/1756122371633.pdf",
    },
    {
      title:
        "NOTICE FOR B.ED. 23-25 4TH SEM SUPPLEMENTARY-I EXAMINATION FORM FILLUP",
      url: "/images/1756122328246.pdf",
    },
    {
      title:
        "NOTICE FOR EXTERNAL PRACTICUM EXAMINATION OF B.ED. 24-26 1ST SEM",
      url: "/images/1756122272857.pdf",
    },
    {
      title:
        "NOTICE FOR B.ED. 23-25 4TH SEM EXAMINATION FORM FILLUP",
      url: "/images/1756122222179.pdf",
    },
    {
      title:
        "NOTICE FOR ARRANGEMENT FOR COLLECTION OF DATA TO PREPARE THEIR PRACTICUM NOTEBOOK ON 1.4.EPC-4 OF B.ED. 23-25 4TH SEM",
      url: "/images/1756122144587.pdf",
    },
    {
      title:
        "NOTICE FOR DISCUSSION ON COURSE 1.4.6 OF B.ED. 2023-25 4TH SEM",
      url: "/images/1756122046490.pdf",
    },
    {
      title:
        "NOTICE FOR CELEBRATION OF 79TH INDEPENDENCE DAY & 154TH BIRTHDAY OF RISHI AUROBINDO",
      url: "/images/1754998910240.pdf",
    },
    {
      title: "NOTICE FOR CELEBRATION OF RAKSHBANDHAN CEREMONY",
      url: "/images/1754998836899.pdf",
    },
    {
      title: "NOTICE FOR OBSERVATION OF 22SHE SHRABAN",
      url: "/images/1754998797054.pdf",
    },
    {
      title:
        "NOTICE FOR DISTRIBUTION OF ASSIGNMENT TOPIC & PRACTICUM OF B.ED. 23-25 4TH SEM",
      url: "/images/1754998754927.pdf",
    },
    {
      title:
        "NOTICE FOR ISSUING OF ADMIT CARD OF D.EL.ED. 24-26 1ST YEAR EXAMINATION",
      url: "/images/1754998704475.jpeg",
    },
    {
      title:
        "NOTICE FOR ISSUING ADMIT CARD CARD OF D.EL.ED. 23-25 2ND YEAR",
      url: "/images/1754998657244.jpeg",
    },
    {
      title:
        "NOTICE FOR B.ED. 1ST SEMESTER SUPPLEMENTARY-II EXAMINATION FORM FILLUP",
      url: "/images/1754998605473.pdf",
    },
    {
      title:
        "NOTICE FOR OBSERVATION OF DEATH ANNIVERSARY OF ISWAR CHANDRA VIDYASAGAR",
      url: "/images/1753785241271.jpeg",
    },
    {
      title: "NOTICE FOR PAYMENT OF DUE COURSE FEES",
      url: "/images/1753686966364.jpeg",
    },
  ];

  return (
    <section className="features-box features-box1">
      <div className="container">
        <div className="row">
          {/* Left Side - Notice */}
          <div className="col-md-6 mb-sm-0 mb-3">
            <div className="title_box2">
              <h3>Notice</h3>

              <p>
                Latest News and Updates of all the Sections and Administration.
              </p>
            </div>

            <ul className="notice-part">
              {notices.map((notice, index) => (
                <li key={index}>
                  <a
                    href={notice.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {notice.title}
                  </a>
                </li>
              ))}
            </ul>

            {/* View More Button */}
            <a
              href="https://www.rabedc.com/notice/list"
              className="btn_theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-6 mb-sm-0">
            <Image
              src="/images/1725270261612.jpg"
              alt="Notice"
              width={575}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

