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

interface ComputerLabGalleryProps {
  section?: Section;
}

const ComputerLabGallery = ({
  section,
}: ComputerLabGalleryProps) => {
  const images =
    section?.subsections || [];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {section?.title || "Computer Lab"}
        </h3>
      </div>

      <div className="row mb-5">
        {images.map((subsection, index) => (
          subsection.image && (
            <div
              className="col-md-3"
              key={index}
            >
              <a
                className="gal-inr"
                href={subsection.image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={subsection.image}
                  alt={
                    subsection.title ||
                    "Computer Lab"
                  }
                  width={400}
                  height={300}
                />

                <ExpandIcon />
              </a>
            </div>
          )
        ))}
      </div>
    </div>
  );
};

export default ComputerLabGallery;