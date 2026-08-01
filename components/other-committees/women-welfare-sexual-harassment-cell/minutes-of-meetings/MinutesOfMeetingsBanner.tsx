import Image from "next/image";

const MinutesOfMeetingsBanner = () => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Minutes of Meetings"
        fill
        priority
      />

      <div className="container">
        <h3>Minutes of Meetings</h3>
      </div>
    </section>
  );
};

export default MinutesOfMeetingsBanner;