import React from "react";

const ServiceArea: React.FC = () => {
  const assets = [
    {
      title: "GUINNESS RECORD HOLDER",
      description:
        "Most Nationalities in a Trading Lesson",
      image: "/img/guinnessRecord2.png",
    },
    {
      title: "Blockchain",
      description: "Blockchain is a global market for trading currencies.",
      image: "/img/cropped-Eifa-Awards-logo.png",
    },
    {
      title: "PROFX AWARDS DUBAI 2024",
      description: "Best Forex Academy Of The Year 2024",
      image: "/img/forexTraders.png",
    },
    {
      title: "MONEY CONCLAVE 2024",
      description: "Best Crypto & Blockchain Educator Of The Year",
      image: "/img/mc-logo-4.png",
    },

  ];
  return (
    <section className="service-area">
      <div className="container">
        <div className="service-area-inner section-spacing-bottom">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-10.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-2">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-9.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-3">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-12.webp"
              alt="shape image"
            />
          </div>
          <div className="shape-4">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-11.webp"
              alt="shape image"
            />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line has_fade_anim"></span>
              </div>
              <div className="title-wrapper">
                <h2
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                  className="section-title has_text_move_anim"
                >
                  AWARDS
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              {/* <p className="text has_fade_anim">
              We are proud to have received numerous awards and recognitions for our excellence in education and training. These accolades are a testament to our commitment to providing the highest quality services to our clients.
              </p> */}
            </div>
          </div>
          <div id="awards-uuid" className="services-wrapper-box">
            <div className="services-wrapper">
              {assets.map((asset, index) => (
                <div
                  key={index}
                  className="service-box has_fade_anim"
                  data-delay="0.15"
                >
                  <a href="https://crowdytheme.com/html/arolax/service-details.html">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      className="thumb"
                    >
                      <img
                        style={{
                          scale: index === 0 ? "1.5" : "1",
                        }}
                        src={asset.image}
                        alt="service image"
                      />
                    </div>
                    <div id="awards" className="content">
                      <h2 className="title">{asset.title}</h2>
                      <p className="text">{asset.description}</p>
                      <div className="btn-wrapper">
                        <span className="cf_btn wc-btn-normal">
                          Learn more
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
