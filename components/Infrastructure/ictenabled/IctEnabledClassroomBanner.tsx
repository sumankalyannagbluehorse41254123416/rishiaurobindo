import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface Props {
  section?: Section;
}

export default function IctEnabledClassroomBanner({
  section,
}: Props) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image ||
          "https://www.rabedc.com/img/page_title_bg.jpg"
        }
        alt={
          section?.title ||
          "ICT ENABLED CLASSROOM"
        }
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>
          {section?.title ||
            "ICT ENABLED CLASSROOM"}
        </h3>
      </div>
    </section>
  );
}