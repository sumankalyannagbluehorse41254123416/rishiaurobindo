import Image from "next/image";

const galleryImages = [
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313642167.jpeg",
    title: "",
  },
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313623503.jpeg",
    title: "",
  },
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313584793.jpeg",
    title: "",
  },
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313546825.jpeg",
    title: "",
  },
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313492932.jpeg",
    title: "pp",
  },
  {
    src: "https://wip.tezcommerce.com:3304/admin/module/25/1670313473234.jpeg",
    title: "dd",
  },
];

export default function IctEnabledClassroomGallery() {
  return (
    <section className="land_info_wrap">
      <div className="container main-gallery">
        <div className="row">
          {galleryImages.map((image, index) => (
            <div
              className="col-lg-3 col-md-4 col-6"
              key={image.src}
            >
              <div>
                <h3>{image.title}</h3>
              </div>

              <a
                className="gal-inr"
                href={image.src}
                data-lightbox="Gallery 1"
              >
                <Image
                  src={image.src}
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