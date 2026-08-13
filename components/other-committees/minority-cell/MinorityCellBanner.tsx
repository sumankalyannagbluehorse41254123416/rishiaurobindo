import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface MinorityCellBannerProps {
  sectionData?: Section;
}

const MinorityCellBanner = ({
  sectionData,
}: MinorityCellBannerProps) => {
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
          "Minority Cell"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Minority Cell"}
        </h3>
      </div>
    </section>
  );
};

export default MinorityCellBanner;