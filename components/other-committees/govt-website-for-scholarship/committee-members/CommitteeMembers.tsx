import Image from "next/image";

interface CommitteeMembersBannerProps {
  section?: {
    title?: string;
    image?: string;
  };
}

export default function CommitteeMembersBanner({
  section,
}: CommitteeMembersBannerProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "page_title_bg"}
        fill
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
}