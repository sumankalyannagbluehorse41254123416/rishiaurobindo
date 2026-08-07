"use client";

import Image from "next/image";

interface Section {
  title?: string;
  image?: string;
}

interface Props {
  section?: Section;
}

export default function NationalInternationalDayCelebrationBanner({
  section,
}: Props) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={section?.image || "/images/page_title_bg.jpg"}
        alt={section?.title || "National & International Day Celebration"}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{section?.title}</h3>
      </div>
    </section>
  );
}