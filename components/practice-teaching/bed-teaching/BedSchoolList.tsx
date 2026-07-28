"use client";

import { useState } from "react";

interface School {
  id: number;
  name: string;
}

const schools: School[] = [
  {
    id: 1587,
    name: "",
  },
  {
    id: 1615,
    name: "Narayan Vidyabhaban Boys High School",
  },
  {
    id: 1616,
    name: "Narayan Vidyabhaban Girls High School",
  },
  {
    id: 1617,
    name: "Kuikota Shankari Vidyaniketan",
  },
  {
    id: 1618,
    name: "Bhadutola Vivekananda High School",
  },
  {
    id: 1619,
    name: "Panchkhuri Deshabandhu High School",
  },
  {
    id: 1620,
    name: "Elahia High Madrasa",
  },
  {
    id: 1621,
    name: "Khairullachak Netaji Vidyamandir",
  },
  {
    id: 1622,
    name: "Midnapore Collegiate School (Boys’)",
  },
  {
    id: 1623,
    name: "Nirmal Hriday Ashram (Boys’)",
  },
  {
    id: 1624,
    name: "Nirmal Hriday Ashram (Girls’)",
  },
  {
    id: 1625,
    name: "DAV Public School",
  },
  {
    id: 1626,
    name: "Vidyasagar Shishu Niketan",
  },
  {
    id: 1627,
    name: "Mission Girls High School",
  },
  {
    id: 1628,
    name: "Chirimarsai Sri Sri Radhamadhabji High School",
  },
  {
    id: 1629,
    name: "Midnapore Town School",
  },
];

export default function BedSchoolList() {
  const [selectedSchoolId, setSelectedSchoolId] = useState<number | null>(
    null
  );

  const openDivCity = (id: number) => {
    setSelectedSchoolId(id);

    // If you have an API call or details loading logic
    // from your old openDivCity() function, add it here.
    console.log("Selected School ID:", id);
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

        <div className="col-md-4 col-sm-4">
          {/*
            <h4>
              <a href="/deled-teaching">
                Go To D.El.Ed Teaching
              </a>
            </h4>
          */}
        </div>
      </div>
    </div>
  );
}