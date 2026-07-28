"use client";

import Image from "next/image";

export default function HealthAwareness() {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        className="page_title_bg"
        src="/images/page_title_bg.jpg"
        alt="Health Awareness"
        width={1920}
        height={300}
        priority
      />

      <div className="container">
        <h3>Health Awareness</h3>
      </div>
    </section>
  );
}