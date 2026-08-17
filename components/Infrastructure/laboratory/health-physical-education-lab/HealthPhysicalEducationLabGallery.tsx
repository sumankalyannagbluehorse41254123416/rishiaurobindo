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

interface HealthPhysicalEducationLabGalleryProps {
  sectionData?: Section;
}

const HealthPhysicalEducationLabGallery = ({
  sectionData,
}: HealthPhysicalEducationLabGalleryProps) => {
  const images =
    sectionData?.subsections || [];

  return (
    <div className="container main-gallery">

      {/* Gallery Title */}
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {sectionData?.title ||
            "Health & Physical Education Lab"}
        </h3>
      </div>

      {/* Gallery Images */}
      <div className="row mb-5">
        {images.map((image, index) => (
          <div
            className="col-md-3"
            key={index}
          >
            {image.image && (
              <a
                className="gal-inr"
                href={image.image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image.image}
                  alt={
                    image.title ||
                    sectionData?.title ||
                    "Health Physical Education Lab"
                  }
                  width={400}
                  height={300}
                />

                <ExpandIcon />
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPhysicalEducationLabGallery;