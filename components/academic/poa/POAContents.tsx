interface SubSection {
  title?: string;
  description?: string;
  file?: string | null;
  file_url?: string | null;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface POAContentsProps {
  slSection?: Section;
  yearSection?: Section;
}

export default function POAContents({
  slSection,
  yearSection,
}: POAContentsProps) {
  const slNumbers = slSection?.subsections || [];
  const academicYears = yearSection?.subsections || [];

  // Academic Year অনুযায়ী rows তৈরি হবে
  const rows = academicYears.map((year, index) => {
    const slNo = slNumbers[index];

    return {
      slNo: slNo?.title || `${index + 1}.`,
      academicYear: year.title || "",
      file: year.file_url || year.file || "",
    };
  });

  return (
    <section className="land_info_wrap land-text-center">
      <div className="container">
        <div>
          <p></p>
        </div>

        <div>
          <p></p>
        </div>

        <div className="bd-border">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>{slSection?.title || "Sl. No"}</th>
                <th>{yearSection?.title || "Academic Year"}</th>
                <th>Download</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, index) => (
                <tr key={index}>
                  <td>{row.slNo}</td>

                  <td>{row.academicYear}</td>

                  <td>
                    <a
                      href={row.file || "#"}
                      target="_blank"
                      className="btn-border"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}