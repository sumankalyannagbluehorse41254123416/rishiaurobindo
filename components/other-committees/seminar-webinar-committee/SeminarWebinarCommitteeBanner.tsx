import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface SeminarWebinarCommitteeBannerProps {
  section?: Section;
}

const SeminarWebinarCommitteeBanner = ({
  section,
}: SeminarWebinarCommitteeBannerProps) => {
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
          "Seminar Webinar Committee"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {section?.title ||
            "Seminar Webinar Committee"}
        </h3>
      </div>
    </section>
  );
};

export default SeminarWebinarCommitteeBanner;