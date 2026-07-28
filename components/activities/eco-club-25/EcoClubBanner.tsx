import Image from "next/image";

export default function EcoClubBanner() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt=""
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>Eco Club</h3>
      </div>
    </section>
  );
}