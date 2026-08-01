import Image from "next/image";

const MinorityCellBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Minority Cell"
        fill
        priority
      />

      <div className="container">
        <h3>minority-cell</h3>
      </div>
    </section>
  );
};

export default MinorityCellBanner;