import Image from "next/image";

interface CommitteeMembersBannerProps {
  sectionData: unknown;
}

const CommitteeMembersBanner = ({
  sectionData,
}: CommitteeMembersBannerProps) => {
  console.log(
    "COMMITTEE MEMBERS BANNER DATA:",
    sectionData
  );

  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Committee Members"
        fill
        priority
      />

      <div className="container">
        <h3>Committee Members</h3>
      </div>
    </section>
  );
};

export default CommitteeMembersBanner;