import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface IqacCommitteeMemberPageTitleProps {
  section?: Section;
}

export default function IqacCommitteeMemberPageTitle({
  section,
}: IqacCommitteeMemberPageTitleProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "page_title_bg"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title || ""}</h3>
      </div>
    </section>
  );
}