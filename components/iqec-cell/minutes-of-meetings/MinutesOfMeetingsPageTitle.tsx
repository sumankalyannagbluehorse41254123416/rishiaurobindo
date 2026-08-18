import Image from "next/image";

export default function MinutesOfMeetingsPageTitle() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="page_title_bg"
        width={1920}
        height={300}
        priority
      
      />

      <div className="container">
        <h3>Minutes of Meetings</h3>
      </div>
    </section>
  );
}