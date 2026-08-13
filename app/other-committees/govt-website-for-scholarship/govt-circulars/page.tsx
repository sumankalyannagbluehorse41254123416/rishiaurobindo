import GovtCircularsContain from "@/components/other-committees/govt-website-for-scholarship/govt-circulars/GovtCircularsContain";

const sections = [
  {
    id: "16998dff-0ec7-47e2-94e0-ae03c4828bf2",
    title: "GOVT. CIRCULARS",
    image: "/images/page_title_bg.jpg",
  },
];

export default function GovtCirculars() {
  const section = sections[0];

  return (
    <GovtCircularsContain
      title={section.title}
      image={section.image}
    />
  );
}