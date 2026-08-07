"use client";

import Image from "next/image";


interface Props {
  section?: {
    title?: string;
    subsections?: {
      image?: string;
    }[];
  };
}


export default function HealthAwarenessImages({
  section,
}: Props) {


  const images =
    section?.subsections?.filter(
      (item) => item.image
    ) || [];



  return (

    <section className="land_info_wrap">


      <div
        className="container main-gallery"
        style={{
          textAlign: "center",
          margin: "70px auto",
        }}
      >

        {section?.title && (

          <h3>
            {section.title}
          </h3>

        )}

      </div>



      <div className="container main-gallery">

        <div className="row">


          {images.map((item, index) => (

            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${item.image}-${index}`}
            >


              <a
                className="gal-inr"
                href={item.image}
                data-lightbox="Gallery 1"
                target="_blank"
                rel="noopener noreferrer"
              >


                <Image
                  src={item.image || ""}
                  alt={`Health Awareness ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />


              </a>


            </div>

          ))}


        </div>


      </div>


    </section>

  );
}