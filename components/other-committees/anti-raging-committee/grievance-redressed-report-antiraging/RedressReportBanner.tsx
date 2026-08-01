import Image from "next/image";

const RedressReportBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Redress Report"
        fill
        priority
      />

      <div className="container">
        <h3>Redress Report</h3>
      </div>
    </section>
  );
};

export default RedressReportBanner;