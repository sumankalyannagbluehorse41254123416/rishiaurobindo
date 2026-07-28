import Image from "next/image";

const galleryImages = [
  "/images/1643897560723.jpg",
  "/images/1643897551181.jpg",
  "/images/1643897540183.jpg",
  "/images/1643897529390.jpg",
  "/images/1643897518383.jpg",
  "/images/1643897507963.jpg",
];

export default function AlumniGallery() {
  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div>
          <h4>ALUMNI PHOTOS &amp; VIDEOS</h4>
        </div>

        <div className="row">
          {galleryImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 mt-4"
              key={`${image}-${index}`}
            >
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`main-gallery${index + 1}`}
                  width={800}
                  height={600}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}