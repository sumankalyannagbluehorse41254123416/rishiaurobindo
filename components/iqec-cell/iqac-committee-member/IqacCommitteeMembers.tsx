interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  longDescription?: string;
  image?: string;
  subsection_sequence?: number;
}

interface Section {
  id?: number;
  title?: string;
  shortDescription?: string;
  longDescription?: string;
  image?: string;
  section_sequence?: number;
  subsections?: Subsection[];
}

interface IqacCommitteeMembersProps {
  sections: Section[];
}

export default function IqacCommitteeMembers({
  sections,
}: IqacCommitteeMembersProps) {
  // -------------------------------
  // 4 TABLE COLUMNS
  // -------------------------------

  const slNoSection = sections[0];
  const nameSection = sections[1];
  const designationSection = sections[2];
  const memberSection = sections[3];

  // -------------------------------
  // TOTAL ROWS
  // -------------------------------

  const maxRows = Math.max(
    slNoSection?.subsections?.length ?? 0,
    nameSection?.subsections?.length ?? 0,
    designationSection?.subsections?.length ?? 0,
    memberSection?.subsections?.length ?? 0
  );

  console.log("========== IQAC TABLE COMPONENT ==========");
  console.log("Sl No:", slNoSection);
  console.log("Name:", nameSection);
  console.log("Designation:", designationSection);
  console.log("Member:", memberSection);
  console.log("Total Rows:", maxRows);

  return (
    <section className="land_info_wrap table-background">
      <div className="container">
        <div className="lan_info_inner">
          <div>
            <table>
              <thead>
                <tr>
                  {/* SECTION INDEX 0 */}
                  <th>{slNoSection?.title?.trim()}</th>

                  {/* SECTION INDEX 1 */}
                  <th>{nameSection?.title?.trim()}</th>

                  {/* SECTION INDEX 2 */}
                  <th>{designationSection?.title?.trim()}</th>

                  {/* SECTION INDEX 3 */}
                  <th>{memberSection?.title?.trim()}</th>
                </tr>
              </thead>

              <tbody>
                {Array.from({ length: maxRows }).map((_, index) => {
                  const slNo =
                    slNoSection?.subsections?.[index];

                  const name =
                    nameSection?.subsections?.[index];

                  const designation =
                    designationSection?.subsections?.[index];

                  const member =
                    memberSection?.subsections?.[index];

                  console.log(`ROW ${index + 1}:`, {
                    slNo: slNo?.title,
                    name: name?.title,
                    designation: designation?.title,
                    member: member?.title,
                  });

                  return (
                    <tr key={index}>
                      {/* SECTION 0 -> SUBSECTION TITLE */}
                      <td>
                        {slNo?.title?.trim() ||
                          `${index + 1}.`}
                      </td>

                      {/* SECTION 1 -> SUBSECTION TITLE */}
                      <td>
                        {name?.title?.trim()}
                      </td>

                      {/* SECTION 2 -> SUBSECTION TITLE */}
                      <td>
                        {designation?.title?.trim()}
                      </td>

                      {/* SECTION 3 -> SUBSECTION TITLE */}
                      <td>
                        {member?.title?.trim()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}