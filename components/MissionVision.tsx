"use client"
interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface MissionVisionProps {
  section?: Section;
}

// Remove HTML tags
const stripHtml = (html: string) => {
  return html
    ? html.replace(/<[^>]*>/g, "").trim()
    : "";
};

export default function MissionVision({
  section,
}: MissionVisionProps) {
  const title =
    section?.title ||
    "Our Mission & Vision";

  const shortDescription =
    stripHtml(
      section?.shortDescription || "",
    );

  const events =
    section?.subsections || [];

  return (
    <section className="features-box">
      <div className="banner_slider_wrap">
        <div className="container">

          <div className="row">

            {/* Mission & Vision */}

            <div className="col-md-7 mb-sm-0 mb-4 mvSide">

              <div className="title_box2">

                <h3>
                  {title}
                </h3>

              </div>

              {/* HTML tags removed */}

              <p>
                {shortDescription}
              </p>

              <a
                href="/contact-us"
                className="btn_theme"
              >
                read more
              </a>

            </div>


            {/* Upcoming Events */}

            <div className="col-md-5 eventsSide">

              <div className="title_box2">

                <h3>
                  Upcoming Events
                </h3>

              </div>

              <ul className="eventsList">

                {events.map(
                  (
                    event,
                    index,
                  ) => (
                    <li
                      key={index}
                    >

                      <div className="dateSide">

                        <i
                          className="fa fa-calendar"
                          aria-hidden="true"
                        ></i>

                        {event.title}

                      </div>

                      <div className="matrSide">
                        {stripHtml(
                          event.description ||
                            "",
                        )}
                      </div>

                    </li>
                  ),
                )}

              </ul>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

