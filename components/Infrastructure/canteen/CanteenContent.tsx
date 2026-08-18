interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  short_description?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface CanteenContentProps {
  objectiveSection?: Section;
  highlightsSection?: Section;
  functionsSection?: Section;
}

const CanteenContent = ({
  objectiveSection,
  highlightsSection,
  functionsSection,
}: CanteenContentProps) => {
  // ==========================================
  // SHORT DESCRIPTION HELPER
  // ==========================================

  const getShortDescription = (
    section?: Section
  ) => {
    return (
      section?.shortDescription ||
      section?.short_description ||
      ""
    );
  };

  // ==========================================
  // SUBSECTIONS
  // ==========================================

  const objectiveSubsections =
    objectiveSection?.subsections || [];

  const functionsSubsections =
    functionsSection?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container">

        {/* =====================================
            MAIN TITLE
        ===================================== */}

        <div className="title_box">
          <h3>
            Canteen
          </h3>
        </div>


        {/* =====================================
            OBJECTIVE - SECTION INDEX 4
        ===================================== */}

        <div className="lan_info_inner">

          <div className="title_box2">
            <h3>
              {objectiveSection?.title ||
                "Objective"}
            </h3>
          </div>

          {/* Subsection 0 */}

          {objectiveSubsections[0]
            ?.description && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  objectiveSubsections[0]
                    .description || "",
              }}
            />
          )}

          {/* Subsection 1 */}

          {objectiveSubsections[1]
            ?.description && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  objectiveSubsections[1]
                    .description || "",
              }}
            />
          )}

          {/* Subsection 2 */}

          {objectiveSubsections[2]
            ?.description && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  objectiveSubsections[2]
                    .description || "",
              }}
            />
          )}
        </div>


        {/* =====================================
            HIGHLIGHTS - SECTION INDEX 5
        ===================================== */}

        <div className="lan_info_inner">

          <div className="title_box2">
            <h3>
              {highlightsSection?.title ||
                "Highlights of the Canteen"}
            </h3>
          </div>

          {getShortDescription(
            highlightsSection
          ) && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  getShortDescription(
                    highlightsSection
                  ),
              }}
            />
          )}
        </div>


        {/* =====================================
            FUNCTIONS - SECTION INDEX 6
        ===================================== */}

        <div className="lan_info_inner">

          <div className="title_box2">
            <h3>
              {functionsSection?.title ||
                "Functions of the Canteen"}
            </h3>
          </div>

          {/* Section short description */}

          {getShortDescription(
            functionsSection
          ) && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  getShortDescription(
                    functionsSection
                  ),
              }}
            />
          )}

          {/* Subsection 0 */}

          {functionsSubsections[0]
            ?.description && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  functionsSubsections[0]
                    .description || "",
              }}
            />
          )}

          {/* Subsection 1 */}

          {functionsSubsections[1]
            ?.description && (
            <div
              dangerouslySetInnerHTML={{
                __html:
                  functionsSubsections[1]
                    .description || "",
              }}
            />
          )}

        </div>

      </div>
    </section>
  );
};

export default CanteenContent;