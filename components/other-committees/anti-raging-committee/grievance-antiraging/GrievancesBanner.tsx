import Image from "next/image";

const GrievancesBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Grievances"
        fill
        priority
      />

      <div className="container">
        <h3>Grievances</h3>
      </div>
    </section>
  );
};

export default GrievancesBanner;