import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface BuildingBannerProps {
  sectionData?: Section;
}

const BuildingBanner = ({
  sectionData,
}: BuildingBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={
          sectionData?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          sectionData?.title ||
          "Building"
        }
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>
          {sectionData?.title}
        </h3>
      </div>
    </section>
  );
};

export default BuildingBanner;