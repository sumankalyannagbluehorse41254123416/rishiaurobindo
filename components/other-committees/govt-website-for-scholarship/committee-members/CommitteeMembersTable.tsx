interface Subsection {
  title?: string;
}

interface TableSection {
  title?: string;
  subsections?: Subsection[];
}

interface CommitteeMembersTableProps {
  sections: TableSection[];
}

export default function CommitteeMembersTable({
  sections,
}: CommitteeMembersTableProps) {
  const slNo = sections[0];
  const name = sections[1];
  const phone = sections[2];
  const mail = sections[3];

  const rows = slNo?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive table-background">
          <div>
            <table>
              <thead>
                <tr>
                  <th>{slNo?.title}</th>
                  <th>{name?.title}</th>
                  <th>{phone?.title}</th>
                  <th>{mail?.title}</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((_, index: number) => (
                  <tr key={index}>
                    <td>{slNo?.subsections?.[index]?.title}</td>
                    <td>{name?.subsections?.[index]?.title}</td>
                    <td>{phone?.subsections?.[index]?.title}</td>
                    <td>{mail?.subsections?.[index]?.title}</td>
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