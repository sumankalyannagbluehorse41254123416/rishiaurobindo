
import Image from "next/image";

export default function JournalsPage() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="page_title_bg"
        fill
        priority
      />

      <div className="container">
        <h3>Journals</h3>
      </div>
    </section>
  );
}

