import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface TeachingLearningResourceCentreBannerProps {
  sectionData?: Section;
}

const TeachingLearningResourceCentreBanner = ({
  sectionData,
}: TeachingLearningResourceCentreBannerProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          sectionData?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={
          sectionData?.title ||
          "Teaching Learning Resource Centre"
        }
        width={1920}
        height={300}
      />

      <div className="container">
        <h3>
          {sectionData?.title ||
            "TEACHING LEARNING RESOURCE CENTRE FOR ARTS & WORK EXPERIENCE"}
        </h3>
      </div>
    </section>
  );
};

export default TeachingLearningResourceCentreBanner;