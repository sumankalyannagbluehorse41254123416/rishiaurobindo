import Image from "next/image";

const GovtWebsiteForScholarshipBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src="https://www.rabedc.com/img/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>GOVT. WEBSITE FOR SCHOLARSHIP</h3>
      </div>
    </section>
  );
};

export default GovtWebsiteForScholarshipBanner;