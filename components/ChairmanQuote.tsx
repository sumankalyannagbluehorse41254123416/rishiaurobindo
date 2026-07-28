import Image from "next/image";

export default function ChairmanQuote() {
  return (
    <div className="banner_slider_wrap">
      <div className="row">
        {/* Principal's Quote */}
        <div className="col-lg-6 col-md-6">
          <section className="chairmainQuote">
            <div className="title_box">
              <h3>Principal&apos;s Quote</h3>

              <p>Golden inspirational words from our Principal</p>

              <div className="pl-md-5 text-center">
                <Image
                  className="chairman_img"
                  src="/images/1662189017007.jpeg"
                  alt="01"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="pera-dtls">
              <h5>
                We Offer You a <span>Bright Future</span>
              </h5>

              <p>
                Rishi Aurobindo Institute of Teachers Education is the first
                self financing professional college in the district, Paschim
                Medinipur has accredited &apos;B&apos; Grade from NAAC, in this
                year, for which we have enriched in the field of enhancement of
                quality education. In this respect, their guidance, advices and
                observations will enlighten to go ahead in future for acquiring
                knowledge. Indeed, students of our college will more awaken is
                their field of studies and their progress also gradually, in
                different stages. Students are benefitted through our equipped
                college modern library and laboratories of different
                departments. In the teaching learning process the endeavor of
                the faculty members of our college are always praiseworthy. I
                wish the overall development and success of my college, even all
                the professors, students, non-teaching stuff and best wishes to
                the well wishers.
              </p>

              <span className="signature">Dr. Madhab Chandra Rath</span>
            </div>
          </section>
        </div>

        {/* Chairman's Quote */}
        <div className="col-lg-6 col-md-6">
          <section className="chairmainQuote">
            <div className="title_box">
              <h3>Chairman&apos;s Quote</h3>

              <p>Golden inspirational words from our Chairman</p>

              <div className="pl-md-5 text-center">
                <Image
                  className="chairman_img"
                  src="/images/1662189128446.jpeg"
                  alt="01"
                  width={500}
                  height={500}
                />
              </div>
            </div>

            <div className="pera-dtls">
              <h5>
                We Offer You a <span>Bright Future</span>
              </h5>

              <p>
                It is great to educate a child in true and larger sense of the
                world. Hence, the ultimate goal of our college &apos;Rishi
                Aurobindo Institute of Teacher Education&apos; under Amaranth
                Altruist Charitable Trust is to empower the students to rise and
                shine. Our vision, mission and values, on the basis of which we
                have been able to establish our institute, are quite pragmatic
                enough to provide high quality education to our students, who
                will surely excel in every sphere of their life. As a Chairman,
                I feel that I have moral obligation to help the students of my
                institute grow to become excellent human beings empowered with
                academic excellence.
              </p>

              <span className="signature">Mihir Kumar Barik</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}