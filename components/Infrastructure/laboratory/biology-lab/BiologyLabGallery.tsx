import { ExpandIcon } from "lucide-react";
import Image from "next/image";

interface Subsection {
  title?: string;
  image?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface BiologyLabGalleryProps {
  sectionData?: Section;
}

const BiologyLabGallery = ({
  sectionData,
}: BiologyLabGalleryProps) => {
  const images =
    sectionData?.subsections || [];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {sectionData?.title ||
            "Biology Lab"}
        </h3>
      </div>

      <div className="row mb-5">
        {images.map((item, index) => {
          if (!item.image) {
            return null;
          }

          return (
            <div
              className="col-md-3"
              key={index}
            >
              <a
                className="gal-inr"
                href={item.image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={item.image}
                  alt={
                    item.title ||
                    `Biology Lab ${index + 1}`
                  }
                  width={400}
                  height={300}
                />

                <ExpandIcon />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BiologyLabGallery;