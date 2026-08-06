"use client";

import { useState } from "react";
import Link from "next/link";

// ==========================================
// TYPES
// ==========================================

interface School {
  id: number;
  name: string;
}

interface DElEdSchoolListProps {
  schools: School[];
}

// ==========================================
// D.EL.ED SCHOOL LIST
// ==========================================

export default function DElEdSchoolList({
  schools,
}: DElEdSchoolListProps) {
  const [
    selectedSchoolId,
    setSelectedSchoolId,
  ] = useState<number | null>(null);

  // ==========================================
  // SCHOOL CLICK
  // ==========================================

  const openDivCity = (id: number) => {
    setSelectedSchoolId(id);
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-5">

        {/* =====================================
            SCHOOL LIST
        ====================================== */}

        <div className="col-md-8 col-sm-8">
          <div className="practice_section">

            {/* Section Title */}
            <h2>
              D.El.Ed
            </h2>

            {/* Section Short Description */}
            <h4>
              School List
            </h4>

            {/* School List */}
            <ul>
              {schools.map(
                (school) => (
                  <li
                    key={school.id}
                  >
                    <a
                      href="#"
                      onClick={(event) => {
                        event.preventDefault();

                        openDivCity(
                          school.id
                        );
                      }}
                      data-id={
                        school.id
                      }
                      className="tabpssystem"
                    >
                      {school.name}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* =================================
                SELECTED SCHOOL ID
            ================================== */}

            {selectedSchoolId !== null && (
              <div>
                Selected School ID:{" "}
                {selectedSchoolId}
              </div>
            )}

          </div>
        </div>

        {/* =====================================
            B.ED TEACHING LINK
        ====================================== */}

        <div className="col-md-4 col-sm-4">
          <h4>
            <Link
              href="/practice-teaching/bed-teaching"
            >
              Go To B.Ed Teaching
            </Link>
          </h4>
        </div>

      </div>
    </div>
  );
}