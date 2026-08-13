import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface WomenWelfareSexualHarassmentCellBannerProps {
  sectionData?: Section;
}

const WomenWelfareSexualHarassmentCellBanner = ({
  sectionData,
}: WomenWelfareSexualHarassmentCellBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          sectionData?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          sectionData?.title ||
          "Women Welfare Sexual Harassment Cell"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Women Welfare Sexual Harassment Cell"}
        </h3>
      </div>
    </section>
  );
};

export default WomenWelfareSexualHarassmentCellBanner;