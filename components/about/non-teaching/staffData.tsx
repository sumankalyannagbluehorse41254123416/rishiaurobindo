import Image from "next/image";

const staffData = [
  {
    name: "RANAJIT DAS",
    image:
      "/images/1666167620220.jpeg",
    designation: "SECURITY",
    contact: "",
  },
  {
    name: "CHARAN HEMBRAM",
    image: "/images/avterw.avif",
    designation: "GROUP-D STAFF",
    contact: "",
  },
  {
    name: "MITHU HANSDA",
    image:
      "/images/1666165103971.jpeg",
    designation: "GROUP-D STAFF",
    contact: "9883061297",
  },
  {
    name: "RAJIB KUMAR DAS",
    image:
      "/images/1666164626338.jpeg",
    designation: "ACCOUNTANT",
    contact: "7318887672",
    department: "ACCOUNTS",
  },
  {
    name: "SUBHADIP DAS",
    image:
      "/images/SUBHADIP DAS.jpeg",
    designation: "SECURITY",
    contact: "9735843079",
  },
  {
    name: "GUNADHAR PRADHAN",
    image:
      "/images/GUNADHAR PRADHAN.jpeg",
    designation: "GROUP-D STAFF",
    contact: "8207015072",
  },
  {
    name: "MALATI SAREN",
    image:
      "/images/MALATI SAREN.jpeg",
    designation: "GROUP-D STAFF",
    contact: "",
  },
  {
    name: "LACHU SAREN",
    image:
      "/images/LACHU SAREN.jpeg",
    designation: "GROUP-D STAFF",
    contact: "",
  },
  {
    name: "KUSH SING",
    image:
      "/images/KUSH SING.jpg",
    designation: "GROUP-D STAFF",
    contact: "9564202515",
  },
  {
    name: "SHANKAR MAHATA",
    image:
      "/images/SHANKAR MAHATA.jpeg",
    designation: "OFFICE ASSISTANT",
    contact: "9775594678",
  },
  {
    name: "JITEN MAHATA",
    image:
      "/images/JITEN MAHATA.jpeg",
    designation: "GROUP-D STAFF",
    contact: "8250551468",
  },
  {
    name: "AJIT MAHATA",
    image:
      "/images/AJIT MAHATA.jpeg",
    designation: "GROUP-D STAFF",
    contact: "8972741776",
  },
  {
    name: "GOPAL DOGRA",
    image:
      "/images/GOPAL DOGRA.jpeg",
    designation: "LIBRARIAN",
    contact: "8001821180",
  },
];

export default function NonTeachingStaffList() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="row">
          {staffData.map((staff, index) => (
            <div className="col-md-3" key={index}>
              <div className="staff_block">
                {staff.image ? (
                  <Image
                    className="staff_img"
                    src={staff.image}
                    alt={staff.name}
                    width={120}
                    height={120}
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

                    {staff.department && (
                      <>
                        <br />
                        <strong>Department :</strong>&nbsp;
                        {staff.department}
                      </>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}