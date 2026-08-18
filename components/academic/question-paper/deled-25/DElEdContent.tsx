"use client";

import { useState } from "react";

const dElEdData = [
  {
    year: "2015",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669970959036.pdf",
      },
    ],
  },
  {
    year: "2016",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971019236.pdf",
      },
    ],
  },
  {
    year: "2017",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971061681.pdf",
      },
    ],
  },
  {
    year: "2018",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971102368.pdf",
      },
    ],
  },
  {
    year: "2019",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971145334.pdf",
      },
    ],
  },
  {
    year: "2021",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-I",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971256377.pdf",
      },
    ],
  },
  {
    year: "2022",
    parts: [
      {
        sl: 2,
        part: "PART-II",
        link: "",
      },
      {
        sl: 1,
        part: "PART-1",
        link: "https://wip.tezcommerce.com:3304/admin/module/25/1669971499550.pdf",
      },
    ],
  },
];

const DElEdContent = () => {
  const [activeYear, setActiveYear] = useState("2015");

  const activeData = dElEdData.find(
    (item) => item.year === activeYear
  );

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">

          {/* Year Tabs */}
          <div className="col-lg-3 col-sm-6 col-xs-12">
            <div
              className="nav flex-column nav-pills college_routine"
              role="tablist"
              aria-orientation="vertical"
            >
              {dElEdData.map((item) => (
                <button
                  key={item.year}
                  type="button"
                  className={`nav-link ${
                    activeYear === item.year ? "active" : ""
                  }`}
                  onClick={() => setActiveYear(item.year)}
                >
                  {item.year}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-9 col-sm-6 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane show active">
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
                      {activeData?.parts.map((item) => (
                        <tr key={item.sl}>
                          <td>{item.sl}</td>
                          <td>{item.part}</td>
                          <td>
                            {item.link ? (
                              <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </a>
                            ) : (
                              <a className="text-white">Download</a>
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

export default DElEdContent;