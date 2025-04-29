import React from 'react';

const ServiceArea: React.FC = () => {
  return (
    <section className="service-area">
      <div className="container">
        <div className="service-area-inner section-spacing-bottom">
          <div className="shape-1">
            <img src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-10.webp" alt="shape image" />
          </div>
          <div className="shape-2">
            <img src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-9.webp" alt="shape image" />
          </div>
          <div className="shape-3">
            <img src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-12.webp" alt="shape image" />
          </div>
          <div className="shape-4">
            <img src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-11.webp" alt="shape image" />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line has_fade_anim">Key Features</span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">Services we provide</h2>
              </div>
            </div>
            <div className="text-wrapper">
              <p className="text has_fade_anim">
                Whether it's crafting a visually stunning brand identity, designing immersive digital experiences
              </p>
            </div>
          </div>
          <div className="services-wrapper-box">
            <div className="services-wrapper">
              <div className="service-box has_fade_anim" data-delay="0.15">
                <a href="https://crowdytheme.com/html/arolax/service-details.html">
                  <div className="thumb">
                    <img src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-5.webp" alt="service image" />
                  </div>
                  <div className="content">
                    <h2 className="title">Development</h2>
                    <p className="text">
                      Development and building amazing digital products with best user experiences strategy.
                    </p>
                    <div className="btn-wrapper">
                      <span className="cf_btn wc-btn-normal">
                        Learn more
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="service-box has_fade_anim" data-delay="0.30">
                <a href="https://crowdytheme.com/html/arolax/service-details.html">
                  <div className="thumb">
                    <img src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-6.webp" alt="service image" />
                  </div>
                  <div className="content">
                    <h2 className="title">Marketing</h2>
                    <p className="text">
                      Marketing services starts and ends within a strategy builds wireframe & solid prototyping
                    </p>
                    <div className="btn-wrapper">
                      <span className="cf_btn wc-btn-normal">
                        Learn more
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="service-box has_fade_anim" data-delay="0.45">
                <a href="https://crowdytheme.com/html/arolax/service-details.html">
                  <div className="thumb">
                    <img src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-7.webp" alt="service image" />
                  </div>
                  <div className="content">
                    <h2 className="title">Design</h2>
                    <p className="text">
                      We design professional looking yet simple Logo are search engine and user friendly.
                    </p>
                    <div className="btn-wrapper">
                      <span className="cf_btn wc-btn-normal">
                        Learn more
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="service-box has_fade_anim" data-delay="0.60">
                <a href="https://crowdytheme.com/html/arolax/service-details.html">
                  <div className="thumb">
                    <img src="https://crowdytheme.com/html/arolax/assets/imgs/icon/icon-s-8.webp" alt="service image" />
                  </div>
                  <div className="content">
                    <h2 className="title">Technology</h2>
                    <p className="text">
                      Social media posts design Infographic design and email imagery security and updates.
                    </p>
                    <div className="btn-wrapper">
                      <span className="cf_btn wc-btn-normal">
                        Learn more
                        <i className="fa-solid fa-arrow-right-long"></i>
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
