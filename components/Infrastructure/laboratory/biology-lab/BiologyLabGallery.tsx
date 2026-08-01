import Image from "next/image";

const BiologyLabGallery = () => {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1668161266738.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668161259363.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668161252752.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668161243083.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668161236320.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/BIOLOGY LAB.jpeg",
  ];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Biology Lab</h3>
      </div>

      <div className="row mb-5">
        {images.map((image, index) => (
          <div className="col-md-3" key={index}>
            <a
              className="gal-inr"
              href={image}
              data-lightbox="Gallery 1"
            >
              <Image
                src={image}
                alt="main-gallery2"
                width={400}
                height={300}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BiologyLabGallery;