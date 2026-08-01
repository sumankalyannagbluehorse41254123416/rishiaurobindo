import Image from "next/image";

const WomenWelfareSexualHarassmentCellBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Women Welfare Sexual Harassment Cell"
        fill
        priority
      />

      <div className="container">
        <h3>WOMEN WELFARE SEXUAL HARASSMENT CELL</h3>
      </div>
    </section>
  );
};

export default WomenWelfareSexualHarassmentCellBanner;