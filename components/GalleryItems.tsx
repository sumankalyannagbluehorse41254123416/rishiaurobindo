"use client";

import Image from "next/image";

const galleryItems = [
  {
    image: "/images/1697177482087.jpg",
    url: "https://www.youtube.com/embed/ZNYFXnnnw3I?si=OyuTO0txVisFAt4h",
  },
  {
    image: "/images/1697177455976.jpg",
    url: "https://www.youtube.com/embed/am3NKQmh0XA?si=GD8bpKRZLJZjsRGz",
  },
  {
    image: "/images/1697177428727.jpg",
    url: "https://www.youtube.com/embed/bRP_ugmkq28?si=uIeEWnujgGqvEhvg",
  },
  {
    image: "/images/1697177336703.jpg",
    url: "https://www.youtube.com/embed/pY--21fCAqc?si=dsI_4t4h1cHhT0mL",
  },
  {
    image: "/images/1682398799755.jpg",
    url: "https://www.youtube.com/embed/5JUHR8ndUss",
  },
  {
    image: "/images/1682398306831.jpg",
    url: "https://www.youtube.com/embed/1g5G87SvGjI",
  },
  {
    image: "/images/1673264868366.jpg",
    url: "https://www.youtube.com/embed/txIxFXadheM?start=169",
  },
  {
    image: "/images/1673264816644.jpg",
    url: "https://www.youtube.com/embed/qbX8GD13hV4",
  },
  {
    image: "/images/1673264750711.jpg",
    url: "https://www.youtube.com/embed/kzuhKwdqFhg?start=169",
  },
  {
    image: "/images/1673264719983.jpg",
    url: "https://www.youtube.com/embed/_IT_uWyI4fU",
  },
  {
    image: "/images/1673264679331.jpg",
    url: "https://www.youtube.com/embed/4ImzGY3Ig0k?start=169",
  },
  {
    image: "/images/1673264644981.jpg",
    url: "https://www.youtube.com/embed/LVrnVJPRN4w",
  },
  {
    image: "/images/1673264571937.jpg",
    url: "https://www.youtube.com/embed/SvYbA9I9iCk",
  },
  {
    image: "/images/1673259650766.jpg",
    url: "https://www.youtube.com/embed/rVYln1TOZgI",
  },
  {
    image: "/images/1673259598596.jpg",
    url: "https://www.youtube.com/embed/csLyY_x9k04",
  },
  {
    image: "/images/1673259553472.jpg",
    url: "https://www.youtube.com/embed/vF3HT_h6Txg",
  },
  {
    image: "/images/1673259450062.jpg",
    url: "https://www.youtube.com/embed/FRE89xwAkNA",
  },
  {
    image: "/images/1673259420117.jpg",
    url: "https://www.youtube.com/embed/x8S5OhWx5Jo",
  },
  {
    image: "/images/1673259391607.jpg",
    url: "https://www.youtube.com/embed/HIHTUNBKlWQ",
  },
  {
    image: "/images/1673259322227.jpg",
    url: "https://www.youtube.com/embed/GC7v7VCUZKQ",
  },
  {
    image: "/images/1673259258864.jpg",
    url: "https://www.youtube.com/embed/81pBH9aWYO0",
  },
  {
    image: "/images/1673259214839.jpg",
    url: "https://www.youtube.com/embed/thJaye5Do8Q",
  },
  {
    image: "/images/1673259099140.jpg",
    url: "https://www.youtube.com/embed/xLlqwP3gd4Y",
  },
  {
    image: "/images/1673259032872.jpg",
    url: "https://www.youtube.com/embed/YwJaT2k44OI",
  },
  {
    image: "/images/1673258838257.jpg",
    url: "https://www.youtube.com/embed/VHLmT9qqNx0?start=169",
  },
  {
    image: "/images/1673258889126.JPG",
    url: "https://www.youtube.com/embed/o6yZECUltIk",
  },
  {
    image: "/images/1673258915824.jpeg",
    url: "https://www.youtube.com/embed/o6yZECUltIk",
  },
];

export default function Gallery() {
  return (
    <section className="features-box features-box1">
      <div className="banner_slider_wrap">
        <div className="container">
          <div className="title_box">
            <h3>Gallery</h3>
            <p>Some Best moments and memories of our</p>
          </div>

          <div className="col-6 col-sm-6 col-md-3">
            <div id="owl-demo2" className="owl-carousel owl-theme">
              {galleryItems.map((item, index) => (
                <div className="item" key={index}>
                  <p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={item.image}
                        alt=""
                        width={500}
                        height={300}
                      />
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}