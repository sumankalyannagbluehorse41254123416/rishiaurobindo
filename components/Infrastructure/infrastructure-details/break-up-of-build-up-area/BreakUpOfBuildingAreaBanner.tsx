import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface BreakUpOfBuildingAreaBannerProps {
  sectionData?: Section;
}

const BreakUpOfBuildingAreaBanner = ({
  sectionData,
}: BreakUpOfBuildingAreaBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={
          sectionData?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          sectionData?.title ||
          "BREAK-UP OF BUILD UP AREA"
        }
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "BREAK-UP OF BUILD UP AREA"}
        </h3>
      </div>
    </section>
  );
};

export default BreakUpOfBuildingAreaBanner;