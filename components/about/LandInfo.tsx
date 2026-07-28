import Image from "next/image";

export default function LandInfo() {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="lan_info_inner">
          <div>
            <p>
              Amaranth Altruist Charitable Trust (AACT) has given special
              attention to enlighten Teachers’ Training Course through setting
              up Rishi Aurobindo Institute of Teacher’s Education at Panchkhuri
              in the district of Paschim Midnapore. The Trust is ideologically
              responsible to provide the trainees quality maintenance,
              professional competence and sound knowledge of pedagogy with the
              help of our well-experienced faculty, well equipped library,
              computer and laboratory and modern audio and video programme in
              addition to the so called class room teaching. The B.Ed. Course is
              to run under N.C.T.E. norms and recognition (Govt. of India) with
              affiliation of Vidyasagar University at Midnapur, West Bengal. We
              would continue to strive for quality and excellence.
            </p>
          </div>

          <Image
            className="page_title_bg"
            src="/images/your-image.jpg"
            alt="page_title_bg1"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
