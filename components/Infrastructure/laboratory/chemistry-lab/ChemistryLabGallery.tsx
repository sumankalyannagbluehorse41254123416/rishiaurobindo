import Image from "next/image";

const ChemistryLabGallery = () => {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-10.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-9.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-8.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-7.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-6.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-5.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-4.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-3.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-2.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/CHEMISTRY LAB-1.jpeg",
  ];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Chemistry Lab</h3>
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

export default ChemistryLabGallery;