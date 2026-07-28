import Image from "next/image";

export default function BookPage() {
  const books = [
    {
      title: "COVID-19 APPROACHES TO NEW NORNAL",
      image:
        "/images/1644392403829.jpg",
      pdf:
        "/images/1644392403841.pdf",
    },
    {
      title: "EDUCATION ISSUES AND CHALLENGES BOOK",
      image:
        "/images/1644392352950.jpg",
      pdf:
        "/images/1644392352974.pdf",
    },
  ];

  return (
    <>
      {/* Page Title */}
      <section className="page_title_wrap bottom_border">
        <Image
          className="page_title_bg"
          src="/images/page_title_bg.jpg"
          alt="page_title_bg"
          fill
          priority
        />

        <div className="container">
          <h3>BOOK</h3>
        </div>
      </section>

      {/* Book Section */}
      <div className="abstarct-banner">
        <div className="container pt-5">
          {books.map((book, index) => (
            <div className="row" key={index}>
              <div className="abstarct-text col-md-8 col-sm-6">
                <h4>{book.title}</h4>
              </div>

              <div className="col-md-4 col-sm-6">
                <Image
                  className="abstarct-img mt-2"
                  src={book.image}
                  alt="abstarct-banner-img"
                  width={235}
                  height={167}
                />

                <div className="abstarct-btn pt-3 pb-2">
                  <a
                    href={book.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abstract-Paper &nbsp;
                    <span className="download">Download</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

