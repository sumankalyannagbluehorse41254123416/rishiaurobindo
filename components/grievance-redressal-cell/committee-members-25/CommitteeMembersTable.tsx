interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsection?: Subsection[];
  subsections?: Subsection[];
}

interface CommitteeMembersTableProps {
  sections: Section[];
}

export default function CommitteeMembersTable({
  sections,
}: CommitteeMembersTableProps) {
  /*
   * Header:
   * index 1 = Sl. No
   * index 2 = Name
   * index 3 = Designation
   * index 4 = Contact No
   * index 5 = E-Mail ID
   */

  const headers = [
    sections[1]?.title || "Sl. No",
    sections[2]?.title || "Name",
    sections[3]?.title || "Designation",
    sections[4]?.title || "Contact No",
    sections[5]?.title || "E-Mail ID",
  ];

  /*
   * Rows:
   *
   * sections[1].subsection[index] = Sl. No
   * sections[2].subsection[index] = Name
   * sections[3].subsection[index] = Designation
   * sections[4].subsection[index] = Contact No
   * sections[5].subsection[index] = E-Mail ID
   */

  const rows =
    sections[1]?.subsection ||
    sections[1]?.subsections ||
    [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive">
          <div>
            <table>
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index}>
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {rows.map((_, index) => (
                  <tr key={index}>
                    <td>
                      {sections[1]?.subsection?.[index]?.title ||
                        sections[1]?.subsections?.[index]?.title ||
                        `${index + 1}.`}
                    </td>

                    <td>
                      {sections[2]?.subsection?.[index]?.title ||
                        sections[2]?.subsections?.[index]?.title ||
                        ""}
                    </td>

                    <td>
                      {sections[3]?.subsection?.[index]?.title ||
                        sections[3]?.subsections?.[index]?.title ||
                        ""}
                    </td>

                    <td>
                      {sections[4]?.subsection?.[index]?.title ||
                        sections[4]?.subsections?.[index]?.title ||
                        ""}
                    </td>

                    <td>
                      {sections[5]?.subsection?.[index]?.title ||
                        sections[5]?.subsections?.[index]?.title ||
                        ""}
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
}