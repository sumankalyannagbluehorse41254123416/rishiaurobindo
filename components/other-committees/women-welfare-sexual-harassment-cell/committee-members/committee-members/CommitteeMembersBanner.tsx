import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface CommitteeMembersBannerProps {
  sectionData?: Section;
}

const CommitteeMembersBanner = ({
  sectionData,
}: CommitteeMembersBannerProps) => {
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
          "Committee Members"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {sectionData?.title}
        </h3>
      </div>
    </section>
  );
};

export default CommitteeMembersBanner;