import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface SportsCulturalCommitteeBannerProps {
  section?: Section;
}

const SportsCulturalCommitteeBanner = ({
  section,
}: SportsCulturalCommitteeBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "/images/page_title_bg.jpg"
        }
        alt={
          section?.title ||
          "Sports Cultural Committee"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {section?.title ||
            "Sports Cultural Committee"}
        </h3>
      </div>
    </section>
  );
};

export default SportsCulturalCommitteeBanner;