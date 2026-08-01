
"use client";

import Image from "next/image";
import { useState } from "react";

interface YearTab {
  id: string;
  label: string;
}

interface SchoolDocuments {
  schoolId: number;
  years: YearTab[];
}

const schoolDocuments: SchoolDocuments[] = [
  {
    schoolId: 1587,
    years: [
      {
        id: "tablink7729",
        label: "",
      },
      {
        id: "tablink7728",
        label: "",
      },
    ],
  },
  {
    schoolId: 1615,
    years: [
      { id: "tablink7872", label: "2023" },
      { id: "tablink7871", label: "2022" },
      { id: "tablink7870", label: "2019" },
      { id: "tablink7869", label: "2018" },
      { id: "tablink7868", label: "2017" },
      { id: "tablink7867", label: "2016" },
    ],
  },
  {
    schoolId: 1616,
    years: [
      { id: "tablink7881", label: "2023" },
      { id: "tablink7880", label: "2022" },
      { id: "tablink7879", label: "2019" },
      { id: "tablink7878", label: "2018" },
      { id: "tablink7877", label: "2017" },
      { id: "tablink7876", label: "2016" },
    ],
  },
  { schoolId: 1617, years: [] },
  { schoolId: 1618, years: [] },
  { schoolId: 1619, years: [] },
  { schoolId: 1620, years: [] },
  { schoolId: 1621, years: [] },
  { schoolId: 1622, years: [] },
  { schoolId: 1623, years: [] },
  { schoolId: 1624, years: [] },
  { schoolId: 1625, years: [] },
  { schoolId: 1626, years: [] },
  { schoolId: 1627, years: [] },
  { schoolId: 1628, years: [] },
  { schoolId: 1629, years: [] },
];

const galleryImages = [
  "/images/1692266694310.jpg",
  "/images/1692266674022.jpg",
];

export default function BedDocuments() {
  // First school is active by default
  const activeSchoolId = 1587;

  // Default active year for each school
  const [activeYear, setActiveYear] = useState<Record<number, string>>({
    1587: "tablink7729",
    1615: "tablink7872",
    1616: "tablink7881",
  });

  const handleYearClick = (
    schoolId: number,
    yearId: string
  ) => {
    setActiveYear((previous) => ({
      ...previous,
      [schoolId]: yearId,
    }));
  };

  return (
    <div className="container">
      <h2 className="doc_text">Documents</h2>

      {/* School Document Containers */}
      {schoolDocuments.map((school) => {
        const isActiveSchool =
          activeSchoolId === school.schoolId;

        const currentActiveYear =
          activeYear[school.schoolId] ||
          school.years[0]?.id;

        return (
          <div
            key={school.schoolId}
            id={`contaId-${school.schoolId}`}
            className="contaIdClass"
            style={{
              display: isActiveSchool ? "block" : "none",
            }}
          >
            {/* Year Tabs */}
            <div className="tab year_box">
              {school.years.map((year) => (
                <button
                  key={year.id}
                  className={`tablinks year_link ${
                    currentActiveYear === year.id
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    handleYearClick(
                      school.schoolId,
                      year.id
                    )
                  }
                >
                  {year.label}
                </button>
              ))}
            </div>

            {/* Year Content */}
            {school.years.map((year) => (
              <div
                key={year.id}
                id={year.id}
                className={`tabcontent year_section itemId-${school.schoolId}`}
                style={{
                  display:
                    currentActiveYear === year.id
                      ? "block"
                      : "none",
                }}
              >
                {/* Add documents for this school/year here */}
              </div>
            ))}
          </div>
        );
      })}

      {/* Gallery Heading */}
      <section>
        <div className="container">
          <div className="gallerybox">
            <h3>Gallery</h3>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="land_info_wrap">
        <div className="container main-gallery">
          <div className="row">
            {galleryImages.map((image, index) => (
              <div
                className="col-lg-3 col-md-4 col-6"
                key={`${image}-${index}`}
              >
                <a
                  className="gal-inr"
                  href={image}
                  data-lightbox="Gallery 1"
                >
                  <Image
                    src={image}
                    alt=""
                    width={800}
                    height={600}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

