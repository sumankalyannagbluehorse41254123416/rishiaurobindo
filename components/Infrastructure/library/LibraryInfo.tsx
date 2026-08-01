import Image from "next/image";

const libraryImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/Library%20Images-4.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/Library%20Images-3.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/Library%20Images-2.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/Library%20Images-1.jpeg",
];

export default function LibraryInfo() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div className="title_box2">
            <h3>Library</h3>
          </div>

          <ul className="land_details_li">
            <li>TOTAL NO OF BOOKS IN LIBRARY - 6468</li>
            <li>Text Books - 2655</li>
            <li>Reference Books - 3788</li>
            <li>PERIODICALS (Journals &amp; Magazines) - 206</li>
            <li>Book Bank - 516</li>
            <li>Daily News Paper - 04</li>
            <li>Competitive Exam Books - 45</li>
            <li>Subscribed Magazine - 03</li>
            <li>Subscribed Journals - 11</li>
            <li>Career News Paper - 04</li>
          </ul>
        </div>

        <div className="title_box2">
          <h3>Image</h3>
        </div>

        <div className="row mb-5">
          {libraryImages.map((image, index) => (
            <div className="col-md-3" key={image}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Library Image ${index + 1}`}
                  width={218}
                  height={164}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}