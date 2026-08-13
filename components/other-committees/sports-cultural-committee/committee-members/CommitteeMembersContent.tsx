interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface CommitteeMembersProps {
  sections: Section[];
}

const CommitteeMembersContent = ({
  sections,
}: CommitteeMembersProps) => {
  // ==========================================
  // TABLE SECTIONS
  // ==========================================

  // Index 16 = Sl. No
  // Index 17 = Name
  // Index 18 = Phone No
  // Index 19 = Mail Id

  const serialSection = sections[16];

  const nameSection = sections[17];

  const phoneSection = sections[18];

  const emailSection = sections[19];

  // Rows
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
                    {/* Sl. No */}
                    <td>
                      {
                        serialSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    {/* Name */}
                    <td>
                      {
                        nameSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    {/* Phone */}
                    <td>
                      {
                        phoneSection
                          ?.subsections?.[index]
                          ?.title
                      }
                    </td>

                    {/* Mail */}
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

export default CommitteeMembersContent;