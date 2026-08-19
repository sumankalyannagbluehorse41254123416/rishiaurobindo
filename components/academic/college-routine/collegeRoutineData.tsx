"use client";

import { useState } from "react";

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

interface RoutineCollection {
  year: string;
  uid: string;
  documents: DocumentItem[];
}

interface CollegeRoutineDataProps {
  routineData: RoutineCollection[];
}

const stripHtml = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

// ==========================================
// STATIC DATA
// ==========================================

const staticRoutineData = [
  {
    year: "2015-2017",
    rows: [],
  },

  {
    year: "2016-2018",
    rows: [
      {
        sl: 6,
        semester: "D.El.Ed. Part-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.El.Ed. Part-I",
        file: "",
      },
    ],
  },

  {
    year: "2017-2019",
    rows: [
      {
        sl: 6,
        semester: "D.El.Ed. Part-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.El.Ed. Part-I",
        file: "",
      },
    ],
  },

  {
    year: "2018-2020",
    rows: [
      {
        sl: 6,
        semester: "D.El.Ed. Part-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.El.Ed. Part-I",
        file: "",
      },
    ],
  },

  {
    year: "2019-2021",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED. PART - II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART-I",
        file: "",
      },
    ],
  },

  {
    year: "2020-2022",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED PART-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART - I",
        file: "",
      },
    ],
  },

  {
    year: "2021-2023",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED. PART -II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART -I",
        file: "",
      },
      {
        sl: 4,
        semester: "SEMESTER-IV",
        file: "",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        file: "",
      },
    ],
  },

  // ==========================================
  // FULL STATIC YEAR DATA
  // ==========================================

  {
    year: "2022-2024",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED. PART-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART-I",
        file: "",
      },
      {
        sl: 4,
        semester: "B.ED. SEMESTER - IV",
        file: "",
      },
      {
        sl: 3,
        semester: "B.ED. SEMESTER - III",
        file: "",
      },
      {
        sl: 2,
        semester: "B.ED. SEMESTER - II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.ED. SEMESTER - I",
        file: "",
      },
    ],
  },

  {
    year: "2023-2025",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED. PART-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART-I",
        file: "",
      },
      {
        sl: 4,
        semester: "B.ED. SEMESTER-IV",
        file: "",
      },
      {
        sl: 3,
        semester: "B.ED. SEMESTER-III",
        file: "",
      },
      {
        sl: 2,
        semester: "B.ED. SEMESTER-II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.ED. SEMESTER-I",
        file: "",
      },
    ],
  },

  {
    year: "2024-2026",
    rows: [
      {
        sl: 6,
        semester: "D.EL.ED. PART-II",
        file: "",
      },
      {
        sl: 5,
        semester: "D.EL.ED. PART-I",
        file: "",
      },
      {
        sl: 4,
        semester: "B.ED. SEMESTER - IV",
        file: "",
      },
      {
        sl: 3,
        semester: "B.ED. SEMESTER - III",
        file: "",
      },
      {
        sl: 2,
        semester: "B.ED. SEMESTER - II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.ED. SEMESTER - I",
        file: "",
      },
    ],
  },
];

export default function CollegeRoutineData({
  routineData,
}: CollegeRoutineDataProps) {
  // ==========================================
  // ACTIVE TAB
  // ==========================================

  const [activeTab, setActiveTab] = useState(9);

  // ==========================================
  // MERGE DYNAMIC + STATIC DATA
  // ==========================================

  const finalRoutineData =
    staticRoutineData.map((staticYear) => {
      const dynamicYear =
        routineData.find(
          (item) =>
            item.year === staticYear.year
        );

      // ----------------------------------------
      // NO DYNAMIC COLLECTION
      // ----------------------------------------

      if (!dynamicYear) {
        return staticYear;
      }

      // ----------------------------------------
      // DYNAMIC DOCUMENTS
      // ----------------------------------------

      const dynamicRows =
        dynamicYear.documents.map(
          (document, index) => {
            const fileUrl =
              document.file_url ||
              document.fileUrl ||
              document.file ||
              "";

            return {
              sl:
                stripHtml(
                  document.description
                ) ||
                index + 1,

              semester:
                stripHtml(
                  document.title
                ),

              file: fileUrl,
            };
          }
        );

      // ----------------------------------------
      // STATIC + DYNAMIC
      // ----------------------------------------

      return {
        ...staticYear,

        rows: [
          ...staticYear.rows,
          ...dynamicRows,
        ],
      };
    });

  return (
    <section className="land_info_wrap college_routine">
      <div className="container">
        <div className="row">
          {/* ==================================
              LEFT SIDE - YEAR TABS
          ================================== */}

          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills"
              id="audit-report-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {finalRoutineData.map(
                (item, index) => (
                  <button
                    key={item.year}
                    type="button"
                    className={`nav-link ${
                      activeTab === index
                        ? "active show"
                        : ""
                    }`}
                    onClick={() =>
                      setActiveTab(index)
                    }
                  >
                    {item.year}
                  </button>
                )
              )}
            </div>
          </div>

          {/* ==================================
              RIGHT SIDE - ROUTINE TABLE
          ================================== */}

          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div
              className="tab-content"
              id="audit-report-tabContent"
            >
              <div
                className="tab-pane active show"
                role="tabpanel"
              >
                <div className="theme_table">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Semmester</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {finalRoutineData[
                        activeTab
                      ]?.rows.map(
                        (row, index) => (
                          <tr
                            key={`${finalRoutineData[activeTab].year}-${row.sl}-${index}`}
                          >
                            <td>
                              {row.sl}
                            </td>

                            <td>
                              {row.semester}
                            </td>

                            <td>
                              {row.file ? (
                                <a
                                  href={
                                    row.file
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Download
                                </a>
                              ) : (
                                <a
                                  href="#"
                                  onClick={(e) =>
                                    e.preventDefault()
                                  }
                                >
                                  Download
                                </a>
                              )}
                            </td>
                          </tr>
                        )
                      )}
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
}