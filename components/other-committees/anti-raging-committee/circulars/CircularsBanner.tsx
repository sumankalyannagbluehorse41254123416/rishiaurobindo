import Image from "next/image";

const CircularsBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Circulars"
        fill
        priority
      />

      <div className="container">
        <h3>Circulars</h3>
      </div>
    </section>
  );
};

export default CircularsBanner;