import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface LanguageLabBannerProps {
  sectionData?: Section;
}

const LanguageLabBanner = ({
  sectionData,
}: LanguageLabBannerProps) => {
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
          "Language Lab"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Language Lab"}
        </h3>
      </div>
    </section>
  );
};

export default LanguageLabBanner;