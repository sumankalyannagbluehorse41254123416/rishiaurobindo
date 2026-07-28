import Image from "next/image";

const approvalDocuments = [
  {
    image:
      "https://wip.tezcommerce.com:3304/admin/module/25/1644313105492.jpg",
    pdf:
      "https://wip.tezcommerce.com:3304/admin/module/25/1644312973197.pdf",
    title: "BED ADDL-INTAKE RECOGNITION-ORDER",
  },
  {
    image:
      "https://wip.tezcommerce.com:3304/admin/module/25/1644313074411.jpg",
    pdf:
      "https://wip.tezcommerce.com:3304/admin/module/25/1644312853435.pdf",
    title: "BED RECOGNITION ORDER",
  },
];

export default function BedRecognition() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {/* Empty divs preserved from original HTML */}
          <div>
            <p></p>
          </div>

          <div>
            <p></p>
          </div>

          {approvalDocuments.map((document, index) => (
            <div key={index}>
              <Image
                className="img-responsive land_img"
                src={document.image}
                alt="land_img2"
                width={800}
                height={600}
              />

              <p className="download_button">
                <a
                  href={document.pdf}
                  className="btn_theme1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {document.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

