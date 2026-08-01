import Image from "next/image";

const SportsCulturalCommitteeBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Sports Cultural Committee"
        fill
        priority
      />

      <div className="container">
        <h3>sports-cultural-committee</h3>
      </div>
    </section>
  );
};

export default SportsCulturalCommitteeBanner;