"use client";

import { useState } from "react";

const questionPaperData = [
  {
    year: "2015-2017",
    rows: [
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "",
      },
    ],
  },
  {
    year: "2016-2018",
    rows: [
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "",
      },
    ],
  },
  {
    year: "2017-2019",
    rows: [
      {
        sl: 2,
        semester: "B.Ed. Semester-II",
        file: "",
      },
      {
        sl: 1,
        semester: "B.Ed. Semester-I",
        file: "",
      },
    ],
  },
];

export default function QuestionPaperData() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {/* Left Side Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills"
              id="audit-report-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {questionPaperData.map((item, index) => (
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

          {/* Right Side Table */}
          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div
              className="tab-content"
              id="audit-report-tabContent"
            >
              <div className="tab-pane show active" role="tabpanel">
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
                      {questionPaperData[activeTab].rows.map((row) => (
                        <tr
                          key={`${questionPaperData[activeTab].year}-${row.sl}`}
                        >
                          <td>{row.sl}</td>
                          <td>{row.semester}</td>
                          <td>
                            {row.file ? (
                              <a
                                target="_blank"
                                href={row.file}
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