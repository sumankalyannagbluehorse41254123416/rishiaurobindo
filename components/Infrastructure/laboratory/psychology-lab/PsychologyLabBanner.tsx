import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface PsychologyLabBannerProps {
  sectionData?: Section;
}

const PsychologyLabBanner = ({
  sectionData,
}: PsychologyLabBannerProps) => {
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
          "Psychology Lab"
        }
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Psychology Lab"}
        </h3>
      </div>
    </section>
  );
};

export default PsychologyLabBanner;