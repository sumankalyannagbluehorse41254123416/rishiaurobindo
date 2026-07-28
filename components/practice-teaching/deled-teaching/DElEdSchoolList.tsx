"use client";

import { useState } from "react";
import Link from "next/link";

interface School {
  id: number;
  name: string;
}

const schools: School[] = [
  {
    id: 1305,
    name: "Mindapur Town School",
  },
  {
    id: 1308,
    name: "kharagpur Town School",
  },
  {
    id: 1309,
    name: "Belda Town School",
  },
];

export default function DElEdSchoolList() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(
    null
  );

  const openDivCity = (id: number) => {
    setSelectedSchoolId(id);

    // Add your API call or school details logic here
    // if the original openDivCity() function was doing something else.
    console.log("Selected School ID:", id);
  };

  return (
    <div className="container">
      <div className="row mt-4 mb-5">
        {/* School List */}
        <div className="col-md-8 col-sm-8">
          <div className="practice_section">
            <h2>D.El.Ed</h2>

            <h4>School List</h4>

            <ul>
              {schools.map((school) => (
                <li key={school.id}>
                  <a
                    href="#"
                    onClick={(event) => {
                      event.preventDefault();
                      openDivCity(school.id);
                    }}
                    data-id={school.id}
                    className="tabpssystem"
                  >
                    {school.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Selected School ID */}
            {selectedSchoolId !== null && (
              <div>
                Selected School ID: {selectedSchoolId}
              </div>
            )}
          </div>
        </div>

        {/* B.Ed Teaching Link */}
        <div className="col-md-4 col-sm-4">
          <h4>
            <Link href="/practice-teaching/bed-teaching">
              Go To B.Ed Teaching
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}