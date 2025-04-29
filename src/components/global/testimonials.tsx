
const Testimonials = () => {
  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="testimonial-area-inner">
          <div className="shape-1">
            <img
              src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-24.webp"
              alt="shape image"
            />
          </div>
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="subtitle-wrapper">
                <span className="section-subtitle has-left-line has_fade_anim">
                  Testimonial
                </span>
              </div>
              <div className="title-wrapper">
                <h2 className="section-title has_text_move_anim">
                  What clients say about us
                </h2>
              </div>
            </div>
          </div>

          <div className="testimonial-wrapper-box">
            <div className="shape-slider">
              <img
                src="https://crowdytheme.com/html/arolax/assets/imgs/shape/img-s-23.webp"
                alt="shape image"
              />
            </div>
            <div className="meta-info has_fade_anim" data-fade-from="left">
              <img
                className="show-light"
                src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-12.webp"
                alt="image"
              />
              <img
                className="show-dark"
                src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-12-light.webp"
                alt="image"
              />
              <h3 className="title">
                Helping world-class company by creative design.
              </h3>
            </div>
            <div className="testimonial-wrapper">
              <div className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="content">
                        <div className="icon">
                          <img
                            className="quote-icon show-light"
                            src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-11.webp"
                            alt="image"
                          />
                          <img
                            className="quote-icon show-dark"
                            src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-11-light.webp"
                            alt="image"
                          />
                        </div>
                        <div className="text-wrapper">
                          <p className="text">
                            When we talk about Axtra, we do not mean a typical
                            business partner, but rather a team that
                            collaborates with us daily, always there for us when
                            we encounter
                          </p>
                        </div>
                        <div className="author">
                          <div className="avatar">
                            <img
                              src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-1.webp"
                              alt="image"
                            />
                          </div>
                          <div className="meta">
                            <h3 className="name">Charry Maron</h3>
                            <span className="post">Developer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="testimonial-item">
                      <div className="content">
                        <div className="icon">
                          <img
                            className="quote-icon show-light"
                            src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-11.webp"
                            alt="image"
                          />
                          <img
                            className="quote-icon show-dark"
                            src="https://crowdytheme.com/html/arolax/assets/imgs/gallery/img-s-11-light.webp"
                            alt="image"
                          />
                        </div>
                        <div className="text-wrapper">
                          <p className="text">
                            When we talk about Axtra, we do not mean a typical
                            business partner, but rather a team that
                            collaborates with us daily, always there for us when
                            we encounter
                          </p>
                        </div>
                        <div className="author">
                          <div className="avatar">
                            <img
                              src="https://crowdytheme.com/html/arolax/assets/imgs/client/img-s-1.webp"
                              alt="image"
                            />
                          </div>
                          <div className="meta">
                            <h3 className="name">Charry Maron</h3>
                            <span className="post">Developer</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="nav-wrapper has_fade_anim">
              <div className="nav-button testimonial-button-prev">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="nav-button testimonial-button-next">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
