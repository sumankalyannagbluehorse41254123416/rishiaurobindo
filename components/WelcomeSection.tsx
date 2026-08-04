"use client";

import Image from "next/image";

interface WelcomeSectionProps {
  section?: {
    title?: string;
    image?: string;
    shortDescription?: string;
  };
}

export default function WelcomeSection({
  section,
}: WelcomeSectionProps) {
  if (!section) {
    return null;
  }

  return (
    <section className="banner_slider_wrap">
      <section className="features-box top_border">
        <div className="container">
          <div className="title_box">
            <h3>{section.title || ""}</h3>
            <p>.</p>
          </div>

          <div className="welcome_inner">
            {section.image && (
              <Image
                className="welcome_img"
                src={section.image}
                alt={section.title || "Welcome"}
                width={626}
                height={275}
                unoptimized
                // style={{
                //   width: "100%",
                //   height: "auto",
                // }}
              />
            )}

            <div
              className="welcome_details"
              dangerouslySetInnerHTML={{
                __html: section.shortDescription || "",
              }}
            />
          </div>
        </div>
      </section>
    </section>
  );
}

