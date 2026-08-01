import Image from "next/image";

const FacilitiesBanner = () => {
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
        <h3>Facilities</h3>
      </div>
    </section>
  );
};

export default FacilitiesBanner;