import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface CircularsBannerProps {
  sectionData?: Section;
}

const CircularsBanner = ({
  sectionData,
}: CircularsBannerProps) => {
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
          "Circulars"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title || "Circulars"}
        </h3>
      </div>
    </section>
  );
};

export default CircularsBanner;