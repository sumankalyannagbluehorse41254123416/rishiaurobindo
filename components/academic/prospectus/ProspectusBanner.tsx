import Image from "next/image";

export default function ProspectusBanner() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="https://www.rabedc.com/img/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>Prospectus</h3>
      </div>
    </section>
  );
}