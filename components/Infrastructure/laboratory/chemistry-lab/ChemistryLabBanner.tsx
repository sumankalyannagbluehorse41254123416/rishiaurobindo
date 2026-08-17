import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface ChemistryLabBannerProps {
  sectionData?: Section;
}

const ChemistryLabBanner = ({
  sectionData,
}: ChemistryLabBannerProps) => {
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
          "Chemistry Lab"
        }
        width={1920}
        height={300}
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Chemistry Lab"}
        </h3>
      </div>
    </section>
  );
};

export default ChemistryLabBanner;