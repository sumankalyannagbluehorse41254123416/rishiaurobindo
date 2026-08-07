interface Props {
  section?: {
    title?: string;
    shortDescription?: string;
  };
}

export default function AntiDrugAwareness({
  section,
}: Props) {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        {section?.title && <h3>{section.title}</h3>}
      </div>

      <div className="container main-gallery">
        <div className="row">
          <div
            className="col-12"
            style={{
              textAlign: "center",
              padding: "30px 0",
            }}
          >
            {section?.shortDescription && (
              <p
                dangerouslySetInnerHTML={{
                  __html: section.shortDescription.replace(
                    /<\/?h3>/gi,
                    ""
                  ),
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}