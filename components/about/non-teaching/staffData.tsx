import Image from "next/image";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  subsection_sequence?: number;
}

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
  subsections?: Subsection[];
}

interface Props {
  section?: Section;
}

/**
 * Extract a field value from HTML description.
 *
 * Example:
 *
 * <p>
 *   <strong>Designation :&nbsp;</strong>GROUP-D STAFF
 *   <br>
 *   <strong>Contact :&nbsp;</strong>9883061297
 *   <br>
 *   <strong>Department :</strong>&nbsp;ACCOUNTS
 * </p>
 */
function extractField(
  html: string = "",
  field: string
): string {
  const regex = new RegExp(
    `<strong>\\s*${field}\\s*:?[^<]*</strong>\\s*([^<]*)`,
    "i"
  );

  const match = html.match(regex);

  if (!match?.[1]) {
    return "";
  }

  return match[1]
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#39;/gi, "'")
    .replace(/&quot;/gi, '"')
    .trim();
}

export default function StaffData({
  section,
}: Props) {
  const staffList = [...(section?.subsections || [])].sort(
    (a, b) =>
      (a.subsection_sequence || 0) -
      (b.subsection_sequence || 0)
  );

  console.log(
    "================ STAFF DATA COMPONENT ================"
  );

  console.log(
    "Staff Section:",
    section
  );

  console.log(
    "Staff Subsections:",
    staffList
  );

  console.log(
    "======================================================"
  );

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {staffList.map((staff, index) => {
            const description =
              staff.description || "";

            const designation = extractField(
              description,
              "Designation"
            );

            const contact = extractField(
              description,
              "Contact"
            );

            const department = extractField(
              description,
              "Department"
            );

            console.log(
              `STAFF ${index + 1}:`,
              {
                name: staff.title,
                image: staff.image,
                designation,
                contact,
                department,
              }
            );

            return (
              <div
                className="col-md-3"
                key={staff.id || index}
              >
                <div className="staff_block">
                  {staff.image ? (
                    <Image
                      className="staff_img"
                      src={staff.image}
                      alt={staff.title || "Staff"}
                      width={120}
                      height={120}
                    />
                  ) : (
                    <div className="staff_img" />
                  )}

                  <div className="staff_details">
                    <h5>
                      {staff.title || ""}
                    </h5>

                    <p>
                      <strong>
                        Designation :&nbsp;
                      </strong>

                      {designation}

                      <br />

                      <strong>
                        Contact :&nbsp;
                      </strong>

                      {contact}

                      {department && (
                        <>
                          <br />

                          <strong>
                            Department :&nbsp;
                          </strong>

                          {department}
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}