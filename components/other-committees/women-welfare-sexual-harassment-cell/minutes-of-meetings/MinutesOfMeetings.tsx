import Image from "next/image";

const MinutesOfMeetings = () => {
  const meetings = [
    {
      title: "ACTION TAKEN REPORT 2020-2021",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670934789440.jpg",
      pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1670934789601.pdf",
    },
    {
      title: "4TH MEETING",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670934736390.jpg",
      pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1670934736506.pdf",
    },
    {
      title: "3RD MEETING",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670934691738.jpg",
      pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1670934691868.pdf",
    },
    {
      title: "2ND MEETING",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670934652586.jpg",
      pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1670934652710.pdf",
    },
    {
      title: "1ST MEETING",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670934596590.jpg",
      pdf: "https://wip.tezcommerce.com:3304/admin/module/25/1670934596716.pdf",
    },
  ];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {meetings.map((meeting) => (
            <div key={meeting.title}>
              <Image
                className="img-responsive land_img"
                src={meeting.image}
                alt={meeting.title}
                width={800}
                height={500}
              />

              <p className="download_button">
                {meeting.title}
                <a
                  href={meeting.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn_theme"
                >
                  Download
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinutesOfMeetings;