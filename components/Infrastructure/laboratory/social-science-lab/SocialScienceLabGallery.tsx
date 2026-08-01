import Image from "next/image";

const SocialScienceLabGallery = () => {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1668159379456.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668159372307.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668159365115.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668159357646.jpg",
  ];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Social Science Lab</h3>
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

export default SocialScienceLabGallery;