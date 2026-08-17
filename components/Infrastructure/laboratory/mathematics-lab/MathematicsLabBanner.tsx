import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface MathematicsLabBannerProps {
  sectionData?: Section;
}

const MathematicsLabBanner = ({
  sectionData,
}: MathematicsLabBannerProps) => {
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
          "Mathematics Lab"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Mathematics Lab"}
        </h3>
      </div>
    </section>
  );
};

export default MathematicsLabBanner;