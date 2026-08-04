"use client";

import Image from "next/image";

interface PageTitleProps {
  title?: string;
  image?: string;
}

export default function PageTitle({
  title = "Gallery",
  image = "/images/page_title_bg.jpg",
}: PageTitleProps) {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src={image}
        alt={title}
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
}