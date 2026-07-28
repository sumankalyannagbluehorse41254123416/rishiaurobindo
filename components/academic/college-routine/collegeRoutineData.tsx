"use client";

import { useState } from "react";

const collegeRoutineData = [
  {
    year: "2015-2017",
    rows: [
      {
        sl: 4,
        semester: "B.Ed. Semester-IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491069289.pdf",
      },
      {
        sl: 3,
        semester: "B.Ed. Semester - III",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491060355.pdf",
      },
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491052716.pdf",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491045249.pdf",
      },
    ],
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
      {
        sl: 4,
        semester: "B.Ed. Semester-IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491463687.pdf",
      },
      {
        sl: 3,
        semester: "B.Ed. Semester- III",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491456478.pdf",
      },
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491449612.pdf",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668491441666.pdf",
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
      {
        sl: 4,
        semester: "B.Ed. Semester-IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668492306052.pdf",
      },
      {
        sl: 3,
        semester: "B.Ed. Semester -III",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668492299606.pdf",
      },
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668492292486.pdf",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668492285735.pdf",
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
      {
        sl: 4,
        semester: "B.Ed. Semester - IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668493098822.pdf",
      },
      {
        sl: 3,
        semester: "B.Ed. Semester - III",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668493092457.pdf",
      },
      {
        sl: 2,
        semester: "B.Ed. Semester - II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668493085820.pdf",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester - I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668493076283.pdf",
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
      {
        sl: 4,
        semester: "SEMESTER-IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668494940434.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668494934120.pdf",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668494927628.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668494920386.pdf",
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
      {
        sl: 4,
        semester: "SEMESTER-IV",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668495243813.pdf",
      },
      {
        sl: 3,
        semester: "SEMESTER-III",
        file: "",
      },
      {
        sl: 2,
        semester: "SEMESTER-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668495233105.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668495226305.pdf",
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
      {
        sl: 2,
        semester: "SEMESTER-II",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668495402148.pdf",
      },
      {
        sl: 1,
        semester: "SEMESTER-I",
        file: "https://wip.tezcommerce.com:3304/admin/module/25/1668495394967.pdf",
      },
    ],
  },
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
];

export default function CollegeRoutine() {
  // Original HTML-এ 2024-2026 active ছিল
  const [activeTab, setActiveTab] = useState(9);

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Left Side - Year Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills"
              id="audit-report-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {collegeRoutineData.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  className={`nav-link ${
                    activeTab === index ? "active show" : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Routine Table */}
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
                      {collegeRoutineData[activeTab].rows.map((row) => (
                        <tr
                          key={`${collegeRoutineData[activeTab].year}-${row.sl}`}
                        >
                          <td>{row.sl}</td>

                          <td>{row.semester}</td>

                          <td>
                            {row.file ? (
                              <a
                                href={row.file}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            ) : (
                              <a
                                href="#"
                                onClick={(e) => e.preventDefault()}
                              >
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
}