import Image from "next/image";

const DistributionRosterContent = () => {
  const rosterData = [
    {
      title: "Distribution of Roster (2022-2023)",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1701860179024.jpg",
      pdf:
        "https://wip.tezcommerce.com:3304/admin/module/25/1701860081157.pdf",
    },
    {
      title: "Distribution of Roster (2021-2022)",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670656264675.jpg",
      pdf:
        "https://wip.tezcommerce.com:3304/admin/module/25/1670656190774.pdf",
    },
    {
      title: "Distribution of Roster (2020-2021)",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1669971847241.jpg",
      pdf:
        "https://wip.tezcommerce.com:3304/admin/module/25/1669971847423.pdf",
    },
    {
      title: "Distribution of Roster (Previous)",
      image:
        "https://wip.tezcommerce.com:3304/admin/module/25/1644162079904.jpg",
      pdf:
        "https://wip.tezcommerce.com:3304/admin/module/25/1644162079936.pdf",
    },
  ];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {rosterData.map((item, index) => (
            <div key={index}>
              <Image
                className="img-responsive land_img"
                src={item.image}
                alt="land_img2"
                width={1200}
                height={800}
              />

              <p className="download_button">
                {item.title}

                <a
                  href={item.pdf}
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

export default DistributionRosterContent;