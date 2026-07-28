"use client";

import Image from "next/image";

export default function WelcomeSection() {
  return (
    <section className="banner_slider_wrap">
      <section className="features-box top_border">
        <div className="container">
          <div className="title_box">
            <h3>Welcome to Rishi Aurobindo Institute of Teacher Education</h3>
            <p>.</p>
          </div>

          <div className="welcome_inner">
            <Image
              className="welcome_img"
              src="https://wip.tezcommerce.com:3304/admin/module/25/1652428654730.jpg"
              alt="Welcome"
              width={563}
              height={350}
              style={{
                width: "100%",
                height: "auto",
              }}
            />

            <div className="welcome_details">
              <p>
                Amaranth Altruist Charitable Trust (AACT), Midnapore has been
                set up as a public charitable trust in the year 2006 and
                registered by DSR under section 60 and Rule 69 on 19th August,
                2011 dedicated to promote, establish, maintain and manage
                educational institutions with the aims and objects for
                furtherance of education of SC, ST, Minority Community and down
                trodden people of the society and welfare of the old, aged,
                infirm, senior citizen, notified back work communities. This
                trust is managed by a Board of Members comprising of 7 (seven)
                personalities who are great visionaries. The trust aims at
                setting up of schools, colleges, training institute; to built up
                social environmental health; to built up social communication
                wing ‘a Research Cell’ for various aspects comprising of
                professional communication, advertising and social research; to
                promote and encourage education among women, physically disabled
                person, socially and economically under privileged section of
                the society; to set up medical center for treatment of public
                health for old infirm, senior citizen, socially backward persons
                and students; creation of social awareness against social evils
                etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}