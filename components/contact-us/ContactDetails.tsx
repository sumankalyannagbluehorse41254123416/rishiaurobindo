const ContactDetails = () => {
  return (
    <section className="land_info_wrap">
      <div className="container">
        <div className="contact_info row">
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="info_block">
              <div className="info_icon">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
              </div>

              <div className="info_details">
                <p>
                  Email: <a href="#">rishiaurobindobed@gmail.com</a>
                  <br />
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="info_block">
              <div className="info_icon">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
              </div>

              <div className="info_details">
                <p>
                  At: Panchkhuri P.O.: Panchkhuri,
                  Dist.: Paschim Medinipur,
                  Pin: 721150, West Bengal
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="info_block">
              <div className="info_icon">
                <i className="fa fa-phone" aria-hidden="true"></i>
              </div>

              <div className="info_details">
                <p>
                  9933722796, 7001750735, 9434341327, 9932940475
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row map_wrap">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 map_inner">
            <div className="contact_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118006.31205064266!2d87.31189814883996!3d22.44041803798772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d5a8fa17931bd%3A0x773fcff611b9b04f!2sRishi%20Aurobindo%20Institute%20of%20Teacher%20Education!5e0!3m2!1sen!2sin!4v1643630268863!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <form
              action="https://www.rabedc.com/contact-us/save"
              method="post"
            >
              <input
                type="hidden"
                name="_token"
                value="kQLjyXeHnlA6lweZ0i43DM39Ml9WwnKYg8uGd1rH"
                autoComplete="off"
              />

              <div className="contact_form">
                <div className="form-group">
                  <label htmlFor="">Name</label>

                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    id="name"
                  />

                  <span
                    id="nameErr"
                    style={{ color: "red", display: "none" }}
                  ></span>
                </div>

                <div className="form-group">
                  <label htmlFor="">Mobile No</label>

                  <input
                    className="form-control"
                    type="text"
                    name="mobile"
                    id="mobile"
                  />

                  <span
                    id="mobileErr"
                    style={{ color: "red", display: "none" }}
                  ></span>
                </div>

                <div className="form-group">
                  <label htmlFor="">Email</label>

                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                  />

                  <span
                    id="emailErr"
                    style={{ color: "red", display: "none" }}
                  ></span>
                </div>

                <div className="form-group">
                  <label htmlFor="">Message</label>

                  <textarea
                    className="form-control"
                    rows={5}
                    name="message"
                    id="message"
                  ></textarea>

                  <span
                    id="messageErr"
                    style={{ color: "red", display: "none" }}
                  ></span>
                </div>

                <button
                  type="button"
                  id="submitBtn"
                  className="btn_theme"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;