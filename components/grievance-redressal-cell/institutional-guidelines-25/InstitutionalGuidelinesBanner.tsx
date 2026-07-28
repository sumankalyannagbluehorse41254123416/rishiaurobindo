import Image from "next/image";

const InstitutionalGuidelinesBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="page_title_bg"
        fill
        priority
      />

      <div className="container">
        <h3>Institutional Guidelines</h3>
      </div>
    </section>
  );
};

export default InstitutionalGuidelinesBanner;