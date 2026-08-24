"use client";

import { useMemo } from "react";

interface SubSection {
  title?: string;
  description?: string;
  image?: string;
  file?: string;
  file_url?: string;
  [key: string]: unknown;
}

interface Section {
  title?: string;
  image?: string;
  bannerImage?: string;
  pageItemdataWithSubsection?: SubSection[];
  subSectionData?: SubSection[];
  subsection?: SubSection[];
  subSections?: SubSection[];
  subsections?: SubSection[];
  [key: string]: unknown;
}

interface DocumentItem {
  id?: number;
  title?: string;
  description?: string;
  file_url?: string;
  fileUrl?: string;
  file?: string;
  sequence?: number;
  status?: string;
  [key: string]: unknown;
}

interface BiometricAttendanceContentProps {
  bedAcademicSessionSection?: Section;
  bedSemesterSection?: Section;
  deledAcademicSessionSection?: Section;
  deledSemesterSection?: Section;
  teachersStaffSlSection?: Section;
  teachersStaffAcademicSessionSection?: Section;
  teachersStaffDetailsSection?: Section;
  bedDocuments?: DocumentItem[];
  deledDocuments?: DocumentItem[];
  teachersStaffDocuments?: DocumentItem[];
}

interface BedRow {
  academicSession: string;
  semester: string;
  link: string;
}

interface TeachersStaffRow {
  slNo: string | number;
  academicSession: string;
  details: string;
  link: string;
}

const BiometricAttendanceContent = ({
  bedAcademicSessionSection,
  bedSemesterSection,
  deledAcademicSessionSection,
  deledSemesterSection,
  teachersStaffSlSection,
  teachersStaffAcademicSessionSection,
  teachersStaffDetailsSection,
  bedDocuments = [],
  deledDocuments = [],
  teachersStaffDocuments = [],
}: BiometricAttendanceContentProps) => {
  // Helper function to get subsection values
  const getSubSectionValues = (section?: Section): SubSection[] => {
    if (!section) return [];
    
    return (
      section.pageItemdataWithSubsection ||
      section.subSectionData ||
      section.subsection ||
      section.subSections ||
      section.subsections ||
      []
    );
  };

  // Build B.Ed table data
  const bedTableData = useMemo(() => {
    const rows: BedRow[] = [];

    const academicSessionItems = getSubSectionValues(bedAcademicSessionSection);
    const semesterItems = getSubSectionValues(bedSemesterSection);

    const maxLength = Math.max(academicSessionItems.length, semesterItems.length, bedDocuments.length);

    for (let i = 0; i < maxLength; i++) {
      const academicSession = academicSessionItems[i]?.title || "";
      const semester = semesterItems[i]?.title || "";
      
      const doc = bedDocuments.find(d => d.sequence === i + 1) || bedDocuments[i];
      const link = doc?.file_url || doc?.fileUrl || doc?.file || "";

      rows.push({
        academicSession: academicSession,
        semester: semester,
        link: link,
      });
    }

    // If no data, use fallback
    if (rows.length === 0 || rows.every(r => !r.academicSession && !r.semester)) {
      return getFallbackBedData();
    }

    return rows;
  }, [bedAcademicSessionSection, bedSemesterSection, bedDocuments]);

  // Build D.El.Ed table data
  const deledTableData = useMemo(() => {
    const rows: BedRow[] = [];

    const academicSessionItems = getSubSectionValues(deledAcademicSessionSection);
    const semesterItems = getSubSectionValues(deledSemesterSection);

    const maxLength = Math.max(academicSessionItems.length, semesterItems.length, deledDocuments.length);

    for (let i = 0; i < maxLength; i++) {
      const academicSession = academicSessionItems[i]?.title || "";
      const semester = semesterItems[i]?.title || "";
      
      const doc = deledDocuments.find(d => d.sequence === i + 1) || deledDocuments[i];
      const link = doc?.file_url || doc?.fileUrl || doc?.file || "";

      rows.push({
        academicSession: academicSession,
        semester: semester,
        link: link,
      });
    }

    // If no data, use fallback
    if (rows.length === 0 || rows.every(r => !r.academicSession && !r.semester)) {
      return getFallbackDeledData();
    }

    return rows;
  }, [deledAcademicSessionSection, deledSemesterSection, deledDocuments]);

  // Build Teachers & Staff table data
  const teachersStaffTableData = useMemo(() => {
    const rows: TeachersStaffRow[] = [];

    const slItems = getSubSectionValues(teachersStaffSlSection);
    const academicSessionItems = getSubSectionValues(teachersStaffAcademicSessionSection);
    const detailsItems = getSubSectionValues(teachersStaffDetailsSection);

    const maxLength = Math.max(
      slItems.length,
      academicSessionItems.length,
      detailsItems.length,
      teachersStaffDocuments.length
    );

    for (let i = 0; i < maxLength; i++) {
      const slNo = slItems[i]?.title || (i + 1).toString();
      const academicSession = academicSessionItems[i]?.title || "";
      const details = detailsItems[i]?.title || "";
      
      const doc = teachersStaffDocuments.find(d => d.sequence === i + 1) || teachersStaffDocuments[i];
      const link = doc?.file_url || doc?.fileUrl || doc?.file || "";

      rows.push({
        slNo: slNo,
        academicSession: academicSession,
        details: details,
        link: link,
      });
    }

    // If no data, use fallback
    if (rows.length === 0 || rows.every(r => !r.academicSession && !r.details)) {
      return getFallbackTeachersStaffData();
    }

    return rows;
  }, [teachersStaffSlSection, teachersStaffAcademicSessionSection, teachersStaffDetailsSection, teachersStaffDocuments]);

  // Fallback data for B.Ed
  const getFallbackBedData = (): BedRow[] => {
    return [
      { academicSession: "2021-2022", semester: "2021-2022", link: "" },
      { academicSession: "1st semister", semester: "2020-2021", link: "" },
      { academicSession: "", semester: "2019-2020", link: "" },
    ];
  };

  // Fallback data for D.El.Ed
  const getFallbackDeledData = (): BedRow[] => {
    return [
      { academicSession: "2021-2022", semester: "2021-2022", link: "" },
      { academicSession: "1st semister", semester: "2020-2021", link: "" },
      { academicSession: "", semester: "2019-2020", link: "" },
    ];
  };

  // Fallback data for Teachers & Staff
  const getFallbackTeachersStaffData = (): TeachersStaffRow[] => {
    return [
      { slNo: 3, academicSession: "2021-2022", details: "2021-2022", link: "" },
      { slNo: 2, academicSession: "1st semister", details: "2020-2021", link: "" },
      { slNo: 1, academicSession: "", details: "2019-2020", link: "" },
    ];
  };

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* B.Ed */}
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>B.ED</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          {bedAcademicSessionSection?.title || "Academic Session"}
                        </th>
                        <th>
                          {bedSemesterSection?.title || "Semester"}
                        </th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {bedTableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.academicSession}</td>
                          <td>{item.semester}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* D.El.Ed */}
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>D.EL.ED</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          {deledAcademicSessionSection?.title || "Academic Session"}
                        </th>
                        <th>
                          {deledSemesterSection?.title || "Semester"}
                        </th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {deledTableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.academicSession}</td>
                          <td>{item.semester}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Teachers & Staff */}
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="bd-border">
                  <div className="bd-border-text">
                    <h2>Teachers & Staff</h2>
                  </div>

                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          {teachersStaffSlSection?.title || "SI.No"}
                        </th>
                        <th>
                          {teachersStaffAcademicSessionSection?.title || "Academic Session"}
                        </th>
                        <th>
                          {teachersStaffDetailsSection?.title || "Details (Month wise)"}
                        </th>
                        <th>Download</th>
                      </tr>
                    </thead>

                    <tbody>
                      {teachersStaffTableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.slNo}</td>
                          <td>{item.academicSession}</td>
                          <td>{item.details}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-border"
                              >
                                Download
                              </a>
                            ) : (
                              <span className="btn-border">Download</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiometricAttendanceContent;