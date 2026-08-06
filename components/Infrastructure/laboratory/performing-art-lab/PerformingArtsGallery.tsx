import { ExpandIcon } from "lucide-react";
import Image from "next/image";

const PerformingArtsGallery = () => {
  const images = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1668158964320.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668158915671.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668158908260.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1668158893148.jpg",
  ];

  return (
    <div className="container main-gallery">
      <div className="w-100 mt-3 text-md-center title-bx1">
        <h3 className="one8">Performing Art Lab</h3>
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

export default PerformingArtsGallery;