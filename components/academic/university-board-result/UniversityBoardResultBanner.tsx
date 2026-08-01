import Image from "next/image";

const UniversityBoardResultBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="https://www.rabedc.com/img/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={400}
        priority
      />

      <div className="container">
        <h3>University / Board Result</h3>
      </div>
    </section>
  );
};

export default UniversityBoardResultBanner;