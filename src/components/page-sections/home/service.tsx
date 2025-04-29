import React from "react";

const ServiceArea: React.FC = () => {
  const assets = [
    {
      title: "Forex",
      description: "Forex is a global market for trading currencies.",
      image: "/img/forex.webp",
    },
    {
      title: "Blockchain",
      description: "Blockchain is a global market for trading currencies.",
      image: "/img/blockchain.webp",
    },
    {
      title: "Stocks",
      description: "Stocks is a global market for trading currencies.",
      image: "/img/stocks.webp",
    },
    {
      title: "Mutual Funds",
      description: "Mutual Funds is a global market for trading currencies.",
      image: "/img/mutual-fund.webp",
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
                  ASSETS
                </h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim">
                We provide specific and dedicated education on trading related
                subjects and our flexible learning solutions connect our
                students globally.
              </p>
            </div>
          </div>
          <div className="services-wrapper-box">
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
                          scale: "1.5",
                        }}
                        src={asset.image}
                        alt="service image"
                      />
                    </div>
                    <div className="content">
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
