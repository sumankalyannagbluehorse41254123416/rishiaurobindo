"use client";

import Image from "next/image";

export default function DataPrivacyAwareness() {
  return (
    <section className="land_info_wrap">
      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >
        <h3>DATA PRIVACY AWARNESS</h3>
      </div>

      <div className="container main-gallery">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-6">
            <a
              className="gal-inr"
              href="/images/1645080199038.jpg"
              data-lightbox="Gallery 1"
            >
              <Image
                src="/images/1645080199038.jpg"
                alt="Data Privacy Awareness"
                width={400}
                height={300}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}