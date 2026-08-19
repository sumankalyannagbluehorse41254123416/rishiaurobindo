import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
  shortDescription?: string;
  longDescription?: string;
  description?: string;
}

interface QuestionPaperBannerProps {
  sectionData?: Section;
}

const QuestionPaperBanner = ({
  sectionData,
}: QuestionPaperBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      {sectionData?.image && (
        <Image
          className="page_title_bg"
          src={sectionData.image}
          alt={sectionData.title || "B.Ed. Question Paper"}
          width={1920}
          height={400}
          priority
        />
      )}

      <div className="container">
        <h3>
          {sectionData?.title || "B.Ed. Question Paper"}
        </h3>
      </div>
    </section>
  );
};

export default QuestionPaperBanner;