import { ExpandIcon } from "lucide-react";
import Image from "next/image";

interface Subsection {
  title?: string;
  image?: string;
  description?: string;
  link?: string;
}

interface Section {
  subsections?: Subsection[];
}

interface Props {
  section?: Section;
}

export default function IctEnabledClassroomGallery({
  section,
}: Props) {
  const galleryImages =
    section?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map(
            (image, index) => (
              <div
                className="col-lg-3 col-md-4 col-6"
                key={index}
              >
                {/* <div>
                  <h3>
                    {image.title}
                  </h3>
                </div> */}

                <a
                  className="gal-inr"
                  href={
                    image.image || "#"
                  }
                  data-lightbox="Gallery 1"
                >
                  <Image
                    src={
                      image.image ||
                      "/images/no-image.png"
                    }
                    alt={`main-gallery${
                      index + 1
                    }`}
                    width={800}
                    height={600}
                  />

                  <ExpandIcon />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}