import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface GrievancesBannerProps {
  sectionData?: Section;
}

const GrievancesBanner = ({
  sectionData,
}: GrievancesBannerProps) => {
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
          "Grievances"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title || "Grievances"}
        </h3>
      </div>
    </section>
  );
};

export default GrievancesBanner;