import Image from "next/image";

interface AchievementSection {
  title?: string;
  subsections?: {
    image?: string;
  }[];
}

interface AchievementProps {
  section?: AchievementSection;
}

export default function Achievement({
  section,
}: AchievementProps) {
  if (!section) {
    return null;
  }

  return (
    <section className="features-box features-box1">
      <div className="container">
        <div className="">
          <h3>{section.title || ""}</h3>
        </div>

        <div className="banner_slider_wrap achievement_slider_wrap">
          {section.subsections?.map((subsection, index) => {
            if (!subsection.image) return null;

            return (
              <Image
                key={index}
                src={subsection.image}
                alt={`${section.title || "Achievement"} ${index + 1}`}
                width={230}
                height={316}
                className="features-box2-img features-box2-img2 features-box2-img3"
                unoptimized
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

