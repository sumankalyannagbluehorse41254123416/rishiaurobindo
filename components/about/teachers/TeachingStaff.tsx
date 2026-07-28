import Image from "next/image";

const staffData = [
  {
    name: "SABITA PAL",
    image:
      "/images/1722664413635.jpeg",
    designation: "Assistant Professor",
    contact: "9734651990",
    department: "FOUNDATION COURSE",
  },
  {
    name: "SOMNATH SINGH",
    image:
      "/images/1722662331316.jpeg",
    designation: "Assistant Professor",
    contact: "7908363700",
    department: "FOUNDATION COURSE",
  },
  {
    name: "PABAN SHOW",
    image:
      "/images/1722664658371.jpeg",
    designation: "Assistant Professor",
    contact: "9641968836",
    department: "FOUNDATION COURSE",
  },
  {
    name: "AVISHEK KHANRA",
    image:
      "/images/1722662314456.jpeg",
    designation: "Assistant Professor",
    contact: "8016655596",
    department: "Education",
  },
  {
    name: "SUNIL JANA",
    image:
      "/images/1722664358569.jpeg",
    designation: "Assistant Professor",
    contact: "9800431376",
    department: "Physical Education",
  },
  {
    name: "SUDIP KUMAR MAITY",
    image:
      "/images/1722667157782.jpg",
    designation: "Assistant Professor",
    contact: "9593277806",
    department: "SANSKRIT",
  },
  {
    name: "ANIRBAN SANTRA",
    image: "/images/avterm.webp",
    designation: "Assistant Professor",
    contact: "",
    department: "Mathematics",
  },
  {
    name: "AKASH SATPATI",
    image: "/images/avterm.webp",
    designation: "Assistant Professor",
    contact: "",
    department: "English",
  },
  {
    name: "BRINDABAN ADHIKARY",
    image:
      "/images/1666171717924.jpeg",
    designation: "Assistant Professor",
    contact: "7407132232",
    department: "FOUNDATION COURSE",
  },
  {
    name: "MAHENDRA OJHA",
    image:
      "/images/1666166429785.jpeg",
    designation: "Assistant Professor",
    contact: "7602765262",
    department: "Education",
  },
  {
    name: "SRABANTI JANA",
    image:
      "/images/1651826232910.jpg",
    designation: "Assistant Professor",
    contact: "9064479030",
    department: "MUSIC",
  },
  {
    name: "SANJIB KUMAR MAJI",
    image:
      "/images/avterm.webp",
    designation: "Assistant Professor",
    contact: "9064482656",
    department: "BENGALI",
  },
  {
    name: "SAYANDIP MONDAL",
    image:
      "/images/SAYANDIP MONDAL.jpg",
    designation: "Assistant Professor",
    contact: "9933563048",
    department: "Information & Communication Technology",
  },
  {
    name: "RAJIB LOCHAN SAMANTA",
    image:
      "/images/RAJIB LOCHAN SAMANTA.jpeg",
    designation: "Assistant Professor",
    contact: "8250972267",
    department: "English",
  },
  {
    name: "PARAMITA PRAMANIK",
    image:
      "/images/PARAMITA PRAMANIK.jpeg",
    designation: "Assistant Professor",
    contact: "9732551096",
    department: "HISTORY",
  },
  {
    name: "DR. NANDA KISHORE MONDAL",
    image:
      "/images/DR. NANDA KISHORE MONDAL.jpeg",
    designation: "Assistant Professor",
    contact: "9775274032",
    department: "PHYSICAL SCIENCE",
  },
  {
    name: "SAHELI BERA KHAN",
    image:
      "/images/SAHELI BERA KHAN.jpeg",
    designation: "Assistant Professor",
    contact: "9830454461",
    department: "PERFORMING ARTS (DANCE)",
  },
  {
    name: "GANESH CHANDRA DAS",
    image:
      "/images/GANESH CHANDRA DAS.jpeg",
    designation: "Assistant Professor",
    contact: "9874947882",
    department: "FINE ARTS",
  },
  {
    name: "SHAMU KHATIK",
    image:
      "/images/SHAMU KHATIK.jpeg",
    designation: "Assistant Professor",
    contact: "9775578466",
    department: "GEOGRAPHY",
  },
  {
    name: "CHINMOYEE GHOSH",
    image:
      "/images/CHINMOYEE GHOSH.jpeg",
    designation: "Assistant Professor",
    contact: "8768475994",
    department: "Life Science",
  },
  {
    name: "NARGIS PARVIN",
    image:
      "/images/NARGIS PARVIN.jpeg",
    designation: "Assistant Professor",
    contact: "9593690098",
    department: "History",
  },
  {
    name: "PRADIP KARAK",
    image:
      "/images/PRADIP KARAK.jpeg",
    designation: "Assistant Professor",
    contact: "9735712650",
    department: "Mathematics",
  },
  {
    name: "SRIHARI DAS",
    image:
      "/images/SRIHARI-DAS.jpg",
    designation: "Assistant Professor",
    contact: "8250863497",
    department: "BENGALI",
  },
  {
    name: "SUVASISH ROY",
    image:
      "/images/SUVASISH ROY.jpeg",
    designation: "Assistant Professor",
    contact: "9732625686",
    department: "Social Science (History)",
  },
  {
    name: "DR. MADHAB CHANDRA RATH",
    image:
      "/images/DR. MADHAB CHANDRA RATH.jpeg",
    designation: "PRINCIPAL",
    contact: "7908166718",
    department: "SANSKRIT",
  },
];

export default function TeachingStaff() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="main-gallery">
          <div className="row mb-5">
            {staffData.map((staff, index) => (
              <div className="col-md-3" key={index}>
                <div className="staff_block">
                  {staff.image ? (
                    <Image
                      className="staff_img"
                      src={staff.image}
                      alt="Avatar"
                      width={300}
                      height={300}
                    />
                  ) : (
                    <div className="staff_img" />
                  )}

                  <div className="staff_details">
                    <h5>{staff.name}</h5>

                    <p>
                      <strong>Designation :&nbsp;</strong>
                      {staff.designation}
                      <br />

                      <strong>Contact :&nbsp;</strong>
                      {staff.contact}
                      <br />

                      <strong>Department :</strong>&nbsp;
                      {staff.department}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}