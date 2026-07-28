import Image from "next/image";

const wallMagazineImages = [
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014361893.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014344889.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014329413.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014314653.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014300463.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014285351.jpeg",
  "https://wip.tezcommerce.com:3304/admin/module/25/1645014271380.jpeg",
];

export default function WallMagazine() {
  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div>
          <h4>WALL MAGAZINE</h4>
        </div>

        <div className="row gallery-broder">
          {wallMagazineImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 mt-2"
              key={`${image}-${index}`}
            >
              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image}
                  alt="gallery-img2"
                  width={400}
                  height={300}
                  className="img-fluid"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}