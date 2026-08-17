import Image from "next/image";

interface Subsection {
  title?: string;
  description?: string;
  image?: string;
}

interface Section {
  title?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface LibraryInfoProps {
  librarySection?: Section;
  imageSection?: Section;
  libraryDetails?: Subsection[];
  images?: Subsection[];
}

export default function LibraryInfo({
  librarySection,
  imageSection,
  libraryDetails = [],
  images = [],
}: LibraryInfoProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        {/* =====================================
            LIBRARY INFORMATION
        ===================================== */}

        <div className="lan_info_inner">
          <div className="title_box2">
            <h3>
              {librarySection?.title ||
                "Library"}
            </h3>
          </div>

          <ul className="land_details_li">
            {libraryDetails.map(
              (item, index) => (
                <li key={index}>
                  {item.title}
                </li>
              )
            )}
          </ul>
        </div>

        {/* =====================================
            LIBRARY IMAGES
        ===================================== */}

        <div className="title_box2">
          <h3>
            {imageSection?.title || "Image"}
          </h3>
        </div>

        <div className="row mb-5">
          {images.map((item, index) => {
            const imageUrl = item.image;

            if (!imageUrl) {
              return null;
            }

            return (
              <div
                className="col-md-3"
                key={index}
              >
                <a
                  className="gal-inr"
                  href={imageUrl}
                  data-lightbox="Gallery 1"
                >
                  <Image
                    src={imageUrl}
                    alt={
                      item.title ||
                      `Library Image ${
                        index + 1
                      }`
                    }
                    width={218}
                    height={164}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}