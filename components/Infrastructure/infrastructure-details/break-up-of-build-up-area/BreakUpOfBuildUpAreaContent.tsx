interface Subsection {
  title?: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Props {
  sections: Section[];
}

const stripHtml = (html?: string) => {
  if (!html) return "";
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

const BreakUpOfBuildUpAreaContent = ({ sections }: Props) => {
  // ==========================================
  // SECTION INDEX
  // ==========================================
  const contentSection = sections[1];
  const roomNoSection = sections[2];
  const roomSizeSection = sections[3];
  const remainingAreaSection = sections[4];

  // ==========================================
  // ROOM DATA
  // ==========================================
  const roomNumbers = roomNoSection?.subsections || [];
  const roomSizes = roomSizeSection?.subsections || [];
  const remainingAreaItems = remainingAreaSection?.subsections || [];

  // ==========================================
  // NUMBER OF TABLE ROWS
  // ==========================================
  const totalRows = Math.max(roomNumbers.length, roomSizes.length);

  const headingText = stripHtml(contentSection?.title) || "Class Rooms";
  const headerSubText =
    stripHtml(contentSection?.shortDescription) ||
    stripHtml(contentSection?.description) ||
    "";
  const roomNoHeader = stripHtml(roomNoSection?.title) || "Room No";
  const roomSizeHeader = stripHtml(roomSizeSection?.title) || "Room Size(Sqm.)";

  return (
    <section className="py-5 bg-white">
      <div className="container">

        {/* TOP DESCRIPTION / HEADING ANNOUNCEMENT */}
        {headerSubText && (
          <div className="text-center mb-4">
            <h5
              className="fw-bold text-dark text-uppercase px-3"
              style={{ fontSize: "14px", letterSpacing: "0.5px", lineHeight: "1.6" }}
            >
              {headerSubText}
            </h5>
          </div>
        )}

        {/* MAIN TITLE (Class Rooms) */}
        <div className="text-center mb-4">
          <h2
            className="fw-bold text-dark mb-0"
            style={{ fontSize: "2.2rem", color: "#222" }}
          >
            {headingText}
          </h2>
        </div>

        {/* CLEAN MINIMAL TABLE */}
        <div className="d-flex justify-content-center">
          <div style={{ width: "100%", maxWidth: "320px" }}>
            <table
              className="w-100"
              style={{
                borderCollapse: "collapse",
                fontFamily: "inherit",
              }}
            >
              <thead>
                <tr style={{ borderBottom: "2px solid #222" }}>
                  <th
                    style={{
                      padding: "10px 12px",
                      textAlign: "left",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    {roomNoHeader}
                  </th>
                  <th
                    style={{
                      padding: "10px 12px",
                      textAlign: "right",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#111",
                      border: "none",
                      background: "transparent",
                    }}
                  >
                    {roomSizeHeader}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: totalRows }, (_, index) => {
                  const roomNum = stripHtml(roomNumbers[index]?.title) || `${index + 1}`;
                  const roomSz = stripHtml(roomSizes[index]?.title) || "";

                  return (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #e2e8f0",
                      }}
                    >
                      <td
                        style={{
                          padding: "12px 12px",
                          textAlign: "left",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#333",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        {roomNum}
                      </td>
                      <td
                        style={{
                          padding: "12px 12px",
                          textAlign: "right",
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#333",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        {roomSz}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* REMAINING AREA ITEMS */}
        {/* REMAINING AREA ITEMS */}
        {remainingAreaItems.length > 0 && (
          <div className="d-flex justify-content-center mt-4">
            <div
              style={{
                width: "100%",
                maxWidth: "700px",
              }}
            >
              {remainingAreaItems.map((item, index) => {
                const text = stripHtml(item.title);

                const match = text.match(/^(.*?)(\d+(?:\.\d+)?)\s*$/);

                const label = match?.[1]?.trim() || text;
                const value = match?.[2] || "";

                const isLast = index === remainingAreaItems.length - 1;

                return (
                  <div
                    key={index}
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      borderBottom: "1px solid #e2e8f0",
                      padding: "10px 12px",
                      fontSize: "15px",
                      fontWeight: isLast ? "700" : "400",
                      color: "#333",
                      gap: "20px",
                    }}
                  >
                    <span style={{ textAlign: "left" }}>
                      {label}
                    </span>

                    <span
                      style={{
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default BreakUpOfBuildUpAreaContent;