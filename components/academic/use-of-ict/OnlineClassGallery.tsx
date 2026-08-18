import { Expand } from "lucide-react";
import Image from "next/image";

const OnlineClassGallery = () => {
  const galleryImages = [
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114986948.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114958828.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114943558.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114925581.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114912654.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114890989.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114859222.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114824015.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114774882.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114737816.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114638586.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114616406.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114592784.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114575802.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114556788.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114544773.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114519930.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114506340.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114482343.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114461974.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114449659.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114437093.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114390066.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114337506.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114353667.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114300071.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1646114281793.jpeg",
  ];

  return (
    <div className="banner-line">
      <div className="fontpage-text text-center pt-3">
        <h2>FRONTPAGE</h2>
      </div>

      <div className="pt-2">
        <Image
          className="fontpage-image"
          src="/images/image1.jpg"
          alt="image1"
          width={500}
          height={700}
          priority
        />
       
      </div>

      <div className="container main-gallery">
        <div className="w-100 mt-3 text-md-center title-bx1">
          <h3 className="one8">ONLINE CLASS</h3>
        </div>

        <div className="row mb-5">
          {galleryImages.map((image, index) => (
            <div className="col-md-3" key={`${image}-${index}`}>
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt={`Online class gallery image ${index + 1}`}
                  width={400}
                  height={300}
                />
                <Expand/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClassGallery;