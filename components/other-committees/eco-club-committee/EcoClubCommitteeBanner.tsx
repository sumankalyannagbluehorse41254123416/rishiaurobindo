import Image from "next/image";

const EcoClubCommitteeBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Eco Club Committee"
        fill
        priority
      />

      <div className="container">
        <h3>ECO CLUB COMMITTEE</h3>
      </div>
    </section>
  );
};

export default EcoClubCommitteeBanner;