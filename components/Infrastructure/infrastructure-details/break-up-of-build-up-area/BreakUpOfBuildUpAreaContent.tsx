interface Subsection {
  title?: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Props {
  sections: Section[];
}

const BreakUpOfBuildUpAreaContent = ({
  sections,
}: Props) => {
  // ==========================================
  // SECTION INDEX
  // ==========================================

  const contentSection = sections[1];

  const roomNoSection = sections[2];

  const roomSizeSection = sections[3];

  const remainingAreaSection = sections[4];

  // ==========================================
  // ROOM DATA
  // ==========================================

  const roomNumbers =
    roomNoSection?.subsections || [];

  const roomSizes =
    roomSizeSection?.subsections || [];

  // ==========================================
  // REMAINING AREA DATA
  // ==========================================

  const remainingAreaItems =
    remainingAreaSection?.subsections || [];

  // ==========================================
  // NUMBER OF TABLE ROWS
  // ==========================================

  const totalRows = Math.max(
    roomNumbers.length,
    roomSizes.length
  );

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">

          {/* ==========================================
              CONTENT
          ========================================== */}

          <div>

            {/* SECTION 1 SHORT DESCRIPTION */}

            {contentSection?.shortDescription && (
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    contentSection.shortDescription,
                }}
              />
            )}

            {/* SECTION 1 TITLE */}

            {contentSection?.title && (
              <h3>
                {contentSection.title}
              </h3>
            )}

            {/* ==========================================
                ROOM TABLE
            ========================================== */}

            <figure className="table">
              <table>
                <thead>
                  <tr>
                    {/* SECTION 2 TITLE */}

                    <th>
                      {roomNoSection?.title}
                    </th>

                    {/* SECTION 3 TITLE */}

                    <th>
                      {roomSizeSection?.title}
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {Array.from(
                    { length: totalRows },
                    (_, index) => (
                      <tr key={index}>

                        {/* ROOM NUMBER */}

                        <th>
                          {
                            roomNumbers[index]
                              ?.title
                          }
                        </th>

                        {/* ROOM SIZE */}

                        <th>
                          {
                            roomSizes[index]
                              ?.title
                          }
                        </th>

                      </tr>
                    )
                  )}

                </tbody>
              </table>
            </figure>

            {/* ==========================================
                REMAINING AREA
            ========================================== */}

            {remainingAreaItems.map(
              (item, index) => (
                <p key={index}>
                  {item.title}
                </p>
              )
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default BreakUpOfBuildUpAreaContent;