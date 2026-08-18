import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

interface PageTitleProps {
  section?: Section;
}

export default function PageTitle({
  section,
}: PageTitleProps) {
  return (
    <section className="page_title_wrap bottom_border">
      {section?.image && (
        <Image
          className="page_title_bg"
          src={section.image}
          alt={section.title || "Page Title"}
          fill
          priority
        />
      )}

      <div className="container">
        <h3>
          {section?.title || ""}
        </h3>
      </div>
    </section>
  );
}