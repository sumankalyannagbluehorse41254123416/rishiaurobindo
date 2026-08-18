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

interface GardenGalleryProps {
  sectionData?: Section;
}

const GardenGallery = ({
  sectionData,
}: GardenGalleryProps) => {
  const galleryImages =
    sectionData?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((item, index) => {
            if (!item.image) {
              return null;
            }

            return (
              <div
                className="col-lg-3 col-md-4 col-6"
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
                      `Garden Image ${index + 1}`
                    }
                    width={400}
                    height={300}
                    className="w-100"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GardenGallery;