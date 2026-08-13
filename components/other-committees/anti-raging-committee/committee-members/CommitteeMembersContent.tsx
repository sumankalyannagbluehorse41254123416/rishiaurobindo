interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface Props {
  sections: Section[];
}

const CommitteeMembers = ({
  sections,
}: Props) => {
  // ==========================================
  // TABLE SECTIONS
  // ==========================================

  const serialSection = sections[16];

  const nameSection = sections[17];

  const phoneSection = sections[18];

  const emailSection = sections[19];

  // ==========================================
  // ROWS
  // ==========================================

  const rows =
    serialSection?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive table-background">
          <div>
            <table>
              <thead>
                <tr>
                  <th>
                    {serialSection?.title}
                  </th>

                  <th>
                    {nameSection?.title}
                  </th>

                  <th>
                    {phoneSection?.title}
                  </th>

                  <th>
                    {emailSection?.title}
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((_, index) => (
                  <tr key={index}>
                    <td>
                      {
                        serialSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    <td>
                      {
                        nameSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    <td>
                      {
                        phoneSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    <td>
                      {
                        emailSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembers;