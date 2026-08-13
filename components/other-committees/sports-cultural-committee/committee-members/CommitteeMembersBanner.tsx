import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface CommitteeMembersBannerProps {
  section?: Section;
}

const CommitteeMembersBanner = ({
  section,
}: CommitteeMembersBannerProps) => {
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
          "Committee Members"
        }
        fill
        priority
      />

      <div className="container">
        <h3>
          {section?.title}
        </h3>
      </div>
    </section>
  );
};

export default CommitteeMembersBanner;