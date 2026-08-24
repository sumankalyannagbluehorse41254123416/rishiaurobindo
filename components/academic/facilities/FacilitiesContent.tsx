"use client";

interface FacilitiesContentProps {
  contentDescriptions?: string[];
  physicalFacilitiesTitle?: string;
  physicalFacilitiesList?: string[];
  academicTitle?: string;
  academicList?: string[];
  observationTitle?: string;
  observationList?: string[];
  paraAcademicTitle?: string;
  paraAcademicList?: string[];
  technologyTitle?: string;
  technologyList?: string[];
  transportationTitle?: string;
  transportationDescription?: string;
  sportsTitle?: string;
  sportsList?: string[];
}

const FacilitiesContent = ({
  contentDescriptions = [],
  physicalFacilitiesTitle = "Physical Facilities",
  physicalFacilitiesList = [],
  academicTitle = "Academic",
  academicList = [],
  observationTitle = "Observation Day celebrated at college Premises",
  observationList = [],
  paraAcademicTitle = "Para Academic",
  paraAcademicList = [],
  technologyTitle = "Technology Based facilities",
  technologyList = [],
  transportationTitle = "Transportation Facilities",
  transportationDescription = "",
  sportsTitle = "Sports Facilities",
  sportsList = [],
}: FacilitiesContentProps) => {
  // Remove HTML tags, decode spaces, trim
  const cleanText = (text: string = "") => {
    return text
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/&nbsp;/gi, " ")
      .replace(/&amp;/gi, "&")
      .replace(/&quot;/gi, '"')
      .replace(/&#39;/gi, "'")
      .replace(/\s+/g, " ")
      .trim();
  };

  // Clean array data
  const cleanData = (data: string[] = []) => {
    return data
      .map((item) => cleanText(item))
      .filter((item) => item.length > 0);
  };

  // Clean all data
  const descriptions = cleanData(contentDescriptions);
  const physicalList = cleanData(physicalFacilitiesList);
  const academicListClean = cleanData(academicList);
  const observationListClean = cleanData(observationList);
  const paraListClean = cleanData(paraAcademicList);
  const techListClean = cleanData(technologyList);
  const sportsListClean = cleanData(sportsList);

  // Clean titles
  const physicalTitle = cleanText(physicalFacilitiesTitle) || "Physical Facilities";
  const academicTitleClean = cleanText(academicTitle) || "Academic";
  const observationTitleClean =
    cleanText(observationTitle) ||
    "Observation Day celebrated at college Premises";
  const paraTitleClean = cleanText(paraAcademicTitle) || "Para Academic";
  const techTitleClean =
    cleanText(technologyTitle) || "Technology Based facilities";
  const transportTitleClean =
    cleanText(transportationTitle) || "Transportation Facilities";
  const sportsTitleClean = cleanText(sportsTitle) || "Sports Facilities";
  const transportDescClean = cleanText(transportationDescription);

  // Section renderer
  const renderSection = (
    title: string,
    items: string[],
    type: "ol" | "ul" = "ol",
    headingLevel: "h3" | "h4" = "h3",
    showStrong: boolean = true
  ) => {
    if (items.length === 0) return null;

    const Heading = headingLevel;
    const ListTag = type;

    return (
      <>
        <Heading>
          {showStrong ? <strong>{title}</strong> : title}
        </Heading>

        <ListTag className={type === "ol" ? "pl-0" : ""}>
          {items.map((item, index) => (
            <li key={`${title}-${index}`}>{item}</li>
          ))}
        </ListTag>
      </>
    );
  };

  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          {/* Introduction */}
          {descriptions.map((desc, index) => (
            <div key={`intro-${index}`}>
              <h4>{desc}</h4>
            </div>
          ))}

          <div>
            {/* Physical Facilities */}
            {renderSection(
              physicalTitle,
              physicalList,
              "ol",
              "h3"
            )}

            {/* Academic */}
            {renderSection(
              academicTitleClean,
              academicListClean,
              "ul",
              "h3"
            )}

            {/* Observation Day */}
            {renderSection(
              observationTitleClean,
              observationListClean,
              "ol",
              "h4"
            )}

            {/* Para Academic */}
            {paraListClean.length > 0 && (
              <>
                <h3>
                  <strong>{paraTitleClean}</strong>
                </h3>

                {paraListClean.map((item, index) => (
                  <p key={`para-${index}`}>{item}</p>
                ))}
              </>
            )}

            {/* Technology Based Facilities */}
            {renderSection(
              techTitleClean,
              techListClean,
              "ol",
              "h3"
            )}

            {/* Transportation */}
            {transportDescClean && (
              <>
                <h3>
                  <strong>{transportTitleClean}</strong>
                </h3>
                <p>{transportDescClean}</p>
              </>
            )}

            {/* Sports */}
            {renderSection(
              sportsTitleClean,
              sportsListClean,
              "ol",
              "h3"
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesContent;