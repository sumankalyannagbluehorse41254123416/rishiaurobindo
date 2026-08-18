interface Subsection {
  title?: string;
  description?: string;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

interface Props {
  missionSection?: Section;
  visionSection?: Section;
}

const MissionVision = ({
  missionSection,
  visionSection,
}: Props) => {
  const missionItems =
    missionSection?.subsections || [];

  return (
    <div className="mission-banner mb-5">
      <div className="container pt-4">
        {/* Mission */}
        <div className="mission-border">
          <h3 className="mission-text">
            {missionSection?.title}
          </h3>

          {Array.from({
            length: Math.ceil(
              missionItems.length / 2
            ),
          }).map((_, rowIndex) => (
            <div
              className="row"
              key={rowIndex}
            >
              {missionItems
                .slice(
                  rowIndex * 2,
                  rowIndex * 2 + 2
                )
                .map((item, index) => (
                  <div
                    className="col-sm-6 col-md-6"
                    key={index}
                  >
                    <p>
                      <span className="px-1">
                        {item.title}
                      </span>

                      <span
                        dangerouslySetInnerHTML={{
                          __html:
                            item.description || "",
                        }}
                      />
                    </p>
                  </div>
                ))}
            </div>
          ))}
        </div>

        {/* Vision */}
        <div className="mission-border">
          <h3 className="mission-text-vision pt-1">
            {visionSection?.title}
          </h3>

          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    visionSection?.subsections?.[0]
                      ?.description || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;