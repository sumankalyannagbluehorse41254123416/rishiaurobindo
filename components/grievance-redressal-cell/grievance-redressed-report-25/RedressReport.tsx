"use client";
interface Subsection {
  title?: string;
  description?: string;
  image?: string;
  file?: string;
}

interface Section {
  title?: string;
  image?: string;
  subsections?: Subsection[];
}

interface RedressReportProps {
  section?: Section;
}

export default function RedressReport({
  section,
}: RedressReportProps) {
  const subsections = section?.subsections ?? [];

  return (
    <section className="land_info_wrap land-text-center">
      <h3>{section?.title}</h3>

      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>{subsections[0]?.title}</th>
              <th>{subsections[1]?.title}</th>
              <th>{subsections[2]?.title}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {subsections[0]?.description?.replace(/<[^>]*>/g, "")}
              </td>

              <td>
                {subsections[1]?.description?.replace(/<[^>]*>/g, "")}
              </td>

              <td>
                {subsections[2]?.file ? (
                  <a
                    href={subsections[2].file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-border"
                  >
                    Download
                  </a>
                ) : (
                  <span className="btn-border disabled">
                    Download
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}