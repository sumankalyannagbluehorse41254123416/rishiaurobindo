"use client";

import { useState, useMemo } from "react";

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

interface UniversityBoardResultContentProps {
  deledSlSection?: Section;
  deledSemesterSection?: Section;
  deledTitleSection?: Section;
  bedSlSection?: Section;
  bedSemesterSection?: Section;
  bedTitleSection?: Section;
  documents?: DocumentItem[];
}

interface TableRow {
  sl: string | number;
  semester: string;
  title: string;
  link: string;
}

const UniversityBoardResultContent = ({
  deledSlSection,
  deledSemesterSection,
  deledTitleSection,
  bedSlSection,
  bedSemesterSection,
  bedTitleSection,
  documents = [],
}: UniversityBoardResultContentProps) => {
  const [activeTab, setActiveTab] = useState<"B.Ed" | "D.El.Ed">("B.Ed");

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

  // Build table data from sections and documents
  const tableData = useMemo(() => {
    const rows: TableRow[] = [];

    // Get the appropriate sections based on active tab
    const slSection = activeTab === "B.Ed" ? bedSlSection : deledSlSection;
    const semesterSection = activeTab === "B.Ed" ? bedSemesterSection : deledSemesterSection;
    const titleSection = activeTab === "B.Ed" ? bedTitleSection : deledTitleSection;

    // Get subsections from each section
    const slItems = getSubSectionValues(slSection);
    const semesterItems = getSubSectionValues(semesterSection);
    const titleItems = getSubSectionValues(titleSection);

    // Get the maximum length among all three arrays
    const maxLength = Math.max(slItems.length, semesterItems.length, titleItems.length, documents.length);

    // Build rows by combining data from all sources
    for (let i = 0; i < maxLength; i++) {
      const slValue = slItems[i]?.title || (i + 1).toString();
      const semesterValue = semesterItems[i]?.title || "";
      const titleValue = titleItems[i]?.title || "";
      
      // Try to find matching document by sequence or index
      const doc = documents.find(d => d.sequence === i + 1) || documents[i];
      const link = doc?.file_url || doc?.fileUrl || doc?.file || "";

      rows.push({
        sl: slValue,
        semester: semesterValue,
        title: titleValue,
        link: link,
      });
    }

    // If no data from API, use fallback static data
    if (rows.length === 0 || rows.every(r => !r.semester && !r.title)) {
      return getFallbackData(activeTab);
    }

    return rows;
  }, [activeTab, deledSlSection, deledSemesterSection, deledTitleSection, bedSlSection, bedSemesterSection, bedTitleSection, documents]);

  // Fallback static data (as a backup)
  const getFallbackData = (tab: "B.Ed" | "D.El.Ed"): TableRow[] => {
    const fallbackData = {
      "B.Ed": [
        { sl: 4, semester: "1ST SEMESTER", title: "2021-2023", link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973618145.pdf" },
        { sl: 3, semester: "ALL SEMESTER", title: "2020-2022", link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973539659.pdf" },
        { sl: 2, semester: "ALL SEMESTER", title: "2019-2021", link: "https://wip.tezcommerce.com:3304/admin/module/25/1669973242440.pdf" },
        { sl: 1, semester: "ALL SEMESTER", title: "2018-2020", link: "" },
      ],
      "D.El.Ed": [
        { sl: 5, semester: "PART-I", title: "2020-2022", link: "" },
        { sl: 4, semester: "FINAL RESULT", title: "2019-2021", link: "" },
        { sl: 3, semester: "PART-I & II", title: "2018-2020", link: "" },
        { sl: 2, semester: "PART-I & II", title: "2017-2019", link: "" },
        { sl: 1, semester: "PART-I & II", title: "2016-2018", link: "" },
      ],
    };
    return fallbackData[tab];
  };

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills college_routine"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                type="button"
                className={`nav-link ${activeTab === "B.Ed" ? "active" : ""}`}
                onClick={() => setActiveTab("B.Ed")}
              >
                B.Ed
              </button>

              <button
                type="button"
                className={`nav-link ${activeTab === "D.El.Ed" ? "active" : ""}`}
                onClick={() => setActiveTab("D.El.Ed")}
              >
                D.El.Ed
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
                <div className="theme_table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                          {activeTab === "B.Ed"
                            ? bedSlSection?.title || "Sl"
                            : deledSlSection?.title || "Sl"}
                        </th>
                        <th>
                          {activeTab === "B.Ed"
                            ? bedSemesterSection?.title || "Semester"
                            : deledSemesterSection?.title || "Semester"}
                        </th>
                        <th>
                          {activeTab === "B.Ed"
                            ? bedTitleSection?.title || "Title"
                            : deledTitleSection?.title || "Title"}
                        </th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.sl}</td>
                          <td>{item.semester}</td>
                          <td>{item.title}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white"
                              >
                                Download
                              </a>
                            ) : (
                              <a className="text-white">
                                Download
                              </a>
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

export default UniversityBoardResultContent;