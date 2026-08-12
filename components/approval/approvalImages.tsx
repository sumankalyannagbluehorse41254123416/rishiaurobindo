"use client";

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

interface ApprovalGalleryProps {
  section?: Section;
}

export default function ApprovalGallery({
  section,
}: ApprovalGalleryProps) {
  const images = section?.subsections ?? [];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">
          {section?.title?.trim() || "Approval"}
        </h3>
      </div>

      <div className="row mb-5">
        {images.map((item, index) => {
          const image = item.image?.trim();

          if (!image) return null;

          return (
            <div className="col-md-3" key={item.title || index}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={item.title || "Approval"}
                  width={400}
                  height={300}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

