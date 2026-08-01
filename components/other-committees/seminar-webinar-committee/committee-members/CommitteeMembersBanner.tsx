import Image from "next/image";

const CommitteeMembersBanner = () => {
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