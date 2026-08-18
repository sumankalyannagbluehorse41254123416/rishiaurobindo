import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface GardenBannerContentProps {
  sectionData?: Section;
}

const GardenBannerContent = ({
  sectionData,
}: GardenBannerContentProps) => {
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
          "Garden"
        }
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title || "Garden"}
        </h3>
      </div>
    </section>
  );
};

export default GardenBannerContent;