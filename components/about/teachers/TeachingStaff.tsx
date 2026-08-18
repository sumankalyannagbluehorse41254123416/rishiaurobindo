import Image from "next/image";

interface Subsection {
  id?: number;
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
  subsection_sequence?: number;
}

interface Section {
  title?: string;
  shortDescription?: string;
  subsections?: Subsection[];
}

interface TeachingStaffProps {
  section?: Section;
}

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
};

const getStaffDetails = (description?: string) => {
  const text = stripHtml(description);

  const designationMatch = text.match(
    /Designation\s*:\s*(.*?)(?=Contact\s*:|Department\s*:|$)/i
  );

  const contactMatch = text.match(
    /Contact\s*:\s*(.*?)(?=Department\s*:|$)/i
  );

  const departmentMatch = text.match(
    /Department\s*:\s*(.*)$/i
  );

  return {
    designation: designationMatch?.[1]?.trim() || "",
    contact: contactMatch?.[1]?.trim() || "",
    department: departmentMatch?.[1]?.trim() || "",
  };
};

export default function TeachingStaff({
  section,
}: TeachingStaffProps) {
  console.log("TEACHING STAFF SECTION:", section);
  console.log("TEACHING STAFF SUBSECTIONS:", section?.subsections);

  const staffData = section?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="main-gallery">
          <div className="row mb-5">
            {staffData.map((staff, index) => {
              const details = getStaffDetails(staff.description);

              return (
                <div className="col-md-3" key={staff.id || index}>
                  <div className="staff_block">
                    {staff.image ? (
                      <Image
                        className="staff_img"
                        src={staff.image}
                        alt={staff.title || "Teaching Staff"}
                        width={300}
                        height={300}
                      />
                    ) : (
                      <div className="staff_img" />
                    )}

                    <div className="staff_details">
                      <h5>{staff.title || ""}</h5>

                      <p>
                        <strong>Designation :&nbsp;</strong>
                        {details.designation}
                        <br />

                        <strong>Contact :&nbsp;</strong>
                        {details.contact}
                        <br />

                        <strong>Department :</strong>&nbsp;
                        {details.department}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}