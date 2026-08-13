import Image from "next/image";

interface PlacementCellBannerProps {
  section?: {
    title?: string;
    image?: string;
  };
}

const PlacementCellBanner = ({
  section,
}: PlacementCellBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "page_title_bg"}
        fill
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
};

export default PlacementCellBanner;