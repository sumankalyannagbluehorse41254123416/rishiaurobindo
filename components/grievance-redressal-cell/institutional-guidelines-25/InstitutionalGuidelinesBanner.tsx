import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface InstitutionalGuidelinesBannerProps {
  section?: Section;
}

const InstitutionalGuidelinesBanner = ({
  section,
}: InstitutionalGuidelinesBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "Institutional Guidelines"}
        fill
        priority
      />

      <div className="container">
        <h3>
          {section?.title || "Institutional Guidelines"}
        </h3>
      </div>
    </section>
  );
};

export default InstitutionalGuidelinesBanner;