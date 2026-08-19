interface SubSection {
  title?: string;
  description?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;

  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];

  [key: string]: unknown;
}

interface PreviousInternalQuestionPaperProps {
  bedAcademicSection?: Section;
  bedSemesterSection?: Section;
  bedYearSection?: Section;

  deledAcademicSection?: Section;
  deledSemesterSection?: Section;
  deledYearSection?: Section;
}

const stripHtml = (value?: string) => {
  if (!value) return "";

  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

const getSubsections = (
  section?: Section
): SubSection[] =>
  section?.subsections ||
  section?.subSections ||
  section?.subsection ||
  section?.subSectionData ||
  section?.pageItemdataWithSubsection ||
  [];

export default function PreviousInternalQuestionPaper({
  bedAcademicSection,
  bedSemesterSection,
  bedYearSection,
  deledAcademicSection,
  deledSemesterSection,
  deledYearSection,
}: PreviousInternalQuestionPaperProps) {
  const bedAcademic =
    getSubsections(
      bedAcademicSection
    );

  const bedSemester =
    getSubsections(
      bedSemesterSection
    );

  const bedYear =
    getSubsections(
      bedYearSection
    );

  const deledAcademic =
    getSubsections(
      deledAcademicSection
    );

  const deledSemester =
    getSubsections(
      deledSemesterSection
    );

  const deledYear =
    getSubsections(
      deledYearSection
    );

  return (
    <section className="land_info_wrap land-text-center">
      <div className="container">
        <div>
          <p></p>
        </div>

        {/* ==========================
            B.ED
        ========================== */}

        <div className="bd-border">
          <div className="bd-border-text">
            <h2>B.ED</h2>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  {bedAcademicSection?.title}
                </th>

                <th>
                  {bedSemesterSection?.title}
                </th>

                <th>
                  {bedYearSection?.title}
                </th>

                <th>
                  Previous Internal
                  Question Paper
                </th>

                <th>Result</th>
              </tr>
            </thead>

            <tbody>
              {bedAcademic.map(
                (_, index) => (
                  <tr key={index}>
                    <td>
                      {stripHtml(
                        bedAcademic[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      {stripHtml(
                        bedSemester[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      {stripHtml(
                        bedYear[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      <a
                        href=""
                        target="_blank"
                        className="btn-border"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>

                    <td>
                      <a
                        href=""
                        target="_blank"
                        className="btn-border"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        {/* ==========================
            D.EL.ED
        ========================== */}

        <div className="bd-border mt-5">
          <div className="bd-border-text">
            <h2>D.EL.ED</h2>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>
                  {deledAcademicSection?.title}
                </th>

                <th>
                  {deledSemesterSection?.title}
                </th>

                <th>
                  {deledYearSection?.title}
                </th>

                <th>
                  Previous Internal
                  Question Paper
                </th>

                <th>Result</th>
              </tr>
            </thead>

            <tbody>
              {deledAcademic.map(
                (_, index) => (
                  <tr key={index}>
                    <td>
                      {stripHtml(
                        deledAcademic[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      {stripHtml(
                        deledSemester[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      {stripHtml(
                        deledYear[
                          index
                        ]?.title
                      )}
                    </td>

                    <td>
                      <a
                        href=""
                        target="_blank"
                        className="btn-border"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>

                    <td>
                      <a
                        href=""
                        target="_blank"
                        className="btn-border"
                        rel="noopener noreferrer"
                      >
                        Download
                      </a>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}