import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface BiologyLabBannerProps {
  sectionData?: Section;
}

const BiologyLabBanner = ({
  sectionData,
}: BiologyLabBannerProps) => {
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
          "Biology Lab"
        }
        width={1920}
        height={300}
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Biology Lab"}
        </h3>
      </div>
    </section>
  );
};

export default BiologyLabBanner;