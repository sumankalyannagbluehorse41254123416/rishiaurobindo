import Image from "next/image";

export default function PageTitle() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={300}
      />

      <div className="container">
        <h3>About Us</h3>
      </div>
    </section>
  );
}