import Image from "next/image";

const AntiRagingCommitteeBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Anti Raging Committee"
        fill
        priority
      />

      <div className="container">
        <h3>Anti Raging Committee</h3>
      </div>
    </section>
  );
};

export default AntiRagingCommitteeBanner;