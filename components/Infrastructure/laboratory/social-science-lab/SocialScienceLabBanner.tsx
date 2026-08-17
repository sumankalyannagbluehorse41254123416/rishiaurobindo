import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface SocialScienceLabBannerProps {
  sectionData?: Section;
}

const SocialScienceLabBanner = ({
  sectionData,
}: SocialScienceLabBannerProps) => {
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
          "Social Science Lab"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Social Science Lab"}
        </h3>
      </div>
    </section>
  );
};

export default SocialScienceLabBanner;