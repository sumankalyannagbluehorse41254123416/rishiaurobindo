import Image from "next/image";


interface Props {

  section?: {
    title?: string;
    image?: string;
  };

}



export default function HealthAwareness({
  section,
}: Props) {


  return (

    <section className="page_title_wrap bottom_border">


      {section?.image && (

        <Image
          className="page_title_bg"
          src={section.image}
          alt=""
          width={1920}
          height={300}
          priority
        />

      )}



      <div className="container">

        {section?.title && (

          <h3>
            {section.title}
          </h3>

        )}

      </div>


    </section>

  );
}