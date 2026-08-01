import Image from "next/image";

const SeminarWebinarCommitteeBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Seminar Webinar Committee"
        fill
        priority
      />

      <div className="container">
        <h3>seminar-webinar-committee</h3>
      </div>
    </section>
  );
};

export default SeminarWebinarCommitteeBanner;