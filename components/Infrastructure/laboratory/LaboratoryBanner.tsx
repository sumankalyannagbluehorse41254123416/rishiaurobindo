import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface LaboratoryBannerProps {
  sectionData?: Section;
}

const LaboratoryBanner = ({
  sectionData,
}: LaboratoryBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          sectionData?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={
          sectionData?.title ||
          "Laboratory"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Laboratory"}
        </h3>
      </div>
    </section>
  );
};

export default LaboratoryBanner;