import Image from "next/image";

interface FacilitiesBannerProps {
  bannerImage?: string;
  bannerTitle?: string;
}

const FacilitiesBanner = ({
  bannerImage,
  bannerTitle,
}: FacilitiesBannerProps) => {
  const defaultImage = "https://www.rabedc.com/img/page_title_bg.jpg";
  const imageUrl = bannerImage || defaultImage;
  const title = bannerTitle || "Facilities";

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={imageUrl}
        alt={title}
        width={1920}
        height={400}
        priority
      />
      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
};

export default FacilitiesBanner;