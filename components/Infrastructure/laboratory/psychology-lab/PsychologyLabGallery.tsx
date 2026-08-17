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

interface PsychologyLabGalleryProps {
  sectionData?: Section;
  images?: Subsection[];
}

const PsychologyLabGallery = ({
  sectionData,
  images = [],
}: PsychologyLabGalleryProps) => {
  return (
    <div className="container main-gallery">

      {/* Gallery Title */}
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {sectionData?.title ||
            "Psychology Lab"}
        </h3>
      </div>

      {/* Gallery Images */}
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
                    "Psychology Lab"
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

export default PsychologyLabGallery;