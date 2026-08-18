interface Section {
  shortDescription?: string;
}

interface Props {
  section?: Section;
}

export default function Administration({
  section,
}: Props) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div
            className="text-center"
            dangerouslySetInnerHTML={{
              __html:
                section?.shortDescription || "",
            }}
          />
        </div>
      </div>
    </section>
  );
}