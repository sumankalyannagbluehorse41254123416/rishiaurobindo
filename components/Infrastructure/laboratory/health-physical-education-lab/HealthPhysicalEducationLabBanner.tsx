import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface HealthPhysicalEducationLabBannerProps {
  sectionData?: Section;
}

const HealthPhysicalEducationLabBanner = ({
  sectionData,
}: HealthPhysicalEducationLabBannerProps) => {
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
          "Health Physical Education Lab"
        }
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Health Physical Education Lab"}
        </h3>
      </div>
    </section>
  );
};

export default HealthPhysicalEducationLabBanner;