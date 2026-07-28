import Image from "next/image";

export default function Achievement() {
  return (
    <section className="features-box features-box1">
      <div className="container">
        <div className="row">
          <h3>achivement</h3>
        </div>

        <div className="banner_slider_wrap">
          <Image
            src="/images/1681717851069.jpg"
            alt=""
            width={230}
            height={316}
            className="features-box2-img features-box2-img2 features-box2-img3"
          />

          <Image
            src="/images/1652950063778.jpg"
            alt=""
            width={230}
            height={316}
            className="features-box2-img features-box2-img2 features-box2-img3"
          />

          <Image
            src="/images/1652935298188.jpg"
            alt=""
            width={230}
            height={316}
            className="features-box2-img features-box2-img2 features-box2-img3"
          />
        </div>
      </div>
    </section>
  );
}