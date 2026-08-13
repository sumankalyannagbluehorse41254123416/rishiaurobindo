import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface RedressReportBannerProps {
  sectionData?: Section;
}

const RedressReportBanner = ({
  sectionData,
}: RedressReportBannerProps) => {
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
          "Redress Report"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Redress Report"}
        </h3>
      </div>
    </section>
  );
};

export default RedressReportBanner;