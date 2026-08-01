import Image from "next/image";

const OfficeRoom1Banner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src="/images/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>OFFICE ROOM – 1</h3>
      </div>
    </section>
  );
};

export default OfficeRoom1Banner;