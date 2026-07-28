import Image from "next/image";

const socialWorkDocuments = [
  {
    year: "2023-2024",
    href: "",
  },
  {
    year: "2022-2023",
    href: "",
  },
  {
    year: "2021-2022",
    href: "/images/1691731101983.pdf",
  },
  {
    year: "2020-2021",
    href: "/images/1691730217696.pdf",
  },
  {
    year: "2019",
    href: "/images/1645011935198.pdf",
  },
  {
    year: "2018",
    href: "/images/1645011917315.pdf",
  },
  {
    year: "2016",
    href: "/images/1645011890310.pdf",
  },
  {
    year: "2014",
    href: "/images/1645011861217.pdf",
  },
  {
    year: "2013",
    href: "/images/1645009722326.pdf",
  },
];

export default function SocialWorkDocuments() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div>
            <h3>SOCIAL WORK DOCUMENTS</h3>
          </div>

          <div>
            <p></p>
          </div>

          <div>
            <Image
              className="img-responsive land_img"
              src="/images/1644324637836.jpg"
              alt="land_img2"
              width={800}
              height={500}
            />

            <p className="download_button">
              <a
                href="/images/1644324637858.pdf"
                className="btn_theme"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOCUMENTS
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row ml-2">
          {socialWorkDocuments.map((document) => (
            <div
              className="col-lg-2 col-md-4 col-6"
              key={document.year}
            >
              <p className="download_button">
                <a
                  href={document.href}
                  className="btn_theme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.year}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}