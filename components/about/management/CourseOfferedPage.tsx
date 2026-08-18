interface Section {
  title?: string;
  shortDescription?: string;
}

interface Props {
  section?: Section;
}

export default function CourseOfferedPage({
  section,
}: Props) {
  return (
    <div className="container">
      <div className="text-center py-5">
        <h3>{section?.title}</h3>

        <div
          dangerouslySetInnerHTML={{
            __html:
              section?.shortDescription || "",
          }}
        />
      </div>
    </div>
  );
}