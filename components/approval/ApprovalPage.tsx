
import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface ApprovalPageProps {
  section?: Section;
}

export default function ApprovalPage({
  section,
}: ApprovalPageProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={
          section?.image?.trim() ||
          "/images/page_title_bg.jpg"
        }
        alt={section?.title || "Approval"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title?.trim() || "Approval"}</h3>
      </div>
    </section>
  );
}

