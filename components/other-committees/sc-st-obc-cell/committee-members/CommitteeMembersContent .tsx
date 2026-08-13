import { fetchPageData } from "@/service/fetchdata.services";

interface Subsection {
  title?: string;
}

interface Section {
  title?: string;
  subsections?: Subsection[];
}

interface PageData {
  pageItemdataWithSubsection?: Section[];
}

const CommitteeMembersContent = async () => {
  const uid = "216946b4-0970-44b3-9449-c43ef2106faf";

  const data = (await fetchPageData({}, uid)) as PageData;

  console.log("Committee Members Data:", data);

  const sections = data?.pageItemdataWithSubsection || [];

  const serialSection = sections[3];
  const nameSection = sections[4];
  const phoneSection = sections[5];
  const emailSection = sections[6];

  const rows = serialSection?.subsections || [];

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner table-responsive table-background">
          <div>
            <table>
              <thead>
                <tr>
                  <th>{serialSection?.title || "Sl. No"}</th>
                  <th>{nameSection?.title || "Name"}</th>
                  <th>{phoneSection?.title || "Phone No"}</th>
                  <th>{emailSection?.title || "Mail Id"}</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((_, index) => (
                  <tr key={index}>
                    <td>
                      {serialSection?.subsections?.[index]?.title || `${index + 1}.`}
                    </td>

                    <td>
                      {nameSection?.subsections?.[index]?.title || ""}
                    </td>

                    <td>
                      {phoneSection?.subsections?.[index]?.title || ""}
                    </td>

                    <td>
                      {emailSection?.subsections?.[index]?.title || ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitteeMembersContent;