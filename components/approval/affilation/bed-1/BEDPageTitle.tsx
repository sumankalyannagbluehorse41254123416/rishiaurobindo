import Image from "next/image";

export default function BEDPageTitle() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="B.Ed"
        fill
        priority
      />

      <div className="container">
        <h3>B.ED</h3>
      </div>
    </section>
  );
}