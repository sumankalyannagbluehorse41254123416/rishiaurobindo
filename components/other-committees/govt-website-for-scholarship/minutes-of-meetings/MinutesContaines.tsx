interface MinutesContainesProps {
  section?: {
    title?: string;
    shortDescription?: string;
  };
}

export default function MinutesContaines({
  section,
}: MinutesContainesProps) {
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