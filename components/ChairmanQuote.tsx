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

interface ChairmanQuoteProps {
  section?: Section;
}

// Remove HTML tags like <p>, </p>, <br>, etc.
const stripHtml = (html: string) => {
  return html
    ? html.replace(/<[^>]*>/g, "").trim()
    : "";
};

export default function ChairmanQuote({
  section,
}: ChairmanQuoteProps) {

  // Get Principal and Chairman data
  const principal =
    section?.subsections?.[0];

  const chairman =
    section?.subsections?.[1];


  return (
    <div className="banner_slider_wrap">
      <div className="row">

        {/* =====================================
            PRINCIPAL'S QUOTE
        ====================================== */}

        <div className="col-lg-6 col-md-6">

          <section className="chairmainQuote">

            <div className="title_box">

              <h3>
                Principal&apos;s Quote
              </h3>

              <p>
                Golden inspirational words
                from our Principal
              </p>


              <div className="pl-md-5 text-center">

                {principal?.image && (
                  <Image
                    className="chairman_img"
                    src={principal.image}
                    alt={
                      principal.title ||
                      "Principal"
                    }
                    width={500}
                    height={500}
                    unoptimized
                  />
                )}

              </div>

            </div>


            <div className="pera-dtls">

              <h5>
                We Offer You a{" "}
                <span>
                  Bright Future
                </span>
              </h5>


              <p>
                {stripHtml(
                  principal?.description ||
                    "",
                )}
              </p>


              <span className="signature">
                {principal?.title || ""}
              </span>

            </div>

          </section>

        </div>


        {/* =====================================
            CHAIRMAN'S QUOTE
        ====================================== */}

        <div className="col-lg-6 col-md-6">

          <section className="chairmainQuote">

            <div className="title_box">

              <h3>
                Chairman&apos;s Quote
              </h3>

              <p>
                Golden inspirational words
                from our Chairman
              </p>


              <div className="pl-md-5 text-center">

                {chairman?.image && (
                  <Image
                    className="chairman_img"
                    src={chairman.image}
                    alt={
                      chairman.title ||
                      "Chairman"
                    }
                    width={500}
                    height={500}
                    unoptimized
                  />
                )}

              </div>

            </div>


            <div className="pera-dtls">

              <h5>
                We Offer You a{" "}
                <span>
                  Bright Future
                </span>
              </h5>


              <p>
                {stripHtml(
                  chairman?.description ||
                    "",
                )}
              </p>


              <span className="signature">
                {chairman?.title || ""}
              </span>

            </div>

          </section>

        </div>

      </div>
    </div>
  );
}

