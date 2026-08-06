import { ExpandIcon } from "lucide-react";
import Image from "next/image";

const HealthPhysicalEducationLabGallery = () => {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1668165472084.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668165464689.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668165457839.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668165449640.jpeg",
  ];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Health &amp; Physical Education Lab</h3>
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
              <ExpandIcon/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthPhysicalEducationLabGallery;