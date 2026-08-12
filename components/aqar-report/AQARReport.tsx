
interface Section {
  title?: string;
  shortDescription?: string;
}

interface AQARReportProps {
  section?: Section;
}

function stripHtml(html: string = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

export default function AQARReport({ section }: AQARReportProps) {
  return (
    <div className="container">
      <div className="text-center py-5">
        <h3>{section?.title || ""}</h3>

        <p>{stripHtml(section?.shortDescription || "")}</p>
      </div>
    </div>
  );
}

