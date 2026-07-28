"use client";

import Image from "next/image";
import { useState } from "react";

const documentsData = {
  year: [
    "/images/1654850960611.jpg",
    "/images/1654850404671.jpeg",
    "/images/1654850387851.jpeg",
    "/images/1654849982972.jpeg",
    "/images/1654849929240.jpg",
  ],

  year2: [
    "https://wip.tezcommerce.com:3304/admin/module/25/1654850387851.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1654849982972.jpeg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1654849929240.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1654850960611.jpg",
    "https://wip.tezcommerce.com:3304/admin/module/25/1654850404671.jpeg",
  ],

  year3: [
    "/images/1654850387851.jpeg",
    "/images/1654849982972.jpeg",
    "/images/1654850960611.jpg",
    "/images/1654850404671.jpeg",
    "/images/1654849929240.jpg",
  ],

  year4: [
    "/images/1654850404671.jpeg",
    "/images/1654850387851.jpeg",
    "/images/1654850960611.jpg",
    "/images/1654849982972.jpeg",
    "/images/1654849929240.jpg",
  ],

  year5: [
    "/images/1654850387851.jpeg",
    "/images/1654849982972.jpeg",
    "/images/1654850960611.jpg",
    "/images/1654850404671.jpeg",
    "/images/1654849929240.jpg",
  ],
};

const years = [
  { id: "year", label: "2016" },
  { id: "year2", label: "2017" },
  { id: "year3", label: "2018" },
  { id: "year4", label: "2019" },
  { id: "year5", label: "2020" },
];

export default function Documents() {
  const [activeYear, setActiveYear] = useState("year");

  return (
    <div className="container">
      <h2 className="doc_text">Documents</h2>

      {/* Year Tabs */}
      <div className="tab year_box">
        {years.map((year) => (
          <button
            key={year.id}
            className={`tablinks year_link ${
              activeYear === year.id ? "active" : ""
            }`}
            onClick={() => setActiveYear(year.id)}
          >
            {year.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {years.map((year) => (
        <div
          key={year.id}
          id={year.id}
          className="tabcontent year_section"
          style={{
            display: activeYear === year.id ? "block" : "none",
          }}
        >
          {documentsData[year.id as keyof typeof documentsData].map(
            (image, index) => (
              <Image
                key={`${image}-${index}`}
                src={image}
                alt="main-gallery2"
                width={800}
                height={600}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}