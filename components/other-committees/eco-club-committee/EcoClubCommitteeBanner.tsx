import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface EcoClubCommitteeBannerProps {
  sectionData?: Section;
}

const EcoClubCommitteeBanner = ({
  sectionData,
}: EcoClubCommitteeBannerProps) => {
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
          "Eco Club Committee"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "Eco Club Committee"}
        </h3>
      </div>
    </section>
  );
};

export default EcoClubCommitteeBanner;