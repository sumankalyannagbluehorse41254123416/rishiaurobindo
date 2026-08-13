import Image from "next/image";

interface GovtCircularsContainProps {
  title: string;
  image: string;
}

const GovtCircularsContain = ({
  title,
  image,
}: GovtCircularsContainProps) => {
  return (
    <section className="page_title_wrap bottom_border">
      <Image
        src={image}
        alt={title}
        width={1920}
        height={300}
        className="page_title_bg"
      />

      <div className="container">
        <h3>{title}</h3>
      </div>
    </section>
  );
};

export default GovtCircularsContain;