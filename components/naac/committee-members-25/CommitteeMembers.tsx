
interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  link?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
  [key: string]: unknown;
}

interface CommitteeMembersProps {
  sections: Section[];
}

export default function CommitteeMembers({
  sections,
}: CommitteeMembersProps) {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive ">
          <div>
            <table>
              <tbody>
                <tr>
                  <th>
                    {sections[2]?.title || "Sl. No"}
                  </th>

                  <th>
                    {sections[3]?.title || "Name"}
                  </th>

                  <th>
                    {sections[4]?.title || "Designation"}
                  </th>

                  <th>
                    {sections[5]?.title || "Contact No"}
                  </th>

                  <th>
                    {sections[6]?.title || "E-Mail ID"}
                  </th>
                </tr>

                {Array.from({
                  length: Math.max(
                    sections[2]?.subsections?.length || 0,
                    sections[3]?.subsections?.length || 0,
                    sections[4]?.subsections?.length || 0,
                    sections[5]?.subsections?.length || 0,
                    sections[6]?.subsections?.length || 0
                  ),
                }).map((_, index) => (
                  <tr key={index}>
                    <td>
                      {sections[2]?.subsections?.[index]
                        ?.title || `${index + 1}.`}
                    </td>

                    <td>
                      {sections[3]?.subsections?.[index]
                        ?.title || ""}
                    </td>

                    <td>
                      {sections[4]?.subsections?.[index]
                        ?.title || ""}
                    </td>

                    <td>
                      {sections[5]?.subsections?.[index]
                        ?.title || ""}
                    </td>

                    <td>
                      {sections[6]?.subsections?.[index]
                        ?.title || ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}

