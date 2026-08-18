"use client";

import { useState } from "react";

interface Document {
  title: string;
  description: string;
  file_url: string;
}

interface Props {
  incomeDocuments: Document[];
  receiptDocuments: Document[];
  balanceDocuments: Document[];
}

// Remove HTML tags
const stripHtml = (text?: string) =>
  text?.replace(/<[^>]*>/g, "").trim() || "";

export default function AuditReport({
  incomeDocuments,
  receiptDocuments,
  balanceDocuments,
}: Props) {
  const auditTabs = [
    {
      id: "balance-nfo995",
      title: "Income & Expenditure",
      data: incomeDocuments.map((doc) => ({
        sl: stripHtml(doc.description),
        title: stripHtml(doc.title),
        pdf: doc.file_url,
      })),
    },
    {
      id: "balance-nfo996",
      title: "Receipt & Payment",
      data: receiptDocuments.map((doc) => ({
        sl: stripHtml(doc.description),
        title: stripHtml(doc.title),
        pdf: doc.file_url,
      })),
    },
    {
      id: "balance-nfo516",
      title: "Balance Sheet",
      data: balanceDocuments.map((doc) => ({
        sl: stripHtml(doc.description),
        title: stripHtml(doc.title),
        pdf: doc.file_url,
      })),
    },
  ];

  const [activeTab, setActiveTab] = useState(
    auditTabs[0].id
  );

  const activeTabData = auditTabs.find(
    (tab) => tab.id === activeTab
  );

  return (
    <>
      <section>
        <div className="container">
          <div className="w-100 mt-3 text-md-center title-bx1">
            <h3 className="one8">
              Audit Report
            </h3>
          </div>
        </div>
      </section>

      <section className="land_info_wrap mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div
                className="nav flex-column nav-pills"
                id="audit-report-tab"
                role="tablist"
              >
                {auditTabs.map(
                  (tab, index) => (
                    <a
                      key={tab.id}
                      className={`nav-link ${
                        activeTab === tab.id
                          ? "active"
                          : ""
                      }`}
                      href={`#${tab.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(
                          tab.id
                        );
                      }}
                    >
                      {tab.title}
                    </a>
                  )
                )}
              </div>
            </div>

            <div className="col-lg-9 col-sm-6 col-xs-12">
              <div className="tab-content">
                {activeTabData && (
                  <div className="tab-pane active">
                    <div className="theme_table">
                      <table className="table table-bordered">
                        <thead>
                          <tr>
                            <th>Sl</th>
                            <th>Title</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {activeTabData.data.map(
                            (
                              item,
                              index
                            ) => (
                              <tr
                                key={index}
                              >
                                <td>
                                  {item.sl}
                                </td>

                                <td>
                                  {
                                    item.title
                                  }
                                </td>

                                <td>
                                  <a
                                    href={
                                      item.pdf
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    Download
                                  </a>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}