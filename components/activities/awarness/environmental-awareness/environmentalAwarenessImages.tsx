"use client";

import { Expand } from "lucide-react";
import Image from "next/image";


interface EnvironmentalAwarenessProps {
  section?: {
    title?: string;
    subsections?: {
      image?: string;
    }[];
  };
}


export default function EnvironmentalAwarenessImages({
  section,
}: EnvironmentalAwarenessProps) {


  const images =
    section?.subsections
      ?.map((item) => item.image)
      .filter((image): image is string => Boolean(image)) || [];



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

          {images.map((image, index) => (

            <div
              className="col-lg-3 col-md-4 col-6"
              key={`${image}-${index}`}
            >

              <a
                className="gal-inr"
                href={image}
                data-lightbox="Gallery 1"
              >

                <Image
                  src={image}
                  alt={`Environmental Awareness ${index + 1}`}
                  width={400}
                  height={300}
                  className="img-fluid"
                />
<Expand/>
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}