import Image from "next/image";

const GardenGallery = () => {
  const galleryImages = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1668168212394.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668168092669.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668168086449.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668168078957.jpeg",
  ];

  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((image, index) => (
            <div className="col-lg-3 col-md-4 col-6" key={index}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`main-gallery${index + 1}`}
                  width={400}
                  height={300}
                  className="w-100"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GardenGallery;