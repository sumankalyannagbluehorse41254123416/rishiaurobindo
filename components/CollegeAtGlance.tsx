"use client";
import Image from "next/image";

interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  image?: string;
  bannerImage?: string;
  subsections?: Section[];
  [key: string]: unknown;
}

interface CollegeAtGlanceProps {
  section?: Section;
}

// Remove HTML tags and clean HTML entities
const cleanHtml = (html: string) => {
  if (!html) return "";

  return html
    // Remove HTML tags
    .replace(/<[^>]*>/g, " ")

    // Decode common HTML entities
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")

    // Remove extra spaces
    .replace(/\s+/g, " ")

    // Remove spaces from beginning and end
    .trim();
};

export default function CollegeAtGlance({
  section,
}: CollegeAtGlanceProps) {

  const title =
    section?.title ||
    "College at a Glance";

  const items =
    section?.subsections || [];

  return (
    <section className="counter_wrap">

      <div className="banner_slider_wrap">

        <div className="container">

          <div className="conter_inner">

            {/* Section Title */}

            <h3 className="counter_title">
              {title}
            </h3>


            <div className="row">

              {items.map(
                (
                  item,
                  index,
                ) => (

                  <div
                    className="col-6 col-sm-6 col-md-3"
                    key={index}
                  >

                    <div className="counter_block">

                      {/* Subsection Image */}

                      <div className="count_icon">

                        {item.image && (
                          <Image
                            src={item.image}
                            alt={
                              item.title ||
                              "College"
                            }
                            width={100}
                            height={100}
                            unoptimized
                          />
                        )}

                      </div>


                      {/* Subsection Details */}

                      <div className="count_details">

                        {/* Subsection Title */}

                        <h3>
                          {item.title}
                        </h3>


                        {/* Clean Description */}

                        <p>
                          {cleanHtml(
                            item.description ||
                              "",
                          )}
                        </p>

                      </div>

                    </div>

                  </div>

                ),
              )}

            </div>

          </div>

        </div>

      </div>


      {/* Background Image */}

      <Image
        className="counter_bg"
        src="/images/banner2.jpg"
        alt="banner2"
        width={1920}
        height={600}
      />

    </section>
  );
}

