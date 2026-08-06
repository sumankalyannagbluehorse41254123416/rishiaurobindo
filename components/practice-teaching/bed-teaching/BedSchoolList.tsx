"use client";

import { useState } from "react";

interface School {
  id: number;
  name: string;
}

interface BedSchoolListProps {
  schools: School[];
}

export default function BedSchoolList({
  schools,
}: BedSchoolListProps) {
  const [selectedSchoolId, setSelectedSchoolId] =
    useState<number | null>(null);

  const openDivCity = (id: number) => {
    setSelectedSchoolId(id);

    console.log(
      "Selected School ID:",
      id
    );
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-5">

        <div className="col-md-12 col-sm-12">
          <div className="practice_section bedsection">

            <h2>B.Ed</h2>

            <h4>School List</h4>

            <ul>
              {schools.map((school) => (
                <li key={school.id}>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();

                      openDivCity(
                        school.id
                      );
                    }}
                    data-id={school.id}
                    className="tabpssystem"
                  >
                    {school.name}
                  </a>
                </li>
              ))}
            </ul>

            {selectedSchoolId !== null && (
              <div>
                Selected School ID:{" "}
                {selectedSchoolId}
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

